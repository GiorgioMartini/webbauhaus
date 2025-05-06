// Helper to get date 14 days from now
function getOfferEndDate() {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function OfferBanner() {
  return (
    <div className="w-full bg-[color:var(--color-electric-blue)] text-white text-center py-2 px-4 font-semibold">
      <span role="img" aria-label="Lightning">
        ⚡
      </span>{" "}
      Limited-Time Offer:{" "}
      <span className="text-[color:var(--color-neon-green)]">10% off</span> for
      sign-ups before <span className="underline">{getOfferEndDate()}</span>!
    </div>
  );
}
