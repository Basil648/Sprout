// // import Cart from "../models/Cart.js";

// // // ADD TO CART
// // export const addToCart = async (req, res) => {
// //   const { productId, quantity } = req.body;
// //   const userId = req.user._id;

// //   let cart = await Cart.findOne({ user: userId });

// //   if (!cart) {
// //     cart = await Cart.create({
// //       user: userId,
// //       items: [{ productId, quantity }],
// //     });
// //     return res.json(cart);
// //   }

// //   const item = cart.items.find(
// //     (i) => i.productId.toString() === productId
// //   );

// //   if (item) {
// //     item.quantity += quantity;
// //   } else {
// //     cart.items.push({ productId, quantity });
// //   }

// //   await cart.save();
// //   res.json(cart);
// // };

// // // GET CART
// // export const getCart = async (req, res) => {
// //   const cart = await Cart.findOne({ user: req.user._id })
// //     .populate("items.productId");

// //   res.json(cart || { items: [] });
// // };

// // // CLEAR CART
// // export const clearCart = async (req, res) => {
// //   await Cart.deleteOne({ user: req.user._id });
// //   res.json({ message: "Cart cleared" });
// // };


// import Cart from "../models/Cart.js";

// // ADD TO CART
// export const addToCart = async (req, res) => {
//   const { productId, quantity } = req.body;
//   const customerId = req.user._id;

//   let cart = await Cart.findOne({ customer: customerId });

//   if (!cart) {
//     cart = await Cart.create({
//       customer: customerId,
//       items: [{ productId, quantity }],
//     });
//     return res.json(cart);
//   }

//   const item = cart.items.find(
//     (i) => i.productId.toString() === productId
//   );

//   if (item) {
//     item.quantity += quantity;
//   } else {
//     cart.items.push({ productId, quantity });
//   }

//   await cart.save();
//   res.json(cart);
// };

// // GET CART
// export const getCart = async (req, res) => {
//   const cart = await Cart.findOne({ customer: req.user._id })
//     .populate("items.productId");

//   res.json(cart || { items: [] });
// };

// // CLEAR CART
// export const clearCart = async (req, res) => {
//   await Cart.deleteOne({ customer: req.user._id });
//   res.json({ message: "Cart cleared" });
// };

// // UPDATE CART QUANTITY (+1 / -1), new one 
// export const updateCartQuantity = async (req, res) => {
//   const { productId, action } = req.body;

//   let cart = await Cart.findOne({ customer: req.user._id });
//   if (!cart) return res.status(404).json({ message: "Cart not found" });

//   const item = cart.items.find(
//     (i) => i.productId.toString() === productId
//   );

//   if (!item)
//     return res.status(404).json({ message: "Item not found in cart" });

//   // Increment or decrement
//   if (action === "inc") item.quantity++;
//   if (action === "dec" && item.quantity > 1) item.quantity--;

//   await cart.save();

//   // Re-fetch with product details populated
//   cart = await Cart.findOne({ customer: req.user._id })
//     .populate("items.productId");

//   res.json(cart);
// };


import Cart from "../models/Cart.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const customerId = req.user._id;

  let cart = await Cart.findOne({ customer: customerId });

  if (!cart) {
    cart = await Cart.create({
      customer: customerId,
      items: [{ productId, quantity }],
    });
  } else {
    const item = cart.items.find(
      (i) => i.productId.toString() === productId
    );

    if (item) {
      item.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
  }

  cart = await Cart.findOne({ customer: customerId })
    .populate("items.productId");

  res.json(cart);
};

// GET CART
export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ customer: req.user._id })
    .populate("items.productId");

  res.json(cart || { items: [] });
};

// CLEAR CART
export const clearCart = async (req, res) => {
  await Cart.deleteOne({ customer: req.user._id });
  res.json({ message: "Cart cleared" });
};

// UPDATE CART QUANTITY (inc, dec, remove)
export const updateCartQuantity = async (req, res) => {
  const { productId, action } = req.body;

  let cart = await Cart.findOne({ customer: req.user._id });
  if (!cart) return res.status(404).json({ message: "Cart not found" });

  const item = cart.items.find(
    (i) => i.productId.toString() === productId
  );

  if (!item)
    return res.status(404).json({ message: "Item not found in cart" });

  // ACTION HANDLING
  if (action === "inc") {
    item.quantity++;
  }

  if (action === "dec") {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      // quantity is 1 → remove item
      cart.items = cart.items.filter(
        (i) => i.productId.toString() !== productId
      );
    }
  }

  if (action === "remove") {
    cart.items = cart.items.filter(
      (i) => i.productId.toString() !== productId
    );
  }

  await cart.save();

  // Populate and return updated cart
  cart = await Cart.findOne({ customer: req.user._id })
    .populate("items.productId");

  res.json(cart);
};
