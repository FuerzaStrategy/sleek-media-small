"use client";

import Image from "next/image";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden text-center">
        <Image
          src={`${BASE}/images/home/hero.png`}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Real Growth
            <br />
            Starts with{" "}
            <span className="text-light-blue">Sleek.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            Creative marketing solutions for local and small businesses that need
            results — not more to-dos. Choose a plan that fits your goals and
            let our team take it from there.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="mt-10 inline-block rounded-md bg-light-blue px-10 py-4 text-base font-bold text-navy transition hover:brightness-110 hover:animate-shake"
          >
            Let&apos;s Get to Work
          </button>
        </div>
      </section>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
