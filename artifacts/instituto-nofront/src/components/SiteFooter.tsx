import { Link } from "wouter";
import { Globe, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { SOCIAL_URLS, ACESSIBILIDADE_URL, PRIVACIDADE_URL } from "@/lib/site";

export const SOCIAIS = [
  { key: "facebook", label: "Facebook", url: SOCIAL_URLS.facebook, Icon: Facebook },
  { key: "instagram", label: "Instagram", url: SOCIAL_URLS.instagram, Icon: Instagram },
  { key: "x", label: "X (Twitter)", url: SOCIAL_URLS.x, Icon: Twitter },
  { key: "linkedin", label: "LinkedIn", url: SOCIAL_URLS.linkedin, Icon: Linkedin },
].filter((s) => s.url);

const MENU = [
  { label: "Início", href: "/" },
  { label: "Nossa visão de transformação", href: "/sobre/nossa-visao" },
  { label: "Quem somos", href: "/sobre/quem-somos" },
  { label: "Manifesto", href: "/projetos/manifesto" },
  { label: "Boletins", href: "/projetos/boletins" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contato", href: "/contato" },
];

function LegalItem({ label, url, testId }: { label: string; url: string; testId: string }) {
  if (url)
    return (
      <a href={url} className="hover:text-white/80 text-white/60 transition-colors w-fit" data-testid={testId}>
        {label}
      </a>
    );
  return (
    <span className="text-white/40 w-fit" aria-disabled="true" data-testid={testId}>
      {label} <span className="text-[10px] uppercase tracking-wider border border-white/30 rounded-full px-2 py-0.5 ml-1">Em breve</span>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-preto text-white pt-20 md:pt-24 pb-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 mb-2" data-testid="footer-logo">
              <Globe className="w-10 h-10" aria-hidden />
              <span className="font-anton text-3xl lowercase leading-none">instituto<br />NoFront</span>
            </Link>
            <p className="text-white/60 text-sm">Transformando a economia a partir de vozes negras.</p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <h2 className="font-anton text-xl text-white/50 mb-2">Menu</h2>
            {MENU.map((m) => (
              <Link key={m.href} href={m.href} className="hover:text-brand-orquidea transition-colors w-fit" data-testid={`footer-nav-${m.href.replace(/\//g, "-") || "inicio"}`}>
                {m.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="font-anton text-xl text-white/50 mb-2">Redes</h2>
            {SOCIAIS.length === 0 ? (
              // TODO: URLs das redes sociais em src/lib/site.ts
              <span className="text-white/40 text-sm">Em breve</span>
            ) : (
              SOCIAIS.map(({ key, label, url, Icon }) => (
                <a key={key} href={url} target="_blank" rel="noreferrer" className="hover:text-brand-amarelo transition-colors flex items-center gap-2 w-fit" data-testid={`footer-social-${key}`}>
                  <Icon className="w-5 h-5" aria-hidden /> {label}
                </a>
              ))
            )}
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-anton text-xl text-white/50 mb-2">Legal</h2>
            <LegalItem label="Acessibilidade" url={ACESSIBILIDADE_URL} testId="footer-legal-a11y" />
            <LegalItem label="Política de Privacidade" url={PRIVACIDADE_URL} testId="footer-legal-privacy" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-white/40 text-sm">
          <p>© 2026 Instituto NoFront. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
