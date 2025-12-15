import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminOrders() {
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await api.get("/orders/admin", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setOrders(res.data);
  };

  return (
    <div>
      <h2>All Orders</h2>
      {orders.map((o) => (
        <div key={o._id}>
          <p>Order ID: {o._id}</p>
          <p>Status: {o.status}</p>
          <p>Customer: {o.customer?.email}</p>
          <p>Vendor: {o.vendor?.email}</p>
        </div>
      ))}
    </div>
  );
}
