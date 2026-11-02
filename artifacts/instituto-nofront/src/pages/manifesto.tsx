import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import manifestoHeroImg from "@assets/3a45098b-a9ea-46b5-ab54-bbe7ba51e987_1783028511227.png";
import eixo1Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_18_(1)_1783028511242.png";
import eixo2Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_18_(2)_1783028511244.png";
import eixo3Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_19_(3)_1783028511245.png";
import eixo4Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_19_(4)_1783028511245.png";
import eixo5Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_19_(5)_1783028511244.png";
import eixo6Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_20_(6)_1783028511244.png";
import eixo7Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_20_(7)_1783028511244.png";

import { PageShell } from "@/components/site/PageShell";
import { EmBreve } from "@/components/site/EmBreve";
import { useSeo } from "@/lib/use-seo";
import { MANIFESTO_COMPLETO_URL, MANIFESTO_FORMACAO_URL, MANIFESTO_INCIDENCIA_URL } from "@/lib/site";

const P = "text-base md:text-lg leading-relaxed";

const eixos = [
  { numero: 1, titulo: "Reparação econômica e institucional", img: eixo1Img, cor: "#C21E4F" },
  { numero: 2, titulo: "Trabalho e renda", img: eixo2Img, cor: "#F04B21" },
  { numero: 3, titulo: "Política macroeconômica e fiscal", img: eixo3Img, cor: "#3A8A3E" },
  { numero: 4, titulo: "Dignidade", img: eixo4Img, cor: "#3956A8" },
  { numero: 5, titulo: "Investimento público", img: eixo5Img, cor: "#5B3A29" },
  { numero: 6, titulo: "Investimento privado", img: eixo6Img, cor: "#8A5A2E" },
  { numero: 7, titulo: "Economia internacional", img: eixo7Img, cor: "#B08968" },
];

// TODO: destinos dos três chamados finais (src/lib/site.ts)
const CHAMADAS = [
  { label: "Leia o Manifesto completo", url: MANIFESTO_COMPLETO_URL, id: "completo" },
  { label: "Conheça os processos de formação sobre o Manifesto", url: MANIFESTO_FORMACAO_URL, id: "formacao" },
  { label: "Acompanhe nossas ações de incidência", url: MANIFESTO_INCIDENCIA_URL, id: "incidencia" },
];

function Bloco({ titulo, children, className = "", tituloClass = "" }: { titulo: string; children: React.ReactNode; className?: string; tituloClass?: string }) {
  return (
    <section className={`px-4 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
        <h2 className={`font-anton text-3xl md:text-5xl leading-tight ${tituloClass}`}>{titulo}</h2>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </section>
  );
}

export default function Manifesto() {
  useSeo(
    "Manifesto Econômico da Marcha das Mulheres Negras | Instituto NoFront",
    "O Manifesto Econômico da Marcha das Mulheres Negras nasce da compreensão de que não haverá justiça racial sem transformação econômica.",
  );
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-brand-preto">
        <div className="container mx-auto relative">
          <Link href="/" className="absolute top-4 left-4 md:top-6 md:left-6 z-10 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/30 backdrop-blur px-4 py-2 rounded-full text-sm" data-testid="link-back-home">
            <ArrowLeft className="w-4 h-4" aria-hidden /> Voltar
          </Link>
          <img src={manifestoHeroImg} alt="Manifesto Econômico da Marcha das Mulheres Negras" className="w-full h-auto object-cover" data-testid="img-manifesto-hero" />
        </div>
      </section>

      <section className="px-4 py-16 md:py-28 bg-brand-bg">
        <div className="container mx-auto max-w-3xl flex flex-col gap-8">
          <p className="font-anton text-brand-roxo text-lg">Manifesto Econômico da Marcha das Mulheres Negras</p>
          <h1 className="font-anton text-[30px] sm:text-4xl md:text-5xl leading-tight text-brand-preto">Um projeto político e ético para reorganizar a economia a partir da vida</h1>
          <p className="text-xl md:text-2xl leading-relaxed font-medium">O Manifesto Econômico da Marcha das Mulheres Negras nasce da compreensão de que não haverá justiça racial sem transformação econômica.</p>
          <p className={`${P} text-gray-700`}>O racismo não atua apenas por meio da discriminação. Ele organiza a distribuição do trabalho, da renda, da riqueza, do cuidado, dos recursos públicos e do poder, prejudicando sistematicamente a população negra. Está presente nas escolhas que definem quem realiza os trabalhos mais precários, quem sustenta a vida cotidiana, quem acessa proteção e oportunidades e quem participa das decisões sobre os rumos do país.</p>
        </div>
      </section>

      <section className="bg-brand-vinho px-4 py-16 md:py-28">
        <blockquote className="container mx-auto max-w-5xl text-white flex flex-col gap-6" data-testid="quote-manifesto">
          <p className="font-anton text-3xl sm:text-4xl md:text-6xl leading-[1.08]">Colocar a raça no centro do debate econômico é tornar visível essa estrutura e afirmar que a desigualdade não é um efeito acidental da economia brasileira.</p>
          <p className="text-xl md:text-2xl font-bold">Ela faz parte do modo como nossa sociedade foi organizada.</p>
        </blockquote>
      </section>

      <Bloco titulo="Construído por mulheres negras">
        <p className={P}>Elaborado ao longo de 2025, o Manifesto é resultado de uma escuta multimodal que envolveu mais de 300 mulheres negras, reunindo diferentes territórios, trajetórias, áreas de atuação e formas de conhecimento.</p>
        <p className={P}>O processo partiu das experiências concretas dessas mulheres, mas não se limitou a registrar os problemas que enfrentam. Transformou vivências, análises e acúmulos políticos em diagnósticos e propostas para o país.</p>
        <p className={P}>O Manifesto afirma as mulheres negras não apenas como as mais afetadas pelas desigualdades, mas como produtoras de conhecimento, formuladoras de alternativas e sujeitas da transformação econômica.</p>
      </Bloco>

      <Bloco titulo="A economia que queremos construir" className="bg-brand-orquidea text-white" tituloClass="text-[#3d0a5e]">
        <p className={P}>O Manifesto apresenta um projeto de sociedade orientado pelo bem viver: uma sociedade sem exploração, capaz de sustentar a vida humana e os territórios com dignidade, justiça e responsabilidade coletiva.</p>
        <p className={P}>Esse projeto questiona uma economia que subordina pessoas, relações e recursos naturais à produção de riqueza concentrada. Em seu lugar, propõe um arranjo social mais humano, no qual o cuidado seja reconhecido, os recursos sejam distribuídos com justiça e todas as pessoas tenham condições materiais para viver de forma digna e próspera.</p>
        <p className={P}>Não se trata apenas de incluir mulheres negras nas estruturas existentes. Trata-se de transformar as estruturas, os valores e as prioridades que definem como a sociedade trabalha, produz, cuida, distribui recursos e toma decisões.</p>
      </Bloco>

      <section className="bg-brand-preto px-4 py-16 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-anton text-white text-3xl md:text-5xl mb-12 md:mb-16">Os 7 eixos do manifesto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eixos.map((e) => (
              <div key={e.numero} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex flex-col hover:-translate-y-1 transition-transform" data-testid={`eixo-card-${e.numero}`}>
                <img src={e.img} alt={`Eixo ${e.numero}: ${e.titulo}`} className="w-full h-auto object-cover" data-testid={`img-eixo-${e.numero}`} />
                <div className="p-6 flex flex-col gap-1">
                  <span className="font-anton text-sm tracking-widest" style={{ color: e.cor }}>EIXO {e.numero}</span>
                  <h3 className="font-anton text-white text-xl md:text-2xl">{e.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Bloco titulo="Do documento à ação política">
        <p className={P}>Um manifesto, por si só, não transforma a realidade. Suas ideias precisam ser compreendidas, apropriadas e mobilizadas nas disputas concretas.</p>
        <p className={P}><strong>Por isso, o Instituto NoFront atua para fazer do Manifesto uma plataforma viva de pesquisa, formação econômica, comunicação e incidência política.</strong></p>
        <p className={P}>Queremos que lideranças e organizações possam relacionar suas propostas às questões presentes em seus territórios e espaços de atuação:</p>
        <ul className="flex flex-col gap-3 border-l-4 border-brand-laranja pl-5">
          <li className={P}>da discussão sobre o orçamento municipal às políticas de trabalho e cuidado;</li>
          <li className={P}>das decisões sobre juros e crédito aos investimentos públicos;</li>
          <li className={P}>das narrativas que circulam na imprensa às escolhas que afetam diariamente a vida da população.</li>
        </ul>
        <p className={P}>A apropriação do Manifesto amplia as condições para que mulheres negras formulem argumentos, cobrem respostas do poder público, disputem prioridades e contribuam para decisões econômicas mais justas.</p>
      </Bloco>

      <section className="px-4 py-16 md:py-24 bg-brand-amarelo">
        <div className="container mx-auto max-w-6xl flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="font-anton text-3xl md:text-5xl leading-tight">O Manifesto no centro da estratégia da NoFront</h2>
            <p className={P}>O Manifesto orienta as perguntas que investigamos, os conhecimentos que fazemos circular, as capacidades que buscamos fortalecer e as agendas sobre as quais incidimos.</p>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <li className="bg-brand-vermelho text-white rounded-3xl p-8 flex flex-col gap-4" data-testid="card-estrategia-pesquisa">
              <h3 className="font-anton text-2xl text-brand-dourado">Pesquisa</h3>
              <p className={P}>Na <strong>pesquisa</strong>, oferece um horizonte para a produção de dados, análises e formulações econômicas.</p>
            </li>
            <li className="bg-brand-preto text-white rounded-3xl p-8 flex flex-col gap-4" data-testid="card-estrategia-formacao">
              <h3 className="font-anton text-2xl">Formação econômica</h3>
              <p className={P}>Na <strong>formação econômica</strong>, conecta experiências, conceitos e propostas, apoiando lideranças na construção de argumentos e estratégias de atuação</p>
            </li>
            <li className="bg-brand-orquidea text-white rounded-3xl p-8 flex flex-col gap-4" data-testid="card-estrategia-incidencia">
              <h3 className="font-anton text-2xl text-[#3d0a5e]">Incidência política</h3>
              <p className={P}>Na <strong>incidência política</strong>, organiza demandas e oferece uma referência comum para o diálogo com movimentos, organizações, agentes públicos e instituições.</p>
            </li>
          </ul>
          <p className={`${P} max-w-3xl`}>Sua centralidade expressa uma escolha: a transformação econômica precisa partir dos sujeitos que conhecem profundamente os efeitos da desigualdade e que, há décadas, constroem respostas para enfrentá-la.</p>
        </div>
      </section>

      <section className="relative px-4 py-16 md:py-28 bg-brand-roxo text-white">
        <div className="container mx-auto max-w-4xl flex flex-col gap-6">
          <h2 className="font-anton text-3xl md:text-5xl leading-tight">Um futuro orientado pelo bem viver</h2>
          <p className="text-xl md:text-2xl font-bold">O Manifesto Econômico da Marcha das Mulheres Negras é um convite para imaginar e construir outro futuro.</p>
          <p className={P}>Um futuro em que a economia esteja a serviço da vida, e não a vida submetida à exploração. Em que a riqueza produzida coletivamente sustente dignidade, cuidado, liberdade e possibilidades de existência. Em que mulheres negras participem plenamente da formulação das decisões que organizam o país.</p>
          <p className={P}>O Manifesto é uma plataforma para transformar conhecimento em poder político e projeto de mundo em ação coletiva.</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mt-4">
            {CHAMADAS.map((c) =>
              c.url ? (
                <a key={c.id} href={c.url} className="pill-btn-branco gap-2" data-testid={`btn-manifesto-${c.id}`}>{c.label} <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden /></a>
              ) : (
                <EmBreve key={c.id} label={c.label} variant="branco" testId={`btn-manifesto-${c.id}`} />
              ),
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
