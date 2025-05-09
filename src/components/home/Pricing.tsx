// Pricing section: tiered cards for packages
export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "One-off fee",
      desc: "Perfect for small businesses needing a beautiful, fast brochure site. Includes design, build, and launch.",
      highlight: false,
      value: "From €1.200 - Get a quote.",
    },
    {
      name: "Growth",
      price: "Monthly retainer",
      desc: "Site plus basic SEO and quarterly updates. Ideal for growing businesses who want ongoing support and visibility.",
      highlight: true,
      value: "From €2.500 - Book a free consultation.",
    },
    {
      name: "Dominance",
      price: "Higher retainer",
      desc: "Site plus SEO, ad-funnel landing pages, monthly CRO & maintenance. For those who want to dominate their market.",
      highlight: false,
      value: "Get found on Google. Stay updated. Keep growing.",
    },
  ];
  return (
    <section className="py-16 bg-white" aria-label="Pricing & Packages">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-calsans text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-charcoal)]">
          Pricing & Revenue-Boosting Packages
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex-1 bg-gray-50 rounded-lg shadow p-6 flex flex-col border-2 ${
                tier.highlight
                  ? "border-[color:var(--color-neon-green)] scale-105"
                  : "border-transparent"
              }`}
            >
              <h3 className="font-calsans font-semibold text-xl mb-2 text-[color:var(--color-charcoal)]">
                {tier.name}
              </h3>
              <div className="font-calsans text-lg font-bold mb-2">
                {tier.price}
              </div>
              <p className="text-sm text-gray-700 mb-4">{tier.desc}</p>
              <p className="text-sm font-semibold text-[color:var(--color-charcoal)] mb-4">
                {tier.value}
              </p>
              {tier.highlight && (
                <span className="inline-block bg-[color:var(--color-neon-green)] text-[color:var(--color-charcoal)] px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  Free first month of maintenance
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-sm text-gray-700">
          <span className="font-semibold text-[color:var(--color-charcoal)]">
            Referral Rewards:
          </span>{" "}
          €200 credit for every new client you introduce.
        </div>
      </div>
    </section>
  );
}
