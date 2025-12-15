import Inquiry from "../models/Inquiry.js";
import Product from "../models/Product.js";

export const createInquiry = async (req, res) => {
    const { productId, message } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const inquiry = await Inquiry.create({
        product: productId,
        vendor: product.vendor,   // <- THIS ensures message goes to correct vendor
        customer: req.user._id,
        messages: [{ sender: req.user._id, text: message }],
    });

    res.json(inquiry);
};
export const sendReply = async (req, res) => {
    const { inquiryId, message } = req.body;

    const inquiry = await Inquiry.findById(inquiryId);
    if (!inquiry) return res.status(404).json({ message: "Inquiry not found" });

    inquiry.messages.push({
        sender: req.user._id,
        text: message,
    });

    await inquiry.save();
    res.json(inquiry);
};
export const getVendorInquiries = async (req, res) => {
    const inquiries = await Inquiry.find({ vendor: req.user._id })
        .populate("product", "name image")
        .populate("customer", "name email")
        .populate("messages.sender", "name email");

    res.json(inquiries);
};
export const getCustomerInquiries = async (req, res) => {
    const inquiries = await Inquiry.find({ customer: req.user._id })
        .populate("product", "name image")
        .populate("vendor", "name email")
        .populate("messages.sender", "name email");

    res.json(inquiries);
};
