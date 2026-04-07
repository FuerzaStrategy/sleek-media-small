"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";


const navLinks = [
  { label: "Plans", href: "/plans" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm relative">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={`/images/home/sleek-dark.svg`}
              alt="Sleek Media"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav — all items grouped on the right */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-base font-semibold text-navy/80 transition hover:text-teal"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-md bg-teal px-5 py-2.5 text-base font-semibold text-white transition hover:bg-teal-dark hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-navy" />
            <span className="block h-0.5 w-6 bg-navy" />
            <span className="block h-0.5 w-6 bg-navy" />
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full bg-navy px-6 pb-6 shadow-lg md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="block text-lg font-semibold text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { setMenuOpen(false); setModalOpen(true); }}
                  className="mt-2 rounded-md bg-teal px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
