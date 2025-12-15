import Product from "../models/Product.js";
import Order from "../models/Order.js"

// CUSTOMER CREATES ORDER
export const createOrder = async (req, res) => {
    try {
        const { items } = req.body;

        if (!items || items.length === 0)
            return res.status(400).json({ message: "No items provided" });

        // Calculate total & detect single vendor
        let totalAmount = 0;
        let vendorId = null;

        for (let item of items) {
            const product = await Product.findById(item.productId);
            if (!product) return res.status(404).json({ message: "Product not found" });

            totalAmount += product.price * item.quantity;

            // All items must belong to SAME vendor
            if (!vendorId) vendorId = product.vendor;
            if (vendorId.toString() !== product.vendor.toString())
                return res.status(400).json({ message: "All items must be from same vendor" });
        }

        const order = await Order.create({
            customer: req.user._id,
            vendor: vendorId,
            items,
            amount: totalAmount
        });

        res.status(201).json(order);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CUSTOMER - MY ORDERS
export const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ customer: req.user._id })
            .populate("items.productId")
            .populate("vendor", "name email");

        res.json(orders);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// VENDOR - ORDERS FOR ME
export const getOrdersByVendor = async (req, res) => {
    try {
        const orders = await Order.find({ vendor: req.user._id })
            .populate("items.productId")
            .populate("customer", "name email");

        res.json(orders);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ADMIN - ALL ORDERS
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("customer", "name email")
            .populate("vendor", "name email")
            .populate("items.productId");

        res.json(orders);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE ORDER STATUS (Vendor)
export const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findById(req.params.id);

        if (!order) return res.status(404).json({ message: "Order not found" });

        if (order.vendor.toString() !== req.user._id.toString())
            return res.status(403).json({ message: "Forbidden" });

        order.status = status;
        await order.save();

        res.json(order);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// ADMIN - DELETE ORDER