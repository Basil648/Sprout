// import Product from "../models/Product.js";

// export const createProduct = async (req, res) => {
//   try {
//     const { name, description, price, stock } = req.body;

//     if (!req.file) {
//       return res.status(400).json({ message: "Product image required" });
//     }

//     const product = await Product.create({
//       vendor: req.user._id,
//       name,
//       description,
//       price,
//       stock,
//       image: req.file.path
//     });

//     res.status(201).json(product);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

import Product from "../models/Product.js";

/* ============================================================
   CREATE PRODUCT  (Vendor adds product + fake vendorRating)
   ============================================================ */
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, vendorRating } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Product image required" });
    }

    const product = await Product.create({
      vendor: req.user._id,
      name,
      description,
      price,
      stock,
      vendorRating: vendorRating || 4,  // fake rating for filtering later
      image: req.file.path,
      reviews: [],
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ============================================================
   GET ALL PRODUCTS
   ============================================================ */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("vendor", "name email");

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ============================================================
   GET PRODUCT DETAILS (with real reviews)
   ============================================================ */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("vendor", "name email")
      .populate("reviews.user", "name");

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ============================================================
   GET VENDOR'S OWN PRODUCTS
   ============================================================ */
export const getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ vendor: req.user._id });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ============================================================
   UPDATE PRODUCT (Vendor only)
   ============================================================ */
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    if (product.vendor.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Not allowed" });

    // Update fields
    product.name = req.body.name ?? product.name;
    product.description = req.body.description ?? product.description;
    product.price = req.body.price ?? product.price;
    product.stock = req.body.stock ?? product.stock;
    product.vendorRating = req.body.vendorRating ?? product.vendorRating; // optional

    if (req.file) {
      product.image = req.file.path;
    }

    await product.save();
    res.json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ============================================================
   DELETE PRODUCT (Vendor only)
   ============================================================ */
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    if (product.vendor.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Not allowed" });

    await product.deleteOne();
    res.json({ message: "Product deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/* ============================================================
   ADD CUSTOMER REVIEW (REAL RATING + COMMENT)
   ============================================================ */
export const addReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

    if (!rating || !comment)
      return res.status(400).json({ message: "Rating and comment required" });

    if (req.user.role !== "customer")
      return res.status(403).json({ message: "Only customers can review" });

    const product = await Product.findById(productId);
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    // Add review
    product.reviews.push({
      user: req.user._id,
      name: req.user.name,
      rating,
      comment,
    });

    await product.save();

    res.json({
      message: "Review added",
      reviews: product.reviews,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
