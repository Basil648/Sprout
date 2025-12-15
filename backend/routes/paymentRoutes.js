import express from "express";
import Stripe from "stripe";
import { auth } from "../middleware/auth.js";
import Cart from "../models/Cart.js";
import Order from "../models/Order.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/* ---------------------------
   1. CREATE CHECKOUT SESSION
---------------------------- */
router.post("/create-checkout-session", auth(["customer"]), async (req, res) => {
  try {
    const customerId = req.user._id;

    const cart = await Cart.findOne({ customer: customerId }).populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // Stripe requires ALL items as one list
    const line_items = cart.items.map(item => ({
      price_data: {
        currency: "inr",
        product_data: { name: item.productId.name },
        unit_amount: item.productId.price * 100
      },
      quantity: item.quantity
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${process.env.FRONTEND_URL}/payment-success`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`
    });

    res.json({ url: session.url });

  } catch (err) {
    console.error("Stripe Session Error:", err);
    res.status(500).json({ error: err.message });
  }
});


/* ---------------------------
   2. CONFIRM PAYMENT → ORDER SPLIT
---------------------------- */
router.post("/confirm", auth(["customer"]), async (req, res) => {
  try {
    const customerId = req.user._id;

    const cart = await Cart.findOne({ customer: customerId })
      .populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart empty" });
    }

    // ---- Group items by vendor ----
    const vendorGroups = {};

    cart.items.forEach(item => {
      const vendorId = item.productId.vendor.toString();
      if (!vendorGroups[vendorId]) vendorGroups[vendorId] = [];
      vendorGroups[vendorId].push(item);
    });

    const createdOrders = [];

    // ---- Create one order per vendor ----
    for (const vendorId of Object.keys(vendorGroups)) {
      const vendorItems = vendorGroups[vendorId];

      const totalAmount = vendorItems.reduce(
        (sum, item) => sum + item.productId.price * item.quantity,
        0
      );

      const newOrder = await Order.create({
        customer: customerId,
        vendor: vendorId,
        items: vendorItems.map(i => ({
          productId: i.productId._id,
          quantity: i.quantity,
        })),
        amount: totalAmount,
        status: "Processing",
        paymentStatus: "paid"
      });

      createdOrders.push(newOrder);
    }

    // ---- Clear cart after successful order creation ----
    await Cart.deleteOne({ customer: customerId });

    res.json({
      success: true,
      orders: createdOrders
    });

  } catch (err) {
    console.error("Order Split Error:", err);
    res.status(500).json({ message: "Failed to create split orders" });
  }
});

export default router;
