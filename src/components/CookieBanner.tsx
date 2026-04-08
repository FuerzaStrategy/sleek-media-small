"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "sleek-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no choice has been stored yet
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    // Notify other components (e.g. MetaPixel) that consent was just granted
    window.dispatchEvent(new Event("cookieConsentAccepted"));
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[200] border-t border-white/10 bg-charcoal px-6 py-5 shadow-2xl md:px-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Message */}
        <p className="text-sm leading-relaxed text-white/80">
          We use cookies to improve your experience and analyze site traffic. By clicking{" "}
          <span className="font-semibold text-white">Accept</span>, you consent to our use of cookies.{" "}
          <Link href="/privacy" className="underline text-teal hover:text-light-blue transition">
            Learn more
          </Link>
          .
        </p>

        {/* Buttons */}
        <div className="flex flex-shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded border border-white/30 px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-white/60 hover:text-white"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded bg-teal px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
