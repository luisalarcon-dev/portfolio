import { useLanguage } from "./i18n";
import {
  ArrowDown,
  ArrowUpRight,
  CodeXml,
  Pause,
  Play,
  MessageCircle,
} from "lucide-react";
import { profile } from "./data/portfolio";
import { useState } from "react";
import { Header } from "./components/Header";
import { PortfolioSections } from "./components/PortfolioSections";
import { MotionEffects } from "./components/MotionEffects";
export default function App() {
  const { t } = useLanguage();
  const [motionPaused, setMotionPaused] = useState(false);
  return (
    <div className={motionPaused ? "portfolio motion-paused" : "portfolio"}>
      <a className="skip-link" href="#main">
        {t("Skip to content")}
      </a>
      <MotionEffects paused={motionPaused} />
      <Header />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true">
            <img
              src={import.meta.env.BASE_URL + "images/hero-ribbon.webp"}
              width="1536"
              height="1024"
              alt=""
              fetchPriority="high"
            />
          </div>
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-top">
              <span className="availability">
                <i />
                {t("Available for freelance projects")}
              </span>
              <span className="eyebrow hero-location">
                {t("BOLIVIA / WORLDWIDE")}
              </span>
            </div>
            <div className="hero-copy">
              <p className="hero-intro">
                <span className="intro-line" />
                {t("HI, I'M LUIS ALARC\u00D3N")}
              </p>
              <h1 id="hero-title">
                <span className="title-line">{t("Full Stack")}</span>
                <span className="title-line">
                  <em>{t("Developer")}</em>
                  <span className="title-period">.</span>
                </span>
              </h1>
              <div className="hero-summary">
                <span className="hero-code" aria-hidden="true">
                  {"</>"}
                </span>
                <div>
                  <p>
                    {t("Ideas into code.")}
                    <br />
                    <strong>{t("Digital products with purpose.")}</strong>
                  </p>
                  <span className="hero-specialties">
                    {t(
                      "Web \u00B7 Software \u00B7 Mobile \u00B7 AI-Assisted Development",
                    )}
                  </span>
                </div>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  {t("View Projects")}{" "}
                  <span>
                    <ArrowUpRight size={19} />
                  </span>
                </a>
                <a className="button button-secondary" href="#contact">
                  {t("Let's Work Together")}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-art-caption" aria-hidden="true">
              <span className="caption-cross">+</span>
              <span>
                {t("CREATIVE THINKING.")}
                <br />
                {t("ENGINEERED INTO REALITY.")}
              </span>
            </div>
            <div className="hero-bottom">
              <a href="#work">
                <span className="scroll-icon">
                  <ArrowDown size={17} />
                </span>
                {t("SCROLL TO EXPLORE")}
              </a>
              <span>{t("LUIS FERNANDO ALARC\u00D3N C\u00C1CERES")}</span>
              <button
                type="button"
                className="motion-toggle"
                onClick={() => setMotionPaused(!motionPaused)}
                aria-pressed={motionPaused}
                aria-label={
                  motionPaused ? t("Enable animations") : t("Pause animations")
                }
              >
                {motionPaused ? <Play size={14} /> : <Pause size={14} />}
                <span>{motionPaused ? t("Motion off") : t("Motion on")}</span>
              </button>
            </div>
          </div>
        </section>
        <div className="expertise-strip" aria-label={t("Development focus")}>
          <div className="container">
            {[
              "Web experiences",
              "Full stack systems",
              "Mobile applications",
              "AI-assisted workflow",
            ].map((item, i) => (
              <span key={item}>
                <span className="strip-symbol" aria-hidden="true">
                  {i % 2 === 0 ? "✳" : "+"}
                </span>
                {t(item)}
              </span>
            ))}
          </div>
        </div>
        <PortfolioSections />
      </main>
      <footer className="container footer">
        <div className="footer-top">
          <a className="brand" href="#main" aria-label={t("Back to top")}>
            <span className="monogram">
              {t("LA")}
              <span>.</span>
            </span>
            <span className="brand-name">
              {t("LUIS ALARC\u00D3N")}
              <span>{t("DEV SOFTWARE")}</span>
            </span>
          </a>
          <a href="#main">
            {t("Back to top")}
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            {t(
              "Luis Alarc\u00F3n Dev Software \u2014 Ideas \u00B7 Code \u00B7 Real Solutions",
            )}
          </p>
          <span>
            <CodeXml size={15} />
            {t("Thoughtfully built. Based in Bolivia.")}
          </span>
        </div>
      </footer>
      <a
        className="whatsapp-dock"
        href={"https://wa.me/" + profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("Contact Luis on WhatsApp")}
      >
        <MessageCircle size={23} />
        <span>WhatsApp</span>
        <span className="dock-dot" />
      </a>
    </div>
  );
}
