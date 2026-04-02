import Image from "@/components/Image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden text-center">
      {/* Background — next/image handles basePath automatically */}
      <Image
        src="/images/hero.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
          Real Growth
          <br />
          Starts with{" "}
          <span className="text-teal">Sleek.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:text-lg">
          Creative marketing solutions for local and small businesses that need
          results — not more to-dos.
          <br className="hidden md:block" />
          Choose a plan that fits your goals and let our team take it from there.
        </p>

        <Link
          href="#contact"
          className="mt-10 inline-block rounded-md border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white hover:text-navy"
        >
          Let&apos;s Get to Work
        </Link>
      </div>
    </section>
  );
}
