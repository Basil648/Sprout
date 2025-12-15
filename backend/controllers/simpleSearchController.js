import Product from "../models/Product.js";

export const simpleSearch = async (req, res) => {
  try {
    const {
      keyword = "",
      minPrice,
      maxPrice,
      star, // USE vendorRating for filtering
    } = req.query;

    const filter = {};

    // 🔍 Search by name ONLY
    if (keyword) {
      filter.name = { $regex: keyword, $options: "i" };
    }

    // 💰 Price range
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // ⭐ FILTER BASED ON vendorRating only
    if (star) {
      filter.vendorRating = { $gte: Number(star) };
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      products,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Search failed" });
  }
};
