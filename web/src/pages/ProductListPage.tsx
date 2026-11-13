import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductListPage() {
  return (
    <main>
      <h1>Products</h1>
      <p data-testid="product-count">{products.length} products</p>
      <ul data-testid="product-list" style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
            <Link to={`/products/${product.id}`} data-testid={`product-link-${product.id}`}>
              {product.name}
            </Link>{" "}
            <span style={{ color: "#666" }}>
              {product.category} · ${product.price}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
