import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { EmBreve } from "@/components/site/EmBreve";
import { useSeo } from "@/lib/use-seo";
import { TEORIA_MUDANCA_URL } from "@/lib/site";

const P = "text-base md:text-lg leading-relaxed";

const MOVIMENTOS = [
  "Produzimos conhecimento para revelar como as decisões econômicas afetam diferentes grupos e para construir diagnósticos e propostas orientados pela justiça econômica, racial e de gênero.",
  "Fortalecemos capacidades para que mulheres negras, lideranças, movimentos e organizações possam compreender, comunicar e disputar agendas econômicas.",
  "Incidimos sobre narrativas, instituições e processos decisórios para ampliar a presença de perspectivas feministas negras e antirracistas nos espaços onde políticas, recursos e prioridades são definidos.",
];
const MOV_CORES = ["bg-brand-vermelho text-white", "bg-brand-preto text-white", "bg-brand-orquidea text-white"];

const HIPOTESE = [
  "Novas perguntas passam a orientar as pesquisas.",
  "Problemas antes invisibilizados ganham centralidade.",
  "Movimentos e organizações ampliam sua capacidade de formular propostas e disputar recursos.",
  "Instituições passam a ser pressionadas a rever suas prioridades, práticas e critérios de decisão.",
];

export default function NossaVisao() {
  useSeo(
    "Nossa visão de transformação | Instituto NoFront",
    "A economia não é neutra. Ela organiza o trabalho, distribui renda e riqueza, define prioridades públicas e determina quem tem acesso a proteção, oportunidades e poder.",
  );
  return (
    <PageShell>
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
        <div className="bg-[#68429a] p-6 sm:p-10 md:p-16 flex flex-col justify-end min-h-[50vh]">
          <p className="font-anton text-[#F5E356] text-lg mb-4">Nossa visão de transformação</p>
          <h1 className="font-anton text-white text-[30px] sm:text-4xl lg:text-[52px] leading-[1.08]">
            A economia define como a vida é sustentada e quem pode vivê-la com dignidade
          </h1>
        </div>
        <div className="p-6 sm:p-10 md:p-16 flex flex-col justify-center gap-6">
          <p className={P}>A economia não é neutra. Ela organiza o trabalho, distribui renda e riqueza, define prioridades públicas e determina quem tem acesso a proteção, oportunidades e poder.</p>
          <p className={P}>No Brasil, essas escolhas foram historicamente estruturadas pelo racismo, pelo sexismo e pela exploração, prejudicando sistematicamente a população negra e, de maneira particular, as mulheres negras. São elas que sustentam parte significativa do trabalho produtivo, doméstico e de cuidado, ao mesmo tempo que permanecem entre as pessoas mais afetadas pela precarização, pela insuficiência dos serviços públicos e pela concentração da renda e da riqueza.</p>
        </div>
      </section>

      <section className="bg-brand-amarelo px-4 py-16 md:py-28">
        <p className="container mx-auto max-w-5xl font-anton text-3xl sm:text-4xl md:text-6xl leading-[1.08] text-brand-preto" data-testid="text-destaque-visao">
          Essa realidade não é inevitável. É resultado de decisões, instituições e relações de poder — e pode ser transformada.
        </p>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
          <h2 className="font-anton text-3xl md:text-5xl">A economia que queremos</h2>
          <div className="flex flex-col gap-6">
            <p className={P}>Acreditamos em uma sociedade orientada pelo bem viver, na qual a <strong>economia esteja a serviço da vida, da dignidade e da liberdade.</strong></p>
            <p className={P}>Uma sociedade em que o cuidado seja reconhecido, remunerado e compartilhado, os recursos sejam distribuídos com equidade e todas as pessoas tenham condições materiais para construir seus próprios caminhos. Esse horizonte exige mais do que incluir mulheres negras em estruturas que continuam produzindo desigualdades. <strong>Exige transformar os valores, as prioridades e as relações de poder que organizam a economia.</strong></p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 bg-brand-orquidea text-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
          <h2 className="font-anton text-3xl md:text-5xl text-[#3d0a5e]">O que precisa mudar</h2>
          <div className="flex flex-col gap-6">
            <p className={P}>Transformar a economia exige mudar quem produz conhecimento, quais problemas são reconhecidos como relevantes e quem participa das decisões sobre os rumos da sociedade.</p>
            <p className={P}>Hoje, o conhecimento econômico e os espaços de poder ainda estão concentrados em grupos sociais e instituições pouco representativos da diversidade da população brasileira. <strong>As experiências, os saberes e as propostas de mulheres negras, movimentos sociais e territórios permanecem frequentemente à margem dos debates que definem políticas, investimentos e prioridades públicas.</strong></p>
            <p className={P}>Queremos <strong>ampliar as condições para que esses sujeitos possam interpretar a realidade econômica, formular alternativas e influenciar as decisões que afetam suas vidas.</strong></p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="font-anton text-3xl md:text-5xl">Como contribuímos para essa transformação</h2>
            <p className={P}>A atuação do Instituto NoFront se organiza em três movimentos complementares.</p>
          </div>
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {MOVIMENTOS.map((m, i) => (
              <li key={i} className={`${MOV_CORES[i]} rounded-3xl p-8 flex flex-col gap-6`} data-testid={`card-movimento-${i}`}>
                <span className="font-anton text-5xl opacity-60">0{i + 1}</span>
                <p className={P}>{m}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 bg-brand-preto text-white">
        <div className="container mx-auto max-w-6xl flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="font-anton text-3xl md:text-5xl text-brand-amarelo">Nossa hipótese de transformação</h2>
            <p className={P}>Quando mulheres negras são reconhecidas e fortalecidas como produtoras de conhecimento, formuladoras de alternativas e sujeitas da decisão econômica, o debate público se transforma.</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/15 rounded-3xl overflow-hidden">
            {HIPOTESE.map((h, i) => (
              <li key={i} className="bg-brand-preto p-6 md:p-10 font-anton text-xl md:text-3xl leading-tight" data-testid={`item-hipotese-${i}`}>{h}</li>
            ))}
          </ul>
          <p className={`${P} max-w-3xl`}><strong>Essa transformação não acontece de uma única vez.</strong><br />É construída pela circulação de conhecimentos, pelo fortalecimento de redes, pela formação de lideranças e pela atuação coletiva sobre as estruturas que organizam a economia.</p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
          <h2 className="font-anton text-3xl md:text-5xl">Um projeto construído por mulheres negras</h2>
          <div className="flex flex-col gap-6">
            <p className={P}>O Manifesto Econômico da Marcha das Mulheres Negras ocupa lugar central nessa visão. Construído a partir de uma escuta multimodal que envolveu mais de 300 mulheres negras, ele sintetiza um projeto político e ético para o Brasil.</p>
            <p className={P}>O Manifesto parte da compreensão de que o racismo é também um projeto econômico, pois estrutura a distribuição do trabalho, da renda, da riqueza, do cuidado, dos recursos públicos e do poder, prejudicando sistematicamente a população negra.</p>
            <p className={P}>Suas propostas apontam para outro modo de organizar a sociedade: <strong>mais humano, sustentável e comprometido com o bem viver.</strong></p>
            <p className={P}>Por isso, atuamos para que o Manifesto não seja apenas conhecido, mas <strong>compreendido, apropriado e mobilizado</strong>. Queremos que suas propostas fortaleçam as disputas concretas realizadas nos territórios, nos movimentos, nas organizações e nos espaços institucionais.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-28 bg-brand-roxo text-white">
        <div className="container mx-auto max-w-4xl flex flex-col gap-6">
          <h2 className="font-anton text-3xl md:text-5xl">Nosso horizonte</h2>
          <p className={P}>Queremos uma economia na qual mulheres negras não sejam tratadas apenas como as mais afetadas pelas desigualdades, mas reconhecidas como aquelas que interpretam a realidade, formulam respostas e constroem novos futuros.</p>
          <p className={P}><strong>Uma economia a serviço da vida.</strong> Uma sociedade em que o poder, os recursos e as possibilidades de existência sejam compartilhados com justiça.</p>
          <div className="flex flex-wrap gap-4 mt-4">
            {TEORIA_MUDANCA_URL ? (
              <a href={TEORIA_MUDANCA_URL} className="pill-btn-branco gap-2" data-testid="btn-teoria-mudanca">Conheça nossa Teoria de Mudança <ArrowUpRight className="w-5 h-5" aria-hidden /></a>
            ) : (
              // TODO: link da Teoria de Mudança
              <EmBreve label="Conheça nossa Teoria de Mudança" variant="branco" testId="btn-teoria-mudanca" />
            )}
            <Link href="/projetos/manifesto" className="pill-btn gap-2" data-testid="btn-leia-manifesto">
              Leia o Manifesto Econômico da Marcha das Mulheres Negras <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
