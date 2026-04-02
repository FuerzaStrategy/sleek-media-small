import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    id: "pr-management",
    title: "PR Management",
    body: "We shape narratives that earn attention—and control them when it matters most. From media outreach and press placements to crisis communications and reputation management, we position your brand in the right conversations with the right audiences. Our approach is proactive, strategic, and built to generate sustained visibility—not one-off hits.",
    image: "/images/pr.png",
    imageAlt: "PR Management — press and media mockups",
    imageRight: true,
  },
  {
    id: "sms-email",
    title: "SMS & Email Marketing",
    body: "We turn owned channels into high-performing revenue drivers. Through targeted segmentation, automation, and sharp creative, we build SMS and email programs that convert—without fatiguing your audience. Every message is timed, tested, and optimized to move customers from awareness to action.",
    image: "/images/email.png",
    imageAlt: "SMS and Email Marketing — campaign mockups",
    imageRight: false,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    body: "Design isn't decoration—it's communication. We create visual systems that are distinct, consistent, and built to perform across every touchpoint. From brand identity to campaign assets, our work ensures your message lands clearly and leaves a lasting impression.",
    image: "/images/design.png",
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
    image: "/images/web.png",
    imageAlt: "Website Design — AAHA Road to Nationals laptop mockup",
    imageRight: true,
  },
];

export default function Services() {
  return (
    <section id="work" className="py-4">
      {services.map((service, index) => {
        const isGray = index % 2 !== 0;
        const mediaBlock = service.image ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={`${BASE}${service.image}`}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-navy shadow-md">
            <div className="flex flex-col items-center gap-3 text-white/60">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-16 w-16 text-teal/70">
                <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-teal/50" />
                <path d="M10 8.5l6 3.5-6 3.5V8.5z" />
              </svg>
              <span className="text-sm">Video coming soon</span>
            </div>
          </div>
        );

        const textBlock = (
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              {service.body}
            </p>
          </div>
        );

        return (
          <div key={service.id} className={isGray ? "bg-gray-50" : "bg-white"}>
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
