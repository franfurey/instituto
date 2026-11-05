import { Link } from "wouter";
import manifestoHeroImg from "@assets/3a45098b-a9ea-46b5-ab54-bbe7ba51e987_1783028511227.png";
import "./ManifestoBanner.css";

const EIXOS_CORES = ["#C21E4F", "#F04B21", "#3A8A3E", "#3956A8", "#5B3A29", "#8A5A2E", "#B08968"];

export default function ManifestoBanner() {
  return (
    <section id="manifesto-banner" className="manifesto-banner">
      <Link
        href="/projetos/manifesto"
        className="manifesto-banner__image-link"
        aria-label="Abrir a página do Manifesto Econômico da Marcha das Mulheres Negras"
        data-testid="link-manifesto-banner-capa"
      >
        <img
          src={manifestoHeroImg}
          alt="Capa do Manifesto Econômico da Marcha das Mulheres Negras"
          className="manifesto-banner__image"
          loading="lazy"
        />
      </Link>

      <div className="manifesto-banner__stripe" aria-hidden="true">
        {EIXOS_CORES.map((cor) => (
          <span key={cor} style={{ backgroundColor: cor }} />
        ))}
      </div>

      <div className="manifesto-banner__bar">
        <div className="wrap manifesto-banner__layout">
          <div className="manifesto-banner__copy">
            <p className="txt-rotulo manifesto-banner__label">o manifesto</p>
            <h2 className="manifesto-banner__title">
              Um projeto político e ético para reorganizar a economia a partir da vida
            </h2>
            <p className="txt-corpo manifesto-banner__description">
              Construído a partir de uma escuta multimodal que envolveu mais de 300 mulheres negras, o Manifesto Econômico da Marcha das Mulheres Negras ocupa um lugar central em nossa estratégia.
            </p>
          </div>
          <Link href="/projetos/manifesto" className="manifesto-banner__button" data-testid="btn-manifesto-banner">
            Conheça o manifesto →
          </Link>
        </div>
      </div>
    </section>
  );
}
