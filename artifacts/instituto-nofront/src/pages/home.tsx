import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import marchaMulheresNegrasImg from "@assets/marchamulheresnegras_1783012613504.jpg";
import apoieBgVideo from "@/assets/video/apoie-bg.mp4";
import apoieBgPoster from "@/assets/video/apoie-bg-poster.jpg";
import { PageShell } from "@/components/site/PageShell";
import { AberturaSecao } from "@/components/AberturaSecao";
import ManifestoBanner from "@/components/ManifestoBanner";
import QuemSomosSecao from "@/components/QuemSomosSecao";
import { useSeo } from "@/lib/use-seo";
import { SUBSTACK_URL } from "@/lib/site";

const ComoAtuamos = () => (
  <>
    <section id="como-atuamos" className="bg-brand-bg pt-[var(--sec-y)]">
      <div className="wrap pb-12">
        <div className="flex flex-col gap-4">
          <p className="txt-rotulo text-brand-roxo">como atuamos</p>
          <h2 className="txt-h2">Três frentes integradas</h2>
          <p className="txt-corpo max-w-[65ch]">
            Desenvolvemos nossa atuação em três frentes integradas: Pesquisa e Produção de Conhecimento, Incidência Política e Formação Econômica.
          </p>
        </div>
      </div>
      <div id="pilares" className="grid grid-cols-1 lg:grid-cols-3">
        <article className="bg-brand-vermelho flex flex-col px-6 py-10 lg:p-16 text-white" data-testid="pilar-pesquisa">
          <span className="txt-rotulo text-white/70">01</span>
          <h3 className="txt-h3 mt-4 text-white">Pesquisa e Produção de Conhecimento</h3>
          <p className="txt-corpo mt-6 max-w-[40ch] text-white">
            Produzimos pesquisas, análises e formulações sobre macroeconomia, política fiscal, política monetária, trabalho, cuidado e desenvolvimento a partir de perspectivas feministas negras, antirracistas e ancoradas no Sul Global.
          </p>
          <Link href="/sobre/nossa-visao#pesquisa" className="mt-auto pt-8 font-anton text-base text-white underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-current" data-testid="link-saiba-mais-pesquisa">
            Saiba mais →
          </Link>
        </article>
        <article className="bg-brand-orquidea flex flex-col px-6 py-10 lg:p-16 text-white" data-testid="pilar-incidencia">
          <span className="txt-rotulo text-white/70">02</span>
          <h3 className="txt-h3 mt-4 text-white">Incidência Política</h3>
          <p className="txt-corpo mt-6 max-w-[40ch] text-white">
            <strong>Transformamos conhecimento em ação pública.</strong> Mobilizamos pesquisas, dados, análises e propostas para influenciar narrativas, agendas institucionais, políticas públicas e processos de decisão.
          </p>
          <Link href="/sobre/nossa-visao#incidencia" className="mt-auto pt-8 font-anton text-base text-white underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-current" data-testid="link-saiba-mais-incidencia">
            Saiba mais →
          </Link>
        </article>
        <article className="bg-brand-preto flex flex-col px-6 py-10 lg:p-16 text-white" data-testid="pilar-formacao">
          <span className="txt-rotulo text-brand-dourado">03</span>
          <h3 className="txt-h3 mt-4 text-brand-dourado">Formação Econômica</h3>
          <p className="txt-corpo mt-6 max-w-[40ch] text-white">
            Promovemos formação econômica crítica e política para <strong>ampliar quem pode compreender, formular e disputar os rumos da economia.</strong>
          </p>
          <Link href="/sobre/nossa-visao#formacao" className="mt-auto pt-8 font-anton text-base text-brand-dourado underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-current" data-testid="link-saiba-mais-formacao">
            Saiba mais →
          </Link>
        </article>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/sobre/nossa-visao" className="pill-btn" style={{ height: 52, minHeight: 52, paddingInline: 24, backgroundColor: "var(--color-brand-roxo)", maxWidth: "calc(100vw - 48px)" }} data-testid="btn-conheca-nossa-visao">
          Conheça nossa visão de transformação
        </Link>
      </div>
    </section>
  </>
);

const PhotoBand = () => (
  <section
    className="parallax-bg w-full min-h-[50vh] md:min-h-[72vh] bg-brand-roxo/20 relative overflow-hidden"
    style={{ backgroundImage: `url(${marchaMulheresNegrasImg})` }}
    role="img"
    aria-label="Fotografia da Marcha das Mulheres Negras: mulheres negras caminhando juntas em uma manifestação de rua"
    data-testid="img-photoband-marcha"
  />
);

/** Vídeo decorativo: só toca automaticamente se a pessoa não preferir movimento reduzido. */
function VideoBg() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) v.pause();
      else v.play().catch(() => {});
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return (
    <video ref={ref} className="absolute inset-0 w-full h-full object-cover object-[center_75%] z-0" src={apoieBgVideo} poster={apoieBgPoster} loop muted playsInline preload="metadata" aria-hidden data-testid="video-apoie-bg" />
  );
}

const VideoCta = () => (
  <section className="on-dark relative min-h-[80dvh] md:min-h-[100dvh] flex flex-col items-center justify-center sec overflow-hidden bg-brand-preto">
    <VideoBg />
    <div className="absolute inset-0 bg-brand-preto/60 z-10" />
    <div className="relative z-20 wrap flex flex-col items-center text-center gap-8">
      <h2 className="txt-h1 text-white max-w-5xl drop-shadow-lg">
        Não queremos apenas ampliar quem participa do debate econômico.
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl">
        <p className="text-white txt-destaque md:text-left flex-1 font-medium">
          Queremos mudar os termos desse debate e os futuros que ele torna possíveis. Junte-se a nós.
        </p>
        <Link href="/contato" className="pill-btn-branco pill-btn-lg shrink-0" data-testid="btn-contact-support">
          Entre em contato <ArrowUpRight className="w-5 h-5" aria-hidden />
        </Link>
      </div>
    </div>
  </section>
);

const Insights = () => (
  <section id="insights" className="sec bg-brand-bg">
    <div className="wrap">
      <div className="mb-12">
        <h2 className="txt-h2 mb-6">Últimos insights & histórias</h2>
        <p className="txt-destaque text-brand-preto/80">Acompanhe nossas análises e publicações recentes.</p>
      </div>
      <div className="bg-white/70 rounded-3xl p-6 md:p-8 border border-brand-preto/5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-brand-preto/5">
          <h3 className="txt-h3">O Substack do Instituto</h3>
          <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="tap text-brand-roxo font-bold hover:underline gap-1" data-testid="link-substack-all">
            Ver todos <ArrowUpRight className="w-4 h-4" aria-hidden />
          </a>
        </div>
        {/* TODO: cards de publicações reais do Substack (títulos e datas verificáveis) */}
        <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-br from-brand-roxo to-brand-vinho text-white min-h-[224px] flex flex-col justify-between gap-8" data-testid="card-insights-em-breve">
          <span className="txt-h2">Em breve</span>
          <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="pill-btn-branco self-start" data-testid="link-substack-card">
            Ver no Substack <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = () => {
  const text = "Justiça Econômica Para Todas ✦ ";
  return (
    <section aria-label="Justiça Econômica Para Todas" className="bg-brand-vermelho overflow-hidden py-6 border-y-4 border-brand-preto">
      <div className="animate-marquee whitespace-nowrap" aria-hidden>
        <span className="font-anton text-[4.5rem] md:text-[9rem] leading-[1.1] pt-2 text-white px-4 select-none">{text}{text}{text}</span>
        <span className="font-anton text-[4.5rem] md:text-[9rem] leading-[1.1] pt-2 text-white px-4 select-none">{text}{text}{text}</span>
      </div>
    </section>
  );
};

export default function Home() {
  useSeo(
    "Instituto NoFront | Uma economia justa precisa de outras vozes",
    "O Instituto NoFront atua para ampliar a presença e a influência de perspectivas feministas negras e antirracistas nas agendas econômicas no Brasil e no Sul Global.",
  );
  return (
    <PageShell headerTheme="home-dark">
      <AberturaSecao />
      <QuemSomosSecao />
      <ComoAtuamos />
      <PhotoBand />
      <ManifestoBanner />
      <VideoCta />
      <Insights />
      <Marquee />
    </PageShell>
  );
}
