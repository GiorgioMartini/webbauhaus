import React from "react";

// Analytics Dashboard Add-On section
export default function AnalyticsAddOn() {
  return (
    <section
      className="py-8 bg-gray-50"
      aria-label="Analytics Dashboard Add-On"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[color:var(--color-electric-blue)] mb-2">
          Analytics Dashboard Add-On
        </h2>
        <p className="text-gray-700 text-base mb-2">
          Get a live KPI dashboard to track your website's performance, leads,
          and sales in real time. Available as a recurring SaaS add-on for all
          clients.
        </p>
        <span className="inline-block bg-[color:var(--color-electric-blue)] text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
          Live insights, anytime
        </span>
      </div>
    </section>
  );
}
