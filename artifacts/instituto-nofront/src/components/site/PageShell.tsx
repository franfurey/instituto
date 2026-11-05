import { useRef, type ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useFitHeadings } from "@/hooks/use-fit-headings";

export function PageShell({ children, headerTheme }: { children: ReactNode; headerTheme?: "default" | "home-dark" }) {
  const mainRef = useRef<HTMLElement>(null);
  useFitHeadings(mainRef);
  return (
    <div className="min-h-[100dvh] bg-brand-bg w-full flex flex-col">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] pill-btn-sm">
        Pular para o conteúdo
      </a>
      <SiteHeader theme={headerTheme} />
      <main id="conteudo" ref={mainRef} tabIndex={-1} className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
