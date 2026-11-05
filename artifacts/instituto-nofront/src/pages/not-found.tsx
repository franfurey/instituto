import { Link } from "wouter";
import { PageShell } from "@/components/site/PageShell";
import { useSeo } from "@/lib/use-seo";

export default function NotFound() {
  useSeo("Página não encontrada | Instituto NoFront", "Página não encontrada.");
  return (
    <PageShell>
      <section className="bg-brand-roxo sec min-h-[64vh] flex items-center">
        <div className="wrap flex flex-col gap-6 items-start text-white">
          <p className="font-anton text-6xl md:text-8xl leading-none" aria-hidden>404</p>
          <h1 className="txt-h1">Página não encontrada</h1>
          <Link href="/" className="pill-btn-branco mt-2" data-testid="link-404-inicio">Voltar para o início</Link>
        </div>
      </section>
    </PageShell>
  );
}
