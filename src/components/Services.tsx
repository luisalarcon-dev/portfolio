import {
  ArrowUpRight,
  Workflow,
  PanelsTopLeft,
  Database,
  Wrench,
  Smartphone,
} from "lucide-react";
import { useLanguage } from "../i18n";
export function Services() {
  const { t } = useLanguage();
  const small = [
    {
      name: "Landing Pages",
      description: "Focused pages that turn an offer into a clear next step.",
      icon: PanelsTopLeft,
      code: "01 / WEB",
    },
    {
      name: "Full Stack Systems",
      description:
        "Connected interfaces, business logic and data for your workflows.",
      icon: Workflow,
      code: "02 / SOFTWARE",
    },
    {
      name: "Mobile Apps",
      description: "Mobile experiences built with React Native and Expo.",
      icon: Smartphone,
      code: "03 / MOBILE",
    },
    {
      name: "APIs / Databases",
      description: "Structured data and APIs that connect your product.",
      icon: Database,
      code: "04 / DATA",
    },
    {
      name: "Maintenance",
      description:
        "Bug fixes, updates and improvements that keep your software moving.",
      icon: Wrench,
      code: "05 / SUPPORT",
    },
  ];
  return (
    <div className="service-gallery">
      <div className="service-showcases">
        <article className="service-showcase service-card">
          <img
            src={import.meta.env.BASE_URL + "images/applications.webp"}
            width="1200"
            height="800"
            alt=""
            loading="lazy"
          />
          <div className="service-showcase-shade" />
          <div className="service-showcase-copy">
            <p className="eyebrow">{t("DIGITAL EXPERIENCES")}</p>
            <h3>{t("From screen to experience.")}</h3>
            <span className="service-category">{t("Websites")}</span>
            <p>
              {t(
                "A clear digital presence, built around your business and the people you serve.",
              )}
            </p>
            <a href="#contact">
              {t("Explore the possibilities")}
              <ArrowUpRight size={20} />
            </a>
          </div>
          <span className="service-topline">
            {t("Web · Mobile · Responsive")}
          </span>
        </article>
        <article className="service-showcase service-card">
          <img
            src={import.meta.env.BASE_URL + "images/commerce.webp"}
            width="1200"
            height="800"
            alt=""
            loading="lazy"
          />
          <div className="service-showcase-shade" />
          <div className="service-showcase-copy">
            <p className="eyebrow">{t("DIGITAL COMMERCE")}</p>
            <h3>{t("A storefront with your identity.")}</h3>
            <span className="service-category">{t("E-commerce")}</span>
            <p>
              {t(
                "Online stores designed for straightforward product discovery and shopping.",
              )}
            </p>
            <a href="#contact">
              {t("Explore the possibilities")}
              <ArrowUpRight size={20} />
            </a>
          </div>
          <span className="service-topline">
            {t("Interfaces · Products · Checkout")}
          </span>
        </article>
      </div>
      <div className="service-capabilities">
        {small.map(({ name, description, icon: Icon, code }) => (
          <article className="capability service-card" key={name}>
            <div className="capability-top">
              <span>{t(code)}</span>
              <Icon size={24} strokeWidth={1.4} />
            </div>
            <h3>{t(name)}</h3>
            <p>{t(description)}</p>
            <a href="#contact" aria-label={t(name) + " — " + t("Let's talk")}>
              <ArrowUpRight size={22} />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
