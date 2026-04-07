import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PlansHero() {
  return (
    <>
      {/* Hero — overlay removed, image has its own overlay */}
      <section className="relative flex min-h-[600px] items-center justify-center text-center overflow-hidden">
        <Image
          src={`${BASE}/images/plans/plans_hero.png`}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
            Subscription{" "}
            <span className="text-teal">Pricing</span>
          </h1>
        </div>
      </section>

      {/* Tagline banner */}
      <div className="bg-teal py-8 text-center">
        <p className="text-4xl font-black text-white md:text-5xl lg:text-6xl leading-tight px-6">
          Growth Marketing Packages for Local &amp; Small Businesses
        </p>
      </div>
    </>
  );
}
