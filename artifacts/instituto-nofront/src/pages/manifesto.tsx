import { Link } from "wouter";
import { Globe, ArrowUpRight, ArrowLeft, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import manifestoHeroImg from "@assets/3a45098b-a9ea-46b5-ab54-bbe7ba51e987_1783028511227.png";
import eixo1Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_18_(1)_1783028511242.png";
import eixo2Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_18_(2)_1783028511244.png";
import eixo3Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_19_(3)_1783028511245.png";
import eixo4Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_19_(4)_1783028511245.png";
import eixo5Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_19_(5)_1783028511244.png";
import eixo6Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_20_(6)_1783028511244.png";
import eixo7Img from "@assets/ChatGPT_Image_26_de_jun._de_2026,_17_22_20_(7)_1783028511244.png";

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
  const eixos = [
    { numero: 1, titulo: "Reparação econômica e institucional", img: eixo1Img, cor: "#C21E4F" },
    { numero: 2, titulo: "Trabalho e renda", img: eixo2Img, cor: "#F04B21" },
    { numero: 3, titulo: "Política macroeconômica e fiscal", img: eixo3Img, cor: "#3A8A3E" },
    { numero: 4, titulo: "Dignidade", img: eixo4Img, cor: "#3956A8" },
    { numero: 5, titulo: "Investimento público", img: eixo5Img, cor: "#5B3A29" },
    { numero: 6, titulo: "Investimento privado", img: eixo6Img, cor: "#8A5A2E" },
    { numero: 7, titulo: "Economia internacional", img: eixo7Img, cor: "#B08968" },
  ];

  return (
    <div className="min-h-screen bg-brand-bg w-full">
      <ManifestoHeader />

      <main>
        <section className="relative overflow-hidden bg-brand-preto">
          <div className="container mx-auto">
            <Link
              href="/"
              className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/30 backdrop-blur px-4 py-2 rounded-full text-sm"
              data-testid="link-back-home"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar
            </Link>
            <img
              src={manifestoHeroImg}
              alt="Manifesto Econômico da Marcha das Mulheres Negras"
              className="w-full h-auto object-cover"
              data-testid="img-manifesto-hero"
            />
          </div>
        </section>

        <section className="px-4 py-20 md:py-28 bg-brand-bg">
          <div className="container mx-auto max-w-3xl flex flex-col gap-8">
            <h1 className="font-anton text-3xl md:text-5xl leading-tight text-brand-preto">
              Reparação como eixos da economia brasileira
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-brand-preto font-medium">
              O Manifesto Econômico da Marcha das Mulheres Negras foi construído em parceria com o Instituto NoFront. Ele reúne reivindicações, propostas e caminhos concretos para transformar a economia brasileira e, sobretudo, as condições de vida das mulheres negras.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Chamamos de "projeto" porque não se limita a enunciar demandas. Ele se propõe a projetar um novo marco para as relações econômicas no Brasil, reposicionando reparação e bem viver como eixos estruturantes de justiça racial e de gênero.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              A Marcha das Mulheres Negras por Reparação e Bem Viver é um movimento político e social que reúne mulheres negras de todo o país no enfrentamento ao racismo, à violência e às desigualdades. Dez anos após levar mais de 10 mil mulheres a Brasília, voltamos às ruas em 25 de novembro de 2025, com ainda mais força e organização.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              É nesse contexto de mobilização e construção coletiva que damos vida ao nosso Manifesto Econômico.
            </p>
          </div>
        </section>

        <section className="bg-brand-preto px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-anton text-white text-3xl md:text-5xl mb-16">
              Os 7 eixos do manifesto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eixos.map((e) => (
                <div
                  key={e.numero}
                  className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex flex-col hover:-translate-y-1 transition-transform"
                  data-testid={`eixo-card-${e.numero}`}
                >
                  <img
                    src={e.img}
                    alt={`Eixo ${e.numero}: ${e.titulo}`}
                    className="w-full h-auto object-cover"
                    data-testid={`img-eixo-${e.numero}`}
                  />
                  <div className="p-6 flex flex-col gap-1">
                    <span className="font-anton text-sm tracking-widest" style={{ color: e.cor }}>
                      EIXO {e.numero}
                    </span>
                    <h3 className="font-anton text-white text-xl md:text-2xl">{e.titulo}</h3>
                  </div>
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
