import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = ["Work", "Services", "Stack", "About", "Contact"];
export function Header() {
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
          aria-label="Luis Alarcón Dev Software home"
        >
          <span className="monogram">
            LA<span>.</span>
          </span>
          <span className="brand-name">
            LUIS ALARCÓN<span>DEV SOFTWARE</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a
              href={"#" + link.toLowerCase()}
              key={link}
              aria-current={
                active === link.toLowerCase() ? "location" : undefined
              }
            >
              {link}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Let's talk <ArrowUpRight size={17} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
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
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a
            href={"#" + link.toLowerCase()}
            key={link}
            onClick={() => setOpen(false)}
          >
            {link}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </nav>
    </header>
  );
}
