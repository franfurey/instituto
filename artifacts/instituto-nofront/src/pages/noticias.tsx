import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { useSeo } from "@/lib/use-seo";
import { noticias as NOTICIAS, type Noticia } from "@/data/noticias";

/** Renderização pura; aceita qualquer lista (inclusive fixtures de teste). */
export function NoticiasView({ noticias }: { noticias: Noticia[] }) {
  if (noticias.length === 0) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-brand-roxo to-brand-vinho text-white p-8 md:p-14" data-testid="noticias-vazio">
        <p className="txt-h2">Em breve</p>
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {noticias.map((n, i) => {
        const inner = (
          <>
            {n.imagem && <img src={n.imagem} alt={`Imagem da notícia: ${n.titulo}`} loading="lazy" className="w-full aspect-[4/3] object-cover" />}
            <div className="p-6 flex flex-col gap-4">
              <p className="txt-pequeno font-semibold text-brand-roxo">{n.data}</p>
              <h2 className="txt-h3">{n.titulo}</h2>
              <p className="txt-corpo text-brand-preto/80">{n.resumo}</p>
              {n.link && <span className="inline-flex items-center gap-1 font-bold text-brand-roxo">Ler mais <ArrowUpRight className="w-4 h-4" aria-hidden /></span>}
            </div>
          </>
        );
        return (
          <li key={i} className="bg-white/70 border border-brand-preto/5 rounded-2xl overflow-hidden h-full" data-testid={`card-noticia-${i}`}>
            {n.link ? <a href={n.link} target="_blank" rel="noopener noreferrer" className="block h-full hover:opacity-90">{inner}</a> : inner}
          </li>
        );
      })}
    </ul>
  );
}

export default function Noticias() {
  useSeo("Notícias | Instituto NoFront", "Notícias do Instituto NoFront: perspectivas feministas negras e antirracistas nas agendas econômicas no Brasil e no Sul Global.");
  return (
    <PageShell>
      <section className="bg-brand-preto sec">
        <div className="wrap">
          <h1 className="txt-h1 text-white">Notícias</h1>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <NoticiasView noticias={NOTICIAS} />
        </div>
      </section>
    </PageShell>
  );
}
