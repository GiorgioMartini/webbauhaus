import Heading from "../ui/Heading";

// Value proposition section: Why WebBauHaus?
export default function WhyWebBauHaus() {
  return (
    <section className="py-16 bg-white" aria-label="Why WebBauHaus value props">
      <div className="max-w-5xl mx-auto px-4">
        <Heading level={2} className="text-center mb-10">
          Why Web BauHaus?
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Speed */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-4xl" role="img" aria-label="Rocket">
              🚀
            </span>
            <Heading level={3} className="mb-2">
              Launch in 7 Days
            </Heading>
            <p className="text-sm text-gray-700">
              From kickoff to launch in just one week. No delays, no drama —
              just results, fast.
            </p>
          </div>
          {/* End-to-End */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-4xl" role="img" aria-label="Workflow">
              🔄
            </span>
            <Heading level={3} className="mb-2">
              Design → Code → Deploy → Maintain
            </Heading>
            <p className="text-sm text-gray-700">
              We handle every step, so you can focus on your business. One
              partner, total peace of mind.
            </p>
          </div>
          {/* ROI Focus */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-4xl" role="img" aria-label="Chart">
              📈
            </span>
            <Heading level={3} className="mb-2">
              Sites Engineered to Convert & Rank
            </Heading>
            <p className="text-sm text-gray-700">
              Every site is built for speed, SEO, and sales — so you get more
              leads and more clients.
            </p>
          </div>
        </div>
        {/* Satisfaction or Money Back Badge */}
        <div className="flex justify-center mt-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[color:var(--color-neon-green)] text-[color:var(--color-charcoal)] font-semibold shadow">
            <span className="mr-2" role="img" aria-label="Shield">
              🛡️
            </span>
            Satisfaction or Money Back
          </span>
        </div>
      </div>
    </section>
  );
}
