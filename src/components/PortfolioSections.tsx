import {
  ArrowUpRight,
  Globe2,
  PanelsTopLeft,
  Workflow,
  ShoppingBag,
  Smartphone,
  Database,
  Wrench,
  Sparkles,
  CodeXml,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { profile, projects, stack, aiTasks } from "../data/portfolio";
import { SectionHeading, Tags } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
const services = [
  {
    name: "Websites",
    text: "A clear digital presence, built around your business and the people you serve.",
    icon: Globe2,
    className: "service-featured",
  },
  {
    name: "Landing Pages",
    text: "Focused pages that turn an offer into a clear next step.",
    icon: PanelsTopLeft,
  },
  {
    name: "Full Stack Systems",
    text: "Connected interfaces, business logic and data for your workflows.",
    icon: Workflow,
  },
  {
    name: "E-commerce",
    text: "Online stores designed for straightforward product discovery and shopping.",
    icon: ShoppingBag,
  },
  {
    name: "Mobile Apps",
    text: "Mobile experiences built with React Native and Expo.",
    icon: Smartphone,
  },
  {
    name: "APIs / Databases",
    text: "Structured data and APIs that connect your product.",
    icon: Database,
  },
  {
    name: "Maintenance",
    text: "Bug fixes, updates and improvements that keep your software moving.",
    icon: Wrench,
  },
];
const process = [
  ["Discover", "Understand the problem, users and requirements."],
  ["Design", "Shape the structure, interface and technical approach."],
  ["Build", "Turn the agreed direction into working software."],
  ["Test", "Check behavior, usability and responsive layouts."],
  ["Deploy", "Launch the product and document the handoff."],
];
export function PortfolioSections() {
  return (
    <>
      <section id="work" className="container section">
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title="Built with purpose."
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
            title="Your next idea. Let's build it."
            description="From a first online presence to the software behind your operations."
          />
          <div className="services-grid">
            {services.map(({ name, text, icon: Icon, className }) => (
              <article
                key={name}
                className={"service-card " + (className ?? "")}
              >
                <Icon size={24} strokeWidth={1.4} />
                <h3>{name}</h3>
                <p>{text}</p>
                {className && (
                  <a href="#contact">
                    Let's discuss your website <ArrowUpRight size={18} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="stack" className="container section">
        <SectionHeading
          number="03"
          label="TECHNOLOGY STACK"
          title="The tools behind the build."
          description="A connected toolkit across the interface, server, database and mobile experience."
        />
        <div className="stack-grid">
          {stack.map((group, i) => (
            <article className="stack-group" key={group.name}>
              <span className="stack-number">0{i + 1}</span>
              <div>
                <h3>{group.name}</h3>
                <Tags items={group.items} />
              </div>
            </article>
          ))}
        </div>
        <div className="ai-panel">
          <div className="ai-copy">
            <span className="ai-icon">
              <Sparkles size={23} />
            </span>
            <p className="eyebrow">HUMAN DIRECTION. AI SUPPORT.</p>
            <h3>AI-Assisted Development</h3>
            <p>
              I use AI coding agents to support the development process, with
              human judgment guiding the decisions and reviewing the output.
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
                {task}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="section section-surface">
        <div className="container about-grid">
          <div>
            <p className="eyebrow text-cyan">04 / BEHIND THE CODE</p>
            <h2>
              A builder's mindset.
              <br />
              <span className="muted">A human approach.</span>
            </h2>
            <span className="location">
              <MapPin size={16} />
              Bolivia
            </span>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I'm Luis Fernando Alarcón Cáceres, a Full Stack Developer building
              under <span>Luis Alarcón Dev Software.</span>
            </p>
            <p>
              I turn ideas into websites, software and mobile experiences. My
              approach connects clear interfaces with thoughtful technical
              foundations, keeping the purpose of the product in view.
            </p>
            <p>
              I value readable code, direct communication and practical
              solutions. AI supports my workflow; understanding the problem and
              making the decisions remain my responsibility.
            </p>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeXml size={17} />
              Explore my GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="container section" id="process">
        <SectionHeading
          number="05"
          label="HOW I WORK"
          title="A clear path from idea to launch."
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
              <h3>{name}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section id="contact" className="container contact-section">
        <div className="contact-top">
          <p className="eyebrow text-cyan">06 / LET'S MAKE IT HAPPEN</p>
          <span className="availability">
            <i />
            Open to freelance projects
          </span>
        </div>
        <h2>
          Have an idea?
          <br />
          <span className="gradient-text">Let's give it a future.</span>
        </h2>
        <p className="contact-description">
          Tell me what you're building, what you need and where you'd like to
          go.
        </p>
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
            GitHub <ArrowUpRight size={19} />
          </a>
          {profile.whatsapp && (
            <a
              className="github-link"
              href={"https://wa.me/" + profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
              WhatsApp <ArrowUpRight size={19} />
            </a>
          )}
        </div>
      </section>
    </>
  );
}
