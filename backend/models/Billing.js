import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  fullName: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  country: { type: String, default: "India" },

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Billing", billingSchema);
