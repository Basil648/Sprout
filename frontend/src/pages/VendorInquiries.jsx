import { useEffect, useState } from "react";
import api from "../api/axios";

export default function VendorInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    const res = await api.get("/inquiries/vendor", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setInquiries(res.data);
  };

  const sendReply = async (id, text) => {
    if (!text.trim()) return alert("Type a reply");

    await api.post(
      "/inquiries/reply",
      { inquiryId: id, message: text },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchInquiries(); // refresh after reply
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Inquiries</h2>

      {inquiries.map((inq) => (
        <div
          key={inq._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
          }}
        >
          <p><b>Product:</b> {inq.product?.name}</p>
          <p><b>Customer:</b> {inq.customer?.email}</p>

          <h4>Conversation:</h4>

          <div
            style={{
              background: "#f7f7f7",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            {inq.messages.map((m) => (
              <p key={m._id}>
                <b>{m.sender?.email}:</b> {m.text}
              </p>
            ))}
          </div>

          <textarea
            placeholder="Reply..."
            style={{ width: "100%", height: "60px" }}
            onChange={(e) => (inq.replyText = e.target.value)}
          ></textarea>

          <button
            onClick={() => sendReply(inq._id, inq.replyText)}
            style={{ marginTop: "5px" }}
          >
            Send Reply
          </button>
        </div>
      ))}
    </div>
  );
}
