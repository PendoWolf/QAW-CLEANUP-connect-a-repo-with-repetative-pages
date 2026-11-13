// Seam for Pendo. Novus installs the Pendo agent, which provides window.pendo
// at runtime; this fires a Track Event. No-op when the agent isn't present
// (local dev).
export function trackEvent(name: string, props?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.pendo?.track?.(`shop-${name}`, props);
  }
}
