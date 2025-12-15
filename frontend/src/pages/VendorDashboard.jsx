// // import { useEffect, useState } from "react";
// // import api from "../api/axios";
// // import VendorInquiries from "./VendorInquiries";

// // export default function VendorDashboard() {
// //   const token = localStorage.getItem("token");

// //   const [products, setProducts] = useState([]);
// //   const [orders, setOrders] = useState([]);

// //   const [page, setPage] = useState("products"); // 👈 NEW: page handling

// //   // Add product form
// //   const [newProduct, setNewProduct] = useState({
// //     name: "",
// //     description: "",
// //     price: "",
// //     stock: "",
// //   });

// //   const [file, setFile] = useState(null);

// //   useEffect(() => {
// //     fetchProducts();
// //     fetchOrders();
// //   }, []);

// //   // GET vendor products
// //   const fetchProducts = async () => {
// //     const res = await api.get("/products/my", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //     setProducts(res.data);
// //   };

// //   // GET vendor orders
// //   const fetchOrders = async () => {
// //     const res = await api.get("/orders/vendor", {
// //       headers: { Authorization: `Bearer ${token}` },
// //     });
// //     setOrders(res.data);
// //   };

// //   // ADD PRODUCT
// //   const handleAddProduct = async (e) => {
// //     e.preventDefault();

// //     if (!file) {
// //       alert("Please select an image");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("name", newProduct.name);
// //     formData.append("description", newProduct.description);
// //     formData.append("price", newProduct.price);
// //     formData.append("stock", newProduct.stock);
// //     formData.append("image", file);

// //     try {
// //       await api.post("/products", formData, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });

// //       alert("Product added!");
// //       fetchProducts();
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Add product failed");
// //     }
// //   };

// //   // DELETE PRODUCT
// //   const deleteProduct = async (id) => {
// //     try {
// //       await api.delete(`/products/${id}`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });

// //       alert("Product deleted!");
// //       fetchProducts();
// //     } catch (err) {
// //       alert("Delete failed");
// //     }
// //   };

// //   const logout = () => {
// //     localStorage.clear();
// //     window.location.href = "/";
// //   };

// //   return (
// //     <div style={{ display: "flex", minHeight: "100vh" }}>
// //       {/* SIDEBAR */}
// //       <div
// //         style={{
// //           width: "220px",
// //           background: "#f0f0f0",
// //           padding: "20px",
// //           borderRight: "1px solid #ccc",
// //         }}
// //       >
// //         <h3>Vendor Panel</h3>

// //         <p style={{ cursor: "pointer" }} onClick={() => setPage("products")}>
// //           My Products
// //         </p>

// //         <p style={{ cursor: "pointer" }} onClick={() => setPage("add")}>
// //           Add Product
// //         </p>

// //         <p style={{ cursor: "pointer" }} onClick={() => setPage("orders")}>
// //           Orders
// //         </p>

// //         <p style={{ cursor: "pointer" }} onClick={() => setPage("inquiries")}>
// //           Enquiries
// //         </p>

// //         <p
// //           style={{
// //             cursor: "pointer",
// //             color: "red",
// //             marginTop: "20px",
// //             fontWeight: "bold",
// //           }}
// //           onClick={logout}
// //         >
// //           Logout
// //         </p>
// //       </div>

// //       {/* MAIN CONTENT */}
// //       <div style={{ flexGrow: 1, padding: "20px" }}>

// //         {/* ==== PRODUCTS PAGE ==== */}
// //         {page === "products" && (
// //           <div>
// //             <h2>My Products</h2>

// //             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// //               {products.map((p) => (
// //                 <div
// //                   key={p._id}
// //                   style={{
// //                     border: "1px solid #ccc",
// //                     padding: "10px",
// //                     width: "180px",
// //                   }}
// //                 >
// //                   <img
// //                     src={p.image}
// //                     style={{
// //                       width: "100%",
// //                       height: "120px",
// //                       objectFit: "cover",
// //                     }}
// //                   />

// //                   <h4>{p.name}</h4>
// //                   <p>₹{p.price}</p>
// //                   <button onClick={() => deleteProduct(p._id)}>Delete</button>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* ==== ADD PRODUCT PAGE ==== */}
// //         {page === "add" && (
// //           <div>
// //             <h2>Add Product</h2>

// //             <form onSubmit={handleAddProduct}>
// //               <input
// //                 placeholder="Name"
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, name: e.target.value })
// //                 }
// //               />
// //               <input
// //                 placeholder="Description"
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, description: e.target.value })
// //                 }
// //               />
// //               <input
// //                 placeholder="Price"
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, price: e.target.value })
// //                 }
// //               />
// //               <input
// //                 placeholder="Stock"
// //                 onChange={(e) =>
// //                   setNewProduct({ ...newProduct, stock: e.target.value })
// //                 }
// //               />

// //               <input type="file" onChange={(e) => setFile(e.target.files[0])} />

// //               <button type="submit">Add Product</button>
// //             </form>
// //           </div>
// //         )}

// //         {/* ==== ORDERS PAGE ==== */}
// //         {page === "orders" && (
// //           <div>
// //             <h2>Orders for You</h2>

// //             {orders.map((o) => (
// //               <div
// //                 key={o._id}
// //                 style={{
// //                   border: "1px solid #aaa",
// //                   padding: "10px",
// //                   marginBottom: "10px",
// //                   borderRadius: "6px",
// //                   maxWidth: "350px",
// //                 }}
// //               >
// //                 <p><b>Order ID:</b> {o._id}</p>
// //                 <p><b>Status:</b> {o.status}</p>

// //                 <p><b>Items:</b></p>
// //                 {o.items.map((i) => (
// //                   <div key={i._id}>
// //                     <p>{i.productId?.name} (x{i.quantity})</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {/* ==== ENQUIRIES PAGE ==== */}
// //         {page === "inquiries" && <VendorInquiries />}
// //       </div>
// //     </div>
// //   );
// // }


// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import VendorInquiries from "./VendorInquiries";
// import VendorReturns from "./VendorReturns";


// export default function VendorDashboard() {
//   const token = localStorage.getItem("token");

//   const [products, setProducts] = useState([]);
//   const [orders, setOrders] = useState([]);

//   const [page, setPage] = useState("products");

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     stock: "",
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//     fetchOrders();
//   }, []);

//   const fetchProducts = async () => {
//     const res = await api.get("/products/my", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setProducts(res.data);
//   };

//   const fetchOrders = async () => {
//     const res = await api.get("/orders/vendor", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     setOrders(res.data);
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("Please select an image");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", newProduct.name);
//     formData.append("description", newProduct.description);
//     formData.append("price", newProduct.price);
//     formData.append("stock", newProduct.stock);
//     formData.append("image", file);

//     try {
//       await api.post("/products", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product added!");
//       fetchProducts();
//     } catch (err) {
//       alert(err.response?.data?.message || "Add product failed");
//     }
//   };

//   const deleteProduct = async (id) => {
//     try {
//       await api.delete(`/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Product deleted!");
//       fetchProducts();
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };

//   const updateOrderStatus = async (orderId, newStatus) => {
//     try {
//       await api.patch(
//         `/orders/${orderId}`,
//         { status: newStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Order status updated!");
//       fetchOrders();
//     } catch (err) {
//       alert("Failed to update status");
//     }
//   };

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       {/* SIDEBAR */}
//       <div
//         style={{
//           width: "220px",
//           background: "#f0f0f0",
//           padding: "20px",
//           borderRight: "1px solid #ccc",
//         }}
//       >
//         <h3>Vendor Panel</h3>

//         <p style={{ cursor: "pointer" }} onClick={() => setPage("products")}>
//           My Products
//         </p>

//         <p style={{ cursor: "pointer" }} onClick={() => setPage("add")}>
//           Add Product
//         </p>

//         <p style={{ cursor: "pointer" }} onClick={() => setPage("orders")}>
//           Orders
//         </p>

//         <p style={{ cursor: "pointer" }} onClick={() => setPage("inquiries")}>
//           Enquiries
//         </p>
//         <p style={{ cursor: "pointer" }} onClick={() => setPage("returns")}>
//           Returns
//         </p>

//         <p
//           style={{
//             cursor: "pointer",
//             color: "red",
//             marginTop: "20px",
//             fontWeight: "bold",
//           }}
//           onClick={logout}
//         >
//           Logout
//         </p>
//       </div>

//       {/* MAIN CONTENT */}
//       <div style={{ flexGrow: 1, padding: "20px" }}>

//         {/* PRODUCTS PAGE */}
//         {page === "products" && (
//           <div>
//             <h2>My Products</h2>

//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//               {products.map((p) => (
//                 <div
//                   key={p._id}
//                   style={{
//                     border: "1px solid #ccc",
//                     padding: "10px",
//                     width: "180px",
//                   }}
//                 >
//                   <img
//                     src={p.image}
//                     style={{
//                       width: "100%",
//                       height: "120px",
//                       objectFit: "cover",
//                     }}
//                   />

//                   <h4>{p.name}</h4>
//                   <p>₹{p.price}</p>
//                   <button onClick={() => deleteProduct(p._id)}>Delete</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ADD PRODUCT PAGE */}
//         {page === "add" && (
//           <div>
//             <h2>Add Product</h2>

//             <form onSubmit={handleAddProduct}>
//               <input
//                 placeholder="Name"
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, name: e.target.value })
//                 }
//               />
//               <input
//                 placeholder="Description"
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, description: e.target.value })
//                 }
//               />
//               <input
//                 placeholder="Price"
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, price: e.target.value })
//                 }
//               />
//               <input
//                 placeholder="Stock"
//                 onChange={(e) =>
//                   setNewProduct({ ...newProduct, stock: e.target.value })
//                 }
//               />

//               <input type="file" onChange={(e) => setFile(e.target.files[0])} />

//               <button type="submit">Add Product</button>
//             </form>
//           </div>
//         )}

//         {/* ORDERS PAGE */}
//         {page === "orders" && (
//           <div>
//             <h2>Orders for You</h2>

//             {orders.map((o) => (
//               <div
//                 key={o._id}
//                 style={{
//                   border: "1px solid #aaa",
//                   padding: "10px",
//                   marginBottom: "10px",
//                   borderRadius: "6px",
//                   maxWidth: "350px",
//                 }}
//               >
//                 <p><b>Order ID:</b> {o._id}</p>

//                 {/* NEW STATUS FIELDS */}
//                 <p><b>Order Status:</b> {o.status}</p>
//                 <p><b>Payment Status:</b> {o.paymentStatus}</p>

//                 {/* STATUS DROPDOWN */}
//                 <select
//                   value={o.status}
//                   onChange={(e) => updateOrderStatus(o._id, e.target.value)}
//                 >
//                   <option value="Processing">Processing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Delivered">Delivered</option>
//                   <option value="Cancelled">Cancelled</option>
//                 </select>

//                 <p><b>Items:</b></p>
//                 {o.items.map((i) => (
//                   <div key={i._id}>
//                     <p>{i.productId?.name} (x{i.quantity})</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ENQUIRIES PAGE */}
//         {page === "inquiries" && <VendorInquiries />}
//         {page === "returns" && <VendorReturns />}

//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import api from "../api/axios";
import VendorInquiries from "./VendorInquiries";
import VendorReturns from "./VendorReturns";

export default function VendorDashboard() {
  const token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState("products");

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    vendorRating: "",
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    const res = await api.get("/products/my", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setProducts(res.data);
  };

  const fetchOrders = async () => {
    const res = await api.get("/orders/vendor", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setOrders(res.data);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!file) return alert("Please upload an image");

    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price);
    formData.append("stock", newProduct.stock);
    formData.append("vendorRating", newProduct.vendorRating);
    formData.append("image", file);

    try {
      await api.post("/products", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Product added!");
      fetchProducts();
      setPage("products");
    } catch (err) {
      alert(err.response?.data?.message || "Add product failed");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts();
    } catch {
      alert("Failed to delete");
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await api.patch(
        `/orders/${orderId}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchOrders();
    } catch {
      alert("Failed to update");
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f8f8f8" }}>

      {/* SIDEBAR */}
      <div
        style={{
          width: "240px",
          background: "#ffffff",
          padding: "25px",
          borderRight: "1px solid #e5e5e5",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "20px" }}>
          Vendor Panel
        </h2>

        {["products", "add", "orders", "inquiries", "returns"].map((item) => (
          <p
            key={item}
            onClick={() => setPage(item)}
            style={{
              cursor: "pointer",
              fontWeight: page === item ? 700 : 500,
              padding: "8px 0",
              borderRadius: "6px",
              transition: "0.2s",
              color: page === item ? "#1a1a1a" : "#555",
              background: page === item ? "#e8e8e8" : "transparent",
              paddingLeft: "8px",
            }}
          >
            {item === "products" && "My Products"}
            {item === "add" && "Add Product"}
            {item === "orders" && "Orders"}
            {item === "inquiries" && "Inquiries"}
            {item === "returns" && "Returns"}
          </p>
        ))}

        <p
          onClick={logout}
          style={{
            marginTop: "auto",
            cursor: "pointer",
            color: "red",
            fontWeight: 700,
          }}
        >
          Logout
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "30px", overflowY: "auto" }}>

        {/* ---------------- PRODUCTS PAGE ---------------- */}
        {page === "products" && (
          <div>
            <h2 style={{ marginBottom: "20px" }}>My Products</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {products.map((p) => (
                <div
                  key={p._id}
                  style={{
                    background: "#fff",
                    padding: "15px",
                    borderRadius: "12px",
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <img
                    src={p.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <h4 style={{ marginTop: "10px", fontWeight: 700 }}>
                    {p.name}
                  </h4>
                  <p style={{ color: "#666" }}>₹{p.price}</p>

                  <button
                    onClick={() => deleteProduct(p._id)}
                    style={{
                      marginTop: "10px",
                      background: "#ff4d4d",
                      color: "#fff",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- ADD PRODUCT PAGE ---------------- */}
        {page === "add" && (
          <div style={{ maxWidth: "500px" }}>
            <h2 style={{ marginBottom: "20px" }}>Add Product</h2>

            <form
              onSubmit={handleAddProduct}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              }}
            >
              <input
                placeholder="Product Name"
                required
                style={inputStyle}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />

              <textarea
                placeholder="Description"
                required
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />

              <input
                placeholder="Price"
                type="number"
                required
                style={inputStyle}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />

              <input
                placeholder="Stock"
                type="number"
                required
                style={inputStyle}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: e.target.value })
                }
              />

              {/* ⭐ Vendor Rating */}
              <select
                required
                style={inputStyle}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, vendorRating: e.target.value })
                }
              >
                <option value="">Vendor Rating (1–5)</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>

              <input
                type="file"
                required
                style={inputStyle}
                onChange={(e) => setFile(e.target.files[0])}
              />

              <button
                type="submit"
                style={{
                  background: "#1E442F",
                  color: "white",
                  padding: "12px",
                  border: "none",
                  fontWeight: 700,
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Add Product
              </button>
            </form>
          </div>
        )}

        {/* ---------------- ORDERS PAGE ---------------- */}
        {page === "orders" && (
          <div>
            <h2 style={{ marginBottom: "20px" }}>Orders</h2>

            {orders.map((o) => (
              <div
                key={o._id}
                style={{
                  background: "#fff",
                  padding: "15px",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <p><b>Order ID:</b> {o._id}</p>
                <p><b>Status:</b> {o.status}</p>

                <select
                  value={o.status}
                  onChange={(e) =>
                    updateOrderStatus(o._id, e.target.value)
                  }
                  style={inputStyle}
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <p><b>Items:</b></p>
                {o.items.map((i) => (
                  <p key={i._id}>
                    {i.productId?.name} (x{i.quantity})
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}

        {page === "inquiries" && <VendorInquiries />}
        {page === "returns" && <VendorReturns />}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px 12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
};
