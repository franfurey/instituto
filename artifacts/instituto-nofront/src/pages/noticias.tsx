import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { useSeo } from "@/lib/use-seo";
import { noticias as NOTICIAS, type Noticia } from "@/data/noticias";

/** Renderização pura; aceita qualquer lista (inclusive fixtures de teste). */
export function NoticiasView({ noticias }: { noticias: Noticia[] }) {
  if (noticias.length === 0) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-brand-roxo to-brand-vinho text-white p-8 md:p-14" data-testid="noticias-vazio">
        <p className="font-anton text-3xl md:text-5xl">Em breve</p>
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {noticias.map((n, i) => {
        const inner = (
          <>
            {n.imagem && <img src={n.imagem} alt="" className="w-full aspect-video object-cover" />}
            <div className="p-6 flex flex-col gap-3">
              <p className="font-anton text-sm text-brand-roxo">{n.data}</p>
              <h2 className="font-anton text-xl leading-tight">{n.titulo}</h2>
              <p className="text-gray-700">{n.resumo}</p>
              {n.link && <span className="inline-flex items-center gap-1 font-bold text-brand-roxo">Ler mais <ArrowUpRight className="w-4 h-4" aria-hidden /></span>}
            </div>
          </>
        );
        return (
          <li key={i} className="bg-white/70 border border-black/5 rounded-2xl overflow-hidden" data-testid={`card-noticia-${i}`}>
            {n.link ? <a href={n.link} target="_blank" rel="noreferrer" className="block hover:opacity-90">{inner}</a> : inner}
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
      <section className="bg-brand-preto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-anton text-white text-5xl md:text-7xl">Notícias</h1>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <NoticiasView noticias={NOTICIAS} />
        </div>
      </section>
    </PageShell>
  );
}
