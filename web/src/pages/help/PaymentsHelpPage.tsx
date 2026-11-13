import { Link } from "react-router-dom";

export default function PaymentsHelpPage() {
  return (
    <main data-testid="help-page">
      <p>
        <Link to="/">Home</Link> / Help / Payments
      </p>
      <h1>Payments help</h1>
      <p>Everything you need to know about paying for your order.</p>
      <h2>How long does it take?</h2>
      <p>Most payments are confirmed within 1 business day.</p>
      <h2>Need more help?</h2>
      <p>Email help@qawolf-outdoor.example and mention "Payments" in the subject.</p>
    </main>
  );
}
