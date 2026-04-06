const faqs = [
  {
    q: "How does the subscription work?",
    a: "Each month, we deliver the creative assets and services based on your selected tier. You can upgrade, pause, or cancel with 30 days' notice.",
  },
  {
    q: "Can I request revisions?",
    a: "Yes — each tier includes at least one round of revisions. We want you to love what we create.",
  },
  {
    q: "How long is the commitment?",
    a: "Most clients stay with us for 6–12 months, but our subscriptions are month-to-month.",
  },
];

export default function ContactFaq() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
      <h2 className="text-3xl font-black text-navy md:text-4xl">
        Got Questions?{" "}
        <span className="text-teal">We&apos;ve Got Answers.</span>
      </h2>

      <dl className="mt-10 space-y-8">
        {faqs.map(({ q, a }) => (
          <div key={q}>
            <dt className="text-base font-bold text-teal">{q}</dt>
            <dd className="mt-2 text-base leading-relaxed text-gray-700">{a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
