import { Link } from "wouter";
import { PageShell } from "@/components/site/PageShell";
import { useSeo } from "@/lib/use-seo";

export default function NotFound() {
  useSeo("Página não encontrada | Instituto NoFront", "Página não encontrada.");
  return (
    <PageShell>
      <section className="bg-[#68429a] px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-4xl flex flex-col gap-6 items-start text-white">
          <p className="font-anton text-brand-amarelo text-6xl md:text-8xl">404</p>
          <h1 className="font-anton text-3xl md:text-5xl">Página não encontrada</h1>
          <Link href="/" className="pill-btn-branco" data-testid="link-404-inicio">Voltar para o início</Link>
        </div>
      </section>
    </PageShell>
  );
}
