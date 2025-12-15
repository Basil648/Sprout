// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import api from "../api/axios";

// export default function ReturnForm() {
//   const { orderId } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const [reason, setReason] = useState("");

//   const submitReturn = async () => {
//     if (!reason.trim()) return alert("Please enter a complaint");

//     try {
//       await api.post(
//         "/return/request",
//         { orderId, reason },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Return request submitted");
//       navigate("/customer");

//     } catch (err) {
//       alert("Failed to submit return");
//       console.log(err);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Request Return</h2>

//       <p><b>Order ID:</b> {orderId}</p>

//       <textarea
//         placeholder="Describe the issue..."
//         value={reason}
//         onChange={(e) => setReason(e.target.value)}
//         style={{ width: "300px", height: "100px", display: "block" }}
//       />

//       <button onClick={submitReturn}>Submit Return</button>
//     </div>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

export default function ReturnForm() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [reason, setReason] = useState("");

  const submitReturn = async () => {
    if (!reason.trim()) return alert("Please enter a complaint");

    try {
      await api.post(
        "/return/request",
        { orderId, reason },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Return request submitted");
      navigate("/customer");

    } catch (err) {
      alert("Failed to submit return");
      console.log(err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F8F9FA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          background: "white",
          width: "100%",
          maxWidth: "450px",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
            color: "#2C3E50",
            fontWeight: "700",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Request a Return
        </h2>

        <p
          style={{
            marginBottom: "20px",
            color: "#555",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          <b>Order ID:</b> <span style={{ color: "#2C7A44" }}>{orderId}</span>
        </p>

        <label
          style={{
            fontWeight: "600",
            color: "#444",
            fontSize: "14px",
            marginBottom: "6px",
            display: "block",
          }}
        >
          Reason for Return
        </label>

        <textarea
          placeholder="Describe the issue..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          style={{
            width: "100%",
            height: "120px",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #CED4DA",
            outline: "none",
            fontSize: "14px",
            resize: "none",
            marginBottom: "20px",
            background: "#FDFDFD",
            boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
          }}
        />

        <button
          onClick={submitReturn}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            backgroundColor: "#2C7A44",
            border: "none",
            color: "white",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#256F3B")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2C7A44")}
        >
          Submit Return
        </button>

        <button
          onClick={() => navigate(-1)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "12px",
            borderRadius: "10px",
            backgroundColor: "#ECECEC",
            border: "1px solid #DDD",
            color: "#555",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
