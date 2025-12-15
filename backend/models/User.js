import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },

        role: {
            type: String,
            enum: ["customer", "vendor", "admin"],
            default: "customer",
        },

        phone: { type: String },

        // Security Question Reset
        securityQuestion: { type: String },
        securityAnswer: { type: String }, // hashed version
    },
    { timestamps: true }
);

// ===============================
// FIXED PRE-SAVE HOOK (NO next())
// ===============================
userSchema.pre("save", async function () {
    if (this.isModified("securityAnswer") && this.securityAnswer) {
        this.securityAnswer = await bcrypt.hash(this.securityAnswer, 10);
    }
});

// ===============================
// Compare security answer
// ===============================
userSchema.methods.matchSecurityAnswer = async function (entered) {
    return await bcrypt.compare(entered, this.securityAnswer);
};

export default mongoose.model("User", userSchema);
