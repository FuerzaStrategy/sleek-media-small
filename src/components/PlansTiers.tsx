import Image from "next/image";


const tiers = [
  {
    number: "Tier 1",
    name: "Visibility Boost",
    price: "$850",
    image: "/images/plans/tier_1.webp",
    imageAlt: "Photographer with camera — Visibility Boost",
    imageRight: false,
    inherit: null,
    features: [
      "2 social media video posts/month",
      "4-8 social media photo posts/month",
      "Quarterly strategy call (30 mins)",
      "Canva design template (branded)",
    ],
    iconSrc: "/images/plans/adobe_creative_suite_icons.webp",
    iconAlt: "Adobe Creative Suite",
    iconWidth: 160,
    iconHeight: 40,
  },
  {
    number: "Tier 2",
    name: "Growth Builder",
    price: "$1,400",
    image: "/images/plans/tier_2.webp",
    imageAlt: "Woman dancing in street — Growth Builder",
    imageRight: true,
    inherit: null,
    features: [
      "4-6 social media video posts/month",
      "8-10 social media photo posts/month",
      "Monthly strategy call (60 mins)",
      "Engagement & Growth Review",
      "Dedicated Account Manager",
    ],
    iconSrc: "/images/plans/tier_2_icon.svg",
    iconAlt: "Tier 2 icon",
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    number: "Tier 3",
    name: "Local Impact Pro",
    price: "$2,250",
    image: "/images/plans/tier_3.webp",
    imageAlt: "Close-up of camera lens — Local Impact Pro",
    imageRight: false,
    inherit: "Growth Builder",
    features: [
      "18-22 social media posts/month",
      "Weekly email content",
      "Monthly branded photo shoot (1 hour)",
      "1 custom video/month (30-60 sec reel)",
      "Up to 3 promotional assets per month",
    ],
    iconSrc: "/images/plans/tier_3_icon.svg",
    iconAlt: "Tier 3 icon",
    iconWidth: 48,
    iconHeight: 48,
  },
  {
    number: "Tier 4",
    name: "Brand Amplifier",
    price: "$3,500",
    image: "/images/plans/tier_4.webp",
    imageAlt: "Person entertaining children — Brand Amplifier",
    imageRight: true,
    inherit: "Local Impact Pro",
    features: [
      "Micro-influencer marketing (2-3 local influencers/month)",
      "Influencer outreach, coordination, and posting",
      "Influencer gifting/comp coordination",
      "Influencer performance summary",
      "Advanced strategy session + creative planning",
      "Optional Meta ad management",
    ],
    iconSrc: null,
    iconAlt: null,
    iconWidth: 0,
    iconHeight: 0,
    badgeIcons: [
      { src: "/images/plans/Meta_Business_Partner.webp", alt: "Meta Business Partner", width: 72, height: 24 },
      { src: "/images/plans/Google_Partner.webp", alt: "Google Partner", width: 72, height: 24 },
    ],
  },
];

export default function PlansTiers() {
  return (
    <section>
      {tiers.map((tier) => {
        const content = (
          <div className="flex flex-col justify-center px-8 py-16 lg:px-12 lg:py-20">
            <div className="mx-auto w-full max-w-sm">
            <h2 className="text-3xl font-black text-navy md:text-4xl">
              {tier.name}
            </h2>
            <p className="mt-2 text-2xl font-bold text-navy">
              {tier.price}
              <span className="text-base font-normal text-gray-500">/month</span>
            </p>

            {tier.inherit && (
              <p className="mt-4 text-sm italic text-gray-500">
                Everything in {tier.inherit} plus:
              </p>
            )}

            <ul className="mt-4 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-0.5 flex-shrink-0 text-teal">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {"badgeIcons" in tier && tier.badgeIcons ? (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {tier.badgeIcons.map((badge) => (
                  <Image
                    key={badge.alt}
                    src={`${badge.src}`}
                    alt={badge.alt}
                    width={badge.width}
                    height={badge.height}
                    className="object-contain"
                  />
                ))}
              </div>
            ) : tier.iconSrc ? (
              <div className="mt-6">
                <Image
                  src={`${tier.iconSrc}`}
                  alt={tier.iconAlt ?? ""}
                  width={tier.iconWidth}
                  height={tier.iconHeight}
                  className="object-contain"
                />
              </div>
            ) : null}
            </div>
          </div>
        );

        const photo = (
          <div className="relative min-h-[625px] w-full">
            <Image
              src={`${tier.image}`}
              alt={tier.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        );

        return (
          <div
            key={tier.number}
            className="grid grid-cols-1 md:grid-cols-2 md:min-h-[625px]"
          >
            {tier.imageRight ? (
              <>{content}{photo}</>
            ) : (
              <>{photo}{content}</>
            )}
          </div>
        );
      })}
    </section>
  );
}
