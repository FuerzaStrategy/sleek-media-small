import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const cases = [
  {
    name: "County of Passaic",
    headerImage: "/images/work/county_of_passaic_Header.png",
    headerAlt: "Passaic County social media collage",
    videoRight: true,
    paragraphs: [
      "Our partnership with the Passaic County Department of Cultural and Historic Affairs has been creating content and managing day-to-day operations of social media. Since taking over the social channels, the assets have experienced explosive, organic growth. This has been the direct result of scroll-stopping content that has reached through layers of social networks, engaging new audiences.",
      "As part of our social media management, we launched an influencer program that showcases historic sites, restaurants, and events across Passaic County. As a result, we have developed new relationships with local businesses, further supporting the tourism work led by the department and increasing overall content reach.",
    ],
    stats: [
      { src: "/images/work/850_percent.svg", alt: "850% growth" },
      { src: "/images/work/3.75x_impressions.svg", alt: "3.75x impressions" },
    ],
  },
  {
    name: "Destination Ridgewood",
    headerImage: "/images/work/destination_ridgewood_header.png",
    headerAlt: "Destination Ridgewood social media collage",
    videoRight: false,
    paragraphs: [
      "The Village of Ridgewood has faced a challenge similar to many other downtown business districts in northern New Jersey. As the municipality began exploring a new Special Improvement District (SID) eligible for state grants and programs, members of the local business community wanted to showcase how collaboration between organizations could support overall growth.",
      "Fuerza was brought in to define a brand and vision for the future SID and lead a three-month pilot marketing program that reached into surrounding communities for the return of the Pedestrian Plaza. The marketing trial demonstrated the viability for the SID and further work is being performed to establish the underlying organizational structure by the municipal government.",
    ],
    stats: [
      { src: "/images/work/5x_engagement.svg", alt: "5x engagement" },
      { src: "/images/work/20_percent_growth.svg", alt: "20% growth" },
    ],
  },
];

function VideoReel() {
  return (
    <div className="flex h-full min-h-[320px] items-center justify-center bg-gray-900">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/40">
        Video Reel
      </p>
    </div>
  );
}

export default function WorkCaseStudies() {
  return (
    <>
      {/* Who We Are */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-black text-navy md:text-4xl">
          Who <span className="text-teal">We</span> Are
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          Sleek Media is powered by the award-winning team at Fuerza Strategy Group — a creative
          and strategic agency that&apos;s helped local businesses, nonprofits, and public agencies tell
          their stories and grow their impact.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          We created Sleek to give small and local businesses an affordable, dependable way to stay
          visible in their communities — without needing to hire an entire marketing team. When you
          subscribe, you get more than just content. You get a team of professionals who understand
          your audience, your goals, and what makes you unique.
        </p>
      </section>

      {/* Case Studies */}
      {cases.map((c) => {
        const textBlock = (
          <div className="flex flex-col justify-center px-8 py-14 lg:px-14 lg:py-16">
            <h2 className="text-2xl font-black text-navy md:text-3xl">{c.name}</h2>
            {c.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-sm leading-relaxed text-gray-700">
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {c.stats.map((s) => (
                <Image
                  key={s.alt}
                  src={`${BASE}${s.src}`}
                  alt={s.alt}
                  width={100}
                  height={80}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        );

        return (
          <section key={c.name}>
            {/* Full-width header image */}
            <div className="relative h-72 w-full md:h-96">
              <Image
                src={`${BASE}${c.headerImage}`}
                alt={c.headerAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Text + Video Reel */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {c.videoRight ? (
                <>
                  {textBlock}
                  <VideoReel />
                </>
              ) : (
                <>
                  <VideoReel />
                  {textBlock}
                </>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
