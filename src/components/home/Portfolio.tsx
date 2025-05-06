import { useTranslation } from "react-i18next";

// Example portfolio data (replace with CMS integration later)
const projects = [
  {
    key: "alpenTruck",
    img: "portfolio1.jpg",
    rating: 5,
    link: "https://alpentruck.com/",
  },
  {
    key: "silvesterZagato",
    img: "portfolio2.jpg",
    rating: 5,
    link: "https://www.sylvesterzagato.com/",
  },
  {
    key: "doneJuan",
    img: "portfolio3.jpg",
    rating: 4,
    link: "https://www.donejuan.com/",
  },
];

// Portfolio section: carousel of projects
export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <section
      className="py-16 bg-gray-50"
      aria-label="Featured Portfolio"
      id="portfolio"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-calsans text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-charcoal)]">
          {t("portfolio.title")}
        </h2>
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
          {projects.map((project) => (
            <div
              key={project.key}
              className="min-w-[320px] max-w-xs bg-white rounded-lg shadow p-4 flex flex-col snap-center"
            >
              <img
                src={project.img}
                alt={
                  t(`portfolio.projects.${project.key}.title`) + " screenshot"
                }
                className="rounded mb-3 w-full h-40 object-cover"
                loading="lazy"
              />
              <h3 className="font-calsans font-semibold text-lg mb-1 text-[color:var(--color-charcoal)]">
                {t(`portfolio.projects.${project.key}.title`)}
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                {t(`portfolio.projects.${project.key}.description`)}
              </p>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < project.rating ? "text-yellow-400" : "text-gray-300"
                    }
                    aria-label={i < project.rating ? "star" : "empty star"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-[color:var(--color-charcoal)] hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("portfolio.viewLive")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
