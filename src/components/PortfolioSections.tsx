import { Services } from "./Services";
import { TechStack } from "./TechStack";
import { useLanguage } from "../i18n";
import {
  ArrowUpRight,
  Sparkles,
  CodeXml,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { profile, projects, aiTasks } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
const process = [
  ["Discover", "Understand the problem, users and requirements."],
  ["Design", "Shape the structure, interface and technical approach."],
  ["Build", "Turn the agreed direction into working software."],
  ["Test", "Check behavior, usability and responsive layouts."],
  ["Deploy", "Launch the product and document the handoff."],
];
export function PortfolioSections() {
  const { t } = useLanguage();
  return (
    <>
      <section id="work" className="container section">
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title={t("Built with purpose.")}
          description="A closer look at the products I'm shaping — from focused web experiences to connected systems."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <section id="services" className="section section-surface">
        <div className="container">
          <SectionHeading
            number="02"
            label="WHAT I DO"
            title={t("Your next idea. Let's build it.")}
            description="From a first online presence to the software behind your operations."
          />
          <Services />
        </div>
      </section>
      <section id="stack" className="container section">
        <SectionHeading
          number="03"
          label="TECHNOLOGY STACK"
          title={t("The tools behind the build.")}
          description="A connected toolkit across the interface, server, database and mobile experience."
        />
        <TechStack />
        <div className="ai-panel">
          <div className="ai-copy">
            <span className="ai-icon">
              <Sparkles size={23} />
            </span>
            <p className="eyebrow">{t("HUMAN DIRECTION. AI SUPPORT.")}</p>
            <h3>{t("AI-Assisted Development")}</h3>
            <p>
              {t(
                "I use AI coding agents to support the development process, with human judgment guiding the decisions and reviewing the output.",
              )}
            </p>
            <div className="ai-tools">
              {["ChatGPT", "Codex", "Cursor", "Antigravity"].map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
          <div className="ai-tasks">
            {aiTasks.map((task, i) => (
              <div key={task}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {t(task)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="section section-surface">
        <div className="container about-grid">
          <div>
            <p className="eyebrow text-cyan">{t("04 / BEHIND THE CODE")}</p>
            <h2>
              {t("A builder's mindset.")}
              <br />
              <span className="muted">{t("A human approach.")}</span>
            </h2>
            <span className="location">
              <MapPin size={16} />
              {t("Bolivia")}
            </span>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              {t(
                "I'm Luis Fernando Alarc\u00F3n C\u00E1ceres, a Full Stack Developer building under",
              )}{" "}
              <span>{t("Luis Alarc\u00F3n Dev Software.")}</span>
            </p>
            <p>
              {t(
                "I turn ideas into websites, software and mobile experiences. My approach connects clear interfaces with thoughtful technical foundations, keeping the purpose of the product in view.",
              )}
            </p>
            <p>
              {t(
                "I value readable code, direct communication and practical solutions. AI supports my workflow; understanding the problem and making the decisions remain my responsibility.",
              )}
            </p>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeXml size={17} />
              {t("Explore my GitHub")}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="container section" id="process">
        <SectionHeading
          number="05"
          label="HOW I WORK"
          title={t("A clear path from idea to launch.")}
        />
        <ol className="process-grid">
          {process.map(([name, text], i) => (
            <li key={name}>
              <div className="process-step">
                <span>0{i + 1}</span>
                {i < 4 && (
                  <span className="process-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
              <h3>{t(name)}</h3>
              <p>{t(text)}</p>
            </li>
          ))}
        </ol>
      </section>
      <section id="contact" className="container contact-section">
        <div className="contact-top">
          <p className="eyebrow text-cyan">{t("06 / LET'S MAKE IT HAPPEN")}</p>
          <span className="availability">
            <i />
            {t("Open to freelance projects")}
          </span>
        </div>
        <h2>
          {t("Have an idea?")}
          <br />
          <span className="gradient-text">{t("Let's give it a future.")}</span>
        </h2>
        <p className="contact-description">
          {t(
            "Tell me what you're building, what you need and where you'd like to go.",
          )}
        </p>
        <div className="direct-contact">
          <a
            className="whatsapp-contact"
            href={"https://wa.me/" + profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={28} />
            <span>
              <strong>{t("Chat on WhatsApp")}</strong>
              <span>+591 67671435 · {t("Bolivia · Entel")}</span>
            </span>
            <ArrowUpRight size={25} />
          </a>
          <a className="call-contact" href={"tel:+" + profile.whatsapp}>
            <Phone size={23} />
            <span>
              {t("Call me")}
              <strong>+591 67671435</strong>
            </span>
          </a>
        </div>
        <div className="contact-links">
          <a className="email-link" href={"mailto:" + profile.email}>
            <Mail size={22} />
            <span>{profile.email}</span>
            <ArrowUpRight size={24} />
          </a>
          <a
            className="github-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeXml size={20} />
            {t("GitHub")}
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </>
  );
}
