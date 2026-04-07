import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const JOTFORM_ID = "260965828748072";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <Image
        src={`${BASE}/images/contact/contact_hero.png`}
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 lg:px-10 lg:py-28">

        {/* Left — contact info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-black md:text-5xl" style={{ color: "#AAD3DF" }}>
            Get In Touch
          </h1>
          <p className="mt-3 text-base text-white/70">
            Ask us anything or just say hi
          </p>
          <p className="mt-1 text-sm italic text-white/50">
            (yes, you can text us too)
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="h-5 w-5 flex-shrink-0" style={{ color: "#AAD3DF" }}>
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <a href="tel:18622285125" className="text-white/90 transition hover:text-teal">
                (862) 228-5125
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="h-5 w-5 flex-shrink-0" style={{ color: "#AAD3DF" }}>
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <a href="mailto:Hello@WatchSleek.com" className="text-white/90 transition hover:text-teal">
                Hello@WatchSleek.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="h-5 w-5 flex-shrink-0" style={{ color: "#AAD3DF" }}>
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="h-5 w-5 flex-shrink-0" style={{ color: "#AAD3DF" }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-white/90">@SleekMedia</span>
            </li>
          </ul>
        </div>

        {/* Right — JotForm embed */}
        <div className="flex items-start">
          <iframe
            id={`JotFormIFrame-${JOTFORM_ID}`}
            title="Sleek Media Contact Form"
            src={`https://form.jotform.com/${JOTFORM_ID}`}
            frameBorder={0}
            allow="geolocation; microphone; camera; fullscreen"
            scrolling="yes"
            className="w-full rounded"
            style={{ height: "680px", border: "none", background: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
}
