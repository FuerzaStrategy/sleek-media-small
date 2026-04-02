import Image from "next/image";

const plans = [
  {
    name: "Visibility Boost",
    price: "$850",
    icon: "/images/visibility_boost_icon.svg",
    features: [
      "2 social media video posts",
      "4-8 social media photo posts",
      "Quarterly strategy call",
      "Canva-branded template",
    ],
    inherit: null,
  },
  {
    name: "Growth Builder",
    price: "$1,400",
    icon: "/images/growth_builder_icon.svg",
    features: [
      "4-6 social media video posts",
      "8-10 social media photo posts",
      "Monthly strategy call",
      "Engagement & Growth Review",
      "Dedicated Account Manager",
    ],
    inherit: null,
  },
  {
    name: "Local Impact Pro",
    price: "$2,250",
    icon: "/images/local_impact_icon.svg",
    features: [
      "18-22 social media posts",
      "Weekly email",
      "Monthly photography session",
      "Monthly Video session",
      "Up to 3 promotional assets per month",
    ],
    inherit: "Growth Builder",
  },
  {
    name: "Brand Amplifier",
    price: "$3,500",
    icon: "/images/brand_amplifier_icon.svg",
    features: [
      "Micro influencer marketing",
      "Advanced strategy",
      "Optional ad management",
    ],
    inherit: "Local Impact Pro",
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 shadow-sm text-center"
            >
              {/* Icon */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center">
                <Image
                  src={plan.icon}
                  alt={`${plan.name} icon`}
                  width={56}
                  height={56}
                  className="text-teal"
                />
              </div>

              {/* Name */}
              <h3 className="text-base font-bold text-navy">{plan.name}</h3>

              {/* Price */}
              <div className="mt-3">
                <span className="text-4xl font-black text-navy">
                  {plan.price}
                </span>
                <span className="ml-1 text-sm text-gray-500">/month</span>
              </div>

              {/* Inherit note */}
              {plan.inherit && (
                <p className="mt-4 text-xs font-medium text-gray-400 italic">
                  Everything in {plan.inherit} plus:
                </p>
              )}

              {/* Features */}
              <ul className="mt-4 space-y-2 text-left w-full">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-teal">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
