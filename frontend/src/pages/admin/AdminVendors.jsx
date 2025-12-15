import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminVendors() {
  const token = localStorage.getItem("token");
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    const res = await api.get("/admin/vendors", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setVendors(res.data);
  };

  const deleteVendor = async (id) => {
    await api.delete(`/admin/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchVendors();
  };

  return (
    <div>
      <h2>Vendors</h2>
      {vendors.map((v) => (
        <div key={v._id}>
          <p>{v.name} - {v.email}</p>
          <button onClick={() => deleteVendor(v._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
