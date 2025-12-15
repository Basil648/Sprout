import express from "express";
import { auth } from "../middleware/auth.js";

import {
  createOrder,
  getMyOrders,
  getOrdersByVendor,
  getAllOrders,
  updateOrderStatus
} from "../controllers/orderController.js";

const router = express.Router();

// CUSTOMER
router.post("/", auth(["customer"]), createOrder);
router.get("/my", auth(["customer"]), getMyOrders);

// VENDOR
router.get("/vendor", auth(["vendor"]), getOrdersByVendor);
router.patch("/:id", auth(["vendor"]), updateOrderStatus);

// ADMIN
router.get("/admin", auth(["admin"]), getAllOrders);

export default router;
