import express from "express";
import { auth } from "../middleware/auth.js";
import { addToCart, getCart, clearCart } from "../controllers/cartController.js";
import { updateCartQuantity } from "../controllers/cartController.js"; //new update logic 


const router = express.Router();

router.post("/add", auth(["customer"]), addToCart);
router.get("/", auth(["customer"]), getCart);
router.delete("/", auth(["customer"]), clearCart);
router.patch("/update", auth(["customer"]), updateCartQuantity);// new update route

export default router;
