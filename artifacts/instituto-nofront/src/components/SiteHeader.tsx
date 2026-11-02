import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { APOIE_URL } from "@/lib/site";
import { EmBreve } from "@/components/site/EmBreve";

type NavLeaf = { label: string; href: string };
type NavItem = NavLeaf | { label: string; children: NavLeaf[] };

export const NAV: NavItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Sobre",
    children: [
      { label: "Nossa visão de transformação", href: "/sobre/nossa-visao" },
      { label: "Quem somos", href: "/sobre/quem-somos" },
    ],
  },
  {
    label: "Projetos",
    children: [
      { label: "Manifesto", href: "/projetos/manifesto" },
      { label: "Boletins", href: "/projetos/boletins" },
    ],
  },
  { label: "Notícias", href: "/noticias" },
  { label: "Contato", href: "/contato" },
];

const slug = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "-");

function ApoieButton({ className }: { className?: string }) {
  if (APOIE_URL) {
    return (
      <a href={APOIE_URL} className={cn("pill-btn !py-2.5 !px-6 text-sm", className)} data-testid="btn-apoie">
        Apoie
      </a>
    );
  }
  // TODO: destino do botão Apoie
  return <EmBreve label="Apoie" className={cn("!py-2.5 !px-5 text-sm", className)} testId="btn-apoie" />;
}

function DesktopDropdown({ item, location }: { item: { label: string; children: NavLeaf[] }; location: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const openedByHover = useRef(false);
  const id = useId();
  const active = item.children.some((c) => c.href === location);

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const links = () => Array.from(wrapRef.current?.querySelectorAll<HTMLAnchorElement>("[data-submenu-link]") ?? []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) setOpen(true);
      requestAnimationFrame(() => {
        const ls = links();
        const i = ls.indexOf(document.activeElement as HTMLAnchorElement);
        const next = e.key === "ArrowDown" ? (i + 1) % ls.length : i <= 0 ? ls.length - 1 : i - 1;
        ls[next]?.focus();
      });
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        window.clearTimeout(timer.current);
        openedByHover.current = !open;
        setOpen(true);
      }}
      onMouseLeave={() => {
        timer.current = window.setTimeout(() => setOpen(false), 150);
      }}
      onKeyDown={onKeyDown}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          // A pointer click follows mouse-enter; do not undo that opening.
          window.clearTimeout(timer.current);
          const fromHover = openedByHover.current;
          setOpen((o) => fromHover || !o);
          openedByHover.current = false;
        }}
        className={cn(
          "flex items-center gap-1 py-2 hover:text-brand-roxo transition-colors",
          active && "text-brand-roxo",
        )}
        data-testid={`nav-${slug(item.label)}`}
      >
        {item.label}
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      <div id={id} className={cn("absolute left-0 top-full pt-2", open ? "block" : "hidden")}>
        <ul className="bg-white rounded-xl shadow-lg border border-black/5 py-2 min-w-[240px]">
          {item.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                data-submenu-link
                aria-current={location === c.href ? "page" : undefined}
                className={cn(
                  "block px-4 py-2.5 text-sm hover:bg-brand-bg hover:text-brand-roxo focus:bg-brand-bg focus:text-brand-roxo outline-none transition-colors",
                  location === c.href && "text-brand-roxo font-semibold",
                )}
                data-testid={`nav-${slug(c.label)}`}
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileGroup({ item, location }: { item: { label: string; children: NavLeaf[] }; location: string }) {
  const active = item.children.some((c) => c.href === location);
  const [open, setOpen] = useState(active);
  const id = useId();
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={cn("w-full flex items-center justify-between py-3 text-lg font-medium", active && "text-brand-roxo")}
        data-testid={`mobile-nav-${slug(item.label)}`}
      >
        {item.label}
        <ChevronDown className={cn("w-5 h-5 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      <ul id={id} hidden={!open} className="pl-4 border-l-2 border-brand-orquidea/40 mb-2">
        {item.children.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              aria-current={location === c.href ? "page" : undefined}
              className={cn("block py-2.5 text-base", location === c.href && "text-brand-roxo font-semibold")}
              data-testid={`mobile-nav-${slug(c.label)}`}
            >
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SiteHeader() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();

  useEffect(() => setMobileOpen(false), [location]);
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur border-b border-black/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-2 sm:gap-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0" data-testid="link-home" aria-label="Instituto NoFront, ir para o início">
          <Globe className="w-8 h-8 group-hover:rotate-12 transition-transform" aria-hidden />
          <span className="font-anton text-lg sm:text-2xl tracking-wide lowercase whitespace-nowrap">instituto / NoFront</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:flex items-center gap-7 font-medium">
          {NAV.map((item) =>
            "children" in item ? (
              <DesktopDropdown key={item.label} item={item} location={location} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={location === item.href ? "page" : undefined}
                className={cn("py-2 hover:text-brand-roxo transition-colors", location === item.href && "text-brand-roxo")}
                data-testid={`nav-${slug(item.label)}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <ApoieButton />
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          data-testid="btn-mobile-menu"
        >
          {mobileOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      <nav
        id={menuId}
        aria-label="Principal"
        hidden={!mobileOpen}
        className="lg:hidden absolute top-20 left-0 w-full bg-brand-bg border-b border-black/5 px-4 pb-6 shadow-xl max-h-[calc(100dvh-5rem)] overflow-y-auto"
      >
        <ul className="flex flex-col divide-y divide-black/5">
          {NAV.map((item) =>
            "children" in item ? (
              <MobileGroup key={item.label} item={item} location={location} />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={location === item.href ? "page" : undefined}
                  className={cn("block py-3 text-lg font-medium", location === item.href && "text-brand-roxo")}
                  data-testid={`mobile-nav-${slug(item.label)}`}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <ApoieButton className="w-full mt-4 justify-center" />
      </nav>
    </header>
  );
}
