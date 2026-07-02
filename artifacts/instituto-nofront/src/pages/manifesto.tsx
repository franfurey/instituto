import { Link } from "wouter";
import { Globe, ArrowUpRight, ArrowLeft, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const ManifestoHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur border-b border-black/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
          <Globe className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="font-anton text-2xl tracking-wide lowercase">instituto / NoFront</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="/#sobre" className="hover:text-brand-roxo transition-colors" data-testid="nav-about">About</a>
          <a href="/#insights" className="hover:text-brand-roxo transition-colors" data-testid="nav-blog">Blog</a>
          <a href="/#contato" className="hover:text-brand-roxo transition-colors" data-testid="nav-contact">Contact</a>
          <Link href="/projetos/manifesto" className="text-brand-roxo transition-colors" data-testid="nav-projetos-manifesto">
            Manifesto
          </Link>
          <a href="#" className="hover:text-brand-roxo transition-colors" data-testid="nav-boletins">Boletins</a>
        </nav>

        <div className="hidden md:block">
          <button className="pill-btn !py-2.5 !px-6 text-sm" data-testid="btn-donate">Donate Now</button>
        </div>
      </div>
    </header>
  );
};

const ManifestoFooter = () => {
  return (
    <footer id="contato" className="bg-brand-preto text-white pt-24 pb-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="col-span-1 md:col-span-1 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-10 h-10" />
              <span className="font-anton text-3xl lowercase leading-none">instituto<br/>NoFront</span>
            </div>
            <p className="text-white/60 text-sm">
              Transformando a economia a partir de vozes negras.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-anton text-xl text-white/50 mb-2">Social</h4>
            <a href="#" className="hover:text-brand-amarelo transition-colors flex items-center gap-2 w-fit" data-testid="footer-social-fb"><Facebook className="w-5 h-5"/> Facebook</a>
            <a href="#" className="hover:text-brand-amarelo transition-colors flex items-center gap-2 w-fit" data-testid="footer-social-ig"><Instagram className="w-5 h-5"/> Instagram</a>
            <a href="#" className="hover:text-brand-amarelo transition-colors flex items-center gap-2 w-fit" data-testid="footer-social-tw"><Twitter className="w-5 h-5"/> X (Twitter)</a>
            <a href="#" className="hover:text-brand-amarelo transition-colors flex items-center gap-2 w-fit" data-testid="footer-social-li"><Linkedin className="w-5 h-5"/> Linkedin</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-anton text-xl text-white/50 mb-2">Menu</h4>
            <Link href="/#sobre" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-about">About</Link>
            <Link href="/#insights" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-blog">Blog</Link>
            <Link href="/#contato" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-contact">Contact</Link>
            <Link href="/projetos/manifesto" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-manifesto">Manifesto</Link>
            <a href="#" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-boletins">Boletins</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-anton text-xl text-white/50 mb-2">Legal</h4>
            <a href="#" className="hover:text-white/80 text-white/60 transition-colors w-fit" data-testid="footer-legal-a11y">Accessibility Statement</a>
            <a href="#" className="hover:text-white/80 text-white/60 transition-colors w-fit" data-testid="footer-legal-privacy">Privacy Policy</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© 2026 Instituto NoFront. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Manifesto() {
  const principios = [
    {
      numero: "01",
      titulo: "Mulheres negras no centro",
      texto: "Acreditamos que mulheres negras devem ser protagonistas da produção de conhecimento econômico e da formulação de políticas públicas, não apenas objeto de estudo.",
    },
    {
      numero: "02",
      titulo: "Economia é justiça",
      texto: "Não existe desenvolvimento econômico verdadeiro enquanto persistirem as desigualdades raciais e de gênero que estruturam nossa sociedade.",
    },
    {
      numero: "03",
      titulo: "Pesquisa crítica e aplicada",
      texto: "Produzimos conhecimento que dialoga com a realidade, capaz de orientar decisões concretas de política pública e fortalecer o debate público.",
    },
    {
      numero: "04",
      titulo: "Sul Global em perspectiva",
      texto: "Enfrentamos os desafios econômicos do nosso tempo a partir de uma leitura situada, que conecta as lutas do Brasil às do Sul Global.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg w-full">
      <ManifestoHeader />

      <main>
        <section className="relative overflow-hidden bg-[#68429a] px-4 py-24 md:py-32">
          <div className="container mx-auto max-w-5xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-10"
              data-testid="link-back-home"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar
            </Link>
            <span className="inline-block font-anton uppercase text-xs md:text-sm tracking-widest text-brand-amarelo mb-6">
              Projetos / Manifesto
            </span>
            <h1 className="font-anton text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Por uma economia que reconhece, repara e é liderada por mulheres negras
            </h1>
          </div>
        </section>

        <section className="px-4 py-20 md:py-28 bg-brand-bg">
          <div className="container mx-auto max-w-3xl flex flex-col gap-8">
            <p className="text-xl md:text-2xl leading-relaxed text-brand-preto font-medium">
              O Instituto NoFront nasce da convicção de que a economia não é neutra. Ela é construída, disputada e, historicamente, tem excluído as vozes de mulheres negras dos espaços de decisão sobre política monetária, fiscal e social.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Este manifesto reúne os princípios que orientam nosso trabalho: pesquisa crítica e aplicada, incidência política e fortalecimento de mulheres negras e do Sul Global. Acreditamos que amplificar essas vozes é condição necessária para transformar as estruturas que produzem desigualdade.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Defendemos um futuro econômico onde justiça racial e justiça de gênero não sejam pautas paralelas, mas parte constitutiva de como pensamos, medimos e construímos desenvolvimento.
            </p>
          </div>
        </section>

        <section className="bg-brand-preto px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-5xl">
            <h2 className="font-anton text-white text-3xl md:text-5xl mb-16">
              Nossos princípios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {principios.map((p) => (
                <div key={p.numero} className="flex flex-col gap-4" data-testid={`principio-${p.numero}`}>
                  <span className="font-anton text-brand-amarelo text-2xl">{p.numero}</span>
                  <h3 className="font-anton text-white text-2xl md:text-3xl">{p.titulo}</h3>
                  <p className="text-white/70 leading-relaxed">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-20 md:py-28 bg-brand-roxo overflow-hidden">
          <div className="container mx-auto max-w-4xl flex flex-col items-center text-center gap-8">
            <h2 className="font-anton text-white text-3xl md:text-5xl leading-tight">
              Junte-se a esse movimento por uma economia mais justa
            </h2>
            <p className="text-white/90 text-lg max-w-xl">
              Acompanhe nossas pesquisas, apoie nossos projetos e faça parte da transformação que queremos ver.
            </p>
            <a href="/#contato">
              <button className="pill-btn-branco gap-2 text-lg" data-testid="btn-manifesto-contact">
                Entre em Contato <ArrowUpRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </section>
      </main>

      <ManifestoFooter />
    </div>
  );
}
