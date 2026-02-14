import React, { useState } from "react";
import Library from "./Library";
import PersonHierarchy from "./Person";

function ProductCard({ name, price, inStock }) {
  return (
    <div style={{
      width: "280px",
      padding: "16px",
      borderRadius: "12px",
      background: "#fff",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
    }}>
      <h3>{name}</h3>
      <p style={{ fontWeight: "bold" }}>${price}</p>
      <span style={{
        padding: "6px 12px",
        borderRadius: "20px",
        background: inStock ? "#d4f8e8" : "#ffd6d6",
        color: inStock ? "green" : "red"
      }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("product");

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>

      {/* Navigation Buttons */}
      <div style={{ marginBottom: "30px" }}>
        <button onClick={() => setPage("product")}>Product Cards</button>
        <button onClick={() => setPage("library")} style={{ marginLeft: "10px" }}>
          Library
        </button>
        <button onClick={() => setPage("person")} style={{ marginLeft: "10px" }}>
          Person Hierarchy
        </button>
      </div>

      {/* Conditional Rendering */}
      {page === "product" && (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <ProductCard name="Wireless Headphones" price="129.99" inStock={true} />
          <ProductCard name="Keyboard" price="89.99" inStock={false} />
          <ProductCard name="Smart Watch" price="199.99" inStock={true} />
        </div>
      )}

      {page === "library" && <Library />}

      {page === "person" && <PersonHierarchy />}
    </div>
  );
}
