import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-brand-bg w-full flex flex-col">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] pill-btn-sm">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
