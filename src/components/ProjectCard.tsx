import { useLanguage } from "../i18n";
import {
  ArrowUpRight,
  LockKeyhole,
  Layers,
  Braces,
  Database,
  Sparkles,
  Plus,
  ChevronDown,
} from "lucide-react";
import type { PointerEvent } from "react";
import type { Project } from "../data/portfolio";
import { Tags } from "./SectionHeading";
export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const dental = project.kind === "dental";
  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      event.currentTarget.closest(".motion-paused")
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--tilt-x",
      ((event.clientY - rect.top) / rect.height - 0.5) * -5 + "deg",
    );
    event.currentTarget.style.setProperty(
      "--tilt-y",
      ((event.clientX - rect.left) / rect.width - 0.5) * 5 + "deg",
    );
  };
  return (
    <article className={"project-card project-" + project.kind}>
      <div
        className={"project-visual " + project.kind}
        onPointerMove={tilt}
        onPointerLeave={(event) => {
          event.currentTarget.style.setProperty("--tilt-x", "0deg");
          event.currentTarget.style.setProperty("--tilt-y", "0deg");
        }}
      >
        <div className="project-visual-top">
          <span>
            {dental ? t("INTERFACE STUDY") : t("SYSTEM ARCHITECTURE")}
          </span>
          <span>
            0{dental ? "1" : "2"}
            {t("/ SELECTED WORK")}
          </span>
        </div>
        {dental ? (
          <div
            className="dental-preview"
            aria-label={t(
              "Illustrative interface concept, not a live project screenshot",
            )}
          >
            <div className="preview-browser">
              <i />
              <i />
              <i />
              <span>{t("Dental Clinic / Website concept")}</span>
            </div>
            <div className="dental-nav">
              <span>
                <Plus size={20} />
                {t("DENTAL / CARE")}
              </span>
              <span>{t("CARE WITH CLARITY")}</span>
            </div>
            <div className="dental-content">
              <span className="dental-kicker">
                {t("A BETTER KIND OF DENTAL EXPERIENCE")}
              </span>
              <strong>
                {t("A brighter smile.")}
                <br />
                <em>{t("A healthier you.")}</em>
              </strong>
              <p>
                {t("A welcoming digital experience, centered on the patient.")}
              </p>
              <span className="dental-bottom">
                {t("Discover our approach")}
                <ArrowUpRight size={16} />
              </span>
            </div>
            <div className="dental-features">
              <span>{t("01 / Clear information")}</span>
              <span>{t("02 / Thoughtful design")}</span>
              <span>{t("03 / Easy navigation")}</span>
            </div>
          </div>
        ) : (
          <div
            className="market-preview"
            aria-label={t("EncuentraPro conceptual application architecture")}
          >
            <div className="market-heading">
              <span className="market-logo">
                {t("ep")}
                <span>.</span>
              </span>
              <div>
                <strong>{t("EncuentraPro")}</strong>
                <span>{t("PEOPLE. SKILLS. POSSIBILITIES.")}</span>
              </div>
            </div>
            <div className="architecture">
              <div>
                <Layers size={23} />
                <strong>{t("Experience")}</strong>
                <span>{t("React \u00B7 TypeScript")}</span>
              </div>
              <i />
              <div>
                <Braces size={23} />
                <strong>{t("Application")}</strong>
                <span>{t("NestJS \u00B7 REST API")}</span>
              </div>
              <i />
              <div>
                <Database size={23} />
                <strong>{t("Foundation")}</strong>
                <span>{t("PostgreSQL \u00B7 Prisma")}</span>
              </div>
            </div>
            <div className="market-foot">
              <LockKeyhole size={13} />
              <span>{t("Private project")}</span>
              <span className="market-progress">{t("In development")}</span>
            </div>
          </div>
        )}
        <span className="visual-caption">
          {dental
            ? t("Conceptual interface direction")
            : t("Conceptual architecture \u00B7 Not a live product screenshot")}
        </span>
      </div>
      <div className="project-body">
        <span className="project-index" aria-hidden="true">
          0{dental ? "1" : "2"}
        </span>
        <div className="project-meta">
          <span className="eyebrow">{t(project.category)}</span>
          <span className={"project-status " + (dental ? "" : "private")}>
            {dental ? <Sparkles size={12} /> : <LockKeyhole size={12} />}{" "}
            {t(project.status)}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{t(project.description)}</p>
        <Tags items={project.stack} />
        <details className="project-details">
          <summary>
            {t("Project overview")}
            <ChevronDown size={17} />
          </summary>
          <div>
            <p>
              {dental
                ? t(
                    "An independent healthcare website concept. The visual above explores an interface direction; it is not evidence of a finished client delivery.",
                  )
                : t(
                    "An independent full stack marketplace currently in development. Source code is private, and no public demo is available yet.",
                  )}
            </p>
            <p>
              {dental
                ? t(
                    "Focus: service information, visual hierarchy and a responsive web experience.",
                  )
                : t(
                    "Technical scope: React interface, NestJS backend, PostgreSQL data layer, Prisma and Docker.",
                  )}
            </p>
          </div>
        </details>
        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              {t("Live demo")}
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              {t("Repository")}
              <ArrowUpRight size={16} />
            </a>
          )}
          {!project.repoUrl && !project.demoUrl && (
            <span>
              {dental
                ? t("Demo & repository links coming soon")
                : t("Private source code \u00B7 Development in progress")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
