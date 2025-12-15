// import { useEffect, useState } from "react";
// import api from "../api/axios";

// export default function VendorReturns() {
//   const token = localStorage.getItem("token");
//   const [returnsList, setReturnsList] = useState([]);

//   useEffect(() => {
//     fetchReturns();
//   }, []);

//   const fetchReturns = async () => {
//     try {
//       const res = await api.get(" /api/return/vendor", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setReturnsList(res.data);
//     } catch (err) {
//       console.log("Failed to load returns", err);
//     }
//   };

//   const approveReturn = async (id) => {
//     try {
//       await api.patch(`/returns/approve/${id}`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert("Return approved");
//       fetchReturns();
//     } catch (err) {
//       alert("Approval failed");
//     }
//   };

//   const rejectReturn = async (id) => {
//     try {
//       await api.patch(`/returns/reject/${id}`, {}, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       alert("Return rejected");
//       fetchReturns();
//     } catch (err) {
//       alert("Rejection failed");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Customer Return Requests</h2>

//       {returnsList.length === 0 ? (
//         <p>No return requests.</p>
//       ) : (
//         returnsList.map((ret) => (
//           <div key={ret._id} style={{ 
//             border: "1px solid #ccc", 
//             padding: "15px", 
//             marginBottom: "15px" 
//           }}>
//             <p><b>Order ID:</b> {ret.order._id}</p>
//             <p><b>Complaint:</b> {ret.reason}</p>
//             <p><b>Status:</b> {ret.status}</p>

//             {ret.status === "pending" && (
//               <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//                 <button onClick={() => approveReturn(ret._id)}>
//                   Approve
//                 </button>
//                 <button onClick={() => rejectReturn(ret._id)}>
//                   Reject
//                 </button>
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import api from "../api/axios";

export default function VendorReturns() {
  const token = localStorage.getItem("token");
  const [returnsList, setReturnsList] = useState([]);

  useEffect(() => {
    fetchReturns();
  }, []);

  // 👉 FETCH RETURNS FOR THIS VENDOR
  const fetchReturns = async () => {
    try {
      const res = await api.get("/return/vendor", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReturnsList(res.data);
    } catch (err) {
      console.log("Failed to load returns", err);
    }
  };

  // 👉 APPROVE RETURN
  const approveReturn = async (id) => {
    try {
      await api.patch(
        `/return/update-status/${id}`,
        { status: "Approved" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Return approved");
      fetchReturns();
    } catch (err) {
      alert("Approval failed");
    }
  };

  // 👉 REJECT RETURN
  const rejectReturn = async (id) => {
    try {
      await api.patch(
        `/return/update-status/${id}`,
        { status: "Rejected" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Return rejected");
      fetchReturns();
    } catch (err) {
      alert("Rejection failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Return Requests</h2>

      {returnsList.length === 0 ? (
        <p>No return requests.</p>
      ) : (
        returnsList.map((ret) => (
          <div
            key={ret._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <p>
              <b>Order ID:</b> {ret?.order?._id}
            </p>
            <p>
              <b>Complaint:</b> {ret.reason}
            </p>
            <p>
              <b>Status:</b> {ret.status}
            </p>

            {/* Only show controls if return is still pending */}
            {ret.status === "Requested" && (
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <button onClick={() => approveReturn(ret._id)}>
                  Approve
                </button>
                <button onClick={() => rejectReturn(ret._id)}>
                  Reject
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
