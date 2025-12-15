import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";

// =======================
// REGISTER
// =======================

export const register = async (req, res) => {
    console.log("REGISTER HIT", req.body);

    try {
        const { name, email, password, role, phone, securityQuestion, securityAnswer } = req.body;

        if (!name || !email || !password || !role || !securityQuestion || !securityAnswer) {
            return res.status(400).json({ message: "All fields required" });
        }

        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            phone,
            securityQuestion,
            securityAnswer, // will be hashed by model hook
        });

        res.status(201).json({
            message: "Registration successful",
            userId: user._id,
        });

    } catch (error) {
        console.error("REGISTER ERROR:", error);
        return res.status(500).json({ message: error.message });
    }

};

// =======================
// LOGIN
// =======================
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.json({
            message: "Login successful",
            token: generateToken(user),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// =======================
// GET SECURITY QUESTION
// =======================
export const getSecurityQuestion = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Email not found" });

        if (!user.securityQuestion)
            return res.status(400).json({ message: "No security question set" });

        res.json({ question: user.securityQuestion });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// =======================
// VERIFY SECURITY ANSWER
// =======================
export const verifySecurityAnswer = async (req, res) => {
    try {
        const { email, answer } = req.body;

        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "User not found" });

        const correct = await user.matchSecurityAnswer(answer);
        if (!correct)
            return res.status(400).json({ message: "Wrong answer" });

        // Generate temporary reset token
        const tempToken = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "10m" }
        );

        res.json({
            tempToken,
            message: "Answer correct"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// =======================
// RESET PASSWORD
// =======================
export const resetPasswordSecurity = async (req, res) => {
    try {
        const { newPassword, tempToken } = req.body;

        if (!tempToken)
            return res.status(400).json({ message: "Missing reset token" });

        let decoded;
        try {
            decoded = jwt.verify(tempToken, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        const user = await User.findById(decoded.id);
        if (!user)
            return res.status(400).json({ message: "User not found" });

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: "Password reset successful" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
