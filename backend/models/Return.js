import mongoose from "mongoose";

const returnSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        vendor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        reason: { type: String, required: true },

        status: {
            type: String,
            enum: ["Requested", "Approved", "Rejected", "Pickup Scheduled", "Completed"],
            default: "Requested"
        },

        messageFromVendor: { type: String, default: "" }
    },
    { timestamps: true }
);

export default mongoose.model("Return", returnSchema);
