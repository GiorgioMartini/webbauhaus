import Heading from "../ui/Heading";
import { useTranslation } from "react-i18next";

// Hero section with animated background and main CTAs
export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[60vh] w-full overflow-hidden bg-gradient-to-br from-[color:var(--color-neon-green)]/10 to-[color:var(--color-neon-green)]/10 px-16"
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
      <div className="px-36 relative z-10 flex flex-col items-center text-center space-y-6">
        <Heading level={1} className="mb-2 text-white">
          {t("hero.title")}
        </Heading>
        <p className="text-lg md:text-xl text-white max-w-xl">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-semibold text-[color:var(--color-charcoal)] bg-[color:var(--color-neon-green)] hover:bg-white hover:text-[color:var(--color-charcoal)] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--color-neon-green)]"
          >
            {t("hero.cta.quote")}
          </a>
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-full font-semibold text-[color:var(--color-charcoal)] bg-white hover:bg-[color:var(--color-neon-green)] hover:text-[color:var(--color-charcoal)] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[color:var(--color-neon-green)]"
          >
            {t("hero.cta.portfolio")}
          </a>
        </div>
      </div>
    </section>
  );
}
