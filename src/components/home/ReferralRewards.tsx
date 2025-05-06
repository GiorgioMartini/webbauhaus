import React from "react";

// Referral Rewards section: highlights the referral program
export default function ReferralRewards() {
  return (
    <section className="py-8 bg-white" aria-label="Referral Rewards">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[color:var(--color-electric-blue)] mb-2">
          Referral Rewards
        </h2>
        <p className="text-gray-700 text-base mb-2">
          Love your new site? Refer a friend or business and get{" "}
          <span className="font-semibold text-[color:var(--color-neon-green)]">
            €200 credit
          </span>{" "}
          for every new client you introduce.
        </p>
        <span className="inline-block bg-[color:var(--color-neon-green)] text-[color:var(--color-charcoal)] px-3 py-1 rounded-full text-xs font-semibold mt-2">
          Earn extra passive income
        </span>
      </div>
    </section>
  );
}
