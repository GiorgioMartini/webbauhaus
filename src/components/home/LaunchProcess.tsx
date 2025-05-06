import React from "react";
import { useTranslation } from "react-i18next";

// 1-Week Launch Process section: horizontal timeline
export default function LaunchProcess() {
  const { t } = useTranslation();

  const steps = [
    {
      day: t("launchProcess.steps.day1"),
      label: t("launchProcess.steps.kickoff"),
    },
    {
      day: t("launchProcess.steps.day2"),
      label: t("launchProcess.steps.wireframe"),
    },
    {
      day: t("launchProcess.steps.day3"),
      label: t("launchProcess.steps.design"),
    },
    {
      day: t("launchProcess.steps.day4"),
      label: t("launchProcess.steps.build"),
    },
    {
      day: t("launchProcess.steps.day5"),
      label: t("launchProcess.steps.test"),
    },
    {
      day: t("launchProcess.steps.day6"),
      label: t("launchProcess.steps.launch"),
    },
    {
      day: t("launchProcess.steps.day7"),
      label: t("launchProcess.steps.optimize"),
    },
  ];

  return (
    <section className="py-16 bg-white" aria-label="1-Week Launch Process">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-calsans text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-charcoal)]">
          {t("launchProcess.title")}
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-8 w-full">
            {steps.map((step, idx) => (
              <div key={step.day} className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[color:var(--color-neon-green)] text-white flex items-center justify-center font-bold mb-2">
                  {idx + 1}
                </div>
                <span className="text-xs font-semibold text-[color:var(--color-charcoal)]">
                  {step.day}
                </span>
                <span className="text-xs text-gray-700">{step.label}</span>
                {idx < steps.length - 1 && (
                  <div className="w-12 h-1 bg-[color:var(--color-neon-green)] my-2 mx-auto rounded" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-700 max-w-xl">
            {t("launchProcess.contact")}
          </p>
        </div>
      </div>
    </section>
  );
}
