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
        <p className="mt-1 text-sm text-white/70">Ask us anything or just say hi</p>
        <p className="text-sm text-white/50 italic">(yes, you can text us too)</p>

        {/* Contact info */}
        <div className="mt-4 flex flex-col gap-2">
          <a href="tel:18622285125" className="flex items-center gap-2 text-sm text-white/80 transition hover:text-teal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-teal">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
            1.862.228.5125
          </a>
          <a href="mailto:Hello@WatchSleek.com" className="flex items-center gap-2 text-sm text-white/80 transition hover:text-teal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-teal">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            Hello@WatchSleek.com
          </a>
        </div>

        <div className="my-5 border-t border-white/10" />

        {status === "success" ? (
          <div className="text-center">
            <p className="text-xl font-bold text-white">Message sent!</p>
            <p className="mt-2 text-white/60">Thanks for reaching out. We&apos;ll be in touch shortly.</p>
            <button
              onClick={onClose}
              className="mt-6 rounded bg-teal px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" name="name" placeholder="Name" required
                className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none" />
              <input type="email" name="email" placeholder="Email Address" required
                className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none" />
            </div>
            <input type="text" name="subject" placeholder="Subject" required
              className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none" />
            <textarea name="message" placeholder="Leave your message" rows={4} required
              className="w-full rounded border border-white/20 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-teal focus:outline-none" />
            {status === "error" && (
              <p className="text-sm text-red-300">Something went wrong. Please try again or email us directly.</p>
            )}
            <button type="submit" disabled={status === "sending"}
              className="rounded bg-teal px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-teal-dark disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
