import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { findProduct } from "../data/products";
import { trackEvent } from "../track";

// One template for every product: same layout, different data.
export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = findProduct(Number(productId));
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main>
        <h1>Product not found</h1>
        <Link to="/products">Back to products</Link>
      </main>
    );
  }

  const addToCart = () => {
    setAdded(true);
    trackEvent("add-to-cart", { productId: product.id });
  };

  return (
    <main data-testid="product-detail">
      <Link to="/products" data-testid="back-to-products">← All products</Link>
      <h1 data-testid="product-name">{product.name}</h1>
      <p data-testid="product-category">Category: {product.category}</p>
      <p data-testid="product-price" style={{ fontSize: "1.5rem" }}>${product.price}</p>
      <p data-testid="product-description">{product.description}</p>
      <button data-testid="btn-add-to-cart" onClick={addToCart}>
        Add to cart
      </button>
      {added && <p data-testid="added-to-cart">Added {product.name} to your cart.</p>}
    </main>
  );
}
