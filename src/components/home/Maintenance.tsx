import React from "react";

// Maintenance & Care Plans section
export default function Maintenance() {
  return (
    <section className="py-16 bg-gray-50" aria-label="Maintenance & Care Plans">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-calsans text-2xl md:text-3xl font-bold text-center mb-8 text-[color:var(--color-electric-blue)]">
          Maintenance & Care Plans
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Security patches</li>
          <li>Backups</li>
          <li>Uptime monitoring</li>
          <li>Content edits</li>
          <li>Priority support</li>
        </ul>
        <div className="text-center text-lg font-semibold text-[color:var(--color-charcoal)]">
          From{" "}
          <span className="text-[color:var(--color-electric-blue)]">
            €79/mo
          </span>{" "}
          — cheaper than a daily coffee!
        </div>
      </div>
    </section>
  );
}
