"use client";

import Image from "next/image";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CtaBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="relative flex items-center justify-center py-36 text-center"
      >
        <Image
          src={`${BASE}/images/home/footer_hero.png`}
          alt=""
          fill
          className="object-cover object-center"
        />

        <div className="relative z-10 px-6">
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Get Started Today
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-8 inline-block rounded-md bg-navy px-10 py-4 text-base font-semibold text-white transition hover:bg-navy-light hover:animate-shake"
          >
            Let&apos;s Get to Work
          </button>
        </div>
      </section>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
