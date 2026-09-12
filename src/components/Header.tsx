import { useLanguage } from "../i18n";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = ["Work", "Services", "Stack", "About", "Contact"];
export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    links.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#main"
          className="brand"
          aria-label={t("Luis Alarc\u00F3n Dev Software home")}
        >
          <span className="monogram">
            {t("LA")}
            <span>.</span>
          </span>
          <span className="brand-name">
            {t("LUIS ALARC\u00D3N")}
            <span>{t("DEV SOFTWARE")}</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label={t("Main navigation")}>
          {links.map((link) => (
            <a
              href={"#" + link.toLowerCase()}
              key={link}
              aria-current={
                active === link.toLowerCase() ? "location" : undefined
              }
            >
              {t(link)}
            </a>
          ))}
        </nav>
        <div
          className="language-switch"
          role="group"
          aria-label={language === "es" ? "Idioma del sitio" : "Site language"}
        >
          <button
            type="button"
            lang="es"
            aria-label="Español"
            aria-pressed={language === "es"}
            onClick={() => setLanguage("es")}
          >
            ES
          </button>
          <button
            type="button"
            lang="en"
            aria-label="English"
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
        <a className="header-contact" href="#contact">
          {t("Let's talk")}
          <ArrowUpRight size={17} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={open ? t("Close navigation") : t("Open navigation")}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        hidden={!open}
        aria-label={t("Mobile navigation")}
      >
        {links.map((link) => (
          <a
            href={"#" + link.toLowerCase()}
            key={link}
            onClick={() => setOpen(false)}
          >
            {t(link)}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </nav>
    </header>
  );
}
