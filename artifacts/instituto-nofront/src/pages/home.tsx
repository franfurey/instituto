import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Globe, Menu, X, ArrowUpRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import marchaMulheresNegrasImg from "@assets/marchamulheresnegras_1783012613504.jpg";

// --- Components ---

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur border-b border-black/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
          <Globe className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="font-anton text-2xl tracking-wide lowercase">instituto / NoFront</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#sobre" className="hover:text-brand-roxo transition-colors" data-testid="nav-about">About</a>
          <a href="#insights" className="hover:text-brand-roxo transition-colors" data-testid="nav-blog">Blog</a>
          <a href="#contato" className="hover:text-brand-roxo transition-colors" data-testid="nav-contact">Contact</a>
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1 hover:text-brand-roxo transition-colors" data-testid="nav-projetos">Projetos <span className="text-xs">▼</span></span>
          </div>
          <a href="#" className="hover:text-brand-roxo transition-colors" data-testid="nav-boletins">Boletins</a>
        </nav>

        <div className="hidden md:block">
          <button className="pill-btn !py-2.5 !px-6 text-sm" data-testid="btn-donate">Donate Now</button>
        </div>

        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-bg border-b border-black/5 p-4 flex flex-col gap-4 shadow-xl">
          <a href="#sobre" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#insights" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="#contato" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Projetos</a>
          <a href="#" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Boletins</a>
          <button className="pill-btn w-full mt-4">Donate Now</button>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[88vh]">
      {/* Left */}
      <div className="p-8 md:p-16 flex flex-col justify-end bg-[#68429a]">
        <h1 className="font-anton text-white break-words ml-[-15px] mr-[-15px] pl-[0px] pr-[0px] border-t-[0px] border-r-[0px] border-b-[0px] border-l-[0px] pt-[0px] pb-[0px] mt-[8px] mb-[8px] text-[50px] md:text-[50px] lg:text-[60px]">
          Novos<br/>
          Futuros<br/>
          Econômicos
        </h1>
      </div>
      {/* Right */}
      <div className="flex flex-col">
        {/* Right Top */}
        <div className="bg-brand-bg p-8 md:p-16 flex-1 flex flex-col justify-center items-start gap-8 min-h-[40vh]">
          <Globe className="w-24 h-24 md:w-32 md:h-32 text-brand-preto" strokeWidth={1} />
          <p className="text-2xl md:text-3xl font-medium max-w-lg leading-tight">
            Amplificamos vozes negras na economia para transformar as estruturas que produzem desigualdade
          </p>
        </div>
        
        {/* Right Bottom - 2x2 simulated grid */}
        <div className="grid grid-cols-2 grid-rows-2 h-[340px] md:h-auto md:flex-1 relative group">
          <div className="bg-[#B9A7E8] transition-colors"></div>
          
          <div className="relative overflow-hidden bg-white">
            {/* Stripe pattern */}
            <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 10px, #8E24C8 10px, #8E24C8 20px, #121212 20px, #121212 30px)' }}></div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
               <span className="font-anton text-white text-xl md:text-3xl text-center leading-tight">Incidência<br/>Política</span>
            </div>
          </div>
          
          <div className="col-span-2 bg-[#9C8ACB]"></div>

          <button className="pill-btn absolute bottom-6 right-6 gap-2" data-testid="btn-volunteer">
            Become a Volunteer <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Repensar = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 px-4 bg-brand-bg">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <h2 className="font-sans font-normal text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-left text-brand-preto whitespace-nowrap">
          Repensar Economia,<br/>Garantir o Futuro.
        </h2>
        <div className="flex flex-col items-start gap-6">
          <p className="md:text-lg text-gray-700 text-[13px]">
            Da política monetária à economia do cuidado, enfrentamos os principais desafios econômicos do nosso tempo por meio de pesquisa crítica e aplicada, incidência política e fortalecimento de mulheres negras e do Sul Global.
          </p>
          <button className="pill-btn-sm gap-2" data-testid="btn-learn-more">
            LEARN MORE <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Pilares = () => {
  return (
    <section id="pilares" className="grid grid-cols-1 md:grid-cols-3 min-h-[66vh]">
      <div className="bg-brand-orquidea p-12 md:p-16 flex flex-col justify-start gap-6 md:gap-16 min-h-[30vh]">
        <h3 className="font-anton uppercase text-[#5A1189] break-words hover:scale-105 transition-transform origin-top-left cursor-default text-[30px]">
          Incidência<br/>Política
        </h3>
        <p className="text-white max-w-sm text-[13px] md:text-xs text-left" data-testid="text-pilar-incidencia">
          Reposicionamos mulheres negras como protagonistas da formulação de políticas públicas, da produção de pensamento econômico e da transformação das estruturas de poder.
        </p>
      </div>
      <div className="bg-brand-preto p-12 md:p-16 flex flex-col justify-start gap-6 md:gap-16 min-h-[30vh]">
        <h3 className="font-anton uppercase text-white break-words hover:scale-105 transition-transform origin-top-left cursor-default text-[30px]">
          Educação
        </h3>
        <p className="text-gray-200 max-w-sm text-[13px] md:text-xs" data-testid="text-pilar-educacao">
          Por meio da educação, formamos e fortalecemos mulheres negras para ocupar o debate econômico e construir futuros mais justos.
        </p>
      </div>
      <div className="bg-brand-vermelho p-12 md:p-16 flex flex-col justify-start gap-6 md:gap-16 min-h-[30vh]">
        <h3 className="font-anton uppercase text-brand-dourado break-words hover:scale-105 transition-transform origin-top-left cursor-default text-[30px]">
          Pesquisa
        </h3>
        <p className="text-white max-w-sm text-[13px] md:text-xs ml-[0px] mr-[0px]" data-testid="text-pilar-pesquisa">
          Desenvolvemos estudos e análises a partir da produção intelectual de economistas negras para promover justiça econômica e ampliar o debate sobre equidade racial no contexto do Sul Global.
        </p>
      </div>
    </section>
  );
};

const PhotoBand = () => {
  return (
    <section
      className="parallax-bg w-full min-h-[72vh] bg-[#C9BBB3] relative overflow-hidden"
      style={{ backgroundImage: `url(${marchaMulheresNegrasImg})` }}
      role="img"
      aria-label="Marcha das Mulheres Negras"
      data-testid="img-photoband-marcha"
    />
  );
};

const AnimatedNumber = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOut cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-brand-bg p-12 md:p-24 flex flex-col justify-center gap-8">
        <h2 className="font-anton text-4xl md:text-6xl leading-[1.1]">
          Pesquisa, incidência e educação para mover o futuro
        </h2>
        <p className="text-xl text-gray-700 max-w-lg">
          Nossa produção intelectual é a base para a construção de políticas públicas que impactam a vida das mulheres negras em todo o Brasil.
        </p>
      </div>
      
      <div className="flex flex-col">
        <div className="bg-brand-vinho p-12 flex-1 flex flex-col justify-center text-center">
          <div className="font-anton text-6xl md:text-8xl text-white mb-2">
            +<AnimatedNumber end={300} />
          </div>
          <div className="font-anton text-xl md:text-2xl text-brand-dourado tracking-wide">
            Lideranças Negras ouvidas
          </div>
        </div>
        
        <div className="bg-brand-preto p-12 flex-1 flex flex-col justify-center text-center">
          <div className="font-anton text-6xl md:text-8xl text-white mb-2">
            +<AnimatedNumber end={200} />
          </div>
          <div className="font-anton text-xl md:text-2xl text-white tracking-wide">
            Mulheres inscritas em nossos programas
          </div>
        </div>
        
        <div className="bg-brand-orquidea p-12 flex-1 flex flex-col justify-center text-center">
          <div className="font-anton text-6xl md:text-8xl text-white mb-2">
            <AnimatedNumber end={6} />
          </div>
          <div className="font-anton text-xl md:text-2xl text-white tracking-wide">
            Boletins de Economia Produzidos
          </div>
        </div>
      </div>
    </section>
  );
};

const Apoie = () => {
  return (
    <section className="parallax-bg relative min-h-[100dvh] flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden bg-[#5a4f52]">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="font-anton text-white text-[12vw] md:text-[9rem] leading-[0.85] mb-12 drop-shadow-lg">
          Apoie Mulheres<br/>Negras que<br/>Produzem Futuro
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl">
          <p className="text-white/90 text-lg md:text-xl text-left flex-1 font-medium">
            Seja parte da transformação que queremos ver. Seu apoio garante a continuidade e expansão das nossas pesquisas e incidência política.
          </p>
          <button className="pill-btn-branco shrink-0 gap-2 text-lg" data-testid="btn-contact-support">
            Entre em Contato <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Insights = () => {
  const cards = [
    { title: "[Oportunidade Exclusiva] Último dia de inscrições para o Ciclo Formativo do Instituto NoFront", date: "Mar 25", featured: true },
    { title: "Resultado da 1ª etapa disponível no site: confira a lista", date: "Feb 25" },
    { title: "Obrigada. Encerramos as inscrições e estamos avaliando as candidaturas", date: "Feb 13" },
    { title: "Últimas horas para se inscrever nos Boletins sobre Economia do Cuidado", date: "Feb 08" },
    { title: "Sessão tira-dúvidas: Últimos dias para se inscrever nos Boletins sobre Economia do Cuidado", date: "Feb 02" },
  ];

  return (
    <section id="insights" className="py-24 md:py-32 px-4 bg-brand-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="font-anton text-5xl md:text-6xl mb-4">Últimos Insights & histórias</h2>
          <p className="text-xl text-gray-600">Acompanhe nossas análises e publicações recentes.</p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
            <h3 className="font-anton text-2xl">O Substack de Instituto</h3>
            <a href="https://institutonofront.substack.com" target="_blank" rel="noreferrer" className="text-brand-roxo font-bold hover:underline flex items-center gap-1" data-testid="link-substack-all">
              Ver todos <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <a 
                key={i}
                href="https://institutonofront.substack.com"
                target="_blank"
                rel="noreferrer"
                data-testid={`card-insight-${i}`}
                className={`
                  group block rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                  bg-gradient-to-br from-brand-roxo to-brand-vinho text-white
                  ${card.featured ? 'md:col-span-2 lg:col-span-2 min-h-[300px]' : 'min-h-[200px]'}
                `}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <div className="relative z-10 h-full flex flex-col justify-between gap-4">
                  <h4 className={`font-bold leading-tight ${card.featured ? 'text-2xl md:text-4xl max-w-xl' : 'text-xl'}`}>
                    {card.title}
                  </h4>
                  <div className="flex items-center justify-between text-white/80 font-medium">
                    <span>{card.date}</span>
                    <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-roxo transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const text = "Justiça Econômica Para Todas ✦ ";
  return (
    <section className="bg-brand-laranja overflow-hidden py-6 border-y-4 border-brand-preto">
      <div className="animate-marquee whitespace-nowrap">
        <span className="font-anton text-[6rem] md:text-[9rem] text-brand-amarelo px-4 select-none">
          {text}{text}{text}
        </span>
        <span className="font-anton text-[6rem] md:text-[9rem] text-brand-amarelo px-4 select-none">
          {text}{text}{text}
        </span>
      </div>
    </section>
  );
};

const Footer = () => {
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
            <a href="#sobre" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-about">About</a>
            <a href="#insights" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-blog">Blog</a>
            <a href="#contato" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-contact">Contact</a>
            <a href="#" className="hover:text-brand-orquidea transition-colors w-fit" data-testid="footer-nav-projetos">Projetos</a>
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

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg w-full">
      <Header />
      <main>
        <Hero />
        <Repensar />
        <Pilares />
        <PhotoBand />
        <Stats />
        <Apoie />
        <Insights />
        <Marquee />
      </main>
      <Footer />
    </div>
  );
}
