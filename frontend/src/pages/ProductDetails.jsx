

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { FiMessageCircle } from "react-icons/fi";
// import "../styles/chat.css";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const token = localStorage.getItem("token");

//   const [product, setProduct] = useState(null);
//   const [inquiry, setInquiry] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chatOpen, setChatOpen] = useState(false);

//   useEffect(() => {
//     fetchProduct();
//     fetchInquiry();
//   }, []);

//   // ------------------ FETCH PRODUCT ------------------
//   const fetchProduct = async () => {
//     const res = await api.get("/products");
//     setProduct(res.data.find((p) => p._id === id));
//   };

//   // ------------------ FETCH INQUIRY (FIXED) ------------------
//   const fetchInquiry = async () => {
//     try {
//       const res = await api.get("/inquiries/customer", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const found = res.data.find((i) => {
//         const pid = typeof i.product === "string" ? i.product : i.product?._id;
//         return pid === id;
//       });

//       setInquiry(found || null);
//     } catch (err) {
//       console.log("Inquiry fetch failed:", err);
//     }
//   };

//   // ------------------ SEND MESSAGE ------------------
//   const sendMessage = async () => {
//     if (!message.trim()) return alert("Type something");

//     try {
//       let res;

//       if (!inquiry) {
//         // Create new inquiry
//         res = await api.post(
//           "/inquiries",
//           { productId: id, message },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } else {
//         // Add reply
//         res = await api.post(
//           "/inquiries/reply",
//           { inquiryId: inquiry._id, message },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }

//       setInquiry(res.data);
//       setMessage("");
//     } catch (e) {
//       alert("Failed to send message");
//     }
//   };

//   // ------------------ ADD TO CART ------------------
//   const addToCart = async () => {
//     try {
//       await api.post(
//         "/cart/add",
//         { productId: id, quantity: 1 },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Added to cart!");
//     } catch (err) {
//       alert("Failed to add to cart");
//     }
//   };

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div style={{ backgroundColor: "#F7F7F2", minHeight: "100vh" }}>
//       <Navbar />

//       <div className="container py-4">

//         <h2 className="fw-bold mb-4" style={{ color: "#8FAF9F" }}>
//           {product.name}
//         </h2>

//         {/* ------------ WRAPPER (70 / 30) ------------ */}
//         <div className="product-chat-wrapper">

//           {/* PRODUCT AREA */}
//           <div
//             className="product-area"
//             style={{ width: chatOpen ? "70%" : "100%" }}
//           >
//             <div className="d-flex gap-4 flex-wrap">

//               {/* IMAGE */}
//               <img
//                 src={product.image}
//                 className="rounded shadow"
//                 style={{
//                   width: "350px",
//                   height: "350px",
//                   objectFit: "cover"
//                 }}
//               />

//               {/* DETAILS */}
//               <div className="d-flex flex-column justify-content-center">
//                 <p className="fs-5">
//                   <b>Price:</b>{" "}
//                   <span className="text-success fw-bold">₹{product.price}</span>
//                 </p>

//                 <p className="text-secondary" style={{ maxWidth: "350px" }}>
//                   {product.description}
//                 </p>

//                 <button
//                   className="btn mt-3"
//                   onClick={addToCart}
//                   style={{
//                     backgroundColor: "#8FAF9F",
//                     color: "white",
//                     padding: "10px 25px",
//                     borderRadius: "8px",
//                     letterSpacing: "1px"
//                   }}
//                 >
//                   ADD TO CART
//                 </button>
//               </div>

//             </div>
//           </div>

//           {/* ---------------- CHAT PANEL ---------------- */}
//           <div className={`chat-box ${chatOpen ? "open" : "closed"}`}>
//             {chatOpen && (
//               <>
//                 <h4 className="fw-bold text-center" style={{ color: "#8FAF9F" }}>
//                   CHAT
//                 </h4>

//                 {/* 🟢 FIXED MESSAGE RENDERING */}
//                 <div className="chat-messages">
//                   {!inquiry ? (
//                     <p className="text-secondary text-center">No messages yet.</p>
//                   ) : (
//                     inquiry.messages.map((msg, i) => (
//                       <div key={i} className="mb-2">
//                         <div
//                           style={{
//                             padding: "10px",
//                             background: "#f1f1f1",
//                             borderRadius: "8px"
//                           }}
//                         >
//                           {msg.text}
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>

//                 {/* INPUT SECTION */}
//                 <div className="chat-input-area">
//                   <textarea
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Type your message..."
//                     className="form-control"
//                     style={{
//                       borderRadius: "10px",
//                       resize: "none",
//                       height: "70px"
//                     }}
//                   />

//                   <button
//                     onClick={sendMessage}
//                     className="btn w-100 mt-2"
//                     style={{
//                       backgroundColor: "#8FAF9F",
//                       color: "white",
//                       borderRadius: "8px",
//                       letterSpacing: "1px"
//                     }}
//                   >
//                     SEND
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>

//         </div>

//         {/* FLOATING TOGGLE BUTTON */}
//         <div
//           className="floating-chat-btn"
//           onClick={() => setChatOpen(!chatOpen)}
//         >
//           <FiMessageCircle />
//         </div>

//       </div>

//       <Footer />
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// import {
//   Box,
//   Typography,
//   Button,
//   Rating,
//   TextField,
//   Paper,
//   IconButton
// } from "@mui/material";

// import SendIcon from "@mui/icons-material/Send";
// import ChatIcon from "@mui/icons-material/Chat";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const token = localStorage.getItem("token");

//   const [product, setProduct] = useState(null);
//   const [inquiry, setInquiry] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chatOpen, setChatOpen] = useState(false);

//   // ---------------- FETCH PRODUCT ----------------
//   useEffect(() => {
//     fetchProduct();
//     fetchInquiry();
//   }, []);

//   const fetchProduct = async () => {
//     const res = await api.get(`/products/${id}`);
//     setProduct(res.data);
//   };

//   const fetchInquiry = async () => {
//     try {
//       const res = await api.get("/inquiries/customer", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const found = res.data.find((i) => {
//         const pid = typeof i.product === "string" ? i.product : i.product?._id;
//         return pid === id;
//       });

//       setInquiry(found || null);
//     } catch (err) {
//       console.log("Inquiry fetch error:", err);
//     }
//   };

//   // ---------------- SEND MESSAGE ----------------
//   const sendMessage = async () => {
//     if (!message.trim()) return;

//     try {
//       let res;

//       if (!inquiry) {
//         res = await api.post(
//           "/inquiries",
//           { productId: id, message },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } else {
//         res = await api.post(
//           "/inquiries/reply",
//           { inquiryId: inquiry._id, message },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }

//       setInquiry(res.data);
//       setMessage("");
//     } catch (e) {
//       alert("Failed to send message");
//     }
//   };

//   // ---------------- ADD TO CART ----------------
//   const addToCart = async () => {
//     try {
//       await api.post(
//         "/cart/add",
//         { productId: id, quantity: 1 },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Added to cart");
//     } catch (err) {
//       alert("Failed to add to cart");
//     }
//   };

//   if (!product) return <p>Loading...</p>;

//   return (
//     <Box sx={{ backgroundColor: "#F5F5ED", minHeight: "100vh" }}>
//       <Navbar />

//       <Box sx={{ p: 4, maxWidth: "1100px", mx: "auto" }}>

//         {/* PRODUCT TITLE */}
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: 900,
//             mb: 4,
//             color: "#1E442F",
//             textAlign: "center",
//             letterSpacing: 1,
//           }}
//         >
//           {product.name}
//         </Typography>

//         {/* MAIN AREA */}
//         <Box sx={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
//           {/* IMAGE */}
//           <img
//             src={product.image}
//             alt=""
//             style={{
//               width: "380px",
//               height: "380px",
//               objectFit: "cover",
//               borderRadius: "14px",
//               boxShadow: "0px 4px 20px rgba(0,0,0,0.2)"
//             }}
//           />

//           {/* DETAILS */}
//           <Box sx={{ flex: 1 }}>
//             <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
//               ₹{product.price}
//             </Typography>

//             {/* VENDOR RATING */}
//             <Rating value={product.vendorRating || 4} readOnly />

//             <Typography sx={{ mt: 2, fontSize: "16px", color: "#444" }}>
//               {product.description}
//             </Typography>

//             {/* BUTTON */}
//             <Button
//               variant="contained"
//               onClick={addToCart}
//               sx={{
//                 mt: 3,
//                 backgroundColor: "#1E442F",
//                 px: 4,
//                 py: 1.5,
//                 fontWeight: 700,
//                 "&:hover": { backgroundColor: "#173726" },
//               }}
//             >
//               ADD TO CART
//             </Button>
//           </Box>
//         </Box>

//         {/* ---------------- REVIEWS ---------------- */}
//         <Box sx={{ mt: 6 }}>
//           <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//             Customer Reviews
//           </Typography>

//           {product.reviews.length === 0 && (
//             <Typography>No reviews yet.</Typography>
//           )}

//           {product.reviews.map((rev, i) => (
//             <Paper
//               key={i}
//               sx={{
//                 p: 2,
//                 mb: 2,
//                 borderRadius: "10px",
//                 backgroundColor: "#FFFFFF",
//               }}
//             >
//               <Typography sx={{ fontWeight: 700 }}>{rev.name}</Typography>
//               <Typography sx={{ color: "#555" }}>{rev.comment}</Typography>
//             </Paper>
//           ))}
//         </Box>
//       </Box>

//       {/* ---------------- CHAT PANEL ---------------- */}
//       <Paper
//         elevation={6}
//         sx={{
//           position: "fixed",
//           bottom: 20,
//           right: 20,
//           width: chatOpen ? 330 : 70,
//           height: chatOpen ? 450 : 70,
//           transition: "0.3s",
//           borderRadius: "14px",
//           overflow: "hidden",
//         }}
//       >
//         {!chatOpen ? (
//           <IconButton
//             onClick={() => setChatOpen(true)}
//             sx={{ width: "100%", height: "100%" }}
//           >
//             <ChatIcon sx={{ fontSize: 35, color: "#1E442F" }} />
//           </IconButton>
//         ) : (
//           <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>

//             {/* HEADER */}
//             <Box sx={{ p: 2, background: "#1E442F" }}>
//               <Typography sx={{ color: "white", fontWeight: 700 }}>
//                 CHAT WITH VENDOR
//               </Typography>
//             </Box>

//             {/* MESSAGES */}
//             <Box
//               sx={{
//                 flex: 1,
//                 overflowY: "auto",
//                 p: 2,
//                 background: "#FAFAFA",
//               }}
//             >
//               {!inquiry ? (
//                 <Typography sx={{ color: "#888", textAlign: "center", mt: 3 }}>
//                   No messages yet.
//                 </Typography>
//               ) : (
//                 inquiry.messages.map((msg, i) => {
//                   const isCustomer = msg.sender === "customer";

//                   return (
//                     <Box
//                       key={i}
//                       sx={{
//                         display: "flex",
//                         justifyContent: isCustomer ? "flex-end" : "flex-start",
//                         mb: 2,
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           maxWidth: "75%",
//                           p: 1.5,
//                           borderRadius: "14px",
//                           background: isCustomer ? "#1E442F" : "#E8EEE6",
//                           color: isCustomer ? "white" : "#223322",
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: "11px",
//                             opacity: 0.7,
//                             mb: "2px",
//                             textAlign: isCustomer ? "right" : "left",
//                             fontWeight: 700,
//                           }}
//                         >
//                           {isCustomer ? "You" : "Vendor"}
//                         </Typography>

//                         <Typography sx={{ fontSize: "14px" }}>
//                           {msg.text}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   );
//                 })
//               )}
//             </Box>

//             {/* INPUT */}
//             <Box sx={{ p: 1.5, display: "flex", gap: 1 }}>
//               <TextField
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Type message..."
//                 size="small"
//                 sx={{ flex: 1, background: "white", borderRadius: "8px" }}
//               />
//               <IconButton
//                 onClick={sendMessage}
//                 sx={{ background: "#1E442F", color: "white" }}
//               >
//                 <SendIcon />
//               </IconButton>
//             </Box>
//           </Box>
//         )}
//       </Paper>

//       <Footer />
//     </Box>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Box,
  Typography,
  Button,
  Rating,
  TextField,
  Paper,
  IconButton
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";

export default function ProductDetails() {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [product, setProduct] = useState(null);
  const [inquiry, setInquiry] = useState(null);
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  // ⭐ Review form states
  const [reviewComment, setReviewComment] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  // ---------------- FETCH PRODUCT ----------------
  useEffect(() => {
    fetchProduct();
    fetchInquiry();
  }, []);

  const fetchProduct = async () => {
    const res = await api.get(`/products/${id}`);
    setProduct(res.data);
  };

  // ---------------- FETCH INQUIRY ----------------
  const fetchInquiry = async () => {
    try {
      const res = await api.get("/inquiries/customer", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const found = res.data.find((i) => {
        const pid = typeof i.product === "string" ? i.product : i.product?._id;
        return pid === id;
      });

      setInquiry(found || null);
    } catch (err) {
      console.log("Inquiry fetch error:", err);
    }
  };

  // ---------------- SEND MESSAGE ----------------
  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      let res;

      if (!inquiry) {
        res = await api.post(
          "/inquiries",
          { productId: id, message },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        res = await api.post(
          "/inquiries/reply",
          { inquiryId: inquiry._id, message },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setInquiry(res.data);
      setMessage("");
    } catch (e) {
      alert("Failed to send message");
    }
  };

  // ---------------- ADD TO CART ----------------
  const addToCart = async () => {
    try {
      await api.post(
        "/cart/add",
        { productId: id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Added to cart");
    } catch (err) {
      alert("Failed to add to cart");
    }
  };

  // ---------------- SUBMIT REVIEW ----------------
  const submitReview = async () => {
    if (!reviewComment.trim()) return alert("Enter a review");

    try {
      const res = await api.post(
        "/products/review/add",
        {
          productId: id,
          comment: reviewComment,
          rating: reviewRating,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Review Added!");
      setReviewComment("");
      setReviewRating(5);

      fetchProduct(); // reload reviews
    } catch (err) {
      alert("Failed to add review");
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <Box sx={{ backgroundColor: "#F5F5ED", minHeight: "100vh" }}>
      <Navbar />

      <Box sx={{ p: 4, maxWidth: "1100px", mx: "auto" }}>

        {/* PRODUCT TITLE */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 4,
            color: "#1E442F",
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          {product.name}
        </Typography>

        {/* MAIN AREA */}
        <Box sx={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {/* IMAGE */}
          <img
            src={product.image}
            alt=""
            style={{
              width: "380px",
              height: "380px",
              objectFit: "cover",
              borderRadius: "14px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.2)"
            }}
          />

          {/* DETAILS */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
              ₹{product.price}
            </Typography>

            {/* VENDOR RATING */}
            <Rating value={product.vendorRating || 4} readOnly />

            <Typography sx={{ mt: 2, fontSize: "16px", color: "#444" }}>
              {product.description}
            </Typography>

            {/* BUTTON */}
            <Button
              variant="contained"
              onClick={addToCart}
              sx={{
                mt: 3,
                backgroundColor: "#1E442F",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                "&:hover": { backgroundColor: "#173726" },
              }}
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>

        {/* ---------------- REVIEWS ---------------- */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Customer Reviews
          </Typography>

          {/* REVIEW LIST */}
          {product.reviews.length === 0 && (
            <Typography>No reviews yet.</Typography>
          )}

          {product.reviews.map((rev, i) => (
            <Paper
              key={i}
              sx={{
                p: 2,
                mb: 2,
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>{rev.name}</Typography>
              <Rating size="small" value={rev.rating || 5} readOnly />
              <Typography sx={{ color: "#555" }}>{rev.comment}</Typography>
            </Paper>
          ))}

          {/* ---------------- ADD REVIEW FORM ---------------- */}
          <Box
            sx={{
              mt: 4,
              p: 3,
              background: "white",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
              maxWidth: "500px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Leave a Review
            </Typography>

            <Rating
              value={reviewRating}
              onChange={(e, val) => setReviewRating(val)}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Write your review..."
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              sx={{ mb: 2, background: "#fafafa" }}
            />

            <Button
              variant="contained"
              onClick={submitReview}
              sx={{
                backgroundColor: "#1E442F",
                "&:hover": { backgroundColor: "#173726" },
              }}
            >
              Submit Review
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ---------------- CHAT PANEL ---------------- */}
      <Paper
        elevation={6}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: chatOpen ? 330 : 70,
          height: chatOpen ? 450 : 70,
          transition: "0.3s",
          borderRadius: "14px",
          overflow: "hidden",
        }}
      >
        {!chatOpen ? (
          <IconButton
            onClick={() => setChatOpen(true)}
            sx={{ width: "100%", height: "100%" }}
          >
            <ChatIcon sx={{ fontSize: 35, color: "#1E442F" }} />
          </IconButton>
        ) : (
          <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>

            {/* HEADER */}
            <Box sx={{ p: 2, background: "#1E442F" }}>
              <Typography sx={{ color: "white", fontWeight: 700 }}>
                CHAT WITH VENDOR
              </Typography>
            </Box>

            {/* MESSAGES */}
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                p: 2,
                background: "#FAFAFA",
              }}
            >
              {!inquiry ? (
                <Typography sx={{ color: "#888", textAlign: "center", mt: 3 }}>
                  No messages yet.
                </Typography>
              ) : (
                inquiry.messages.map((msg, i) => {
                  const isCustomer = msg.sender === "customer";

                  return (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: isCustomer ? "flex-end" : "flex-start",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          maxWidth: "75%",
                          p: 1.5,
                          borderRadius: "14px",
                          background: isCustomer ? "#1E442F" : "#E8EEE6",
                          color: isCustomer ? "white" : "#223322",
                        }}
                      >
                        {/* ONLY SHOW LABEL IF VENDOR */}
                        {!isCustomer && (
                          <Typography
                            sx={{
                              fontSize: "11px",
                              opacity: 0.7,
                              mb: "2px",
                              fontWeight: 700,
                            }}
                          >
                            Vendor
                          </Typography>
                        )}

                        <Typography sx={{ fontSize: "14px" }}>
                          {msg.text}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })
              )}
            </Box>

            {/* INPUT */}
            <Box sx={{ p: 1.5, display: "flex", gap: 1 }}>
              <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type message..."
                size="small"
                sx={{ flex: 1, background: "white", borderRadius: "8px" }}
              />
              <IconButton
                onClick={sendMessage}
                sx={{ background: "#1E442F", color: "white" }}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        )}
      </Paper>

      <Footer />
    </Box>
  );
}
