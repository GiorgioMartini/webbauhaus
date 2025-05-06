import React from "react";

// Services section: lists main offerings with blurbs and links
export default function Services() {
  return (
    <section className="py-16 bg-gray-50" aria-label="Services">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[color:var(--color-electric-blue)]">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Custom Websites */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">Custom Websites</h3>
            <p className="text-sm text-gray-700 mb-2">
              Marketing sites, landing pages, and corporate portals — all
              tailored to your brand and goals. We build fast, beautiful, and
              mobile-friendly sites that make your business stand out and
              convert visitors into clients.
            </p>
            <a
              href="#"
              className="text-[color:var(--color-electric-blue)] hover:underline text-sm font-medium mt-auto"
            >
              Learn More
            </a>
          </div>
          {/* Web Applications */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">Web Applications</h3>
            <p className="text-sm text-gray-700 mb-2">
              Dashboards, booking engines, and client portals — we create custom
              web apps that automate, engage, and scale with your business.
              Secure, robust, and easy to use for you and your clients.
            </p>
            <a
              href="#"
              className="text-[color:var(--color-electric-blue)] hover:underline text-sm font-medium mt-auto"
            >
              Learn More
            </a>
          </div>
          {/* e-Commerce */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">e-Commerce</h3>
            <p className="text-sm text-gray-700 mb-2">
              Storefront setup, payments, and inventory links — we make selling
              online simple and seamless. Get a conversion-optimized shop that's
              easy to manage and ready to grow your revenue.
            </p>
            <a
              href="#"
              className="text-[color:var(--color-electric-blue)] hover:underline text-sm font-medium mt-auto"
            >
              Learn More
            </a>
          </div>
          {/* Add-On Growth Packs */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">Add-On Growth Packs</h3>
            <p className="text-sm text-gray-700 mb-2">
              SEO, copywriting, PPC-ready landing pages, analytics, and A/B
              testing — boost your site's traffic and conversions with our
              expert add-ons. Pick what you need, when you need it.
            </p>
            <a
              href="#"
              className="text-[color:var(--color-electric-blue)] hover:underline text-sm font-medium mt-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
