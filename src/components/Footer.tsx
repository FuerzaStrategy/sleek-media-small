import Image from "next/image";
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Footer({ heroSrc }: { heroSrc?: string }) {
  return (
    <footer>
      {heroSrc && (
        <div className="relative h-64 w-full md:h-80 lg:h-96">
          <Image
            src={`${BASE}${heroSrc}`}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      )}

      <div className="bg-navy py-5">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-4 px-6 lg:px-10">

          {/* Left — logo + social icons */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={`${BASE}/images/home/sleek-light.svg`}
                alt="Sleek Media"
                width={80}
                height={26}
              />
            </Link>
            <a href="https://facebook.com/SleekMedia" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="text-white/60 transition hover:text-teal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="https://instagram.com/SleekMedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-white/60 transition hover:text-teal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://tiktok.com/@SleekMedia" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="text-white/60 transition hover:text-teal">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
            </a>
          </div>

          {/* Center — copyright + privacy on one line */}
          <div className="text-center text-xs text-white/40">
            © Sleek Media 2026&nbsp;|&nbsp;
            <Link href="/privacy" className="transition hover:text-white/70">Privacy Policy</Link>
          </div>

          {/* Right — page nav */}
          <div className="flex items-center justify-end gap-6">
            {[["Plans", "/plans"], ["Work", "/work"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={label} href={href}
                className="text-sm font-semibold text-white transition hover:text-teal">
                {label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
