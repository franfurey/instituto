import { ArrowUpRight, Download } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { useSeo } from "@/lib/use-seo";
import { SUBSTACK_URL } from "@/lib/site";
import { boletins as BOLETINS, type Boletim } from "@/data/boletins";

const P = "text-base md:text-lg leading-relaxed";

function Capa({ b, className = "" }: { b: Boletim; className?: string }) {
  return b.capa ? (
    <img src={b.capa} alt={`Capa do boletim ${b.edicao}: ${b.titulo}`} className={`w-full object-cover ${className}`} />
  ) : (
    <div className={`w-full bg-brand-orquidea flex items-center justify-center font-anton text-white text-5xl ${className}`} aria-hidden>{b.edicao}</div>
  );
}

function LinkAcao({ href, children, variant, testId }: { href: string; children: React.ReactNode; variant: string; testId: string }) {
  if (!href) return null;
  return <a href={href} target="_blank" rel="noreferrer" className={`${variant} gap-2`} data-testid={testId}>{children}</a>;
}

export function BoletimDestaque({ b }: { b: Boletim }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/70 border border-black/5 rounded-3xl overflow-hidden" data-testid="boletim-destaque">
      <Capa b={b} className="h-full min-h-[280px] aspect-[3/4] md:aspect-auto" />
      <div className="p-6 md:p-10 flex flex-col gap-4 justify-center">
        <p className="font-anton text-brand-roxo">Edição {b.edicao} · {b.data}</p>
        <h2 className="font-anton text-3xl md:text-4xl leading-tight">{b.titulo}</h2>
        {b.tema && <p className="text-sm uppercase tracking-wider text-gray-600">{b.tema}</p>}
        <p className={P}>{b.resumo}</p>
        <div className="flex flex-wrap gap-3 mt-2">
          <LinkAcao href={b.linkLeitura} variant="pill-btn" testId="btn-ler-boletim">Ler boletim <ArrowUpRight className="w-5 h-5" aria-hidden /></LinkAcao>
          <LinkAcao href={b.linkPdf} variant="pill-btn-branco border border-brand-preto" testId="btn-pdf-boletim">Baixar PDF <Download className="w-5 h-5" aria-hidden /></LinkAcao>
        </div>
      </div>
    </article>
  );
}

export function BoletinsGrade({ itens }: { itens: Boletim[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {itens.map((b) => {
        const href = b.linkLeitura || b.linkPdf;
        const inner = (
          <>
            <Capa b={b} className="aspect-[3/4]" />
            <div className="p-5 flex flex-col gap-2">
              <p className="font-anton text-sm text-brand-roxo">Edição {b.edicao} · {b.data}</p>
              <h3 className="font-anton text-xl leading-tight">{b.titulo}</h3>
              {b.tema && <p className="text-xs uppercase tracking-wider text-gray-600">{b.tema}</p>}
            </div>
          </>
        );
        return (
          <li key={b.edicao} className="bg-white/70 border border-black/5 rounded-2xl overflow-hidden" data-testid={`card-boletim-${b.edicao}`}>
            {href ? <a href={href} target="_blank" rel="noreferrer" className="block hover:opacity-90">{inner}</a> : inner}
          </li>
        );
      })}
    </ul>
  );
}

/** Renderização pura; aceita qualquer lista (inclusive fixtures de teste). */
export function BoletinsView({ boletins }: { boletins: Boletim[] }) {
  const ordenados = [...boletins].sort((a, b) => b.edicao - a.edicao);
  if (ordenados.length === 0) {
    return (
      <div className="rounded-3xl bg-brand-preto text-white p-8 md:p-14 flex flex-col gap-6 items-start" data-testid="boletins-vazio">
        <p className="font-anton text-2xl md:text-4xl leading-tight">Os boletins serão publicados aqui em breve.</p>
        <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="pill-btn-branco gap-2 max-w-full flex-wrap !px-5 text-sm sm:text-base" data-testid="btn-substack-vazio">
          Ver no Substack <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden />
        </a>
      </div>
    );
  }
  const [destaque, ...resto] = ordenados;
  return (
    <div className="flex flex-col gap-14">
      <BoletimDestaque b={destaque} />
      {resto.length > 0 && (
        <div className="flex flex-col gap-6">
          <h2 className="font-anton text-3xl md:text-4xl">Todos os boletins</h2>
          <BoletinsGrade itens={ordenados} />
        </div>
      )}
    </div>
  );
}

export default function Boletins() {
  useSeo(
    "Boletins Econômicos | Instituto NoFront",
    "Produzimos boletins econômicos, estudos temáticos, análises de conjuntura e outros materiais destinados a pesquisadoras, jornalistas, organizações da sociedade civil, agentes públicos e demais pessoas interessadas em compreender e transformar a economia brasileira.",
  );
  return (
    <PageShell>
      <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
        <div className="bg-brand-laranja p-6 sm:p-10 md:p-16 flex flex-col justify-end min-h-[40vh]">
          <p className="font-anton text-brand-amarelo text-lg mb-4">Projetos</p>
          <h1 className="font-anton text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">Boletins Econômicos</h1>
        </div>
        <div className="p-6 sm:p-10 md:p-16 flex flex-col justify-center gap-6">
          <p className={P}>Nosso trabalho investiga como decisões aparentemente abstratas — como a definição das taxas de juros, as regras fiscais, as prioridades orçamentárias e os mecanismos de financiamento — atravessam o emprego, a renda, o endividamento, os serviços públicos, o trabalho de cuidado e as possibilidades de desenvolvimento, <strong>evidenciando como esses impactos se distribuem de forma desigual segundo raça, classe e gênero.</strong></p>
          <p className={P}>Produzimos boletins econômicos, estudos temáticos, análises de conjuntura e outros materiais destinados a pesquisadoras, jornalistas, organizações da sociedade civil, agentes públicos e demais pessoas interessadas em compreender e transformar a economia brasileira.</p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <BoletinsView boletins={BOLETINS} />
        </div>
      </section>

        <section className="px-4 py-16 md:py-24 bg-brand-roxo text-white">
          <div className="container mx-auto max-w-4xl flex flex-col gap-6 items-start">
            <h2 className="font-anton text-3xl md:text-5xl">Receba os próximos boletins</h2>
            <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="pill-btn-branco gap-2" data-testid="btn-substack">
              Ver no Substack <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden />
            </a>
          </div>
        </section>
    </PageShell>
  );
}
