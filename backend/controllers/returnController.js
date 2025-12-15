import Return from "../models/Return.js";
import Order from "../models/Order.js";

// CUSTOMER REQUEST RETURN
export const requestReturn = async (req, res) => {
  try {
    const { orderId, reason } = req.body;
    const customerId = req.user._id;

    // Validate order belongs to customer
    const order = await Order.findOne({ _id: orderId, customer: customerId });
    if (!order) return res.status(404).json({ msg: "Order not found" });

    const vendorId = order.vendor;

    const newReturn = await Return.create({
      order: orderId,
      customer: customerId,
      vendor: vendorId,
      reason
    });

    res.json({ success: true, return: newReturn });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// CUSTOMER — VIEW MY RETURNS
export const myReturns = async (req, res) => {
  const returns = await Return.find({ customer: req.user._id })
    .populate("order")
    .populate("vendor", "name email");
  res.json(returns);
};

// VENDOR — VIEW RETURNS FOR HIS PRODUCTS ONLY
export const vendorReturns = async (req, res) => {
  const returns = await Return.find({ vendor: req.user._id })
    .populate("order")
    .populate("customer", "name email");

  res.json(returns);
};

// VENDOR — UPDATE RETURN STATUS
export const updateReturnStatus = async (req, res) => {
  try {
    const { status, message } = req.body;
    const vendorId = req.user._id;

    const ret = await Return.findById(req.params.id);

    if (!ret) return res.status(404).json({ msg: "Return request not found" });

    // Only vendor who owns the product can update it
    if (ret.vendor.toString() !== vendorId.toString()) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    ret.status = status;
    if (message) ret.messageFromVendor = message;

    await ret.save();

    res.json(ret);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
