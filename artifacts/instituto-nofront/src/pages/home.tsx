import { Link } from "wouter";
import { Globe, ArrowUpRight } from "lucide-react";
import marchaMulheresNegrasImg from "@assets/marchamulheresnegras_1783012613504.jpg";
import apoieBgVideo from "@/assets/video/apoie-bg.mp4";
import apoieBgPoster from "@/assets/video/apoie-bg-poster.jpg";
import paredeDeLambesImg from "@assets/Parede_de_lambes_1783025950378.png";
import { PageShell } from "@/components/site/PageShell";
import { Expandable } from "@/components/site/Expandable";
import { EmBreve } from "@/components/site/EmBreve";
import { useSeo } from "@/lib/use-seo";
import { SUBSTACK_URL, VOLUNTARIA_URL } from "@/lib/site";

const Hero = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 md:min-h-[88vh]">
    <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-end gap-6 bg-[#68429a] min-h-[60vh] md:min-h-0">
      <p className="font-anton text-[#F5E356] text-lg md:text-xl tracking-wide">Novos Futuros Econômicos</p>
      <h1 className="font-anton text-white text-[30px] sm:text-[36px] lg:text-[48px] xl:text-[56px] leading-[1.08]">
        Uma economia justa precisa de outras vozes, conhecimentos e perspectivas
      </h1>
    </div>
    <div className="flex flex-col">
      <div className="bg-brand-bg p-6 sm:p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center items-start gap-8">
        <Globe className="w-20 h-20 md:w-28 md:h-28 text-brand-preto" strokeWidth={1} aria-hidden />
        <p className="text-xl md:text-2xl font-medium max-w-lg leading-snug" data-testid="text-hero-intro">
          O <strong>Instituto NoFront</strong> atua para ampliar a presença e a influência de perspectivas feministas negras e antirracistas nas agendas econômicas no Brasil e no Sul Global.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-[1fr_1fr_auto] md:grid-rows-2 min-h-[340px] md:min-h-0 md:flex-1 relative">
        <div className="bg-[#B9A7E8]" />
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 10px, #8E24C8 10px, #8E24C8 20px, #121212 20px, #121212 30px)" }} />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
            <span className="font-anton text-white text-lg sm:text-xl md:text-3xl text-center leading-tight">Incidência<br />Política</span>
          </div>
        </div>
        <div className="col-span-2 bg-[#9C8ACB] flex items-end justify-end p-5 md:p-6 min-h-[120px]">
          {VOLUNTARIA_URL ? (
            <a href={VOLUNTARIA_URL} className="pill-btn gap-2" data-testid="btn-volunteer">Seja voluntária <ArrowUpRight className="w-5 h-5" /></a>
          ) : (
            // TODO: destino de "Seja voluntária"
            <EmBreve label="Seja voluntária" testId="btn-volunteer" />
          )}
        </div>
      </div>
    </div>
  </section>
);

const Apresentacao = () => (
  <section className="py-20 md:py-32 px-4 bg-brand-bg">
    <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20">
      <p className="text-2xl md:text-3xl font-medium leading-snug text-brand-preto">
        Quando mulheres negras são reconhecidas como produtoras de conhecimento e formuladoras de alternativas — e não apenas como destinatárias de políticas públicas — temas como trabalho, renda, cuidado, orçamento público, política fiscal, política monetária, desenvolvimento e distribuição de poder passam a ser compreendidos a partir de outras perguntas, evidências e prioridades.
      </p>
      <div className="flex flex-col gap-6 text-base md:text-lg text-gray-700 leading-relaxed md:pt-2">
        <p>Nosso propósito não é apenas acrescentar recortes de raça e gênero a modelos econômicos já existentes. Queremos contribuir para a construção de uma economia orientada, desde sua formulação, pela justiça econômica, racial e de gênero, pela redistribuição de recursos e poder e, principalmente, pela sustentabilidade da vida.</p>
        <p>Para isso, fortalecemos a produção intelectual de mulheres negras, democratizamos o acesso ao conhecimento econômico e ampliamos a participação da comunidade negra nos espaços onde narrativas, políticas e decisões são formuladas.</p>
      </div>
    </div>
  </section>
);

const ComoAtuamos = () => (
  <>
    <section className="px-4 pb-16 md:pb-20 bg-brand-bg">
      <div className="container mx-auto max-w-6xl flex flex-col gap-6">
        <h2 className="font-anton text-4xl md:text-6xl">Como atuamos</h2>
        <p className="text-lg md:text-xl max-w-3xl">
          Desenvolvemos nossa atuação em três frentes integradas: <em>Pesquisa e Produção de Conhecimento, Incidência Política e Formação Econômica.</em>
        </p>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl">
          Essas frentes se articulam para produzir e fazer circular conhecimentos, fortalecer capacidades e ampliar a influência de mulheres negras e de perspectivas antirracistas sobre o debate e as decisões econômicas.
        </p>
      </div>
    </section>
    <section id="pilares" className="grid grid-cols-1 lg:grid-cols-3">
      <article className="bg-brand-vermelho p-8 sm:p-10 md:p-14 flex flex-col gap-8 text-white" data-testid="pilar-pesquisa">
        <h3 className="font-anton uppercase text-brand-dourado text-[28px] md:text-[35px] leading-tight">Pesquisa e Produção de Conhecimento</h3>
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
      <article className="bg-brand-orquidea p-8 sm:p-10 md:p-14 flex flex-col gap-8 text-white" data-testid="pilar-incidencia">
        <h3 className="font-anton uppercase text-[#5A1189] text-[28px] md:text-[35px] leading-tight">Incidência<br />Política</h3>
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
      <article className="bg-brand-preto p-8 sm:p-10 md:p-14 flex flex-col gap-8 text-gray-200" data-testid="pilar-formacao">
        <h3 className="font-anton uppercase text-white text-[28px] md:text-[35px] leading-tight">Formação<br />Econômica</h3>
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
    <section className="bg-brand-amarelo px-4 py-16 md:py-24">
      <p className="container mx-auto max-w-5xl text-xl md:text-3xl leading-snug text-brand-preto font-medium">
        <strong className="font-anton font-normal text-3xl md:text-5xl block mb-4">Disputamos narrativas.</strong>
        Por isso, a comunicação atravessa toda a nossa atuação. Por meio dela, traduzimos dados e formulações, ampliamos sua circulação pública e contribuímos para que outros problemas, sujeitos e alternativas ganhem espaço no debate econômico.
      </p>
    </section>
  </>
);

const PhotoBand = () => (
  <section
    className="parallax-bg w-full min-h-[50vh] md:min-h-[72vh] bg-[#C9BBB3] relative overflow-hidden"
    style={{ backgroundImage: `url(${marchaMulheresNegrasImg})` }}
    role="img"
    aria-label="Marcha das Mulheres Negras"
    data-testid="img-photoband-marcha"
  />
);

const ManifestoDestaque = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2">
    <div className="bg-brand-bg p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center gap-6 text-base md:text-lg leading-relaxed">
      <h2 className="font-anton text-3xl md:text-5xl leading-[1.1]">O Manifesto Econômico da Marcha das Mulheres Negras ocupa um lugar central em nossa estratégia.</h2>
      <p>Sintetiza um projeto político e ético construído pelas mulheres negras do Brasil. Elaborado no segundo semestre de 2025, a partir de uma <strong>escuta multimodal que envolveu mais de 300 mulheres negras</strong>, o documento reúne <strong>diagnósticos, demandas e propostas</strong> que buscam <strong>superar um modelo de organização social baseado na exploração, na desigualdade e no esgotamento da vida e do meio ambiente.</strong></p>
      <p>Colocamos a raça no centro do debate econômico porque compreendemos que <strong>o racismo estrutura a distribuição do trabalho, da renda, da riqueza, do cuidado, dos recursos públicos e do poder, prejudicando sistematicamente a população negra</strong>. É parte fundamental do projeto econômico que organizou o Brasil e que ainda define quem sustenta a sociedade, quem se beneficia de sua riqueza e quem participa das decisões sobre seus rumos.</p>
      <p><strong>Mas um manifesto, sozinho, não transforma a realidade. Suas propostas precisam ser compreendidas, apropriadas e mobilizadas nas disputas concretas.</strong> Por isso, buscamos criar condições para que lideranças negras relacionem o Manifesto às questões que atravessam seus territórios e suas organizações — da discussão sobre o orçamento municipal à leitura crítica das decisões econômicas anunciadas diariamente.</p>
      <p>Ao fortalecer essa capacidade, contribuímos para a construção de um arranjo social verdadeiramente humano, no qual <strong>a economia esteja a serviço da vida, do cuidado, da dignidade e da sustentabilidade</strong>, e não da exploração de pessoas e territórios.</p>
      <Link href="/projetos/manifesto" className="pill-btn gap-2 self-start" data-testid="btn-conheca-manifesto">
        Conheça o Manifesto <ArrowUpRight className="w-5 h-5" aria-hidden />
      </Link>
    </div>
    <div className="min-h-[50vh]">
      <img src={paredeDeLambesImg} alt="Parede de lambes do Instituto NoFront" className="w-full h-full object-cover" data-testid="img-stats-lambes" />
    </div>
  </section>
);

const NUMEROS = [
  { n: "+300", t: "mulheres negras ouvidas", bg: "bg-brand-roxo text-white" },
  { n: "+200", t: "mulheres inscritas em nossos programas", bg: "bg-brand-laranja text-white" },
  { n: "6", t: "boletins econômicos produzidos", bg: "bg-brand-preto text-brand-amarelo" },
];

const Numeros = () => (
  <section aria-label="Números de impacto" className="grid grid-cols-1 md:grid-cols-3">
    {NUMEROS.map((x, i) => (
      <div key={i} className={`${x.bg} p-8 md:p-12 flex flex-col gap-2`} data-testid={`stat-${i}`}>
        <span className="font-anton text-6xl md:text-8xl leading-none">{x.n}</span>
        <span className="text-lg md:text-xl font-medium">{x.t}</span>
      </div>
    ))}
  </section>
);

const VideoCta = () => (
  <section className="relative min-h-[80dvh] md:min-h-[100dvh] flex flex-col items-center justify-center p-6 md:p-16 overflow-hidden bg-[#5a4f52]">
    <video className="absolute inset-0 w-full h-full object-cover object-[center_75%] z-0" src={apoieBgVideo} poster={apoieBgPoster} autoPlay loop muted playsInline preload="auto" aria-hidden data-testid="video-apoie-bg" />
    <div className="absolute inset-0 bg-black/60 z-10" />
    <div className="relative z-20 container mx-auto flex flex-col items-center text-center gap-10">
      <h2 className="font-anton text-white text-[32px] sm:text-5xl md:text-[5rem] leading-[0.95] max-w-5xl drop-shadow-lg">
        Não queremos apenas ampliar quem participa do debate econômico.
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl">
        <p className="text-white/90 text-lg md:text-xl md:text-left flex-1 font-medium">
          Queremos mudar os termos desse debate e os futuros que ele torna possíveis. Junte-se a nós.
        </p>
        <Link href="/contato" className="pill-btn-branco shrink-0 gap-2 text-lg" data-testid="btn-contact-support">
          Entre em contato <ArrowUpRight className="w-5 h-5" aria-hidden />
        </Link>
      </div>
    </div>
  </section>
);

const Insights = () => (
  <section id="insights" className="py-20 md:py-32 px-4 bg-brand-bg">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-12">
        <h2 className="font-anton text-4xl md:text-6xl mb-4">Últimos insights & histórias</h2>
        <p className="text-lg md:text-xl text-gray-600">Acompanhe nossas análises e publicações recentes.</p>
      </div>
      <div className="bg-white/70 rounded-3xl p-6 md:p-8 border border-black/5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-black/5">
          <h3 className="font-anton text-2xl">O Substack do Instituto</h3>
          <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="text-brand-roxo font-bold hover:underline flex items-center gap-1" data-testid="link-substack-all">
            Ver todos <ArrowUpRight className="w-4 h-4" aria-hidden />
          </a>
        </div>
        {/* TODO: cards de publicações reais do Substack (títulos e datas verificáveis) */}
        <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-br from-brand-roxo to-brand-vinho text-white min-h-[220px] flex flex-col justify-between gap-6" data-testid="card-insights-em-breve">
          <span className="font-anton text-3xl md:text-5xl">Em breve</span>
          <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="pill-btn-branco gap-2 self-start max-w-full flex-wrap !px-5 text-sm sm:text-base" data-testid="link-substack-card">
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
    <section aria-label="Justiça Econômica Para Todas" className="bg-brand-laranja overflow-hidden py-6 border-y-4 border-brand-preto">
      <div className="animate-marquee whitespace-nowrap" aria-hidden>
        <span className="font-anton text-[4.5rem] md:text-[9rem] text-brand-amarelo px-4 select-none">{text}{text}{text}</span>
        <span className="font-anton text-[4.5rem] md:text-[9rem] text-brand-amarelo px-4 select-none">{text}{text}{text}</span>
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
    <PageShell>
      <Hero />
      <Apresentacao />
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
