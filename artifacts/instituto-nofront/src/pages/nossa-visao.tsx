import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { useSeo } from "@/lib/use-seo";
import { TEORIA_MUDANCA_URL } from "@/lib/site";

const P = "txt-corpo";

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
      <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="bg-brand-roxo bloco bloco-edge flex flex-col justify-end min-h-[50vh]">
          <p className="txt-rotulo text-white mb-4">Nossa visão de transformação</p>
          <h1 className="txt-h1 text-white">
            A economia define como a vida é sustentada e quem pode vivê-la com dignidade
          </h1>
        </div>
        <div className="bloco flex flex-col justify-center gap-4">
          <p className={P}>A economia não é neutra. Ela organiza o trabalho, distribui renda e riqueza, define prioridades públicas e determina quem tem acesso a proteção, oportunidades e poder.</p>
          <p className={P}>No Brasil, essas escolhas foram historicamente estruturadas pelo racismo, pelo sexismo e pela exploração, prejudicando sistematicamente a população negra e, de maneira particular, as mulheres negras. São elas que sustentam parte significativa do trabalho produtivo, doméstico e de cuidado, ao mesmo tempo que permanecem entre as pessoas mais afetadas pela precarização, pela insuficiência dos serviços públicos e pela concentração da renda e da riqueza.</p>
        </div>
      </section>

      <section className="bg-brand-dourado sec">
        <div className="wrap">
        <p className="txt-h2 text-brand-preto !max-w-5xl" data-testid="text-destaque-visao">
          Essa realidade não é inevitável. É resultado de decisões, instituições e relações de poder — e pode ser transformada.
        </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-16">
          <h2 className="txt-h2">A economia que queremos</h2>
          <div className="flex flex-col gap-4">
            <p className={P}>Acreditamos em uma sociedade orientada pelo bem viver, na qual a <strong>economia esteja a serviço da vida, da dignidade e da liberdade.</strong></p>
            <p className={P}>Uma sociedade em que o cuidado seja reconhecido, remunerado e compartilhado, os recursos sejam distribuídos com equidade e todas as pessoas tenham condições materiais para construir seus próprios caminhos. Esse horizonte exige mais do que incluir mulheres negras em estruturas que continuam produzindo desigualdades. <strong>Exige transformar os valores, as prioridades e as relações de poder que organizam a economia.</strong></p>
          </div>
        </div>
      </section>

      <section className="sec bg-brand-orquidea text-white">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-16">
          <h2 className="txt-h2">O que precisa mudar</h2>
          <div className="flex flex-col gap-4">
            <p className={P}>Transformar a economia exige mudar quem produz conhecimento, quais problemas são reconhecidos como relevantes e quem participa das decisões sobre os rumos da sociedade.</p>
            <p className={P}>Hoje, o conhecimento econômico e os espaços de poder ainda estão concentrados em grupos sociais e instituições pouco representativos da diversidade da população brasileira. <strong>As experiências, os saberes e as propostas de mulheres negras, movimentos sociais e territórios permanecem frequentemente à margem dos debates que definem políticas, investimentos e prioridades públicas.</strong></p>
            <p className={P}>Queremos <strong>ampliar as condições para que esses sujeitos possam interpretar a realidade econômica, formular alternativas e influenciar as decisões que afetam suas vidas.</strong></p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap flex flex-col gap-12">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h2 className="txt-h2">Como contribuímos para essa transformação</h2>
            <p className={P}>A atuação do Instituto NoFront se organiza em três movimentos complementares.</p>
          </div>
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {MOVIMENTOS.map((m, i) => (
              <li key={i} className={`${MOV_CORES[i]} rounded-3xl p-8 flex flex-col gap-6 h-full`} data-testid={`card-movimento-${i}`}>
                <span className="font-anton text-5xl leading-none" aria-hidden>0{i + 1}</span>
                <p className={P}>{m}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec bg-brand-bg">
        <div className="wrap flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h2 className="txt-h2">Como atuamos</h2>
            <p className={P}>Desenvolvemos nossa atuação em três frentes integradas: <em>Pesquisa e Produção de Conhecimento, Incidência Política e Formação Econômica.</em></p>
            <p className={P}>Essas frentes se articulam para produzir e fazer circular conhecimentos, fortalecer capacidades e ampliar a influência de mulheres negras e de perspectivas antirracistas sobre o debate e as decisões econômicas.</p>
            <p className={P}><strong>Disputamos narrativas.</strong> Por isso, a comunicação atravessa toda a nossa atuação. Por meio dela, traduzimos dados e formulações, ampliamos sua circulação pública e contribuímos para que outros problemas, sujeitos e alternativas ganhem espaço no debate econômico.</p>
          </div>

          <div className="flex flex-col gap-4">
            <article id="pesquisa" className="bg-brand-vermelho bloco text-white scroll-mt-[100px]" style={{ scrollMarginTop: "100px" }} data-testid="frente-pesquisa">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)] gap-8 lg:gap-16">
                <div>
                  <p className="txt-rotulo text-white/70 mb-4">01</p>
                  <h3 className="txt-h3">Pesquisa e Produção de Conhecimento</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <p className={P}>Produzimos pesquisas, análises e formulações sobre macroeconomia, política fiscal, política monetária, trabalho, cuidado e desenvolvimento a partir de perspectivas feministas negras, antirracistas e ancoradas no Sul Global.</p>
                  <p className={P}>Partimos da constatação de que os modelos, indicadores e narrativas predominantes frequentemente tratam como universais experiências que não o são. Com isso, deixam em segundo plano os efeitos diferenciados das decisões econômicas sobre mulheres negras, populações periféricas e outros grupos historicamente marginalizados.</p>
                  <p className={P}>Nosso trabalho investiga como decisões aparentemente abstratas — como a definição das taxas de juros, as regras fiscais, as prioridades orçamentárias e os mecanismos de financiamento — atravessam o emprego, a renda, o endividamento, os serviços públicos, o trabalho de cuidado e as possibilidades de desenvolvimento, <strong>evidenciando como esses impactos se distribuem de forma desigual segundo raça, classe e gênero.</strong></p>
                  <p className={P}>Produzimos boletins econômicos, estudos temáticos, análises de conjuntura e outros materiais destinados a pesquisadoras, jornalistas, organizações da sociedade civil, agentes públicos e demais pessoas interessadas em compreender e transformar a economia brasileira.</p>
                </div>
              </div>
            </article>

            <article id="incidencia" className="bg-brand-orquidea bloco text-white scroll-mt-[100px]" style={{ scrollMarginTop: "100px" }} data-testid="frente-incidencia">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)] gap-8 lg:gap-16">
                <div>
                  <p className="txt-rotulo text-white/70 mb-4">02</p>
                  <h3 className="txt-h3">Incidência Política</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <p className={P}><strong>Transformamos conhecimento em ação pública.</strong> Mobilizamos pesquisas, dados, análises e propostas para influenciar narrativas, agendas institucionais, políticas públicas e processos de decisão.</p>
                  <p className={P}>Nossa atuação busca ampliar a presença e a influência de mulheres negras nos espaços onde a economia é discutida e decidida, aproximando produção intelectual, articulação política, comunicação estratégica e formulação de alternativas.</p>
                  <p className={P}>Atuamos junto a parlamentares, agentes públicos, organizações da sociedade civil, instituições financeiras e de desenvolvimento, organismos multilaterais e outros atores estratégicos. Levamos para esses espaços análises e propostas relacionadas ao orçamento público, à política fiscal, à política monetária, ao financiamento do desenvolvimento e a outros temas centrais para a justiça econômica.</p>
                  <p className={P}>Também participamos da <strong>disputa pública sobre os sentidos e as prioridades da economia.</strong> Dialogamos com a imprensa, comunicadoras, formadores de opinião e organizações parceiras para tornar visíveis os efeitos distributivos das decisões econômicas e deslocar para o centro do debate questões historicamente tratadas como periféricas.</p>
                  <p className={P}>O <Link href="/projetos/manifesto" className="underline underline-offset-4 font-bold" data-testid="link-frente-manifesto">Manifesto Econômico da Marcha das Mulheres Negras</Link> é uma referência programática central dessa atuação. A partir dele, contribuímos para transformar demandas e conhecimentos construídos pelo movimento de mulheres negras em argumentos, propostas e estratégias de incidência.</p>
                </div>
              </div>
            </article>

            <article id="formacao" className="bg-brand-preto bloco text-white scroll-mt-[100px]" style={{ scrollMarginTop: "100px" }} data-testid="frente-formacao">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)] gap-8 lg:gap-16">
                <div>
                  <p className="txt-rotulo text-brand-dourado mb-4">03</p>
                  <h3 className="txt-h3 text-brand-dourado">Formação Econômica</h3>
                </div>
                <div className="flex flex-col gap-4">
                  <p className={P}>Promovemos formação econômica crítica e política para <strong>ampliar quem pode compreender, formular e disputar os rumos da economia.</strong></p>
                  <p className={P}><strong>Economia é um campo de poder.</strong> Participar dessa disputa exige acesso a conceitos, dados, linguagens e instrumentos historicamente concentrados em instituições e grupos masculinos e brancos. Uma fotografia que não dialoga com a realidade brasileira em sua diversidade racial, de classe e de gênero. Formamos pessoas para ampliar as possibilidades de atores que decidem o rumo da economia brasileira.</p>
                  <p className={P}>Nossos processos formativos relacionam <strong>experiências, fundamentos econômicos, leitura crítica de dados, análise de conjuntura, construção coletiva de alternativas, comunicação e incidência</strong>. Mais do que transmitir conteúdos, criamos condições para que as pessoas construam interpretações próprias e <strong>mobilizem esses conhecimentos em seus territórios, organizações, movimentos e espaços de atuação</strong>.</p>
                  <p className={P}>Atuamos prioritariamente com <strong>mulheres negras, lideranças e ativistas</strong> de movimentos sociais, organizações da sociedade civil, coletivos e redes. Também desenvolvemos percursos com <strong>pesquisadoras, comunicadoras, agentes públicos</strong> e outros sujeitos comprometidos com a transformação das estruturas que produzem desigualdades e com a <strong>construção de uma economia orientada pelo bem viver.</strong></p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sec bg-brand-preto text-white on-dark">
        <div className="wrap flex flex-col gap-12">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h2 className="txt-h2 text-brand-dourado">Nossa hipótese de transformação</h2>
            <p className={P}>Quando mulheres negras são reconhecidas e fortalecidas como produtoras de conhecimento, formuladoras de alternativas e sujeitas da decisão econômica, o debate público se transforma.</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/15 rounded-3xl overflow-hidden">
            {HIPOTESE.map((h, i) => (
              <li key={i} className="bg-brand-preto p-6 md:p-12 txt-h3 !max-w-none" data-testid={`item-hipotese-${i}`}>{h}</li>
            ))}
          </ul>
          <p className={`${P} max-w-3xl`}><strong>Essa transformação não acontece de uma única vez.</strong><br />É construída pela circulação de conhecimentos, pelo fortalecimento de redes, pela formação de lideranças e pela atuação coletiva sobre as estruturas que organizam a economia.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-16">
          <h2 className="txt-h2">Um projeto construído por mulheres negras</h2>
          <div className="flex flex-col gap-4">
            <p className={P}>O Manifesto Econômico da Marcha das Mulheres Negras ocupa lugar central nessa visão. Construído a partir de uma escuta multimodal que envolveu mais de 300 mulheres negras, ele sintetiza um projeto político e ético para o Brasil.</p>
            <p className={P}>O Manifesto parte da compreensão de que o racismo é também um projeto econômico, pois estrutura a distribuição do trabalho, da renda, da riqueza, do cuidado, dos recursos públicos e do poder, prejudicando sistematicamente a população negra.</p>
            <p className={P}>Suas propostas apontam para outro modo de organizar a sociedade: <strong>mais humano, sustentável e comprometido com o bem viver.</strong></p>
            <p className={P}>Por isso, atuamos para que o Manifesto não seja apenas conhecido, mas <strong>compreendido, apropriado e mobilizado</strong>. Queremos que suas propostas fortaleçam as disputas concretas realizadas nos territórios, nos movimentos, nas organizações e nos espaços institucionais.</p>
          </div>
        </div>
      </section>

      <section className="sec bg-brand-roxo text-white">
        <div className="wrap flex flex-col gap-4">
          <h2 className="txt-h2">Nosso horizonte</h2>
          <p className={P}>Queremos uma economia na qual mulheres negras não sejam tratadas apenas como as mais afetadas pelas desigualdades, mas reconhecidas como aquelas que interpretam a realidade, formulam respostas e constroem novos futuros.</p>
          <p className={P}><strong>Uma economia a serviço da vida.</strong> Uma sociedade em que o poder, os recursos e as possibilidades de existência sejam compartilhados com justiça.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            {/* TODO: link da Teoria de Mudança (TEORIA_MUDANCA_URL em src/lib/site.ts). Sem URL, o botão fica oculto. */}
            {TEORIA_MUDANCA_URL && (
              <a href={TEORIA_MUDANCA_URL} target="_blank" rel="noopener noreferrer" className="pill-btn-branco" data-testid="btn-teoria-mudanca">Conheça nossa Teoria de Mudança <ArrowUpRight className="w-5 h-5" aria-hidden /></a>
            )}
            <Link href="/projetos/manifesto" className="pill-btn py-3" data-testid="btn-leia-manifesto">
              Leia o Manifesto Econômico da Marcha das Mulheres Negras <ArrowUpRight className="w-5 h-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
