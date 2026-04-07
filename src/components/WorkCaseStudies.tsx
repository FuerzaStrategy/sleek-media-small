"use client";

import Image from "next/image";
import Script from "next/script";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const cases = [
  {
    name: "County of Passaic",
    headerImage: "/images/work/county_of_passaic_Header.png",
    headerAlt: "Passaic County social media collage",
    videoRight: true,
    vimeoSrc: "https://player.vimeo.com/video/858841125?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    vimeoRatio: "56.25%",
    vimeoMaxWidth: "100%",
    vimeoTitle: "Restaurants | Passaic County, NJ",
    paragraphs: [
      "Our partnership with the Passaic County Department of Cultural and Historic Affairs has been creating content and managing day-to-day operations of social media. Since taking over the social channels, the assets have experienced explosive, organic growth. This has been the direct result of scroll-stopping content that has reached through layers of social networks, engaging new audiences.",
      "As part of our social media management, we launched an influencer program that showcases historic sites, restaurants, and events across Passaic County. As a result, we have developed new relationships with local businesses, further supporting the tourism work led by the department and increasing overall content reach.",
    ],
    stats: [
      { src: "/images/work/850_percent.png", alt: "850% increase in reach", width: 100, height: 100 },
      { src: "/images/work/organic_impressions.png", alt: "3.75x organic impressions", width: 100, height: 100 },
      { src: "/images/work/influencer_program.png", alt: "Influencer program", width: 100, height: 100 },
    ],
  },
  {
    name: "Destination Ridgewood",
    headerImage: "/images/work/destination_ridgewood_header.png",
    headerAlt: "Destination Ridgewood social media collage",
    videoRight: false,
    vimeoSrc: "https://player.vimeo.com/video/858836948?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1",
    vimeoRatio: "177.78%",
    vimeoMaxWidth: "280px",
    vimeoTitle: "Restaurants on the Pedestrian Plaza | Destination Ridgewood",
    paragraphs: [
      "The Village of Ridgewood has faced a challenge similar to many other downtown business districts in northern New Jersey. As the municipality began exploring a new Special Improvement District (SID) eligible for state grants and programs, members of the local business community wanted to showcase how collaboration between organizations could support overall growth.",
      "Our team was brought in to define a brand and voice for the future SID and lead a three-month paid marketing program that reached into surrounding communities for the return of the Pedestrian Plaza. The marketing trial determined the viability for the SID and further work is being performed to establish the underlying organizational structure by the municipal government.",
    ],
    stats: [
      { src: "/images/work/5x_engagement.png", alt: "5x engagement", width: 100, height: 100 },
      { src: "/images/work/20_percent.png", alt: "20% growth", width: 100, height: 100 },
    ],
  },
];

export default function WorkCaseStudies() {
  return (
    <>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />

      {/* Who We Are */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <h2 className="text-3xl font-black text-navy md:text-4xl">
          Who <span className="text-teal">We</span> Are
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          Sleek Media is powered by an award-winning team of creatives and strategists. We&apos;ve
          helped local businesses, nonprofits, and public agencies tell their stories and grow
          their impact.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          We created Sleek to give small and local businesses an affordable, dependable way to
          stay visible in their communities — without needing to hire an entire marketing team.
          When you subscribe, you get more than just content. You get a team of professionals who
          understand your audience, your goals, and what makes you unique.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-700">
          Our team is US-based, in the communities we serve.
        </p>
      </section>

      {/* Case Studies */}
      {cases.map((c) => {
        const videoEmbed = (
          <div className="flex items-center justify-center bg-gray-900 p-8">
            <div style={{ width: "100%", maxWidth: c.vimeoMaxWidth }}>
              <div style={{ padding: `${c.vimeoRatio} 0 0 0`, position: "relative" }}>
                <iframe
                  src={c.vimeoSrc}
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title={c.vimeoTitle}
                />
              </div>
            </div>
          </div>
        );

        const textBlock = (
          <div className="flex flex-col justify-center px-24 py-14 lg:px-32 lg:py-16">
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
                  width={s.width}
                  height={s.height}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        );

        return (
          <section key={c.name}>
            <div className="relative h-[400px] w-full md:h-[540px]">
              <Image
                src={`${BASE}${c.headerImage}`}
                alt={c.headerAlt}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {c.videoRight ? (
                <>{textBlock}{videoEmbed}</>
              ) : (
                <>{videoEmbed}{textBlock}</>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
