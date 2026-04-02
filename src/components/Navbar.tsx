"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src={`${BASE}/images/sleek-light.svg`}
            alt="Sleek Media"
            width={120}
            height={40}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {["Plans", "Work", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-white/90 transition hover:text-teal"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark md:inline-block"
        >
          Get Started
        </Link>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="bg-navy px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {["Plans", "Work", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-semibold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="mt-2 inline-block rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
