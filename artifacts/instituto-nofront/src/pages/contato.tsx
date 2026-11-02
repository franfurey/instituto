import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SOCIAIS } from "@/components/SiteFooter";
import { useSeo } from "@/lib/use-seo";
import { CONTATO_EMAIL } from "@/lib/site";

type Campos = { nome: string; email: string; assunto: string; mensagem: string };
type Erros = Partial<Record<keyof Campos, string>>;

export function buildMailto(to: string, c: Campos) {
  const body = `Nome: ${c.nome}\nE-mail: ${c.email}\n\n${c.mensagem}`;
  return `mailto:${to}?subject=${encodeURIComponent(c.assunto)}&body=${encodeURIComponent(body)}`;
}

function validar(c: Campos): Erros {
  const e: Erros = {};
  if (!c.nome.trim()) e.nome = "Informe seu nome.";
  if (!c.email.trim()) e.email = "Informe seu e-mail.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) e.email = "Informe um e-mail válido.";
  if (!c.assunto.trim()) e.assunto = "Informe o assunto.";
  if (!c.mensagem.trim()) e.mensagem = "Escreva sua mensagem.";
  return e;
}

const CAMPOS: { k: keyof Campos; label: string; type?: string; auto?: string }[] = [
  { k: "nome", label: "Nome", auto: "name" },
  { k: "email", label: "E-mail", type: "email", auto: "email" },
  { k: "assunto", label: "Assunto" },
];

export default function Contato() {
  useSeo("Contato | Instituto NoFront", "Não queremos apenas ampliar quem participa do debate econômico. Queremos mudar os termos desse debate e os futuros que ele torna possíveis. Junte-se a nós.");
  const [c, setC] = useState<Campos>({ nome: "", email: "", assunto: "", mensagem: "" });
  const [erros, setErros] = useState<Erros>({});
  const [status, setStatus] = useState("");

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validar(c);
    setErros(e);
    if (Object.keys(e).length) {
      setStatus("");
      document.getElementById(`campo-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    if (!CONTATO_EMAIL) {
      // TODO: definir CONTATO_EMAIL em src/lib/site.ts
      setStatus("Em breve: o envio por e-mail ainda não está disponível.");
      return;
    }
    window.location.href = buildMailto(CONTATO_EMAIL, c);
    setStatus("Abrindo seu aplicativo de e-mail.");
  };

  const input = "w-full rounded-2xl border border-black/15 bg-white/80 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-roxo";

  return (
    <PageShell>
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr]">
        <div className="bg-brand-roxo text-white p-6 sm:p-10 md:p-16 flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">Fale com a gente</h1>
            <p className="text-lg md:text-xl leading-relaxed">Não queremos apenas ampliar quem participa do debate econômico. Queremos mudar os termos desse debate e os futuros que ele torna possíveis. Junte-se a nós.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-anton text-xl text-white/70">Redes</h2>
            {SOCIAIS.length === 0 ? (
              <span className="text-white/70" data-testid="text-redes-em-breve">Em breve</span>
            ) : (
              <ul className="flex flex-col gap-2">
                {SOCIAIS.map(({ key, label, url, Icon }) => (
                  <li key={key}><a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-brand-amarelo" data-testid={`contato-social-${key}`}><Icon className="w-5 h-5" aria-hidden /> {label} <ArrowUpRight className="w-4 h-4" aria-hidden /></a></li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="p-6 sm:p-10 md:p-16">
          <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5 max-w-xl" data-testid="form-contato">
            {CAMPOS.map(({ k, label, type, auto }) => (
              <div key={k} className="flex flex-col gap-2">
                <label htmlFor={`campo-${k}`} className="font-semibold">{label}</label>
                <input id={`campo-${k}`} type={type ?? "text"} autoComplete={auto} value={c[k]} onChange={(e) => setC({ ...c, [k]: e.target.value })} aria-invalid={!!erros[k]} aria-describedby={erros[k] ? `erro-${k}` : undefined} className={input} required data-testid={`input-${k}`} />
                {erros[k] && <p id={`erro-${k}`} className="text-sm text-brand-vinho">{erros[k]}</p>}
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label htmlFor="campo-mensagem" className="font-semibold">Mensagem</label>
              <textarea id="campo-mensagem" rows={6} value={c.mensagem} onChange={(e) => setC({ ...c, mensagem: e.target.value })} aria-invalid={!!erros.mensagem} aria-describedby={erros.mensagem ? "erro-mensagem" : undefined} className={input} required data-testid="input-mensagem" />
              {erros.mensagem && <p id="erro-mensagem" className="text-sm text-brand-vinho">{erros.mensagem}</p>}
            </div>
            <button type="submit" className="pill-btn gap-2 self-start" data-testid="button-enviar">Enviar <ArrowUpRight className="w-5 h-5" aria-hidden /></button>
            <p role="status" aria-live="polite" className="text-sm font-semibold text-brand-roxo min-h-[1.25rem]" data-testid="status-contato">{status}</p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
