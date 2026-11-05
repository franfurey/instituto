import { useLayoutEffect, type RefObject } from "react";

/**
 * Keeps the official type scale unless a complete word cannot fit its column.
 * Uses the loaded font's real metrics instead of clipping or hyphenating copy.
 */
export function useFitHeadings(root: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const node = root.current;
    if (!node) return;
    const headings = Array.from(node.querySelectorAll<HTMLElement>("h1,h2,h3,h4"));
    const context = document.createElement("canvas").getContext("2d");
    if (!context) return;
    let frame = 0;
    let disposed = false;
    const fit = () => {
      if (disposed) return;
      for (const heading of headings) {
        const css = getComputedStyle(heading);
        const base = parseFloat(css.getPropertyValue("--heading-size")) || parseFloat(css.fontSize);
        const available = heading.clientWidth - parseFloat(css.paddingLeft) - parseFloat(css.paddingRight);
        if (!available || !base) continue;
        context.font = `${css.fontStyle} ${css.fontWeight} ${base}px ${css.fontFamily}`;
        let text = heading.innerText;
        if (css.textTransform === "uppercase") text = text.toLocaleUpperCase("pt-BR");
        if (css.textTransform === "lowercase") text = text.toLocaleLowerCase("pt-BR");
        const spacing = parseFloat(css.letterSpacing) || 0;
        const widest = Math.max(0, ...text.split(/\s+/).map((word) =>
          context.measureText(word).width + Math.max(0, word.length - 1) * spacing,
        ));
        const fitted = widest > available ? Math.max(14, Math.floor(base * available / widest * 99) / 100) : base;
        const value = `${fitted}px`;
        if (heading.style.getPropertyValue("--heading-fit") !== value) {
          heading.style.setProperty("--heading-fit", value);
        }
      }
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(fit);
    };
    const observer = new ResizeObserver(schedule);
    for (const heading of headings) {
      observer.observe(heading);
      if (heading.parentElement) observer.observe(heading.parentElement);
    }
    fit();
    void document.fonts.ready.then(schedule);
    document.fonts.addEventListener("loadingdone", schedule);
    window.addEventListener("resize", schedule);
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      document.fonts.removeEventListener("loadingdone", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [root]);
}
