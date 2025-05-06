// Example testimonials (replace with CMS integration later)
const testimonials = [
  {
    name: "Simon Payr",
    text: "Giorgio delivered our new site in just 6 days. We saw more bookings instantly! Giorgio made everything easy.",
    video: null,
  },
  {
    name: "Silvester Zagato",
    text: "Giorgio was able to create a professional online presence for me and my artwork. I am very happy with the result and the process was smooth and easy.",
    video: null,
  },
  {
    name: "Antoine Iturbe",
    text: "The process was smooth and the results exceeded our expectations. Highly recommended!",
    video: null,
  },
];

// Testimonials & Social Proof section
export default function Testimonials() {
  return (
    <section
      className="py-16 bg-white"
      aria-label="Testimonials & Social Proof"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-calsans text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-charcoal)]">
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-1 bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center"
            >
              {t.video ? (
                <video
                  controls
                  className="w-full h-40 rounded mb-3"
                  preload="none"
                >
                  <source src={t.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p className="text-gray-700 text-sm mb-3">“{t.text}”</p>
              )}
              <div className="font-semibold text-[color:var(--color-charcoal)]">
                {t.name}
              </div>
            </div>
          ))}
        </div>
        {/* Aggregate Google rating badge */}
        <div className="flex justify-center mt-8">
          <span className="font-calsans inline-flex items-center px-4 py-2 rounded-full bg-yellow-400 text-[color:var(--color-charcoal)] font-semibold shadow">
            <span className="mr-2">★ 5.0</span> Google Reviews
          </span>
        </div>
      </div>
    </section>
  );
}
