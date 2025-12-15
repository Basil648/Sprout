import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminUsers() {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await api.get("/admin/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await api.delete(`/admin/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchUsers();
  };

  return (
    <div>
      <h2>All Users</h2>
      {users.map((u) => (
        <div key={u._id}>
          <p>{u.name} - {u.email} ({u.role})</p>
          <button onClick={() => deleteUser(u._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
