import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PlansHero() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center justify-center text-center overflow-hidden">
        <Image
          src={`${BASE}/images/plans/plans_hero.png`}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 px-6">
          <p className="text-xl font-black uppercase tracking-widest text-white md:text-2xl">
            Plans
          </p>
          <h1 className="mt-2 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Subscription Pricing
          </h1>
          <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Focused on{" "}
            <span style={{ color: "#AAD3DF" }}>Growth</span>
          </p>
        </div>
      </section>

      {/* Tagline banner */}
      <div className="bg-teal py-8 text-center">
        <p className="text-4xl font-black text-white leading-tight px-6">
          Marketing Packages for Local &amp; Small Businesses
        </p>
      </div>
    </>
  );
}
