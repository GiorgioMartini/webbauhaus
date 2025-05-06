import React from "react";

// 1-Week Launch Process section: horizontal timeline
export default function LaunchProcess() {
  const steps = [
    { day: "Day 1", label: "Kickoff Call" },
    { day: "Day 2", label: "Wireframe" },
    { day: "Day 3", label: "Design" },
    { day: "Day 4", label: "Build" },
    { day: "Day 5", label: "Test" },
    { day: "Day 6", label: "Launch" },
    { day: "Day 7", label: "Optimize" },
  ];
  return (
    <section className="py-16 bg-white" aria-label="1-Week Launch Process">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-calsans text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-electric-blue)]">
          Our 1-Week Launch Process
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-row flex-wrap justify-center gap-4 md:gap-8 w-full">
            {steps.map((step, idx) => (
              <div key={step.day} className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[color:var(--color-electric-blue)] text-white flex items-center justify-center font-bold mb-2">
                  {idx + 1}
                </div>
                <span className="text-xs font-semibold text-[color:var(--color-electric-blue)]">
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
            Single point of contact —{" "}
            <span className="font-bold text-[color:var(--color-electric-blue)]">
              Giorgio
            </span>{" "}
            — for total peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}
