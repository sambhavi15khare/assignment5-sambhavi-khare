import React from "react";
import useFetch from "./useFetch";
import "./index.css";

export default function App() {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  return (
    <div className="container">
      <h1>React Custom Hook: useFetch</h1>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {data &&
          data.slice(0, 12).map((p) => (
            <div key={p.id} className="card">
              <img src={p.images[0]} alt={p.title} />
              <h3>{p.title}</h3>
              <p>₹ {p.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
