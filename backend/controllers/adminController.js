import User from "../models/User.js";
import Order from "../models/Order.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL VENDORS
export const getAllVendors = async (req, res) => {
  try {
    const vendors = await User.find({ role: "vendor" }).select("-password");
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE USER (customer or vendor)
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.deleteOne();
    res.json({ message: "User deleted" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
