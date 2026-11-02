import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { useSeo } from "@/lib/use-seo";
import { cn } from "@/lib/utils";

export type Integrante = { nome: string; cargo: string; bio: string; foto?: string };

// Para incluir mais pessoas, basta adicionar itens a esta lista.
// TODO: fotos das lideranças (campo `foto`) e demais membros da equipe.
export const EQUIPE: Integrante[] = [
  {
    nome: "Bia Mendes",
    cargo: "Diretora de Formação Econômica e Desenvolvimento Institucional",
    bio: "Doutoranda em Relações Internacionais, mestre em Ciência Política e bacharela em Políticas Públicas pela Universidade de São Paulo, atua na interseção entre pesquisa, formação, movimentos sociais e fortalecimento institucional. É responsável pela estratégia de Formação Econômica do Instituto NoFront, incluindo a construção de metodologias, percursos formativos e processos voltados ao fortalecimento das capacidades de mulheres negras, lideranças e organizações para compreender e disputar agendas econômicas. Também atua na produção de conhecimento sobre participação política, movimentos de mulheres negras, incidência e justiça racial.",
  },
  {
    nome: "Gaby Chaves",
    cargo: "Diretora de Articulação e Incidência Política",
    bio: "Economista formada pela Pontifícia Universidade Católica de São Paulo, mestre em Economia Mundial e doutoranda em Economia Política Mundial pela Universidade Federal do ABC, atua na articulação entre economia política, movimentos feministas e cooperação internacional. No Instituto NoFront, é responsável pela construção de alianças políticas e institucionais e pela aproximação com movimentos sociais, organizações, pesquisadoras, agentes públicos e parceiros nacionais e internacionais. É também fundadora e conselheira da South Feminist Futures, organização transnacional formada por ativistas do Sul Global.",
  },
  {
    nome: "Hellen Nzinga",
    cargo: "Diretora de Comunicação Estratégica",
    bio: "Comunicadora e gestora de projetos sustentáveis formada pela Universidade Católica do Salvador, atua na construção de estratégias de comunicação, posicionamento político e identidade institucional. No Instituto NoFront, é responsável por conectar pesquisas, formulações e iniciativas a narrativas capazes de ampliar sua circulação pública e fortalecer a presença da organização no debate econômico. Possui formação complementar em inovação política pela Asuntos del Sur e em inovação, ciência e tecnologia aplicada à gestão pública.",
  },
  {
    nome: "Nátali Yamas",
    cargo: "Coordenadora de Comunicação",
    bio: "Comunicóloga, pesquisadora, artista independente e militante negra, é graduada em Comunicação Social — Rádio e TV pela Universidade Estadual de Santa Cruz e mestre em Estudos Étnicos e Africanos pela Universidade Federal da Bahia. No Instituto NoFront, coordena a produção e a implementação das ações de comunicação, contribuindo para transformar pesquisas, dados e formulações políticas em conteúdos acessíveis, mobilizadores e conectados aos diferentes públicos da organização. Integra a equipe desde 2019.",
  },
  {
    nome: "Lucas Gonçalves",
    cargo: "Jornalista e Designer",
    bio: "Jornalista formado pela Universidade Federal de Juiz de Fora, designer gráfico pela Escola Britânica de Artes Criativas e artista visual, atua na interseção entre comunicação, produção editorial e linguagem gráfica. No Instituto NoFront, contribui para a construção de narrativas, publicações e identidades visuais que ampliam o alcance dos conhecimentos e das propostas produzidos pela organização. Natural de Visconde do Rio Branco, Minas Gerais, integra a equipe desde 2022.",
  },
];

const CORES = ["bg-brand-roxo", "bg-brand-vermelho", "bg-brand-orquidea", "bg-brand-laranja", "bg-brand-preto"];
const iniciais = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");
const P = "text-base md:text-lg leading-relaxed";

function CardIntegrante({ p, i }: { p: Integrante; i: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <li className="bg-white/70 border border-black/5 rounded-3xl p-6 md:p-8 flex flex-col gap-5" data-testid={`card-equipe-${i}`}>
      <div className="flex items-center gap-5">
        {p.foto ? (
          <img src={p.foto} alt={p.nome} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shrink-0" />
        ) : (
          <span aria-hidden className={cn("w-20 h-20 md:w-24 md:h-24 rounded-full shrink-0 flex items-center justify-center font-anton text-2xl md:text-3xl text-white", CORES[i % CORES.length])}>
            {iniciais(p.nome)}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="font-anton text-2xl md:text-3xl leading-tight" data-testid={`text-nome-${i}`}>{p.nome}</h3>
          <p className="italic text-gray-700 text-sm md:text-base">{p.cargo}</p>
        </div>
      </div>
      <p id={id} className={cn("text-gray-800 leading-relaxed", !open && "line-clamp-3")}>{p.bio}</p>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="pill-btn-sm gap-2 self-start"
        data-testid={`btn-bio-${i}`}
      >
        {open ? "Recolher biografia" : "Ler biografia completa"}
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
    </li>
  );
}

export default function QuemSomos() {
  useSeo(
    "Quem somos | Instituto NoFront",
    "Somos uma organização criada e liderada por mulheres negras, com trajetórias construídas entre a pesquisa, os movimentos sociais, a formulação de políticas públicas, a educação, a comunicação e a incidência política.",
  );
  return (
    <PageShell>
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
        <div className="bg-brand-vermelho p-6 sm:p-10 md:p-16 flex flex-col justify-end min-h-[50vh]">
          <p className="font-anton text-brand-dourado text-lg mb-4">Quem somos</p>
          <h1 className="font-anton text-white text-[30px] sm:text-4xl lg:text-[52px] leading-[1.08]">Uma organização criada e liderada por mulheres negras</h1>
        </div>
        <div className="p-6 sm:p-10 md:p-16 flex flex-col justify-center gap-6">
          <p className={P}>O Instituto NoFront nasce da convicção de que transformar a economia também exige transformar quem produz conhecimento, formula alternativas e ocupa os espaços de decisão.</p>
          <p className={P}>Somos uma organização criada e liderada por mulheres negras, com trajetórias construídas entre a pesquisa, os movimentos sociais, a formulação de políticas públicas, a educação, a comunicação e a incidência política.</p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24 bg-brand-orquidea text-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
          <h2 className="font-anton text-3xl md:text-5xl text-[#3d0a5e]">Nossa equipe</h2>
          <div className="flex flex-col gap-6">
            <p className={P}>Nossa equipe reúne diferentes formações, experiências e áreas de atuação em torno de um compromisso comum: <strong>produzir conhecimento econômico tecnicamente qualificado, acessível e politicamente comprometido com a justiça racial e de gênero.</strong></p>
            <p className={P}>Trabalhamos de forma integrada entre as áreas de Pesquisa e Produção de Conhecimento, Formação Econômica e Incidência Política.</p>
            <p className={P}>Buscamos construir uma prática institucional coerente com o mundo que defendemos: baseada em <strong>colaboração, responsabilidade, reconhecimento dos diferentes saberes e compromisso com a sustentabilidade da vida.</strong></p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl flex flex-col gap-10">
          <h2 className="font-anton text-3xl md:text-5xl">Lideranças institucionais</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            {EQUIPE.map((p, i) => <CardIntegrante key={p.nome} p={p} i={i} />)}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 md:py-28 bg-brand-preto text-white">
        <div className="container mx-auto max-w-4xl flex flex-col gap-6">
          <h2 className="font-anton text-3xl md:text-5xl text-brand-amarelo">Uma construção coletiva</h2>
          <p className={P}>O Instituto NoFront não é construído apenas por sua equipe permanente.</p>
          <p className={P}>Nossa atuação também se apoia nas contribuições de pesquisadoras, consultoras, facilitadoras, organizações parceiras, movimentos sociais, financiadores e, especialmente, das mulheres negras que compartilham conosco seus conhecimentos, experiências e projetos de futuro.</p>
          <p className={P}>Reconhecemos essas relações como parte da produção política e intelectual do Instituto. É por meio delas que nossas perguntas se tornam mais relevantes, nossas análises mais situadas e nossas propostas mais conectadas às disputas concretas da sociedade.</p>
          <p className={P}><strong>Construir outra economia é um trabalho coletivo.</strong> O Instituto NoFront existe para fortalecer, conectar e fazer circular a potência política e intelectual de quem já vem construindo esse futuro.</p>
        </div>
      </section>
    </PageShell>
  );
}
