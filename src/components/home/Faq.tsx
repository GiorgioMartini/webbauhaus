import React, { useState } from "react";

// FAQ data
const faqs = [
  {
    q: "How much does a website cost?",
    a: "Pricing depends on your needs. Starter sites are a one-off fee, while Growth and Dominance packages are monthly retainers. Get a free quote in 5 minutes!",
  },
  {
    q: "Who owns the code?",
    a: "You own 100% of your website and code. No lock-in, ever.",
  },
  {
    q: "Can I use WordPress or another CMS?",
    a: "Yes! We can build with your preferred CMS or recommend the best fit for your business.",
  },
  {
    q: "Where is my site hosted?",
    a: "We deploy to fast, secure cloud platforms like Vercel or Netlify. You always have access.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Absolutely. We're happy to sign an NDA for your peace of mind.",
  },
  {
    q: "How many design revisions do I get?",
    a: "We include up to 3 rounds of design revisions in every project.",
  },
  {
    q: "How fast is support?",
    a: "Priority support is included in all care plans. Most requests are handled same-day.",
  },
];

// FAQ Accordion section
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-white" aria-label="FAQ">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-electric-blue)]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-4 py-3 font-semibold text-[color:var(--color-electric-blue)] bg-gray-50 hover:bg-gray-100 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                {faq.q}
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`px-4 py-3 text-gray-700 text-sm bg-white transition-all duration-200 ${
                  open === i ? "block" : "hidden"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
