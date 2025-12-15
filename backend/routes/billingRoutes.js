import express from "express";
import { auth } from "../middleware/auth.js";
import { saveBilling, getBilling } from "../controllers/billingController.js";

const router = express.Router();

router.get("/", auth(["customer"]), getBilling);
router.post("/", auth(["customer"]), saveBilling);

export default router;
    