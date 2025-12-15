// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function VerifyOtp() {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");

//   const handleVerify = async (e) => {
//     e.preventDefault();

//     const userId = localStorage.getItem("registerUserId");

//     try {
//       const res = await api.post("/auth/verify-otp", {
//         userId,
//         otp
//       });

//       alert("Email verified! You can now login.");
//       navigate("/");
//     } catch (err) {
//       alert(err.response?.data?.message || "Verification failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Verify OTP</h2>

//       <form onSubmit={handleVerify}>
//         <input
//           placeholder="Enter OTP"
//           onChange={(e) => setOtp(e.target.value)}
//         />
//         <button type="submit">Verify</button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("registerUserId");

    try {
      await api.post("/auth/verify-otp", { userId, otp });

      alert("Email verified! You can now login.");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Verification failed");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F7F7F2",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Poppins",
      }}
    >
      <div
        className="shadow-lg p-5 bg-white rounded"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderLeft: "6px solid #8FAF9F",
          animation: "fadeIn 0.6s ease-out",
        }}
      >
        <h2
          className="fw-bold text-center mb-4"
          style={{ color: "#8FAF9F", letterSpacing: "1px" }}
        >
          VERIFY OTP
        </h2>

        <p className="text-center text-secondary mb-4">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength="6"
            onChange={(e) => setOtp(e.target.value)}
            className="form-control mb-3 py-2"
            style={{
              borderRadius: "10px",
              borderColor: "#8FAF9F",
              textAlign: "center",
              fontSize: "18px",
              letterSpacing: "4px",
              fontWeight: "600",
            }}
          />

          <button
            type="submit"
            className="btn w-100 mt-2"
            style={{
              backgroundColor: "#8FAF9F",
              color: "white",
              borderRadius: "10px",
              padding: "10px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            VERIFY
          </button>
        </form>

        <p className="text-center mt-3 text-secondary" style={{ fontSize: "14px" }}>
          Didn’t receive the code? <span style={{ color: "#8FAF9F", cursor: "pointer" }}>Resend</span>
        </p>
      </div>

      {/* Subtle Fade Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
