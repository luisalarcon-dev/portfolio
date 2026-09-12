import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import { stack } from "../data/portfolio";
import { useLanguage } from "../i18n";
const details = [
  ["The language of your next idea.", "Programming languages"],
  ["Interfaces people enjoy using.", "Interface & interaction"],
  ["The logic behind the experience.", "Logic & services"],
  ["A foundation for connected products.", "Data & persistence"],
  ["Built for life on the move.", "Cross-platform apps"],
  ["A workflow built with intention.", "Development workflow"],
];
const icons: Record<string, string> = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  Python: "python",
  PHP: "php",
  HTML5: "html5",
  CSS3: "css3",
  React: "react",
  "Tailwind CSS": "tailwindcss",
  "Node.js": "nodejs",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  "SQL Server": "microsoftsqlserver",
  Prisma: "prisma",
  "React Native": "reactnative",
  Expo: "expo",
  Git: "git",
  GitHub: "github",
  Docker: "docker",
  npm: "npm-wordmark",
  pnpm: "pnpm",
  Turborepo: "turbo",
  "VS Code": "vscode",
  "Visual Studio": "visualstudio",
};
export function TechStack() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(1);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const select = (next: number) => {
    setSelected(next);
    buttons.current[next]?.focus();
  };
  const navigate = (event: KeyboardEvent, index: number) => {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % stack.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index + stack.length - 1) % stack.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stack.length - 1;
    else return;
    event.preventDefault();
    select(next);
  };
  return (
    <div className="tech-studio">
      <div className="tech-studio-bar">
        <span>
          <span className="studio-dot" />
          {t("Explore my toolkit")}
        </span>
        <span>{t("LA / DEVELOPMENT SYSTEM")}</span>
      </div>
      <div className="tech-studio-body">
        <div className="tech-selector">
          <p className="eyebrow">{t("SELECT A LAYER")}</p>
          <div
            role="tablist"
            aria-label={t("Technology categories")}
            aria-orientation="vertical"
          >
            {stack.map((group, i) => (
              <button
                type="button"
                role="tab"
                id={"tech-tab-" + i}
                aria-selected={selected === i}
                aria-controls={"tech-panel-" + i}
                tabIndex={selected === i ? 0 : -1}
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                onKeyDown={(event) => navigate(event, i)}
                onClick={() => setSelected(i)}
                key={group.name}
              >
                <span className="tech-tab-number">0{i + 1}</span>
                <span>{t(group.name)}</span>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <div className="tech-selector-note">
            <Layers size={23} />
            <span>
              Web. Software.
              <br />
              {t("Mobile. AI.")}
            </span>
          </div>
        </div>
        {stack.map((group, i) => (
          <div
            key={group.name}
            className="tech-panel"
            id={"tech-panel-" + i}
            role="tabpanel"
            aria-labelledby={"tech-tab-" + i}
            hidden={selected !== i}
            tabIndex={0}
          >
            <div className="tech-panel-head">
              <div>
                <p className="eyebrow">{t(details[i][1])}</p>
                <h3>{t(details[i][0])}</h3>
              </div>
              <span className="tech-panel-index">0{i + 1}</span>
            </div>
            <div className="technology-grid">
              {group.items.map((name, j) => (
                <article
                  className="technology-tile"
                  key={name}
                  style={{ animationDelay: j * 45 + "ms" }}
                >
                  {icons[name] ? (
                    <img
                      src={
                        import.meta.env.BASE_URL +
                        "icons/" +
                        icons[name] +
                        ".svg"
                      }
                      alt=""
                      width="42"
                      height="42"
                      loading="lazy"
                    />
                  ) : (
                    <span className="api-monogram" aria-hidden="true">
                      {name === "SQL" ? "SQL" : "{ }"}
                    </span>
                  )}
                  <strong>{name}</strong>
                  <span>
                    {t(
                      i === 0
                        ? "Language"
                        : i === 1
                          ? name === "React"
                            ? "UI library"
                            : name === "HTML5"
                              ? "Markup"
                              : "Styling"
                          : i === 2
                            ? name === "REST APIs"
                              ? "API design"
                              : name === "Node.js"
                                ? "Runtime"
                                : "Framework"
                            : i === 3
                              ? name === "Prisma"
                                ? "Data modeling"
                                : "Database"
                              : i === 4
                                ? "Mobile development"
                                : "Development tool",
                    )}
                  </span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
