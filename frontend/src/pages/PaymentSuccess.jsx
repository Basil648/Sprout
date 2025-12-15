import { useEffect } from "react";
import api from "../api/axios";

export default function PaymentSuccess() {

  useEffect(() => {
    confirmOrder();
  }, []);

  const confirmOrder = async () => {
    try {
      await api.post(
        "/payment/confirm",
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      alert("Payment successful! Order placed.");
       window.location.href = "/customer";  // redirect to customer dashboard

    } catch (err) {
      console.error(err);
      alert("Payment succeeded but order creation failed.");
       window.location.href = "/customer";
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Payment Successful 🎉</h2>
      <p>Finalizing your order...</p>
    </div>
  );
}
