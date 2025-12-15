import express from "express";
import { auth } from "../middleware/auth.js";
import {
  requestReturn,
  myReturns,
  vendorReturns,
  updateReturnStatus
} from "../controllers/returnController.js";

const router = express.Router();

// CUSTOMER
router.post("/request", auth(["customer"]), requestReturn);
router.get("/my", auth(["customer"]), myReturns);

// VENDOR
router.get("/vendor", auth(["vendor"]), vendorReturns);
router.patch("/update-status/:id", auth(["vendor"]), updateReturnStatus);

export default router;
