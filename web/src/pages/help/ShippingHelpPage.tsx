import { Link } from "react-router-dom";

export default function ShippingHelpPage() {
  return (
    <main data-testid="help-page">
      <p>
        <Link to="/">Home</Link> / Help / Shipping
      </p>
      <h1>Shipping help</h1>
      <p>Everything you need to know about shipping your order.</p>
      <h2>How long does it take?</h2>
      <p>Most shipping orders arrive within 5 business days.</p>
      <h2>Need more help?</h2>
      <p>Email help@qawolf-outdoor.example and mention "Shipping" in the subject.</p>
    </main>
  );
}
