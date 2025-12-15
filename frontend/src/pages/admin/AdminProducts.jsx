import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };

  return (
    <div>
      <h2>All Products</h2>
      {products.map((p) => (
        <div key={p._id}>
          <p>{p.name} - ₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
