import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    let cancelled = false;
    const scroll = async () => {
      const hash = window.location.hash.slice(1);
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        return;
      }
      await document.fonts.ready;
      window.requestAnimationFrame(() => {
        if (cancelled) return;
        let id: string;
        try {
          id = decodeURIComponent(hash);
        } catch {
          return;
        }
        const target = document.getElementById(id);
        if (!target) return;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 100,
          behavior: reducedMotion ? "instant" as ScrollBehavior : "smooth",
        });
      });
    };
    void scroll();
    window.addEventListener("hashchange", scroll);
    return () => {
      cancelled = true;
      window.removeEventListener("hashchange", scroll);
    };
  }, [location]);
  return null;
}
