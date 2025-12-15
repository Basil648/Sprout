import Billing from "../models/Billing.js";

export const saveBilling = async (req, res) => {
  const userId = req.user._id;
  const data = req.body;

  const saved = await Billing.findOneAndUpdate(
    { user: userId },
    { user: userId, ...data },
    { new: true, upsert: true }
  );

  res.json(saved);
};

export const getBilling = async (req, res) => {
  const billing = await Billing.findOne({ user: req.user._id });
  res.json(billing || {});
};
