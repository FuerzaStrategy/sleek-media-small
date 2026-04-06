import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PlansHero() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center justify-center text-center overflow-hidden">
        <Image
          src={`${BASE}/images/plans/plans_hero.png`}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Subscription{" "}
            <span className="text-teal">Pricing</span>
          </h1>
        </div>
      </section>

      {/* Tagline banner */}
      <div className="bg-teal py-5 text-center">
        <p className="text-lg font-bold text-white md:text-xl">
          Creative Marketing Packages for Local Businesses
        </p>
      </div>
    </>
  );
}
