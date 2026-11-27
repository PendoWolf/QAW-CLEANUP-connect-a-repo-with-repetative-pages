import { Link } from "react-router-dom";

export default function ReturnsHelpPage() {
  return (
    <main data-testid="help-page">
      <p>
        <Link to="/">Home</Link> / Help / Returns
      </p>
      <h1>Returns help</h1>
      <p>Everything you need to know about returning your order.</p>
      <h2>How long does it take?</h2>
      <p>Most returns are processed within 7 business days.</p>
      <h2>Need more help?</h2>
      <p>Email help@qawolf-outdoor.example and mention "Returns" in the subject.</p>
    </main>
  );
}
