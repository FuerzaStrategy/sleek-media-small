import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function WorkHero() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden text-center">
      <Image
        src={`${BASE}/images/work/hero_work.png`}
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div className="relative z-10 px-6">
        <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
          Our Work
        </h1>
        <p className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          Proven to <span style={{ color: "#AAD3DF" }}>Grow</span>
        </p>
      </div>
    </section>
  );
}
