import express from "express";
import { auth } from "../middleware/auth.js";

import {
  getAllUsers,
  getAllVendors,
  deleteUser
} from "../controllers/adminController.js";

const router = express.Router();

// ONLY ADMIN CAN ACCESS THESE
router.get("/users", auth(["admin"]), getAllUsers);
router.get("/vendors", auth(["admin"]), getAllVendors);
router.delete("/users/:id", auth(["admin"]), deleteUser);

export default router;
