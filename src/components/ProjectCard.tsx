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
          <span>{dental ? "INTERFACE STUDY" : "SYSTEM ARCHITECTURE"}</span>
          <span>0{dental ? "1" : "2"} / SELECTED WORK</span>
        </div>
        {dental ? (
          <div
            className="dental-preview"
            aria-label="Illustrative interface concept, not a live project screenshot"
          >
            <div className="preview-browser">
              <i />
              <i />
              <i />
              <span>Dental Clinic / Website concept</span>
            </div>
            <div className="dental-nav">
              <span>
                <Plus size={20} />
                DENTAL / CARE
              </span>
              <span>CARE WITH CLARITY</span>
            </div>
            <div className="dental-content">
              <span className="dental-kicker">
                A BETTER KIND OF DENTAL EXPERIENCE
              </span>
              <strong>
                A brighter smile.
                <br />
                <em>A healthier you.</em>
              </strong>
              <p>A welcoming digital experience, centered on the patient.</p>
              <span className="dental-bottom">
                Discover our approach <ArrowUpRight size={16} />
              </span>
            </div>
            <div className="dental-features">
              <span>01 / Clear information</span>
              <span>02 / Thoughtful design</span>
              <span>03 / Easy navigation</span>
            </div>
          </div>
        ) : (
          <div
            className="market-preview"
            aria-label="EncuentraPro conceptual application architecture"
          >
            <div className="market-heading">
              <span className="market-logo">
                ep<span>.</span>
              </span>
              <div>
                <strong>EncuentraPro</strong>
                <span>PEOPLE. SKILLS. POSSIBILITIES.</span>
              </div>
            </div>
            <div className="architecture">
              <div>
                <Layers size={23} />
                <strong>Experience</strong>
                <span>React · TypeScript</span>
              </div>
              <i />
              <div>
                <Braces size={23} />
                <strong>Application</strong>
                <span>NestJS · REST API</span>
              </div>
              <i />
              <div>
                <Database size={23} />
                <strong>Foundation</strong>
                <span>PostgreSQL · Prisma</span>
              </div>
            </div>
            <div className="market-foot">
              <LockKeyhole size={13} />
              <span>Private project</span>
              <span className="market-progress">In development</span>
            </div>
          </div>
        )}
        <span className="visual-caption">
          {dental
            ? "Conceptual interface direction"
            : "Conceptual architecture · Not a live product screenshot"}
        </span>
      </div>
      <div className="project-body">
        <span className="project-index" aria-hidden="true">
          0{dental ? "1" : "2"}
        </span>
        <div className="project-meta">
          <span className="eyebrow">{project.category}</span>
          <span className={"project-status " + (dental ? "" : "private")}>
            {dental ? <Sparkles size={12} /> : <LockKeyhole size={12} />}{" "}
            {project.status}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Tags items={project.stack} />
        <details className="project-details">
          <summary>
            Project overview <ChevronDown size={17} />
          </summary>
          <div>
            <p>
              {dental
                ? "An independent healthcare website concept. The visual above explores an interface direction; it is not evidence of a finished client delivery."
                : "An independent full stack marketplace currently in development. Source code is private, and no public demo is available yet."}
            </p>
            <p>
              {dental
                ? "Focus: service information, visual hierarchy and a responsive web experience."
                : "Technical scope: React interface, NestJS backend, PostgreSQL data layer, Prisma and Docker."}
            </p>
          </div>
        </details>
        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo <ArrowUpRight size={16} />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              Repository <ArrowUpRight size={16} />
            </a>
          )}
          {!project.repoUrl && !project.demoUrl && (
            <span>
              {dental
                ? "Demo & repository links coming soon"
                : "Private source code · Development in progress"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
