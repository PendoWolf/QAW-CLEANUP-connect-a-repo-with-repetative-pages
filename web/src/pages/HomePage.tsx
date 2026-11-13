import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <h1>QAWolf Outdoor Shop</h1>
      <p>Gear for every trail. Browse twenty products or read our help pages.</p>
      <ul>
        <li>
          <Link to="/products" data-testid="home-products-link">Browse all products</Link>
        </li>
        <li>
          <Link to="/help/shipping">Shipping help</Link>
        </li>
        <li>
          <Link to="/help/returns">Returns help</Link>
        </li>
        <li>
          <Link to="/help/payments">Payments help</Link>
        </li>
        <li>
          <Link to="/help/warranty">Warranty help</Link>
        </li>
      </ul>
    </main>
  );
}
