import { ArrowUpRight, Download } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { useSeo } from "@/lib/use-seo";
import { SUBSTACK_URL } from "@/lib/site";
import { boletins as BOLETINS, type Boletim } from "@/data/boletins";

const P = "txt-corpo";

function Capa({ b, className = "", lazy = false }: { b: Boletim; className?: string; lazy?: boolean }) {
  return b.capa ? (
    <img src={b.capa} alt={`Capa do boletim ${b.edicao}: ${b.titulo}`} loading={lazy ? "lazy" : undefined} className={`w-full object-cover ${className}`} />
  ) : (
    <div className={`w-full bg-brand-orquidea flex items-center justify-center font-anton text-white text-5xl leading-none pt-2 ${className}`} aria-hidden>{b.edicao}</div>
  );
}

function LinkAcao({ href, children, variant, testId }: { href: string; children: React.ReactNode; variant: string; testId: string }) {
  if (!href) return null;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={variant} data-testid={testId}>{children}</a>;
}

export function BoletimDestaque({ b }: { b: Boletim }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 bg-white/70 border border-brand-preto/5 rounded-3xl overflow-hidden" data-testid="boletim-destaque">
      <Capa b={b} className="h-full aspect-[3/4]" />
      <div className="p-6 md:p-12 flex flex-col gap-4 justify-center">
        <p className="txt-rotulo text-brand-roxo">Edição {b.edicao} · {b.data}</p>
        <h2 className="txt-h2">{b.titulo}</h2>
        {b.tema && <p className="txt-pequeno uppercase tracking-wider text-brand-preto/80">{b.tema}</p>}
        <p className={P}>{b.resumo}</p>
        <div className="flex flex-wrap gap-4 mt-4">
          <LinkAcao href={b.linkLeitura} variant="pill-btn" testId="btn-ler-boletim">Ler boletim <ArrowUpRight className="w-5 h-5" aria-hidden /></LinkAcao>
          <LinkAcao href={b.linkPdf} variant="pill-btn-branco border border-brand-preto" testId="btn-pdf-boletim">Baixar PDF <Download className="w-5 h-5" aria-hidden /></LinkAcao>
        </div>
      </div>
    </article>
  );
}

export function BoletinsGrade({ itens }: { itens: Boletim[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {itens.map((b) => {
        const href = b.linkLeitura || b.linkPdf;
        const inner = (
          <>
            <Capa b={b} className="aspect-[3/4]" lazy />
            <div className="p-6 flex flex-col gap-2">
              <p className="txt-rotulo text-brand-roxo">Edição {b.edicao} · {b.data}</p>
              <h3 className="txt-h3">{b.titulo}</h3>
              {b.tema && <p className="txt-pequeno uppercase tracking-wider text-brand-preto/80">{b.tema}</p>}
            </div>
          </>
        );
        return (
          <li key={b.edicao} className="bg-white/70 border border-brand-preto/5 rounded-2xl overflow-hidden h-full" data-testid={`card-boletim-${b.edicao}`}>
            {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full hover:opacity-90">{inner}</a> : inner}
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
      <div className="on-dark rounded-3xl bg-brand-preto text-white p-8 md:p-16 flex flex-col gap-8 items-start" data-testid="boletins-vazio">
        <p className="txt-h2">Os boletins serão publicados aqui em breve.</p>
        <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="pill-btn-branco" data-testid="btn-substack-vazio">
          Ver no Substack <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden />
        </a>
      </div>
    );
  }
  const [destaque, ...resto] = ordenados;
  return (
    <div className="flex flex-col gap-16">
      <BoletimDestaque b={destaque} />
      {resto.length > 0 && (
        <div className="flex flex-col gap-6">
          <h2 className="txt-h2">Todos os boletins</h2>
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
      <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="bg-brand-vermelho bloco bloco-edge flex flex-col justify-end min-h-[40vh]">
          <p className="txt-rotulo text-white mb-4">Projetos</p>
          <h1 className="txt-h1 text-white">Boletins Econômicos</h1>
        </div>
        <div className="bloco flex flex-col justify-center gap-4">
          <p className={P}>Nosso trabalho investiga como decisões aparentemente abstratas — como a definição das taxas de juros, as regras fiscais, as prioridades orçamentárias e os mecanismos de financiamento — atravessam o emprego, a renda, o endividamento, os serviços públicos, o trabalho de cuidado e as possibilidades de desenvolvimento, <strong>evidenciando como esses impactos se distribuem de forma desigual segundo raça, classe e gênero.</strong></p>
          <p className={P}>Produzimos boletins econômicos, estudos temáticos, análises de conjuntura e outros materiais destinados a pesquisadoras, jornalistas, organizações da sociedade civil, agentes públicos e demais pessoas interessadas em compreender e transformar a economia brasileira.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <BoletinsView boletins={BOLETINS} />
        </div>
      </section>

        <section className="sec bg-brand-roxo text-white">
          <div className="wrap flex flex-col gap-8 items-start">
            <h2 className="txt-h2">Receba os próximos boletins</h2>
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="pill-btn-branco" data-testid="btn-substack">
              Ver no Substack <ArrowUpRight className="w-5 h-5 shrink-0" aria-hidden />
            </a>
          </div>
        </section>
    </PageShell>
  );
}
