// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     vendor: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     stock: { type: Number, required: true, default: 0 },
//     image: { type: String, required: true }
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Product", productSchema);

import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    image: { type: String, required: true },

    // ⭐ Vendor fake rating (for filter)
    vendorRating: {
      type: Number,
      default: 4,
      min: 1,
      max: 5,
    },

    // ⭐ Real customer reviews
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
