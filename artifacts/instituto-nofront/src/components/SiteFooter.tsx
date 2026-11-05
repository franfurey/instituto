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

// TODO: URLs de Acessibilidade e Política de Privacidade (src/lib/site.ts). Itens sem URL ficam ocultos.
const LEGAL = [
  { label: "Acessibilidade", url: ACESSIBILIDADE_URL, testId: "footer-legal-a11y" },
  { label: "Política de Privacidade", url: PRIVACIDADE_URL, testId: "footer-legal-privacy" },
].filter((l) => l.url);

export function SiteFooter() {
  return (
    <footer className="on-dark bg-brand-preto text-white pt-20 lg:pt-32 pb-8 txt-pequeno">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mb-16">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 mb-2" data-testid="footer-logo" aria-label="Instituto NoFront, ir para o início">
              <Globe className="w-10 h-10" aria-hidden />
              <span className="font-anton text-3xl lowercase leading-[1.1] pt-1">instituto<br />NoFront</span>
            </Link>
            <p className="text-[#CFCFCF]">Transformando a economia a partir de vozes negras.</p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-1">
            <h2 className="txt-rotulo text-brand-dourado mb-2">Menu</h2>
            {MENU.map((m) => (
              <Link key={m.href} href={m.href} className="tap hover:text-brand-dourado transition-colors w-fit" data-testid={`footer-nav-${m.href.replace(/\//g, "-") || "inicio"}`}>
                {m.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-1">
            <h2 className="txt-rotulo text-brand-dourado mb-2">Redes</h2>
            {SOCIAIS.length === 0 ? (
              // TODO: URLs das redes sociais em src/lib/site.ts
              <span className="text-[#CFCFCF]">Em breve</span>
            ) : (
              SOCIAIS.map(({ key, label, url, Icon }) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="tap hover:text-brand-dourado transition-colors gap-2 w-fit" data-testid={`footer-social-${key}`}>
                  <Icon className="w-5 h-5" aria-hidden /> {label}
                </a>
              ))
            )}
          </div>

          {LEGAL.length > 0 && (
            <div className="flex flex-col gap-1">
              <h2 className="txt-rotulo text-brand-dourado mb-2">Legal</h2>
              {LEGAL.map((l) => (
                <a key={l.testId} href={l.url} target="_blank" rel="noopener noreferrer" className="tap hover:text-brand-dourado text-[#CFCFCF] transition-colors w-fit" data-testid={l.testId}>
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 pt-8 text-[#CFCFCF]">
          <p>© 2026 Instituto NoFront. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
