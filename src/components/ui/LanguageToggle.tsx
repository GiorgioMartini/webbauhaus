import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "@tanstack/react-router";

interface SearchParams {
  lang?: string;
  [key: string]: string | undefined;
}

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    // Update URL with new language parameter
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("lang", lng);

    // Navigate to the same path with updated query parameters
    navigate({
      to: location.pathname,
      search: (prev: SearchParams) => ({ ...prev, lang: lng }),
    });

    // Change the language
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("de")}
        className={`text-2xl px-1 py-0 rounded ${
          i18n.language === "de"
            ? "bg-gray-200 text-gray-700"
            : "bg-[color:var(--color-neon-green)] text-white"
        }`}
      >
        🇩🇪
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`text-2xl px-1 py-0 rounded ${
          i18n.language === "en"
            ? "bg-gray-200 text-gray-700"
            : "bg-[color:var(--color-neon-green)] text-white"
        }`}
      >
        🇺🇸
      </button>
      <button
        onClick={() => changeLanguage("es")}
        className={`text-2xl px-1 py-0 rounded ${
          i18n.language === "es"
            ? "bg-gray-200 text-gray-700"
            : "bg-[color:var(--color-neon-green)] text-white"
        }`}
      >
        🇪🇸
      </button>
    </div>
  );
}
