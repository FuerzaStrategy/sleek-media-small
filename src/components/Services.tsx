"use client";

import Image from "next/image";
import Script from "next/script";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    id: "pr-management",
    title: "PR Management",
    body: "We shape narratives that earn attention—and control them when it matters most. From media outreach and press placements to crisis communications and reputation management, we position your brand in the right conversations with the right audiences. Our approach is proactive, strategic, and built to generate sustained visibility—not one-off hits.",
    image: "/images/home/pr.png",
    imageAlt: "PR Management — press and media mockups",
    imageRight: true,
  },
  {
    id: "sms-email",
    title: "SMS & Email Marketing",
    body: "We turn owned channels into high-performing revenue drivers. Through targeted segmentation, automation, and sharp creative, we build SMS and email programs that convert—without fatiguing your audience. Every message is timed, tested, and optimized to move customers from awareness to action.",
    image: "/images/home/email.png",
    imageAlt: "SMS and Email Marketing — campaign mockups",
    imageRight: false,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    body: "Design isn't decoration—it's communication. We create visual systems that are distinct, consistent, and built to perform across every touchpoint. From brand identity to campaign assets, our work ensures your message lands clearly and leaves a lasting impression.",
    image: "/images/home/design.png",
    imageAlt: "Graphic Design — magazine and print collage",
    imageRight: true,
  },
  {
    id: "video-production",
    title: "Video Production",
    body: "We produce content built for how people actually watch. Whether it's short-form social, campaign ads, or brand storytelling, our team handles concept through post-production to deliver video that captures attention and drives engagement across platforms.",
    image: null,
    imageAlt: "",
    imageRight: false,
  },
  {
    id: "web-design",
    title: "Website Design & Development",
    body: "Your website should do more than exist—it should perform. We design and build fast, scalable, conversion-focused sites that reflect your brand and support your business goals. From UX strategy to development, every element is intentional, measurable, and optimized for growth.",
    image: "/images/home/web.png",
    imageAlt: "Website Design — AAHA Road to Nationals laptop mockup",
    imageRight: true,
  },
];

const vimeoEmbed = (
  <div className="w-full">
    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
      <iframe
        src="https://player.vimeo.com/video/858841707?badge=0&autopause=0&player_id=0&app_id=58479"
        frameBorder={0}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        title="Restaurant Sizzle | Passaic County, NJ"
      />
    </div>
  </div>
);

export default function Services() {
  return (
    <section
      id="work"
      className="py-4"
      style={{ backgroundImage: `url(${BASE}/images/home/background.png)`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />

      {services.map((service, index) => {
        const isGray = index % 2 !== 0;

        const mediaBlock = service.image ? (
          <div className="w-full">
            <Image
              src={`${BASE}${service.image}`}
              alt={service.imageAlt}
              width={800}
              height={600}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          vimeoEmbed
        );

        const textBlock = (
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-black text-navy md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {service.body}
            </p>
          </div>
        );

        return (
          <div key={service.id} className={isGray ? "bg-white/80" : "bg-white/60"}>
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 lg:gap-20 lg:px-10 lg:py-20">
              {service.imageRight ? (
                <>{textBlock}{mediaBlock}</>
              ) : (
                <>{mediaBlock}{textBlock}</>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
