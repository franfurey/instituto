import { useEffect, useRef } from "react";
import "./QuemSomosSecao.css";

const temas = ["trabalho", "renda", "cuidado", "orçamento público", "política fiscal", "política monetária", "desenvolvimento", "distribuição de poder"];
const seloTemas = "trabalho • renda • cuidado • orçamento público • política fiscal • política monetária • desenvolvimento • poder •";

function Selo() {
  return (
    <svg className="qs-seal" viewBox="0 0 320 320" role="img" aria-label={seloTemas}>
      <defs><path id="qs-text-circle" d="M160,160 m-131,0 a131,131 0 1,1 262,0 a131,131 0 1,1 -262,0" /></defs>
      <circle cx="160" cy="160" r="150" fill="none" stroke="white" strokeWidth="1.5" />
      <text className="qs-seal-type" textLength="810" lengthAdjust="spacingAndGlyphs"><textPath href="#qs-text-circle" startOffset="0%">{seloTemas}</textPath></text>
      <circle className="qs-seal-core" cx="160" cy="160" r="72" />
      <g className="qs-globe" fill="none" strokeWidth="4">
        <circle cx="160" cy="160" r="45" />
        <ellipse cx="160" cy="160" rx="20" ry="45" />
        <path d="M117 160h86M126 137h68M126 183h68" />
      </g>
    </svg>
  );
}

export function QuemSomosSecao() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("qs-ready");
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("qs-ready");
        observer.disconnect();
      }
    }, { threshold: 0.14 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="quem-somos" className="qs-section" ref={sectionRef} aria-label="Quem somos">
      <div className="qs-top">
        <div className="qs-claim">
          <span className="qs-label txt-rotulo qs-item">quem somos</span>
          <span className="qs-small qs-item">não apenas como</span>
          <div className="qs-dismissed qs-item"><span>destinatárias de políticas públicas</span></div>
          <svg className="qs-down qs-item" viewBox="0 0 34 42" aria-hidden="true"><path d="M17 2v34m-12-12 12 12 12-12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" /></svg>
          <span className="qs-small qs-gold qs-item">mas reconhecidas como</span>
          <h2 className="qs-recognized qs-item">produtoras de conhecimento e formuladoras de alternativas</h2>
        </div>
        <div className="qs-seal-panel qs-item"><Selo /></div>
      </div>

      <div className="qs-intro-row">
        <p className="qs-intro txt-destaque qs-item">Quando mulheres negras são reconhecidas como produtoras de conhecimento e formuladoras de alternativas — e não apenas como destinatárias de políticas públicas — temas como trabalho, renda, cuidado, orçamento público, política fiscal, política monetária, desenvolvimento e distribuição de poder passam a ser compreendidos a partir de <strong>outras perguntas, evidências e prioridades.</strong></p>
      </div>

      <div className="qs-marquee" aria-label="Temas de atuação">
        <div className="qs-marquee-track" aria-hidden="true">
          {[0, 1].map((copy) => <div className="qs-marquee-group" key={copy}>{temas.map((tema, i) => <span className="qs-marquee-unit" key={`${copy}-${tema}`}><span>{tema}</span><b className={`qs-star qs-star-${i % 3}`}>✦</b></span>)}</div>)}
        </div>
      </div>

      <div className="qs-bottom">
        <article className="qs-purpose qs-item">
          <h3 className="txt-h3">nosso propósito</h3>
          <p className="txt-corpo">Nosso propósito não é apenas acrescentar recortes de raça e gênero a modelos econômicos já existentes. Queremos contribuir para a construção de uma economia orientada, desde sua formulação, pela justiça econômica, racial e de gênero, pela redistribuição de recursos e poder e, principalmente, <strong>pela sustentabilidade da vida.</strong></p>
        </article>
        <article className="qs-method qs-item">
          <svg className="qs-rings" viewBox="0 0 160 160" aria-hidden="true"><circle cx="160" cy="0" r="42"/><circle cx="160" cy="0" r="72"/><circle cx="160" cy="0" r="102"/></svg>
          <h3 className="txt-h3">como fazemos</h3>
          <p className="qs-method-lead txt-corpo">Para isso,</p>
          <ul className="txt-corpo">
            <li><span className="qs-tag qs-tag-purple">fortalecemos</span><span> a produção intelectual de mulheres negras,</span></li>
            <li><span className="qs-tag qs-tag-red">democratizamos</span><span> o acesso ao conhecimento econômico e</span></li>
            <li><span className="qs-tag qs-tag-black">ampliamos</span><span> a participação da comunidade negra nos espaços onde narrativas, políticas e decisões são formuladas.</span></li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default QuemSomosSecao;
