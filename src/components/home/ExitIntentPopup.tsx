import React from "react";

// Exit-Intent Pop-Up placeholder (no JS logic yet)
export default function ExitIntentPopup() {
  // In a real app, this would show on exit intent
  return (
    <div className="hidden" aria-hidden="true">
      {/* This is a placeholder for the exit-intent pop-up logic */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h3 className="text-xl font-bold text-[color:var(--color-charcoal)] mb-2">
            Wait! Special Bundle Offer
          </h3>
          <p className="text-gray-700 mb-4">
            Bundle your accelerated launch with a monthly care plan and save
            more. Get in touch to unlock this exclusive deal!
          </p>
          <button className="px-6 py-2 rounded-full font-semibold text-white bg-[color:var(--color-neon-green)] hover:bg-[color:var(--color-neon-green)] hover:text-[color:var(--color-charcoal)] transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--color-neon-green)]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
