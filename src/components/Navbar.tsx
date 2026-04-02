"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-widest text-white uppercase">
            Sleek
          </span>
          <span className="text-xl font-black tracking-widest text-white uppercase">
            Media
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <Link
              href="#plans"
              className="text-sm font-medium text-white/90 transition hover:text-teal"
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="text-sm font-medium text-white/90 transition hover:text-teal"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-sm font-medium text-white/90 transition hover:text-teal"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-dark md:inline-block"
        >
          Get Started
        </Link>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-navy px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {["Plans", "Work", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-white"
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
