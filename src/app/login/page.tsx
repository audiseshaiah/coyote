"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        // In production, handle auth token/session
        alert(`Welcome, ${data.user?.name || "User"}! (Demo login — no session created)`);
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold text-[var(--color-primary)] flex items-center justify-center gap-2">
            <span className="text-[var(--color-accent)]">&#9670;</span> COYOTE
          </Link>
          <p className="mt-2 text-[var(--color-text-light)]">Sign in to access campus features</p>
        </div>

        <div className="bg-white border border-[var(--color-border)] rounded-xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Login form">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-[var(--color-text-main)] mb-1">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Demo credentials: <strong>admin@coyote.com</strong> / <strong>demo123</strong>
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--color-text-light)]">
          <Link href="/" className="text-[var(--color-primary)] hover:underline">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
