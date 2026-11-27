import { Link } from "react-router-dom";

export default function WarrantyHelpPage() {
  return (
    <main data-testid="help-page">
      <p>
        <Link to="/">Home</Link> / Help / Warranty
      </p>
      <h1>Warranty help</h1>
      <p>Everything you need to know about the warranty on your order.</p>
      <h2>How long does it take?</h2>
      <p>Most warranty claims are reviewed within 10 business days.</p>
      <h2>Need more help?</h2>
      <p>Email help@qawolf-outdoor.example and mention "Warranty" in the subject.</p>
    </main>
  );
}
