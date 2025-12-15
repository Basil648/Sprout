import "./loadEnv.js";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import billingRoutes from "./routes/billingRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
// const stripe=require('stripe')

import paymentRoutes from "./routes/paymentRoutes.js";
import returnRoutes from "./routes/returnRoutes.js";


connectDB();

const app = express();
// const stripe = process.env.STRIPE_SECRET_KEY;

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/return", returnRoutes);


app.get("/", (req, res) => {
    res.send("API running successfully");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
process.on("uncaughtException", (err) => {
    console.error("UNCAUGHT ERROR:", err);
});
process.on("unhandledRejection", (err) => {
    console.error("UNHANDLED PROMISE REJECTION:", err);
});

