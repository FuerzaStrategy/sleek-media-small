import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const tiers = [
  {
    number: "Tier 1",
    name: "Visibility Boost",
    price: "$850",
    image: "/images/plans/tier_1.png",
    imageAlt: "Photographer with camera — Visibility Boost",
    imageRight: false,
    inherit: null,
    features: [
      "2 social media video posts/month",
      "4-8 social media photo posts/month",
      "Quarterly strategy call (30 mins)",
      "Canva design template (branded)",
    ],
    icons: (
      <div className="mt-6 flex items-center gap-2">
        {/* Adobe Illustrator */}
        <span className="flex h-8 w-8 items-center justify-center rounded bg-[#FF7C00] text-[10px] font-black text-white">Ai</span>
        {/* Adobe Photoshop */}
        <span className="flex h-8 w-8 items-center justify-center rounded bg-[#31A8FF] text-[10px] font-black text-white">Ps</span>
        {/* Adobe After Effects */}
        <span className="flex h-8 w-8 items-center justify-center rounded bg-[#9999FF] text-[10px] font-black text-white">Ae</span>
      </div>
    ),
  },
  {
    number: "Tier 2",
    name: "Growth Builder",
    price: "$1,400",
    image: "/images/plans/tier_2.png",
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
    icons: (
      <div className="mt-6">
        {/* Video/camera icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-navy">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      </div>
    ),
  },
  {
    number: "Tier 3",
    name: "Local Impact Pro",
    price: "$2,250",
    image: "/images/plans/tier_3.png",
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
    icons: (
      <div className="mt-6">
        {/* Email/envelope icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-navy">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </div>
    ),
  },
  {
    number: "Tier 4",
    name: "Brand Amplifier",
    price: "$3,500",
    image: "/images/plans/tier_4.png",
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
    icons: (
      <div className="mt-6 flex items-center gap-3">
        {/* Meta badge */}
        <span className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1 text-[10px] font-semibold text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-[#1877F2]">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Meta Partner
        </span>
      </div>
    ),
  },
];

export default function PlansTiers() {
  return (
    <section>
      {tiers.map((tier) => {
        const content = (
          <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">
              {tier.number}
            </p>
            <h2 className="mt-1 text-3xl font-black text-navy md:text-4xl">
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
                  <span className="mt-0.5 flex-shrink-0 text-teal">•</span>
                  {f}
                </li>
              ))}
            </ul>

            {tier.icons}
          </div>
        );

        const photo = (
          <div className="relative min-h-[360px] w-full md:min-h-0">
            <Image
              src={`${BASE}${tier.image}`}
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
            className="grid grid-cols-1 md:grid-cols-2"
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
