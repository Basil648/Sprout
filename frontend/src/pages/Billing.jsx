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
//   }, []);

//   const loadBilling = async () => {
//     try {
//       const res = await api.get("/billing", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       if (res.data) setBilling(res.data);
//     } catch (err) {
//       console.log("Billing load failed:", err);
//     }
//   };

//   const loadCart = async () => {
//     try {
//       const res = await api.get("/cart", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCart(res.data);
//     } catch (err) {
//       console.log("Cart fetch failed:", err);
//     }
//   };

//   const totalAmount = cart
//     ? cart.items.reduce(
//       (total, item) => total + item.productId.price * item.quantity,
//       0
//     )
//     : 0;

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

//     alert("Order placed with COD!");
//     navigate("/customer");
//   };

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
//       window.location.href = res.data.url;
//     } catch (err) {
//       alert("Payment failed: " + (err.response?.data?.error || err.message));
//     }
//   };

//   const handleProceed = async () => {
//     await api.post("/billing", billing, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     if (paymentMethod === "cod") handleCOD();
//     else handleOnlinePayment();
//   };

//   if (!cart) return <p>Loading…</p>;

//   return (
//     <div
//       style={{
//         backgroundColor: "#F7F7F2",
//         minHeight: "100vh",
//         padding: "35px",
//         fontFamily: "Poppins",
//       }}
//     >
//       <div className="container">

//         <h2
//           className="fw-bold mb-4 text-center"
//           style={{ color: "#8FAF9F", letterSpacing: "1px" }}
//         >
//           CHECKOUT
//         </h2>

//         <div className="row g-4">

//           {/* LEFT SECTION — BILLING FORM */}
//           <div className="col-md-7">
//             <div
//               className="shadow-sm p-4 bg-white rounded"
//               style={{ borderLeft: "5px solid #8FAF9F" }}
//             >
//               <h4 className="fw-semibold" style={{ color: "#8FAF9F" }}>
//                 BILLING INFORMATION
//               </h4>

//               <div className="mt-3">

//                 {[
//                   "fullName",
//                   "phone",
//                   "address",
//                   "city",
//                   "state",
//                   "postalCode",
//                 ].map((field) => (
//                   <input
//                     key={field}
//                     placeholder={field.replace(/([A-Z])/g, " $1").toUpperCase()}
//                     value={billing[field]}
//                     onChange={(e) =>
//                       setBilling({ ...billing, [field]: e.target.value })
//                     }
//                     className="form-control mb-3"
//                     style={{
//                       padding: "12px",
//                       borderRadius: "8px",
//                       border: "1px solid #d0d0d0",
//                     }}
//                   />
//                 ))}

//               </div>

//               <h5 className="fw-semibold mt-4" style={{ color: "#8FAF9F" }}>
//                 PAYMENT METHOD
//               </h5>

//               <div className="mt-2">
//                 <label className="d-flex align-items-center gap-2 mb-2">
//                   <input
//                     type="radio"
//                     checked={paymentMethod === "cod"}
//                     value="cod"
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   />
//                   Cash on Delivery
//                 </label>

//                 <label className="d-flex align-items-center gap-2">
//                   <input
//                     type="radio"
//                     checked={paymentMethod === "online"}
//                     value="online"
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   />
//                   Pay Online (Stripe)
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SECTION — ORDER SUMMARY */}
//           <div className="col-md-5">
//             <div
//               className="shadow-sm p-4 bg-white rounded"
//               style={{
//                 borderLeft: "5px solid #8FAF9F",
//                 position: "sticky",
//                 top: "20px",
//               }}
//             >
//               <h4 className="fw-semibold" style={{ color: "#8FAF9F" }}>
//                 ORDER SUMMARY
//               </h4>

//               {cart.items.map((item) => (
//                 <div
//                   key={item.productId._id}
//                   className="p-3 mt-3 rounded"
//                   style={{
//                     backgroundColor: "#F2F5F3",
//                     borderLeft: "4px solid #8FAF9F",
//                   }}
//                 >
//                   <p className="fw-bold mb-1">{item.productId.name}</p>
//                   <p className="text-secondary mb-0">
//                     ₹{item.productId.price} × {item.quantity}
//                   </p>
//                   <p className="fw-bold mt-2 text-success">
//                     Subtotal: ₹{item.productId.price * item.quantity}
//                   </p>
//                 </div>
//               ))}

//               <hr />

//               <div className="d-flex justify-content-between mb-2">
//                 <h5>Total</h5>
//                 <h5 className="text-success">₹{totalAmount}</h5>
//               </div>

//               <button
//                 className="btn w-100 mt-3"
//                 style={{
//                   backgroundColor: "#8FAF9F",
//                   color: "white",
//                   padding: "12px",
//                   borderRadius: "10px",
//                   letterSpacing: "1px",
//                 }}
//                 onClick={handleProceed}
//               >
//                 {paymentMethod === "cod"
//                   ? "PLACE ORDER"
//                   : "PROCEED TO PAYMENT"}
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
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

  const [paymentMethod, setPaymentMethod] = useState("cod");
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
      { items },
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
        { items },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      window.location.href = res.data.url; // THE REDIRECT YOU WANTED
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
      }}
    >
      <div
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

          <div>
            <h4
              style={{
                fontWeight: "700",
                marginBottom: "10px",
                color: "#2B2B2B",
              }}
            >
              Payment Method
            </h4>

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                value="online"
                checked={paymentMethod === "online"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Pay Online (Stripe)
            </label>
          </div>
        </div>

        {/* RIGHT SIDE — ORDER SUMMARY */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "25px",
            borderRadius: "10px",
            border: "1px solid #EAEAEA",
            height: "fit-content",
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

              <p style={{ fontWeight: "700", margin: 0 }}>
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
            {paymentMethod === "cod"
              ? "Place Order"
              : "Proceed to Online Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}
