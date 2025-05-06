import Heading from "../ui/Heading";
import { useTranslation } from "react-i18next";

// Value proposition section: Why WebBauHaus?
export default function WhyWebBauHaus() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white" aria-label="Why WebBauHaus value props">
      <div className="max-w-5xl mx-auto px-4">
        <Heading level={2} className="text-center mb-10">
          {t("whyWebBauHaus.title")}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Speed */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-4xl" role="img" aria-label="Rocket">
              🚀
            </span>
            <Heading level={3} className="mb-2">
              {t("whyWebBauHaus.features.speed.title")}
            </Heading>
            <p className="text-sm text-gray-700">
              {t("whyWebBauHaus.features.speed.description")}
            </p>
          </div>
          {/* End-to-End */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-4xl" role="img" aria-label="Workflow">
              🔄
            </span>
            <Heading level={3} className="mb-2">
              {t("whyWebBauHaus.features.endToEnd.title")}
            </Heading>
            <p className="text-sm text-gray-700">
              {t("whyWebBauHaus.features.endToEnd.description")}
            </p>
          </div>
          {/* ROI Focus */}
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-4xl" role="img" aria-label="Chart">
              📈
            </span>
            <Heading level={3} className="mb-2">
              {t("whyWebBauHaus.features.roi.title")}
            </Heading>
            <p className="text-sm text-gray-700">
              {t("whyWebBauHaus.features.roi.description")}
            </p>
          </div>
        </div>
        {/* Satisfaction or Money Back Badge */}
        <div className="flex justify-center mt-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[color:var(--color-neon-green)] text-[color:var(--color-charcoal)] font-semibold shadow">
            <span className="mr-2" role="img" aria-label="Shield">
              🛡️
            </span>
            {t("whyWebBauHaus.guarantee")}
          </span>
        </div>
      </div>
    </section>
  );
}
