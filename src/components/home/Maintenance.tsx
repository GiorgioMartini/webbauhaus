// Maintenance & Care Plans section
import { Shield, Database, Activity, Edit, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Maintenance() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Shield,
      title: t("maintenance.services.security.title"),
      description: t("maintenance.services.security.description"),
    },
    {
      icon: Database,
      title: t("maintenance.services.backups.title"),
      description: t("maintenance.services.backups.description"),
    },
    {
      icon: Activity,
      title: t("maintenance.services.monitoring.title"),
      description: t("maintenance.services.monitoring.description"),
    },
    {
      icon: Edit,
      title: t("maintenance.services.content.title"),
      description: t("maintenance.services.content.description"),
    },
    {
      icon: Headphones,
      title: t("maintenance.services.support.title"),
      description: t("maintenance.services.support.description"),
    },
  ];

  return (
    <section className="py-16 bg-gray-50" aria-label={t("maintenance.title")}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-calsans text-2xl md:text-3xl font-bold text-center mb-12 text-[color:var(--color-charcoal)]">
          {t("maintenance.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[color:var(--color-charcoal)] bg-opacity-10 rounded-lg">
                  <service.icon className="w-6 h-6 text-[color:var(--color-neon-green)]" />
                </div>
                <h3 className="text-lg font-semibold text-[color:var(--color-charcoal)]">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-sm">
            <span className="text-lg font-semibold text-[color:var(--color-charcoal)]">
              {t("maintenance.pricing.from")}{" "}
              <span className="text-[color:var(--color-charcoal)]">
                {t("maintenance.pricing.amount")}
              </span>{" "}
              {t("maintenance.pricing.comparison")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
