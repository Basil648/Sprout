// import express from "express";
// import upload from "../middleware/upload.js";
// import { auth } from "../middleware/auth.js";

// import {
//     createProduct,
//     getAllProducts,
//     getMyProducts,
//     updateProduct,
//     deleteProduct,
// } from "../controllers/productController.js";
// import { addReview } from "../controllers/productController.js";


// const router = express.Router();

// router.get("/", getAllProducts);

// router.post("/", auth(["vendor"]), upload.single("image"), createProduct);
// router.get("/my", auth(["vendor"]), getMyProducts);
// router.put("/:id", auth(["vendor"]), upload.single("image"), updateProduct);
// router.delete("/:id", auth(["vendor"]), deleteProduct);
// router.post("/review", auth(["customer"]), addReview);

// export default router;

import express from "express";
import upload from "../middleware/upload.js";
import { auth } from "../middleware/auth.js";

import {
    createProduct,
    getAllProducts,
    getProductById,
    getMyProducts,
    updateProduct,
    deleteProduct,
    addReview,
} from "../controllers/productController.js";

const router = express.Router();

/* ============================
   PUBLIC ROUTES
   ============================ */

// Get all products
router.get("/", getAllProducts);


/* ============================
   VENDOR ROUTES
   ============================ */

// Get vendor's own products  (MUST COME BEFORE :id)
router.get("/my", auth(["vendor"]), getMyProducts);

// Create product
router.post("/", auth(["vendor"]), upload.single("image"), createProduct);

// Update product
router.put("/:id", auth(["vendor"]), upload.single("image"), updateProduct);

// Delete product
router.delete("/:id", auth(["vendor"]), deleteProduct);


/* ============================
   CUSTOMER ROUTES
   ============================ */

// Add review
router.post("/review/add", auth(["customer"]), addReview);


/* ============================
   PRODUCT DETAILS (LAST)
   ============================ */

// Get product details (with reviews)
router.get("/:id", getProductById);

export default router;
