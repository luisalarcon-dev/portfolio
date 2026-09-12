import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "./i18n";
import { spanish } from "./data/spanish";
function initialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const explicit = new URLSearchParams(window.location.search).get("lang");
  if (explicit === "es" || explicit === "en") return explicit;
  try {
    const saved = localStorage.getItem("portfolio-language");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* Storage is optional. */
  }
  return (navigator.languages?.[0] || navigator.language || "en")
    .toLowerCase()
    .startsWith("es")
    ? "es"
    : "en";
}
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setValue] = useState<Language>(initialLanguage);
  const setLanguage = (next: Language) => {
    setValue(next);
    try {
      localStorage.setItem("portfolio-language", next);
    } catch {
      /* Private browsing can block storage. */
    }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  };
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "es"
        ? "Luis Alarcón Dev Software | Desarrollador Full Stack"
        : "Luis Alarcón Dev Software | Full Stack Developer";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        language === "es"
          ? "Luis Fernando Alarcón Cáceres. Desarrollo web, software, aplicaciones móviles y desarrollo asistido por IA desde Bolivia."
          : "Luis Fernando Alarcón Cáceres. Web, software, mobile apps and AI-assisted development, based in Bolivia.",
      );
  }, [language]);
  const t = (text: string) =>
    language === "es"
      ? (spanish[text.replace(/\s+/g, " ").trim()] ?? text)
      : text;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
