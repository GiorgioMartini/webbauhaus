// Referral Rewards section: highlights the referral program
export default function ReferralRewards() {
  return (
    <section className="py-8 bg-white" aria-label="Referral Rewards">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-calsans text-xl md:text-2xl font-bold text-[color:var(--color-charcoal)] mb-2">
          Referral Rewards
        </h2>
        <p className="text-gray-700 text-base mb-2">
          Love your new site? Refer a friend or business and get{" "}
          <span className="font-semibold text-[color:var(--color-charcoal)]">
            €200 credit
          </span>{" "}
          for every new client you introduce.
        </p>
      </div>
    </section>
  );
}
