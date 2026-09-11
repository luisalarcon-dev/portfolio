import { useEffect } from "react";
export function MotionEffects({ paused }: { paused: boolean }) {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = root.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--scroll-progress",
        String(distance > 0 ? window.scrollY / distance : 0),
      );
      root.style.setProperty(
        "--hero-offset",
        (paused || reduced.matches ? 0 : Math.min(window.scrollY * 0.16, 120)) +
          "px",
      );
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const pointer = (event: PointerEvent) => {
      if (paused || reduced.matches || event.pointerType !== "mouse") return;
      const hero = document.querySelector<HTMLElement>(".hero");
      if (!hero || window.scrollY > window.innerHeight) return;
      hero.style.setProperty(
        "--pointer-x",
        (event.clientX / window.innerWidth - 0.5) * 16 + "px",
      );
      hero.style.setProperty(
        "--pointer-y",
        (event.clientY / window.innerHeight - 0.5) * 10 + "px",
      );
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    window.addEventListener("pointermove", pointer, { passive: true });
    const elements = document.querySelectorAll<HTMLElement>(
      ".section-heading,.project-card,.service-card,.stack-group,.ai-panel,.about-grid,.process-grid li,.contact-section",
    );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    elements.forEach((element, i) => {
      element.style.setProperty("--reveal-delay", (i % 3) * 65 + "ms");
      element.classList.add("reveal");
      observer.observe(element);
    });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      window.removeEventListener("pointermove", pointer);
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("reveal"));
    };
  }, [paused]);
  return <div className="reading-progress" aria-hidden="true" />;
}
