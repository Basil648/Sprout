// // // import { useEffect, useState } from "react";
// // // import api from "../api/axios";

// // // export default function Cart() {
// // //   const token = localStorage.getItem("token");
// // //   const [cart, setCart] = useState(null);

// // //   useEffect(() => {
// // //     fetchCart();
// // //   }, []);

// // //   const fetchCart = async () => {
// // //     const res = await api.get("/cart", {
// // //       headers: { Authorization: `Bearer ${token}` },
// // //     });
// // //     setCart(res.data);
// // //   };

// // //   const placeOrder = async () => {
// // //     const items = cart.items.map((i) => ({
// // //       productId: i.productId._id,
// // //       quantity: i.quantity,
// // //     }));

// // //     await api.post(
// // //       "/orders",
// // //       { items },
// // //       { headers: { Authorization: `Bearer ${token}` } }
// // //     );

// // //     alert("Order placed!");

// // //     await api.delete("/cart", {
// // //       headers: { Authorization: `Bearer ${token}` },
// // //     });

// // //     fetchCart();
// // //   };

// // //   if (!cart) return <p>Loading...</p>;

// // //   return (
// // //     <div style={{ padding: "20px" }}>
// // //       <h2>Your Cart</h2>

// // //       {cart.items.length === 0 ? (
// // //         <p>Cart is empty.</p>
// // //       ) : (
// // //         <div>
// // //           {cart.items.map((item) => (
// // //             <div key={item.productId._id} style={{ marginBottom: "10px" }}>
// // //               <p>
// // //                 {item.productId.name} — ₹{item.productId.price}
// // //               </p>
// // //               <p>Qty: {item.quantity}</p>
// // //             </div>
// // //           ))}

// // //           <button onClick={() => window.location.href = "/checkout"}>
// // //             Proceed to Checkout
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import api from "../api/axios";
// // import { useNavigate } from "react-router-dom";

// // export default function Cart() {
// //   const token = localStorage.getItem("token");
// //   const navigate = useNavigate();
// //   const [cart, setCart] = useState(null);

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   const fetchCart = async () => {
// //     const res = await api.get("/cart", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //     setCart(res.data);
// //   };

// //   // ------- BACKEND-DRIVEN INCREMENT / DECREMENT -------
// //   const increaseQty = async (id) => {
// //     const res = await api.patch(
// //       "/cart/update",
// //       { productId: id, action: "inc" },
// //       { headers: { Authorization: `Bearer ${token}` } }
// //     );
// //     setCart(res.data);
// //   };

// //   const decreaseQty = async (id) => {
// //     const res = await api.patch(
// //       "/cart/update",
// //       { productId: id, action: "dec" },
// //       { headers: { Authorization: `Bearer ${token}` } }
// //     );
// //     setCart(res.data);
// //   };

// //   // ------- CALCULATE TOTAL -------
// //   const totalAmount =
// //     cart?.items.reduce(
// //       (sum, item) => sum + item.productId.price * item.quantity,
// //       0
// //     ) || 0;

// //   const goToCheckout = () => {
// //     navigate("/checkout", { state: { finalAmount: totalAmount } });
// //   };

// //   if (!cart) return <p>Loading...</p>;

// //   return (
// //     <div
// //       style={{
// //         backgroundColor: "#F7F7F2",
// //         minHeight: "100vh",
// //         padding: "35px",
// //         fontFamily: "Poppins",
// //       }}
// //     >
// //       <h2 className="fw-bold mb-4" style={{ color: "#8FAF9F" }}>
// //         YOUR CART
// //       </h2>

// //       {cart.items.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <div className="row">

// //           {/* LEFT SIDE — CART ITEMS */}
// //           <div className="col-md-8">

// //             {cart.items.map((item) => (
// //               <div
// //                 key={item.productId._id}
// //                 className="shadow-sm p-3 mb-3 bg-white rounded d-flex justify-content-between align-items-center gap-3"
// //                 style={{ borderLeft: "4px solid #8FAF9F" }}
// //               >
// //                 {/* PRODUCT INFO */}
// //                 <div>
// //                   <h5 className="fw-semibold" style={{ color: "#8FAF9F" }}>
// //                     {item.productId.name}
// //                   </h5>
// //                   <p className="text-secondary mb-1">
// //                     ₹{item.productId.price}
// //                   </p>

// //                   {/* QUANTITY CONTROLS */}
// //                   <div className="d-flex align-items-center gap-2">
// //                     <button
// //                       className="btn btn-sm"
// //                       onClick={() => decreaseQty(item.productId._id)}
// //                       style={{
// //                         backgroundColor: "#8FAF9F",
// //                         color: "white",
// //                         borderRadius: "6px",
// //                       }}
// //                     >
// //                       -
// //                     </button>

// //                     <span className="fw-bold">{item.quantity}</span>

// //                     <button
// //                       className="btn btn-sm"
// //                       onClick={() => increaseQty(item.productId._id)}
// //                       style={{
// //                         backgroundColor: "#8FAF9F",
// //                         color: "white",
// //                         borderRadius: "6px",
// //                       }}
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* TOTAL FOR THIS ITEM */}
// //                 <div className="fw-bold fs-5">
// //                   ₹{item.productId.price * item.quantity}
// //                 </div>
// //               </div>
// //             ))}

// //           </div>

// //           {/* RIGHT SIDE — ORDER SUMMARY */}
// //           <div className="col-md-4">
// //             <div
// //               className="shadow p-4 bg-white rounded"
// //               style={{
// //                 borderLeft: "4px solid #8FAF9F",
// //                 position: "sticky",
// //                 top: "80px",
// //               }}
// //             >
// //               <h4 className="fw-bold" style={{ color: "#8FAF9F" }}>
// //                 ORDER SUMMARY
// //               </h4>

// //               <div className="d-flex justify-content-between mt-3">
// //                 <span className="fw-semibold">Subtotal</span>
// //                 <span>₹{totalAmount}</span>
// //               </div>

// //               <hr />

// //               <div className="d-flex justify-content-between">
// //                 <h5>Total</h5>
// //                 <h5 className="text-success">₹{totalAmount}</h5>
// //               </div>

// //               <button
// //                 className="btn w-100 mt-3"
// //                 style={{
// //                   backgroundColor: "#8FAF9F",
// //                   color: "white",
// //                   borderRadius: "10px",
// //                   letterSpacing: "1px",
// //                 }}
// //                 onClick={goToCheckout}
// //               >
// //                 PROCEED TO CHECKOUT
// //               </button>
// //             </div>
// //           </div>

// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";

// import {
//   Box,
//   Typography,
//   IconButton,
//   Button,
//   Divider,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import CloseIcon from "@mui/icons-material/Close";

// export default function Cart() {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   const [cart, setCart] = useState(null);

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     const res = await api.get("/cart", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setCart(res.data);
//   };

//   const increaseQty = async (id) => {
//     const res = await api.patch(
//       "/cart/update",
//       { productId: id, action: "inc" },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     setCart(res.data);
//   };

//   const decreaseQty = async (id) => {
//     const res = await api.patch(
//       "/cart/update",
//       { productId: id, action: "dec" },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     setCart(res.data);
//   };

//   const removeItem = async (id) => {
//     const res = await api.patch(
//       "/cart/update",
//       { productId: id, action: "remove" },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     setCart(res.data);
//   };

//   const totalAmount =
//     cart?.items.reduce(
//       (sum, item) => sum + item.productId.price * item.quantity,
//       0
//     ) || 0;

//   const goToCheckout = () =>
//     navigate("/checkout", { state: { finalAmount: totalAmount } });

//   if (!cart) return <p>Loading...</p>;

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#FDFBF7",
//         minHeight: "100vh",
//         px: { xs: 2, md: 10 },
//         py: 8,
//         fontFamily: "Poppins",
//       }}
//     >
//       {/* Title */}
//       <Typography
//         variant="h4"
//         textAlign="center"
//         sx={{
//           fontWeight: 900,
//           mb: 5,
//           color: "#2B2727",
//           letterSpacing: 0.5,
//         }}
//       >
//         Your Cart ({cart.items.length} items)
//       </Typography>

//       {/* Header Row */}
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "1fr 120px 150px 120px 40px",
//           fontWeight: 600,
//           color: "#6F6A6A",
//           fontSize: "14px",
//           mb: 2,
//         }}
//       >
//         <Typography>Item</Typography>
//         <Typography>Price</Typography>
//         <Typography>Quantity</Typography>
//         <Typography>Total</Typography>
//         <Typography></Typography>
//       </Box>

//       <Divider sx={{ mb: 3 }} />

//       {/* Items list */}
//       {cart.items.map((item) => (
//         <Box key={item.productId._id}>
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: "1fr 120px 150px 120px 40px",
//               alignItems: "center",
//               py: 2,
//               gap: 2,
//             }}
//           >
//             {/* ITEM BLOCK */}
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//               <img
//                 src={item.productId.image}
//                 alt=""
//                 style={{
//                   width: "60px",
//                   height: "60px",
//                   objectFit: "cover",
//                   borderRadius: "8px",
//                 }}
//               />

//               <Box>
//                 <Typography sx={{ fontWeight: 700, color: "#2B2727" }}>
//                   {item.productId.name}
//                 </Typography>

//                 <Typography
//                   sx={{ fontSize: "13px", color: "#898686", mt: 0.5 }}
//                 >
//                   Fresh produce — organic quality.
//                 </Typography>
//               </Box>
//             </Box>

//             {/* PRICE */}
//             <Typography sx={{ fontWeight: 600 }}>
//               ₹{item.productId.price}
//             </Typography>

//             {/* QUANTITY */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 border: "1px solid #D8D5D0",
//                 borderRadius: "50px",
//                 width: "85px",
//                 justifyContent: "space-between",
//                 px: 1,
//                 py: 0.5,
//               }}
//             >
//               <IconButton
//                 onClick={() => decreaseQty(item.productId._id)}
//                 sx={{ width: 26, height: 26 }}
//               >
//                 <RemoveIcon fontSize="small" />
//               </IconButton>

//               <Typography sx={{ fontWeight: 700 }}>
//                 {item.quantity}
//               </Typography>

//               <IconButton
//                 onClick={() => increaseQty(item.productId._id)}
//                 sx={{ width: 26, height: 26 }}
//               >
//                 <AddIcon fontSize="small" />
//               </IconButton>
//             </Box>

//             {/* TOTAL */}
//             <Typography sx={{ fontWeight: 700 }}>
//               ₹{item.productId.price * item.quantity}
//             </Typography>

//             {/* REMOVE */}
//             <IconButton
//               onClick={() => removeItem(item.productId._id)}
//               sx={{ color: "#8A6F6F" }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Divider />
//         </Box>
//       ))}

//       {/* SUMMARY SECTION */}
//       <Box
//         sx={{
//           maxWidth: "300px",
//           ml: "auto",
//           mt: 5,
//           color: "#2B2727",
//           fontSize: "15px",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             mb: 1,
//           }}
//         >
//           <Typography>Subtotal:</Typography>
//           <Typography>₹{totalAmount}</Typography>
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             mb: 1,
//           }}
//         > 
//         </Box>

//         <Divider sx={{ my: 2 }} />

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             fontSize: "18px",
//             fontWeight: 900,
//             color: "#1E442F",
//           }}
//         >
//           <Typography>Total:</Typography>
//           <Typography>₹{totalAmount}</Typography>
//         </Box>

//         <Button
//           fullWidth
//           sx={{
//             mt: 3,
//             backgroundColor: "#000",
//             color: "#fff",
//             py: 1.5,
//             borderRadius: 0,
//             fontWeight: 700,
//             "&:hover": { backgroundColor: "#333" },
//           }}
//           onClick={goToCheckout}
//         >
//           Checkout
//         </Button>
//       </Box>
//     </Box>
//   );
// }

import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

export default function Cart() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return navigate("/login");
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const updateQty = async (id, action) => {
    try {
      const res = await api.patch(
        "/cart/update",
        { productId: id, action },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const increaseQty = (id) => updateQty(id, "inc");
  const decreaseQty = (id) => updateQty(id, "dec");
  const removeItem = (id) => updateQty(id, "remove");

  if (loading) return <p>Loading...</p>;
  if (!cart || cart.items.length === 0)
    return (
      <Box sx={{ p: 5, textAlign: "center" }}>
        <Typography variant="h5" fontWeight={700}>
          Your cart is empty
        </Typography>
        <Button
          sx={{ mt: 3 }}
          variant="contained"
          onClick={() => navigate("/customer")}
        >
          Go Shopping
        </Button>
      </Box>
    );

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  const goToCheckout = () =>
    navigate("/checkout", { state: { finalAmount: totalAmount } });

  return (
    <Box
      sx={{
        backgroundColor: "#FDFBF7",
        minHeight: "100vh",
        px: { xs: 2, md: 10 },
        py: 8,
        fontFamily: "Poppins",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: 900,
          mb: 5,
          color: "#2B2727",
          letterSpacing: 0.5,
        }}
      >
        Your Cart ({cart.items.length} items)
      </Typography>

      {/* Header Row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 120px 150px 120px 40px",
          fontWeight: 600,
          color: "#6F6A6A",
          fontSize: "14px",
          mb: 2,
        }}
      >
        <Typography>Item</Typography>
        <Typography>Price</Typography>
        <Typography>Quantity</Typography>
        <Typography>Total</Typography>
        <Typography></Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Items list */}
      {cart.items.map((item) => (
        <Box key={item.productId._id}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 120px 150px 120px 40px",
              alignItems: "center",
              py: 2,
              gap: 2,
            }}
          >
            {/* ITEM BLOCK */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img
                src={item.productId.image}
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <Box>
                <Typography sx={{ fontWeight: 700, color: "#2B2727" }}>
                  {item.productId.name}
                </Typography>

                <Typography
                  sx={{ fontSize: "13px", color: "#898686", mt: 0.5 }}
                >
                  Fresh produce — organic quality.
                </Typography>
              </Box>
            </Box>

            {/* PRICE */}
            <Typography sx={{ fontWeight: 600 }}>
              ₹{item.productId.price}
            </Typography>

            {/* QUANTITY */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #D8D5D0",
                borderRadius: "50px",
                width: "85px",
                justifyContent: "space-between",
                px: 1,
                py: 0.5,
              }}
            >
              <IconButton
                onClick={() => decreaseQty(item.productId._id)}
                sx={{ width: 26, height: 26 }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>

              <Typography sx={{ fontWeight: 700 }}>
                {item.quantity}
              </Typography>

              <IconButton
                onClick={() => increaseQty(item.productId._id)}
                sx={{ width: 26, height: 26 }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* TOTAL */}
            <Typography sx={{ fontWeight: 700 }}>
              ₹{item.productId.price * item.quantity}
            </Typography>

            {/* REMOVE */}
            <IconButton
              onClick={() => removeItem(item.productId._id)}
              sx={{ color: "#8A6F6F" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />
        </Box>
      ))}

      {/* SUMMARY SECTION */}
      <Box
        sx={{
          maxWidth: "300px",
          ml: "auto",
          mt: 5,
          color: "#2B2727",
          fontSize: "15px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Subtotal:</Typography>
          <Typography>₹{totalAmount}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            fontWeight: 900,
            color: "#1E442F",
          }}
        >
          <Typography>Total:</Typography>
          <Typography>₹{totalAmount}</Typography>
        </Box>

        <Button
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "#000",
            color: "#fff",
            py: 1.5,
            borderRadius: 0,
            fontWeight: 700,
            "&:hover": { backgroundColor: "#333" },
          }}
          onClick={goToCheckout}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}
