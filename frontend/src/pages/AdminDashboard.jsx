import { useState } from "react";
import AdminUsers from "./admin/AdminUsers";
import AdminVendors from "./admin/AdminVendors";
import AdminProducts from "./admin/AdminProducts";
import AdminOrders from "./admin/AdminOrders";

export default function AdminDashboard() {
    const [page, setPage] = useState("users");

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <div style={{ display: "flex" }}>

            {/* SIDEBAR */}
            <div
                style={{
                    width: "200px",
                    borderRight: "1px solid #ccc",
                    padding: "20px",
                    height: "100vh",
                }}
            >
                <h3>Admin Panel</h3>

                <p onClick={() => setPage("users")} style={{ cursor: "pointer" }}>
                    Users
                </p>
                <p onClick={() => setPage("vendors")} style={{ cursor: "pointer" }}>
                    Vendors
                </p>
                <p onClick={() => setPage("products")} style={{ cursor: "pointer" }}>
                    Products
                </p>
                <p onClick={() => setPage("orders")} style={{ cursor: "pointer" }}>
                    Orders
                </p>

                <button onClick={logout} style={{ marginTop: "20px" }}>
                    Logout
                </button>
            </div>

            {/* MAIN CONTENT */}
            <div style={{ padding: "20px", flex: 1 }}>
                {page === "users" && <AdminUsers />}
                {page === "vendors" && <AdminVendors />}
                {page === "products" && <AdminProducts />}
                {page === "orders" && <AdminOrders />}
            </div>
        </div>
    );
}
