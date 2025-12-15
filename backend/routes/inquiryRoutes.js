import express from "express";
import { auth } from "../middleware/auth.js";
import {
  createInquiry,
  sendReply,
  getVendorInquiries,
  getCustomerInquiries
} from "../controllers/inquiryController.js";

const router = express.Router();

// Customer starts inquiry
router.post("/", auth(["customer"]), createInquiry);

// Customer / Vendor reply
router.post("/reply", auth(["customer", "vendor"]), sendReply);

// Vendor inquiries
router.get("/vendor", auth(["vendor"]), getVendorInquiries);

// Customer inquiries
router.get("/customer", auth(["customer"]), getCustomerInquiries);

export default router;
