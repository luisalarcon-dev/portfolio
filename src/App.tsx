import { ArrowDown, ArrowUpRight, CodeXml, Pause, Play } from "lucide-react";
import { useState } from "react";
import { Header } from "./components/Header";
import { PortfolioSections } from "./components/PortfolioSections";
import { MotionEffects } from "./components/MotionEffects";
export default function App() {
  const [motionPaused, setMotionPaused] = useState(false);
  return (
    <div className={motionPaused ? "portfolio motion-paused" : "portfolio"}>
      <a className="skip-link" href="#main">
        Skip to content
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
                Available for freelance projects
              </span>
              <span className="eyebrow hero-location">BOLIVIA / WORLDWIDE</span>
            </div>
            <div className="hero-copy">
              <p className="hero-intro">
                <span className="intro-line" />
                HI, I'M LUIS ALARCÓN
              </p>
              <h1 id="hero-title">
                <span className="title-line">Full Stack</span>
                <span className="title-line">
                  <em>Developer</em>
                  <span className="title-period">.</span>
                </span>
              </h1>
              <div className="hero-summary">
                <span className="hero-code" aria-hidden="true">
                  &lt;/&gt;
                </span>
                <div>
                  <p>
                    Ideas into code.
                    <br />
                    <strong>Digital products with purpose.</strong>
                  </p>
                  <span className="hero-specialties">
                    Web · Software · Mobile · AI-Assisted Development
                  </span>
                </div>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  View Projects{" "}
                  <span>
                    <ArrowUpRight size={19} />
                  </span>
                </a>
                <a className="button button-secondary" href="#contact">
                  Let's Work Together <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="hero-art-caption" aria-hidden="true">
              <span className="caption-cross">+</span>
              <span>
                CREATIVE THINKING.
                <br />
                ENGINEERED INTO REALITY.
              </span>
            </div>
            <div className="hero-bottom">
              <a href="#work">
                <span className="scroll-icon">
                  <ArrowDown size={17} />
                </span>
                SCROLL TO EXPLORE
              </a>
              <span>LUIS FERNANDO ALARCÓN CÁCERES</span>
              <button
                type="button"
                className="motion-toggle"
                onClick={() => setMotionPaused(!motionPaused)}
                aria-pressed={motionPaused}
                aria-label={
                  motionPaused ? "Enable animations" : "Pause animations"
                }
              >
                {motionPaused ? <Play size={14} /> : <Pause size={14} />}
                <span>{motionPaused ? "Motion off" : "Motion on"}</span>
              </button>
            </div>
          </div>
        </section>
        <div className="expertise-strip" aria-label="Development focus">
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
                {item}
              </span>
            ))}
          </div>
        </div>
        <PortfolioSections />
      </main>
      <footer className="container footer">
        <div className="footer-top">
          <a className="brand" href="#main" aria-label="Back to top">
            <span className="monogram">
              LA<span>.</span>
            </span>
            <span className="brand-name">
              LUIS ALARCÓN<span>DEV SOFTWARE</span>
            </span>
          </a>
          <a href="#main">
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>Luis Alarcón Dev Software — Ideas · Code · Real Solutions</p>
          <span>
            <CodeXml size={15} />
            Thoughtfully built. Based in Bolivia.
          </span>
        </div>
      </footer>
    </div>
  );
}
