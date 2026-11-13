import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShippingHelpPage from "./pages/help/ShippingHelpPage";
import ReturnsHelpPage from "./pages/help/ReturnsHelpPage";
import PaymentsHelpPage from "./pages/help/PaymentsHelpPage";
import WarrantyHelpPage from "./pages/help/WarrantyHelpPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 880, margin: "0 auto", padding: "1rem" }}>
      <header style={{ display: "flex", gap: 16, alignItems: "center", borderBottom: "1px solid #ddd", paddingBottom: 12 }}>
        <Link to="/" data-testid="nav-home" style={{ fontWeight: 700 }}>
          QAWolf Outdoor Shop
        </Link>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/products" data-testid="nav-products">Products</Link>
          <Link to="/help/shipping" data-testid="nav-help-shipping">Shipping</Link>
          <Link to="/help/returns" data-testid="nav-help-returns">Returns</Link>
          <Link to="/help/payments" data-testid="nav-help-payments">Payments</Link>
          <Link to="/help/warranty" data-testid="nav-help-warranty">Warranty</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/help/shipping" element={<ShippingHelpPage />} />
        <Route path="/help/returns" element={<ReturnsHelpPage />} />
        <Route path="/help/payments" element={<PaymentsHelpPage />} />
        <Route path="/help/warranty" element={<WarrantyHelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
