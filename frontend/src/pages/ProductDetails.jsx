

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

//   // ⭐ Review form states
//   const [reviewComment, setReviewComment] = useState("");
//   const [reviewRating, setReviewRating] = useState(5);

//   // ---------------- FETCH PRODUCT ----------------
//   useEffect(() => {
//     fetchProduct();
//     fetchInquiry();
//   }, []);

//   const fetchProduct = async () => {
//     const res = await api.get(`/products/${id}`);
//     setProduct(res.data);
//   };

//   // ---------------- FETCH INQUIRY ----------------
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

//   // ---------------- SUBMIT REVIEW ----------------
//   const submitReview = async () => {
//     if (!reviewComment.trim()) return alert("Enter a review");

//     try {
//       const res = await api.post(
//         "/products/review/add",
//         {
//           productId: id,
//           comment: reviewComment,
//           rating: reviewRating,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Review Added!");
//       setReviewComment("");
//       setReviewRating(5);

//       fetchProduct(); // reload reviews
//     } catch (err) {
//       alert("Failed to add review");
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

//           {/* REVIEW LIST */}
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
//               <Rating size="small" value={rev.rating || 5} readOnly />
//               <Typography sx={{ color: "#555" }}>{rev.comment}</Typography>
//             </Paper>
//           ))}

//           {/* ---------------- ADD REVIEW FORM ---------------- */}
//           <Box
//             sx={{
//               mt: 4,
//               p: 3,
//               background: "white",
//               borderRadius: "14px",
//               boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
//               maxWidth: "500px",
//             }}
//           >
//             <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
//               Leave a Review
//             </Typography>

//             <Rating
//               value={reviewRating}
//               onChange={(e, val) => setReviewRating(val)}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               placeholder="Write your review..."
//               value={reviewComment}
//               onChange={(e) => setReviewComment(e.target.value)}
//               sx={{ mb: 2, background: "#fafafa" }}
//             />

//             <Button
//               variant="contained"
//               onClick={submitReview}
//               sx={{
//                 backgroundColor: "#1E442F",
//                 "&:hover": { backgroundColor: "#173726" },
//               }}
//             >
//               Submit Review
//             </Button>
//           </Box>
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
//                         {/* ONLY SHOW LABEL IF VENDOR */}
//                         {!isCustomer && (
//                           <Typography
//                             sx={{
//                               fontSize: "11px",
//                               opacity: 0.7,
//                               mb: "2px",
//                               fontWeight: 700,
//                             }}
//                           >
//                             Vendor
//                           </Typography>
//                         )}

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
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

export default function ProductDetails() {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [product, setProduct] = useState(null);
  const [inquiry, setInquiry] = useState(null);
  const [message, setMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  // Review form
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
      console.log(err);
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
    } catch {
      alert("Failed to send message");
    }
  };

  // ---------------- ADD TO CART ----------------
  const addToCart = async () => {
    try {
      await api.post("/cart/add", {
        productId: id,
        quantity: 1
      }, { headers: { Authorization: `Bearer ${token}` } });

      alert("Added to cart");
    } catch {
      alert("Failed to add to cart");
    }
  };

  // ---------------- SUBMIT REVIEW ----------------
  const submitReview = async () => {
    if (!reviewComment.trim()) return alert("Enter a review");

    try {
      await api.post(
        "/products/review/add",
        {
          productId: id,
          comment: reviewComment,
          rating: reviewRating,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setReviewComment("");
      setReviewRating(5);
      fetchProduct();
    } catch {
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

        {/* MAIN PRODUCT SECTION */}
        <Box sx={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {/* IMAGE */}
          <Paper
            elevation={4}
            sx={{
              width: 380,
              height: 380,
              overflow: "hidden",
              borderRadius: "14px"
            }}
          >
            <img
              src={product.image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </Paper>

          {/* DETAILS */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>
              ₹{product.price}
            </Typography>

            <Rating value={product.vendorRating || 4} readOnly size="large" />

            <Typography sx={{ mt: 2, fontSize: "16px", color: "#444" }}>
              {product.description}
            </Typography>

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

        {/* ⭐⭐⭐ GOOGLE FAQ-STYLE REVIEW ACCORDION ⭐⭐⭐ */}
        <Accordion sx={{ mt: 6, borderRadius: "14px" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              Reviews
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ background: "#FFFFFF" }}>
            {/* Average Rating */}
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Overall Rating
            </Typography>
            <Rating
              value={product.avgRating || 4}
              readOnly
              size="large"
            />

            <Divider sx={{ my: 2 }} />

            {/* List Reviews */}
            {product.reviews.length === 0 ? (
              <Typography>No reviews yet.</Typography>
            ) : (
              product.reviews.map((rev, i) => (
                <Paper
                  key={i}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: "14px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>{rev.name}</Typography>
                  <Rating size="small" value={rev.rating} readOnly />
                  <Typography sx={{ mt: 1 }}>{rev.comment}</Typography>
                </Paper>
              ))
            )}

            <Divider sx={{ my: 3 }} />

            {/* Add Review */}
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Leave a Review
            </Typography>

            <Rating
              value={reviewRating}
              onChange={(e, val) => setReviewRating(val)}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              rows={3}
              multiline
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              placeholder="Write your review..."
              sx={{ background: "#fafafa", mb: 2 }}
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
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* 💬 CHATBOX PANEL */}
      <Paper
        elevation={6}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: chatOpen ? 330 : 70,
          height: chatOpen ? 450 : 70,
          transition: "0.3s",
          borderRadius: "18px",
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

            {/* Header + Close Button */}
            <Box
              sx={{
                p: 2,
                background: "#1E442F",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "white", fontWeight: 700 }}>
                CHAT
              </Typography>

              {/* ❌ CLOSE CHAT BUTTON */}
              <IconButton onClick={() => setChatOpen(false)}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>

            {/* Messages */}
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
                  const isVendor = msg.sender === "vendor";

                  return (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: isVendor ? "flex-end" : "flex-start",
                        mb: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          maxWidth: "75%",
                          p: 1.5,
                          borderRadius: "14px",
                          background: isVendor ? "#1E442F" : "#EDEDED",
                          color: isVendor ? "white" : "#333",
                          fontSize: "14px",
                        }}
                      >
                        {msg.text}
                      </Box>
                    </Box>
                  );
                })
              )}
            </Box>

            {/* Input */}
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
