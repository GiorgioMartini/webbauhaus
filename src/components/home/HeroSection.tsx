import Heading from "../ui/Heading";

// Hero section with animated background and main CTAs
export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[color:var(--color-electric-blue)]/10 to-[color:var(--color-neon-green)]/10 py-16"
      aria-label="Hero section"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}
      />
      {/* Black overlay */}
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <Heading level={1} className="mb-2 text-white">
          Lightning-Fast Websites That Turn Clicks into Clients.
        </Heading>
        <p className="text-lg md:text-xl text-white max-w-xl">
          Launch in 7 days. One studio, one expert, every step: design, code,
          deploy, and maintain — all done for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-semibold text-white bg-[color:var(--color-electric-blue)] hover:bg-[color:var(--color-neon-green)] hover:text-[color:var(--color-charcoal)] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--color-neon-green)]"
          >
            Get a Free 5-Minute Quote
          </a>
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-full font-semibold border-2 border-[color:var(--color-electric-blue)] text-[color:var(--color-electric-blue)] bg-white hover:bg-[color:var(--color-electric-blue)] hover:text-white transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[color:var(--color-electric-blue)]"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
