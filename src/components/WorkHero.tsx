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
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative z-10 px-6">
        <h1 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
          Our{" "}
          <span className="text-teal">Work</span>
        </h1>
      </div>
    </section>
  );
}
