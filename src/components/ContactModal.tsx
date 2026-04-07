"use client";

const JOTFORM_ID = "260965828748072";

interface Props {
  onClose: () => void;
}

export default function ContactModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-lg rounded-lg bg-navy shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 text-white/50 transition hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* JotForm iframe */}
        <iframe
          id={`JotFormIFrame-${JOTFORM_ID}`}
          title="Sleek Media Contact Form"
          src={`https://form.jotform.com/${JOTFORM_ID}`}
          frameBorder={0}
          allow="geolocation; microphone; camera; fullscreen"
          scrolling="yes"
          className="w-full"
          style={{ height: "620px", border: "none", background: "transparent" }}
        />
      </div>
    </div>
  );
}
