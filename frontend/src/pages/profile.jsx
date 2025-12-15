// // import { useEffect, useState } from "react";
// // import api from "../api/axios";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // export default function CustomerProfile() {
// //   const token = localStorage.getItem("token");
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   const fetchOrders = async () => {
// //     try {
// //       const res = await api.get("/orders/my", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setOrders(res.data);
// //     } catch (err) {
// //       console.log("Order fetch failed:", err);
// //     }
// //   };

// //   return (
// //     <div style={{ backgroundColor: "#F7F7F2", minHeight: "100vh", fontFamily: "Poppins" }}>
// //       <Navbar />

// //       <div className="container py-4">

// //         <h2 className="fw-bold mb-4 text-center" style={{ color: "#8FAF9F" }}>
// //           MY ORDERS
// //         </h2>

// //         {orders.length === 0 ? (
// //           <p className="text-secondary">No orders placed yet.</p>
// //         ) : (
// //           <div className="row g-4">
// //             {orders.map((order) => (
// //               <div className="col-12" key={order._id}>
// //                 <div
// //                   className="shadow-sm p-4 bg-white rounded"
// //                   style={{ borderLeft: "5px solid #8FAF9F" }}
// //                 >
// //                   {/* Order header */}
// //                   <div className="d-flex justify-content-between mb-2">
// //                     <p><strong>Order ID:</strong> {order._id}</p>
// //                     <p>
// //                       <strong>Status:</strong>{" "}
// //                       <span style={{ color: "#8FAF9F" }}>{order.status}</span>
// //                     </p>
// //                   </div>

// //                   <p><strong>Total Amount:</strong> ₹{order.amount}</p>

// //                   <hr />

// //                   {/* Order Items */}
// //                   <h5 className="fw-semibold" style={{ color: "#8FAF9F" }}>
// //                     ITEMS IN ORDER
// //                   </h5>

// //                   <div className="mt-3">
// //                     {order.items.map((item, index) => (
// //                       <div
// //                         key={index}
// //                         className="d-flex justify-content-between align-items-center p-3 mb-2 rounded"
// //                         style={{
// //                           backgroundColor: "#F2F5F3",
// //                           borderLeft: "4px solid #8FAF9F",
// //                         }}
// //                       >
// //                         <div>
// //                           <p className="fw-bold mb-1">{item.productId?.name}</p>
// //                           <p className="text-secondary mb-0">
// //                             ₹{item.productId?.price} × {item.quantity}
// //                           </p>
// //                         </div>

// //                         <div className="fw-bold text-success">
// //                           ₹{item.productId?.price * item.quantity}
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>

// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import api from "../api/axios";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function CustomerProfile() {
//   const token = localStorage.getItem("token");
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//     window.scrollTo(0, 0);
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await api.get("/orders/my", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders(res.data);
//     } catch (err) {
//       console.log("Order fetch failed:", err);
//     }
//   };
//   const navigate = useNavigate();

//   return (
//     <div
//       style={{
//         backgroundColor: "#F7F7F2",
//         minHeight: "100vh",
//         fontFamily: "Poppins",
//       }}
//     >
//       <Navbar />

//       {/* PAGE WRAPPER */}
//       <div
//         style={{
//           maxWidth: "950px",
//           margin: "0 auto",
//           padding: "50px 20px",
//         }}
//       >
//         <h2
//           className="fw-bold text-center"
//           style={{
//             color: "#8FAF9F",
//             marginBottom: "40px",
//             fontSize: "28px",
//             letterSpacing: "1px",
//           }}
//         >
//           YOUR ORDERS
//         </h2>

//         {orders.length === 0 ? (
//           <p className="text-secondary text-center">No orders yet.</p>
//         ) : (
//           <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
//             {orders.map((order) => (
//               <div
//                 key={order._id}
//                 style={{
//                   background: "#FFFFFF",
//                   border: "1px solid #E6E6E6",
//                   borderRadius: "12px",
//                   padding: "25px",
//                   boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
//                 }}
//               >
//                 {/* HEADER */}
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "flex-start",
//                   }}
//                 >
//                   <div>
//                     <p
//                       style={{
//                         margin: 0,
//                         fontWeight: "700",
//                         fontSize: "15px",
//                       }}
//                     >
//                       Order ID:{" "}
//                       <span style={{ fontWeight: "500" }}>{order._id}</span>
//                     </p>
//                     <p
//                       style={{
//                         margin: 0,
//                         marginTop: "4px",
//                         fontSize: "14px",
//                         color: "#555",
//                       }}
//                     >
//                       Date: {new Date(order.createdAt).toLocaleDateString()}
//                     </p>
//                   </div>

//                   {/* STATUS BADGE */}
//                   <span
//                     style={{
//                       padding: "6px 14px",
//                       borderRadius: "20px",
//                       fontSize: "12px",
//                       fontWeight: "700",
//                       textTransform: "uppercase",
//                       background:
//                         order.status === "Delivered"
//                           ? "#DFF2E1"
//                           : order.status === "Shipped"
//                             ? "#E5F2DC"
//                             : "#FFE7C2",
//                       color:
//                         order.status === "Delivered"
//                           ? "#2E7D32"
//                           : order.status === "Shipped"
//                             ? "#4E6E36"
//                             : "#AD5A00",
//                     }}
//                   >
//                     {order.status}
//                   </span>
//                 </div>

//                 <hr style={{ margin: "20px 0" }} />

//                 {/* ITEMS TITLE */}
//                 <h5
//                   style={{
//                     marginBottom: "15px",
//                     color: "#8FAF9F",
//                     fontWeight: "700",
//                     fontSize: "15px",
//                   }}
//                 >
//                   ITEMS IN THIS ORDER
//                 </h5>

//                 {/* ITEMS LIST */}
//                 <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
//                   {order.items.map((item, index) => (
//                     <div
//                       key={index}
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                         background: "#F5F8F6",
//                         padding: "15px",
//                         borderLeft: "4px solid #8FAF9F",
//                         borderRadius: "6px",
//                       }}
//                     >
//                       <div>
//                         <p
//                           style={{
//                             margin: 0,
//                             fontWeight: "600",
//                             fontSize: "15px",
//                           }}
//                         >
//                           {item.productId?.name}
//                         </p>
//                         <p
//                           style={{
//                             margin: 0,
//                             marginTop: "3px",
//                             fontSize: "13px",
//                             color: "#555",
//                           }}
//                         >
//                           ₹{item.productId?.price} × {item.quantity}
//                         </p>
//                       </div>

//                       <div
//                         style={{
//                           fontWeight: "700",
//                           fontSize: "16px",
//                           color: "#2C7A44",
//                         }}
//                       >
//                         ₹{item.productId?.price * item.quantity}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <hr style={{ margin: "25px 0 15px" }} />

//                 {/* TOTAL + CANCEL */}
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <p
//                     style={{
//                       margin: 0,
//                       fontWeight: "700",
//                       fontSize: "16px",
//                     }}
//                   >
//                     TOTAL AMOUNT: ₹{order.amount}
//                   </p>



//                   {order.status === "Delivered" && (
//                     <button
//                       onClick={() => navigate(`/return/${order._id}`)}
//                       style={{
//                         padding: "8px 18px",
//                         borderRadius: "8px",
//                         backgroundColor: "#E3F2FD",
//                         color: "#0D47A1",
//                         border: "1px solid #90CAF9",
//                         fontSize: "13px",
//                         fontWeight: "600",
//                         cursor: "pointer",
//                       }}
//                     >
//                       Request Return
//                     </button>
//                   )}



//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CustomerProfile() {
  const token = localStorage.getItem("token");

  const [orders, setOrders] = useState([]);
  const [myReturns, setMyReturns] = useState([]); // ⭐ NEW

  useEffect(() => {
    fetchOrders();
    fetchMyReturns(); // ⭐ NEW
    window.scrollTo(0, 0);
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders/my", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.log("Order fetch failed:", err);
    }
  };

  const fetchMyReturns = async () => {
    try {
      const res = await api.get("/return/my", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyReturns(res.data);
    } catch (err) {
      console.log("Return fetch failed:", err);
    }
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#F7F7F2",
        minHeight: "100vh",
        fontFamily: "Poppins",
      }}
    >
      <Navbar />

      {/* PAGE WRAPPER */}
      <div
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        <h2
          className="fw-bold text-center"
          style={{
            color: "#8FAF9F",
            marginBottom: "40px",
            fontSize: "28px",
            letterSpacing: "1px",
          }}
        >
          YOUR ORDERS
        </h2>

        {orders.length === 0 ? (
          <p className="text-secondary text-center">No orders yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
            {orders.map((order) => {
              const returnInfo = myReturns.find(
                (r) => r.order?._id === order._id
              );

              return (
                <div
                  key={order._id}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E6E6E6",
                    borderRadius: "12px",
                    padding: "25px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* HEADER */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "700",
                          fontSize: "15px",
                        }}
                      >
                        Order ID:{" "}
                        <span style={{ fontWeight: "500" }}>{order._id}</span>
                      </p>
                      <p
                        style={{
                          margin: 0,
                          marginTop: "4px",
                          fontSize: "14px",
                          color: "#555",
                        }}
                      >
                        Date: {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    {/* STATUS BADGE */}
                    <span
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        background:
                          order.status === "Delivered"
                            ? "#DFF2E1"
                            : order.status === "Shipped"
                            ? "#E5F2DC"
                            : "#FFE7C2",
                        color:
                          order.status === "Delivered"
                            ? "#2E7D32"
                            : order.status === "Shipped"
                            ? "#4E6E36"
                            : "#AD5A00",
                      }}
                    >
                      {order.status}
                    </span>
                  </div>

                  <hr style={{ margin: "20px 0" }} />

                  {/* ITEMS TITLE */}
                  <h5
                    style={{
                      marginBottom: "15px",
                      color: "#8FAF9F",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  >
                    ITEMS IN THIS ORDER
                  </h5>

                  {/* ITEMS LIST */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          background: "#F5F8F6",
                          padding: "15px",
                          borderLeft: "4px solid #8FAF9F",
                          borderRadius: "6px",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              margin: 0,
                              fontWeight: "600",
                              fontSize: "15px",
                            }}
                          >
                            {item.productId?.name}
                          </p>
                          <p
                            style={{
                              margin: 0,
                              marginTop: "3px",
                              fontSize: "13px",
                              color: "#555",
                            }}
                          >
                            ₹{item.productId?.price} × {item.quantity}
                          </p>
                        </div>

                        <div
                          style={{
                            fontWeight: "700",
                            fontSize: "16px",
                            color: "#2C7A44",
                          }}
                        >
                          ₹{item.productId?.price * item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr style={{ margin: "25px 0 15px" }} />

                  {/* TOTAL + RETURN BUTTON */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontWeight: "700",
                        fontSize: "16px",
                      }}
                    >
                      TOTAL AMOUNT: ₹{order.amount}
                    </p>

                    {/* ⭐ RETURN BUTTON LOGIC */}
                    {order.status === "Delivered" && (
                      returnInfo ? (
                        <button
                          disabled
                          style={{
                            padding: "8px 18px",
                            borderRadius: "8px",
                            backgroundColor:
                              returnInfo.status === "Approved"
                                ? "#DFF2E1"
                                : returnInfo.status === "Rejected"
                                ? "#FDE0E0"
                                : "#FFF4C2",
                            color: "#333",
                            border: "1px solid #ccc",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                        >
                          {returnInfo.status === "Requested"
                            ? "Return Requested"
                            : returnInfo.status === "Approved"
                            ? "Return Approved"
                            : "Return Rejected"}
                        </button>
                      ) : (
                        <button
                          onClick={() => navigate(`/return/${order._id}`)}
                          style={{
                            padding: "8px 18px",
                            borderRadius: "8px",
                            backgroundColor: "#E3F2FD",
                            color: "#0D47A1",
                            border: "1px solid #90CAF9",
                            fontSize: "13px",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          Request Return
                        </button>
                      )
                    )}
                  </div>

                  {/* ⭐ EXTRA NOTE BELOW BUTTON */}
                  {returnInfo && (
                    <div
                      style={{
                        marginTop: "15px",
                        padding: "12px",
                        background:
                          returnInfo.status === "Approved"
                            ? "#E8F5E9"
                            : returnInfo.status === "Rejected"
                            ? "#FFEBEE"
                            : "#FFFDE7",
                        borderLeft:
                          returnInfo.status === "Approved"
                            ? "4px solid #2E7D32"
                            : returnInfo.status === "Rejected"
                            ? "4px solid #C62828"
                            : "4px solid #F9A825",
                        borderRadius: "6px",
                        color: "#444",
                        fontSize: "13px",
                      }}
                    >
                      {returnInfo.status === "Approved" && (
                        <p style={{ margin: 0 }}>
                          Cash will be refunded upon collection.
                        </p>
                      )}

                      {returnInfo.status === "Rejected" && (
                        <p style={{ margin: 0 }}>
                          Sorry to inform you  <br />
                          <strong>Reason:</strong> {returnInfo.messageFromVendor}
                        </p>
                      )}

                      {returnInfo.status === "Requested" && (
                        <p style={{ margin: 0 }}>
                          Your return request is under review.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
