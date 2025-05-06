// Example portfolio data (replace with CMS integration later)
const projects = [
  {
    title: "Alpen Truck",
    img: "portfolio1.jpg",
    desc: "The Alpen Truck needed a modern site to boost local orders. We delivered a mobile-first redesign, integrated online catering inquiry form, and improved SEO. Result: 2x online sales in 3 months.",
    rating: 5,
    link: "https://alpentruck.com/",
  },
  {
    title: "Silvester Zagato",
    img: "portfolio2.jpg",
    desc: "Helped artist Silvestre Sagato establish a professional online presence by building a custom Shopify store where he can easily showcase and sell his artwork, giving him full control over his portfolio and reaching a wider audience.",
    rating: 5,
    link: "https://www.sylvesterzagato.com/",
  },
  {
    title: "Done Juan",
    img: "portfolio3.jpg",
    desc: "Built a custom webapp for the Done Juan Team who wanted to build an MVP for their productivity app which validated their idea and is now being used by the team.",
    rating: 4,
    link: "https://www.donejuan.com/",
  },
];

// Portfolio section: carousel of projects
export default function Portfolio() {
  return (
    <section
      className="py-16 bg-gray-50"
      aria-label="Featured Portfolio"
      id="portfolio"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-calsans text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-electric-blue)]">
          Featured Portfolio
        </h2>
        <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
          {projects.map((project) => (
            <div
              key={project.title}
              className="min-w-[320px] max-w-xs bg-white rounded-lg shadow p-4 flex flex-col snap-center"
            >
              <img
                src={project.img}
                alt={project.title + " screenshot"}
                className="rounded mb-3 w-full h-40 object-cover"
                loading="lazy"
              />
              <h3 className="font-calsans font-semibold text-lg mb-1 text-[color:var(--color-electric-blue)]">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mb-2">{project.desc}</p>
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
                className="text-[color:var(--color-electric-blue)] hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
