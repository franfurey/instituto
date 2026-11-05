import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from "react";
import { SimboloNoFront } from "@/components/SimboloNoFront";
import "./AberturaSecao.css";

const WORDS = ["outras vozes", "conhecimentos", "perspectivas"] as const;
const PAIRS = [
  ["var(--color-brand-roxo)", "var(--color-brand-dourado)"],
  ["var(--color-brand-dourado)", "var(--color-brand-preto)"],
  ["var(--color-brand-vinho)", "var(--color-brand-bg)"],
  ["var(--color-brand-preto)", "var(--color-brand-orquidea)"],
  ["var(--color-brand-orquidea)", "var(--color-brand-preto)"],
  ["var(--color-brand-vermelho)", "var(--color-brand-preto)"],
  ["var(--color-brand-bg)", "var(--color-brand-roxo)"],
  ["var(--color-brand-preto)", "var(--color-brand-dourado)"],
  ["var(--color-brand-roxo)", "var(--color-brand-orquidea)"],
] as const;

const CELLS = [
  { viewBox: "-170 -120 1038 1204", preserve: "xMidYMid meet" },
  { viewBox: "220 200 300 420", preserve: "xMidYMid slice" },
  { viewBox: "-170 -120 1038 1204", preserve: "xMidYMid meet" },
  { viewBox: "0 0 420 520", preserve: "xMidYMid slice", outline: true },
  { viewBox: "-170 -120 1038 1204", preserve: "xMidYMid meet" },
  { viewBox: "380 460 318 500", preserve: "xMidYMid slice" },
  { viewBox: "-170 -120 1038 1204", preserve: "xMidYMid meet" },
  { viewBox: "220 200 300 420", preserve: "xMidYMid slice" },
  { viewBox: "-170 -120 1038 1204", preserve: "xMidYMid meet", outline: true },
] as const;

function useWordSize(titleRef: RefObject<HTMLHeadingElement | null>, rowRef: RefObject<HTMLSpanElement | null>) {
  const [size, setSize] = useState<number>();
  useLayoutEffect(() => {
    const title = titleRef.current;
    const row = rowRef.current;
    if (!title || !row) return;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let disposed = false;
    const measure = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const css = getComputedStyle(title);
        const base = Math.min(52, Math.max(34, window.innerWidth * 0.036));
        context.font = `${css.fontStyle} ${css.fontWeight} ${base}px ${css.fontFamily}`;
        const widest = Math.max(...WORDS.map((word) => context.measureText(word).width));
        const chip = row.querySelector<HTMLElement>(".abertura-word");
        const chipCss = chip && getComputedStyle(chip);
        const padding = chipCss ? parseFloat(chipCss.paddingLeft) + parseFloat(chipCss.paddingRight) : 24;
        const available = Math.max(0, row.clientWidth - padding - 2);
        const firstLine = context.measureText("uma economia justa").width;
        const desktopFit = window.innerWidth > 768 && firstLine
          ? base * Math.max(0, title.clientWidth - 2) / firstLine
          : base;
        if (widest && available) setSize(Math.min(base, base * available / widest, desktopFit));
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    measure();
    void document.fonts.ready.then(measure);
    document.fonts.addEventListener("loadingdone", measure);
    window.addEventListener("resize", measure);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", measure);
      window.removeEventListener("resize", measure);
    };
  }, [titleRef, rowRef]);
  return size;
}

export function AberturaSecao() {
  const [step, setStep] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rowRef = useRef<HTMLSpanElement>(null);
  const wordSize = useWordSize(titleRef, rowRef);
  const word = WORDS[step % WORDS.length];

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;
    const stop = () => {
      if (timer !== undefined) window.clearInterval(timer);
      timer = undefined;
    };
    const sync = () => {
      stop();
      if (motion.matches) {
        setStep(0);
      } else if (document.visibilityState === "visible") {
        timer = window.setInterval(() => setStep((current) => current + 1), 2400);
      }
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <section className="abertura" aria-labelledby="abertura-titulo">
      <div className="abertura-main">
        <div className="abertura-copy">
          <p className="txt-rotulo abertura-label">novos futuros econômicos</p>
          <h1 id="abertura-titulo" ref={titleRef} className="txt-h1 abertura-title" style={wordSize ? { fontSize: `${wordSize}px` } : undefined}>
            <span className="sr-only">
              Uma economia justa precisa de outras vozes, conhecimentos e perspectivas
            </span>
            <span className="abertura-title-visible" aria-hidden="true">
              <span className="abertura-fixed"><span className="abertura-first-line">uma <span className="abertura-fixed-end">economia justa</span></span><br className="abertura-desktop-break" />{" "}<span className="abertura-fixed-end">precisa de</span></span>
              <span ref={rowRef} className="abertura-word-row">
                <span key={word} className={`abertura-word word-${step % WORDS.length}`}>
                  {word}
                </span>
              </span>
            </span>
          </h1>

          <div className="abertura-indicators" aria-hidden="true">
            {WORDS.map((_, index) => (
              <span key={index} className={`abertura-indicator ${step % WORDS.length === index ? "is-active" : ""} indicator-${index}`} />
            ))}
          </div>

          <p className="txt-destaque abertura-description" data-testid="text-hero-intro">
            O <strong>Instituto NoFront</strong> atua para ampliar a presença e a influência de perspectivas feministas negras e antirracistas nas agendas econômicas no Brasil e no Sul Global.
          </p>
          <div className="abertura-actions">
            <a className="abertura-button abertura-button-secondary" href="#como-atuamos">
              Como atuamos
            </a>
          </div>
        </div>

        <div className="abertura-mosaic" role="img" aria-label="Grafismo com o símbolo do Instituto NoFront repetido em blocos coloridos">
          {CELLS.map((cell, index) => {
            const pair = PAIRS[(index + step) % PAIRS.length];
            return (
              <div
                className={`abertura-cell abertura-cell-${index + 1}`}
                key={index}
                aria-hidden="true"
                style={{ backgroundColor: pair[0] }}
              >
                <SimboloNoFront
                  className="abertura-symbol"
                  cor={pair[1]}
                  contorno={"outline" in cell && cell.outline}
                  espessura={10}
                  viewBox={cell.viewBox}
                  preserveAspectRatio={cell.preserve}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="abertura-ribbon" aria-label="justiça econômica, racial e de gênero, sul global, bem viver, sustentabilidade da vida, redistribuição de recursos e poder">
        <div className="abertura-ribbon-track" aria-hidden="true">
          <span>justiça econômica, racial e de gênero ✦ sul global ✦ bem viver ✦ sustentabilidade da vida ✦ redistribuição de recursos e poder ✦ </span>
          <span>justiça econômica, racial e de gênero ✦ sul global ✦ bem viver ✦ sustentabilidade da vida ✦ redistribuição de recursos e poder ✦ </span>
        </div>
      </div>
    </section>
  );
}
