import React from "react";
import { useTranslation } from "react-i18next";

// Services section: lists main offerings with blurbs and links
export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50" aria-label="Services">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-charcoal)]">
          {t("services.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Custom Websites */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">
              {t("services.items.customWebsites.title")}
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              {t("services.items.customWebsites.description")}
            </p>
            <a
              href="#"
              className="text-[color:var(--color-charcoal)] hover:underline text-sm font-medium mt-auto"
            >
              {t("services.items.customWebsites.learnMore")}
            </a>
          </div>
          {/* Web Applications */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">
              {t("services.items.webApplications.title")}
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              {t("services.items.webApplications.description")}
            </p>
            <a
              href="#"
              className="text-[color:var(--color-charcoal)] hover:underline text-sm font-medium mt-auto"
            >
              {t("services.items.webApplications.learnMore")}
            </a>
          </div>
          {/* e-Commerce */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">
              {t("services.items.ecommerce.title")}
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              {t("services.items.ecommerce.description")}
            </p>
            <a
              href="#"
              className="text-[color:var(--color-charcoal)] hover:underline text-sm font-medium mt-auto"
            >
              {t("services.items.ecommerce.learnMore")}
            </a>
          </div>
          {/* Add-On Growth Packs */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">
              {t("services.items.addOnGrowth.title")}
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              {t("services.items.addOnGrowth.description")}
            </p>
            <a
              href="#"
              className="text-[color:var(--color-charcoal)] hover:underline text-sm font-medium mt-auto"
            >
              {t("services.items.addOnGrowth.learnMore")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
