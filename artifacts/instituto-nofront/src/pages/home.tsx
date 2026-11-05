import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import marchaMulheresNegrasImg from "@assets/marchamulheresnegras_1783012613504.jpg";
import apoieBgVideo from "@/assets/video/apoie-bg.mp4";
import apoieBgPoster from "@/assets/video/apoie-bg-poster.jpg";
import paredeDeLambesImg from "@assets/Parede_de_lambes_1783025950378.png";
import { PageShell } from "@/components/site/PageShell";
import { Expandable } from "@/components/site/Expandable";
import { AberturaSecao } from "@/components/AberturaSecao";
import QuemSomosSecao from "@/components/QuemSomosSecao";
import { useSeo } from "@/lib/use-seo";
import { SUBSTACK_URL } from "@/lib/site";

const ComoAtuamos = () => (
  <>
    <section id="como-atuamos" className="sec bg-brand-bg">
      <div className="wrap stack">
        <h2 className="txt-h2">Como atuamos</h2>
        <p className="txt-destaque">
          Desenvolvemos nossa atuação em três frentes integradas: <em>Pesquisa e Produção de Conhecimento, Incidência Política e Formação Econômica.</em>
        </p>
        <p className="txt-corpo text-brand-preto/80">
          Essas frentes se articulam para produzir e fazer circular conhecimentos, fortalecer capacidades e ampliar a influência de mulheres negras e de perspectivas antirracistas sobre o debate e as decisões econômicas.
        </p>
      </div>
    </section>
    <section id="pilares" className="grid grid-cols-1 lg:grid-cols-3">
      <article className="bg-brand-vermelho bloco bloco-edge flex flex-col gap-6 text-white" data-testid="pilar-pesquisa">
        <h3 className="txt-h3 uppercase text-white">Pesquisa e Produção de Conhecimento</h3>
        <Expandable
          testId="btn-leia-mais-pesquisa"
          buttonClassName="!bg-white !text-brand-preto"
          intro={<p>Produzimos pesquisas, análises e formulações sobre macroeconomia, política fiscal, política monetária, trabalho, cuidado e desenvolvimento a partir de perspectivas feministas negras, antirracistas e ancoradas no Sul Global.</p>}
          rest={
            <>
              <p>Partimos da constatação de que os modelos, indicadores e narrativas predominantes frequentemente tratam como universais experiências que não o são. Com isso, deixam em segundo plano os efeitos diferenciados das decisões econômicas sobre mulheres negras, populações periféricas e outros grupos historicamente marginalizados.</p>
              <p>Nosso trabalho investiga como decisões aparentemente abstratas — como a definição das taxas de juros, as regras fiscais, as prioridades orçamentárias e os mecanismos de financiamento — atravessam o emprego, a renda, o endividamento, os serviços públicos, o trabalho de cuidado e as possibilidades de desenvolvimento, <strong>evidenciando como esses impactos se distribuem de forma desigual segundo raça, classe e gênero.</strong></p>
              <p>Produzimos boletins econômicos, estudos temáticos, análises de conjuntura e outros materiais destinados a pesquisadoras, jornalistas, organizações da sociedade civil, agentes públicos e demais pessoas interessadas em compreender e transformar a economia brasileira.</p>
            </>
          }
        />
      </article>
      <article className="bg-brand-orquidea bloco flex flex-col gap-6 text-white" data-testid="pilar-incidencia">
        <h3 className="txt-h3 uppercase text-white">Incidência<br />Política</h3>
        <Expandable
          testId="btn-leia-mais-incidencia"
          intro={<p><strong>Transformamos conhecimento em ação pública.</strong> Mobilizamos pesquisas, dados, análises e propostas para influenciar narrativas, agendas institucionais, políticas públicas e processos de decisão.</p>}
          rest={
            <>
              <p>Nossa atuação busca ampliar a presença e a influência de mulheres negras nos espaços onde a economia é discutida e decidida, aproximando produção intelectual, articulação política, comunicação estratégica e formulação de alternativas.</p>
              <p>Atuamos junto a parlamentares, agentes públicos, organizações da sociedade civil, instituições financeiras e de desenvolvimento, organismos multilaterais e outros atores estratégicos. Levamos para esses espaços análises e propostas relacionadas ao orçamento público, à política fiscal, à política monetária, ao financiamento do desenvolvimento e a outros temas centrais para a justiça econômica.</p>
              <p>Também participamos da <strong>disputa pública sobre os sentidos e as prioridades da economia.</strong> Dialogamos com a imprensa, comunicadoras, formadores de opinião e organizações parceiras para tornar visíveis os efeitos distributivos das decisões econômicas e deslocar para o centro do debate questões historicamente tratadas como periféricas.</p>
              <p>O <Link href="/projetos/manifesto" className="underline underline-offset-4 font-bold" data-testid="link-pilar-manifesto">Manifesto Econômico da Marcha das Mulheres Negras</Link> é uma referência programática central dessa atuação. A partir dele, contribuímos para transformar demandas e conhecimentos construídos pelo movimento de mulheres negras em argumentos, propostas e estratégias de incidência.</p>
            </>
          }
        />
      </article>
      <article className="bg-brand-preto bloco flex flex-col gap-6 text-white" data-testid="pilar-formacao">
        <h3 className="txt-h3 uppercase text-brand-dourado">Formação<br />Econômica</h3>
        <Expandable
          testId="btn-leia-mais-formacao"
          buttonClassName="!bg-white !text-brand-preto"
          intro={<p>Promovemos formação econômica crítica e política para <strong>ampliar quem pode compreender, formular e disputar os rumos da economia.</strong></p>}
          rest={
            <>
              <p><strong>Economia é um campo de poder.</strong> Participar dessa disputa exige acesso a conceitos, dados, linguagens e instrumentos historicamente concentrados em instituições e grupos masculinos e brancos. Uma fotografia que não dialoga com a realidade brasileira em sua diversidade racial, de classe e de gênero. Formamos pessoas para ampliar as possibilidades de atores que decidem o rumo da economia brasileira.</p>
              <p>Nossos processos formativos relacionam <strong>experiências, fundamentos econômicos, leitura crítica de dados, análise de conjuntura, construção coletiva de alternativas, comunicação e incidência</strong>. Mais do que transmitir conteúdos, criamos condições para que as pessoas construam interpretações próprias e <strong>mobilizem esses conhecimentos em seus territórios, organizações, movimentos e espaços de atuação</strong>.</p>
              <p>Atuamos prioritariamente com <strong>mulheres negras, lideranças e ativistas</strong> de movimentos sociais, organizações da sociedade civil, coletivos e redes. Também desenvolvemos percursos com <strong>pesquisadoras, comunicadoras, agentes públicos</strong> e outros sujeitos comprometidos com a transformação das estruturas que produzem desigualdades e com a <strong>construção de uma economia orientada pelo bem viver.</strong></p>
            </>
          }
        />
      </article>
    </section>
    <section className="bg-brand-dourado sec">
      <div className="wrap">
      <p className="txt-destaque text-brand-preto font-medium">
        <strong className="txt-h2 block mb-4">Disputamos narrativas.</strong>
        Por isso, a comunicação atravessa toda a nossa atuação. Por meio dela, traduzimos dados e formulações, ampliamos sua circulação pública e contribuímos para que outros problemas, sujeitos e alternativas ganhem espaço no debate econômico.
      </p>
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

const ManifestoDestaque = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2">
    <div className="bg-brand-bg bloco bloco-edge stack flex flex-col justify-center txt-corpo">
      <h2 className="txt-h2">O Manifesto Econômico da Marcha das Mulheres Negras ocupa um lugar central em nossa estratégia.</h2>
      <p>Sintetiza um projeto político e ético construído pelas mulheres negras do Brasil. Elaborado no segundo semestre de 2025, a partir de uma <strong>escuta multimodal que envolveu mais de 300 mulheres negras</strong>, o documento reúne <strong>diagnósticos, demandas e propostas</strong> que buscam <strong>superar um modelo de organização social baseado na exploração, na desigualdade e no esgotamento da vida e do meio ambiente.</strong></p>
      <p>Colocamos a raça no centro do debate econômico porque compreendemos que <strong>o racismo estrutura a distribuição do trabalho, da renda, da riqueza, do cuidado, dos recursos públicos e do poder, prejudicando sistematicamente a população negra</strong>. É parte fundamental do projeto econômico que organizou o Brasil e que ainda define quem sustenta a sociedade, quem se beneficia de sua riqueza e quem participa das decisões sobre seus rumos.</p>
      <p><strong>Mas um manifesto, sozinho, não transforma a realidade. Suas propostas precisam ser compreendidas, apropriadas e mobilizadas nas disputas concretas.</strong> Por isso, buscamos criar condições para que lideranças negras relacionem o Manifesto às questões que atravessam seus territórios e suas organizações — da discussão sobre o orçamento municipal à leitura crítica das decisões econômicas anunciadas diariamente.</p>
      <p>Ao fortalecer essa capacidade, contribuímos para a construção de um arranjo social verdadeiramente humano, no qual <strong>a economia esteja a serviço da vida, do cuidado, da dignidade e da sustentabilidade</strong>, e não da exploração de pessoas e territórios.</p>
      <Link href="/projetos/manifesto" className="pill-btn self-start acoes" data-testid="btn-conheca-manifesto">
        Conheça o Manifesto <ArrowUpRight className="w-5 h-5" aria-hidden />
      </Link>
    </div>
    <div className="min-h-[50vh] relative">
      <img src={paredeDeLambesImg} alt="Parede coberta de lambes (cartazes colados) do Instituto NoFront" loading="lazy" className="absolute inset-0 w-full h-full object-cover" data-testid="img-stats-lambes" />
    </div>
  </section>
);

const NUMEROS = [
  { n: "+300", t: "mulheres negras ouvidas", bg: "bg-brand-roxo text-white" },
  { n: "+200", t: "mulheres inscritas em nossos programas", bg: "bg-brand-vermelho text-white" },
  { n: "6", t: "boletins econômicos produzidos", bg: "bg-brand-preto text-brand-dourado" },
];

const Numeros = () => (
  <section aria-label="Números de impacto" className="grid grid-cols-1 md:grid-cols-3">
    {NUMEROS.map((x, i) => (
      <div key={x.n} className={`${x.bg} bloco flex flex-col gap-4`} data-testid={`stat-${i}`}>
        <span className="font-anton text-6xl md:text-8xl leading-none pt-2">{x.n}</span>
        <span className="txt-destaque font-medium">{x.t}</span>
      </div>
    ))}
  </section>
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
      <ManifestoDestaque />
      <Numeros />
      <VideoCta />
      <Insights />
      <Marquee />
    </PageShell>
  );
}
