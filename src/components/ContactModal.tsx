"use client";

import { FormEvent, useState } from "react";

const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

interface Props {
  onClose: () => void;
}

export default function ContactModal({ onClose }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-lg rounded-lg bg-navy p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/50 transition hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-black text-white">Get In Touch</h2>
        <p className="mt-1 text-sm text-white/60">Ask us anything or just say hi</p>

        {status === "success" ? (
          <div className="mt-8 text-center">
            <p className="text-xl font-bold text-white">Message sent!</p>
            <p className="mt-2 text-white/60">
              Thanks for reaching out. We&apos;ll be in touch shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded bg-teal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Leave your message"
              rows={5}
              required
              className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none"
            />
            {status === "error" && (
              <p className="text-sm text-red-300">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded bg-teal px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-teal-dark disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
