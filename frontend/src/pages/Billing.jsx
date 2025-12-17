
// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function Billing() {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   const [billing, setBilling] = useState({
//     fullName: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "India",
//   });

//   const [paymentMethod, setPaymentMethod] = useState("cod");
//   const [cart, setCart] = useState(null);

//   useEffect(() => {
//     loadBilling();
//     loadCart();
//     window.scrollTo(0, 0);
//   }, []);

//   // LOAD BILLING
//   const loadBilling = async () => {
//     try {
//       const res = await api.get("/billing", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (res.data) setBilling(res.data);
//     } catch (err) { }
//   };

//   // LOAD CART
//   const loadCart = async () => {
//     try {
//       const res = await api.get("/cart", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCart(res.data);
//     } catch (err) { }
//   };

//   if (!cart) return <p>Loading…</p>;

//   const totalAmount = cart.items.reduce(
//     (sum, item) => sum + item.productId.price * item.quantity,
//     0
//   );

//   // COD ORDER
//   const handleCOD = async () => {
//     const items = cart.items.map((i) => ({
//       productId: i.productId._id,
//       quantity: i.quantity,
//     }));

//     await api.post(
//       "/orders",
//       { items },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     await api.delete("/cart", {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     navigate("/customer");
//   };

//   // STRIPE ONLINE PAYMENT
//   const handleOnlinePayment = async () => {
//     const items = cart.items.map((i) => ({
//       name: i.productId.name,
//       price: i.productId.price,
//       quantity: i.quantity,
//     }));

//     try {
//       const res = await api.post(
//         "/payment/create-checkout-session",
//         { items },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       window.location.href = res.data.url; // THE REDIRECT YOU WANTED
//     } catch (err) {
//       alert(err.response?.data?.error || err.message);
//     }
//   };

//   const handleProceed = async () => {
//     // Save billing details
//     await api.post("/billing", billing, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     if (paymentMethod === "cod") handleCOD();
//     else handleOnlinePayment();
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100%",
//         backgroundColor: "#FAFAF9",
//         padding: "40px 20px",
//         fontFamily: "Poppins",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1100px",
//           display: "grid",
//           gap: "40px",

//           // ⭐ Desktop — 2 columns
//           gridTemplateColumns: "1fr 420px",

//           // ⭐ Responsive fix
//           ...(window.innerWidth <= 768 && {
//             gridTemplateColumns: "1fr",
//           }),
//         }}
//       >

//         {/* LEFT SIDE — BILLING FORM */}
//         < div >
//           <h2
//             style={{
//               marginBottom: "25px",
//               fontWeight: "800",
//               color: "#2B2B2B",
//               letterSpacing: "0.5px",
//             }}
//           >
//             Checkout
//           </h2>

//           <div style={{ marginBottom: "35px" }}>
//             <h4
//               style={{
//                 fontWeight: "700",
//                 marginBottom: "15px",
//                 color: "#2B2B2B",
//               }}
//             >
//               Billing Details
//             </h4>

//             {[
//               "fullName",
//               "phone",
//               "address",
//               "city",
//               "state",
//               "postalCode",
//             ].map((field) => (
//               <input
//                 key={field}
//                 placeholder={field.replace(/([A-Z])/g, " $1")}
//                 value={billing[field]}
//                 onChange={(e) =>
//                   setBilling({ ...billing, [field]: e.target.value })
//                 }
//                 style={{
//                   width: "100%",
//                   padding: "14px",
//                   marginBottom: "15px",
//                   borderRadius: "6px",
//                   border: "1px solid #E3E3E3",
//                   fontSize: "14px",
//                   backgroundColor: "#FFFFFF",
//                 }}
//               />
//             ))}
//           </div>

//           <div style={{ marginTop: "30px" }}>
//             <h4
//               style={{
//                 fontWeight: "700",
//                 marginBottom: "15px",
//                 color: "#2B2B2B",
//               }}
//             >
//               Payment Method
//             </h4>

//             <div
//               style={{
//                 display: "flex",
//                 gap: "15px",
//               }}
//             >
//               {/* ONLINE PAYMENT CARD */}
//               <div
//                 onClick={() => setPaymentMethod("online")}
//                 style={{
//                   flex: 1,
//                   padding: "15px 20px",
//                   borderRadius: "10px",
//                   border: paymentMethod === "online"
//                     ? "2px solid #000"
//                     : "1px solid #DDD",
//                   backgroundColor: paymentMethod === "online"
//                     ? "#F2F2F2"
//                     : "#FFF",
//                   cursor: "pointer",
//                   transition: "0.25s",
//                 }}
//               >
//                 <p
//                   style={{
//                     margin: 0,
//                     fontWeight: "700",
//                     fontSize: "16px",
//                     color: "#333",
//                   }}
//                 >
//                   Pay Online
//                 </p>
//                 <p style={{ fontSize: "13px", color: "#666", marginTop: "5px" }}>
//                   Secure payment with Stripe
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* RIGHT SIDE — ORDER SUMMARY */}
//         <div
//           style={{
//             backgroundColor: "#FFFFFF",
//             padding: "25px",
//             borderRadius: "10px",
//             border: "1px solid #EAEAEA",
//             height: "fit-content",
//             marginTop: "360px",
//           }}
//         >
//           <h4
//             style={{
//               fontWeight: "700",
//               marginBottom: "20px",
//               color: "#2B2B2B",
//             }}
//           >
//             Order Summary
//           </h4>

//           {cart.items.map((item) => (
//             <div
//               key={item.productId._id}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "20px",
//                 paddingBottom: "15px",
//                 borderBottom: "1px solid #EFEFEF",
//               }}
//             >
//               <div>
//                 <p style={{ margin: 0, fontWeight: "600" }}>
//                   {item.productId.name}
//                 </p>
//                 <p style={{ margin: 0, fontSize: "14px", color: "#777" }}>
//                   ₹{item.productId.price} × {item.quantity}
//                 </p>
//               </div>

//               <p style={{ fontWeight: "700", margin: 0 }}>
//                 ₹{item.productId.price * item.quantity}
//               </p>
//             </div>
//           ))}

//           {/* TOTAL */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginTop: "10px",
//               marginBottom: "25px",
//             }}
//           >
//             <h5 style={{ fontWeight: "700", margin: 0 }}>Total</h5>
//             <h5 style={{ fontWeight: "700", margin: 0 }}>₹{totalAmount}</h5>
//           </div>

//           {/* PAY BUTTON */}
//           <button
//             onClick={handleProceed}
//             style={{
//               width: "100%",
//               padding: "15px",
//               backgroundColor: "#000",
//               color: "white",
//               fontWeight: "700",
//               borderRadius: "6px",
//               letterSpacing: "1px",
//               border: "none",
//               marginTop: "10px",
//             }}
//           >
//             {paymentMethod === "cod"
//               ? "Place Order"
//               : "Proceed to Online Payment"}
//           </button>
//         </div>
//       </div >
//     </div >
//   );
// }

import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Billing() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [billing, setBilling] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [cart, setCart] = useState(null);

  useEffect(() => {
    loadBilling();
    loadCart();
    window.scrollTo(0, 0);
  }, []);

  // LOAD BILLING
  const loadBilling = async () => {
    try {
      const res = await api.get("/billing", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data) setBilling(res.data);
    } catch (err) {}
  };

  // LOAD CART
  const loadCart = async () => {
    try {
      const res = await api.get("/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (err) {}
  };

  if (!cart) return <p>Loading…</p>;

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  // COD ORDER
  const handleCOD = async () => {
    const items = cart.items.map((i) => ({
      productId: i.productId._id,
      quantity: i.quantity,
    }));

    await api.post(
      "/orders",
      { items, paymentMethod: "COD" },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    await api.delete("/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });

    navigate("/customer");
  };

  // STRIPE ONLINE PAYMENT
  const handleOnlinePayment = async () => {
    const items = cart.items.map((i) => ({
      name: i.productId.name,
      price: i.productId.price,
      quantity: i.quantity,
    }));

    try {
      const res = await api.post(
        "/payment/create-checkout-session",
        { items, paymentMethod: "Online" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      window.location.href = res.data.url;
    } catch (err) {
      alert(err.response?.data?.error || err.message);
    }
  };

  const handleProceed = async () => {
    // Save billing details
    await api.post("/billing", billing, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (paymentMethod === "cod") handleCOD();
    else handleOnlinePayment();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#FAFAF9",
        padding: "40px 20px",
        fontFamily: "Poppins",
        display: "flex",
        justifyContent: "center",
        opacity: 0,
        animation: "fadeIn 0.6s ease forwards",
      }}
    >
      {/* ANIMATIONS + RESPONSIVE CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .checkout-grid {
              grid-template-columns: 1fr !important;
            }
            .order-summary {
              margin-top: 20px !important;
              position: relative !important;
              top: 0 !important;
            }
          }

          @media (min-width: 769px) {
            .order-summary {
              position: sticky;
              top: 120px;
              transition: 0.3s;
            }
            .order-summary:hover {
              transform: translateY(-4px);
            }
          }
        `}
      </style>

      {/* GRID */}
      <div
        className="checkout-grid"
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: "40px",
        }}
      >
        {/* LEFT SIDE — BILLING FORM */}
        <div>
          <h2
            style={{
              marginBottom: "25px",
              fontWeight: "800",
              color: "#2B2B2B",
              letterSpacing: "0.5px",
            }}
          >
            Checkout
          </h2>

          {/* BILLING DETAILS */}
          <div style={{ marginBottom: "35px" }}>
            <h4
              style={{
                fontWeight: "700",
                marginBottom: "15px",
                color: "#2B2B2B",
              }}
            >
              Billing Details
            </h4>

            {[
              "fullName",
              "phone",
              "address",
              "city",
              "state",
              "postalCode",
            ].map((field) => (
              <input
                key={field}
                placeholder={field.replace(/([A-Z])/g, " $1")}
                value={billing[field]}
                onChange={(e) =>
                  setBilling({ ...billing, [field]: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "14px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #E3E3E3",
                  fontSize: "14px",
                  backgroundColor: "#FFFFFF",
                }}
              />
            ))}
          </div>

          {/* PAYMENT METHOD */}
          <div style={{ marginTop: "30px" }}>
            <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>
              Payment Method
            </h4>

            <div style={{ display: "flex", gap: "15px" }}>
              {/* ONLINE PAYMENT CARD */}
              <div
                onClick={() => setPaymentMethod("online")}
                style={{
                  flex: 1,
                  padding: "15px 20px",
                  borderRadius: "10px",
                  border:
                    paymentMethod === "online"
                      ? "2px solid #000"
                      : "1px solid #DDD",
                  backgroundColor:
                    paymentMethod === "online" ? "#F2F2F2" : "#FFF",
                  cursor: "pointer",
                  transition: "0.25s",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#333",
                  }}
                >
                  Pay Online
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666",
                    marginTop: "5px",
                  }}
                >
                  Secure payment with Stripe
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div
          className="order-summary"
          style={{
            backgroundColor: "#FFFFFF",
            padding: "25px",
            borderRadius: "10px",
            border: "1px solid #EAEAEA",
            height: "fit-content",
            transition: "0.3s ease",
          }}
        >
          <h4
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#2B2B2B",
            }}
          >
            Order Summary
          </h4>

          {cart.items.map((item) => (
            <div
              key={item.productId._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
                paddingBottom: "15px",
                borderBottom: "1px solid #EFEFEF",
              }}
            >
              <div>
                <p style={{ margin: 0, fontWeight: "600" }}>
                  {item.productId.name}
                </p>
                <p style={{ margin: 0, fontSize: "14px", color: "#777" }}>
                  ₹{item.productId.price} × {item.quantity}
                </p>
              </div>

              <p style={{ margin: 0, fontWeight: "700" }}>
                ₹{item.productId.price * item.quantity}
              </p>
            </div>
          ))}

          {/* TOTAL */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              marginBottom: "25px",
            }}
          >
            <h5 style={{ fontWeight: "700", margin: 0 }}>Total</h5>
            <h5 style={{ fontWeight: "700", margin: 0 }}>₹{totalAmount}</h5>
          </div>

          {/* PAY BUTTON */}
          <button
            onClick={handleProceed}
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#000",
              color: "white",
              fontWeight: "700",
              borderRadius: "6px",
              letterSpacing: "1px",
              border: "none",
              marginTop: "10px",
            }}
          >
            Proceed to Online Payment
          </button>
        </div>
      </div>
    </div>
  );
}
