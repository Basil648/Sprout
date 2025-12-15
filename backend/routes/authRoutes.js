import express from "express";
import { 
    register, 
    login, 
    getSecurityQuestion,
    verifySecurityAnswer,
    resetPasswordSecurity
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Security question reset system
router.post("/get-security-question", getSecurityQuestion);
router.post("/verify-security-answer", verifySecurityAnswer);
router.post("/reset-password", resetPasswordSecurity);

export default router;
