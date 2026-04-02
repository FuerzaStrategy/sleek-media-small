import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center py-28 text-center"
    >
      {/* Background — next/image handles basePath automatically */}
      <Image
        src="/images/hero.png"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative z-10 px-6">
        <h2 className="text-4xl font-black text-white md:text-5xl">
          Get Started Today
        </h2>
        <Link
          href="#contact"
          className="mt-8 inline-block rounded-md bg-navy px-10 py-4 text-base font-semibold text-white ring-2 ring-white/20 transition hover:bg-navy-light"
        >
          Let&apos;s Get to Work
        </Link>
      </div>
    </section>
  );
}
