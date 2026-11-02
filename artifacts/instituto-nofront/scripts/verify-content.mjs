import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Router } from "wouter";

// Fixtures exist only in this script, never in the public editorial arrays.
process.env.PORT ||= "5173";
process.env.BASE_PATH ||= "/";
const root = fileURLToPath(new URL("../", import.meta.url));
const server = await createServer({
  configFile: `${root}/vite.config.ts`,
  server: { middlewareMode: true },
  appType: "custom",
});
const normalize = (s) => s.replace(/<\/(?:p|div|section|h[1-6]|li)>/g, " ").replace(/<[^>]*>/g, "")
  .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
try {
  const source = await readFile(new URL("../../../attached_assets/textos-finais-site-nofront_1793659361131.md", import.meta.url), "utf8");
  const sections = source.split(/\*\*[1-4]\\?\.\s+[^\n]+\*\*/).slice(1);
  const names = ["home", "nossa-visao", "quem-somos", "manifesto"];
  for (const [i, name] of names.entries()) {
    const { default: Page } = await server.ssrLoadModule(`${root}/src/pages/${name}.tsx`);
    const rendered = normalize(renderToStaticMarkup(React.createElement(Router, { ssrPath: "/" }, React.createElement(Page))));
    let checked = 0;
    for (let paragraph of sections[i].split(/\n\s*\n/)) {
      // The future-member template is explicitly private editorial guidance.
      if (paragraph.includes("Demais membros") || paragraph.includes("Cargo no Instituto") || paragraph.includes("biografias devem")) continue;
      paragraph = paragraph.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/\\([.*[\]])/g, "$1").replace(/\*\*/g, "").replace(/^\*\s+/gm, "").replace(/\*/g, "");
      paragraph = normalize(paragraph);
      // Check every prose paragraph; short headings and CTA labels have separate UI checks.
      if (paragraph.length < 100 || paragraph.includes("Nome Cargo")) continue;
      assert.ok(rendered.replace(/\s/g, "").includes(paragraph.replace(/\s/g, "")), `${name}: missing or changed source paragraph:\n${paragraph}`);
      checked++;
    }
    console.log(`${name}: ${checked} full source paragraphs verified`);
  }

  const { BoletinsView } = await server.ssrLoadModule(`${root}/src/pages/boletins.tsx`);
  const fixture = (edicao) => ({
    edicao, titulo: `TESTE edição ${edicao}`, data: "2026-01-01",
    resumo: "TESTE resumo", tema: "TESTE tema", capa: "",
    linkLeitura: "https://example.com/leitura", linkPdf: "https://example.com/teste.pdf",
  });
  const populated = renderToStaticMarkup(React.createElement(BoletinsView, { boletins: [fixture(1), fixture(3), fixture(2)] }));
  assert.match(populated, /data-testid="boletim-destaque"/);
  assert.ok(populated.indexOf("TESTE edição 3") < populated.indexOf("TESTE edição 2"));
  assert.match(populated, /Ler boletim/);
  assert.match(populated, /Baixar PDF/);
  for (const edition of [1, 2, 3]) assert.ok(populated.includes(`card-boletim-${edition}`));
  const empty = renderToStaticMarkup(React.createElement(BoletinsView, { boletins: [] }));
  assert.ok(empty.includes("Os boletins serão publicados aqui em breve."));
  assert.ok(empty.includes("https://institutonofront.substack.com"));

  const { NoticiasView } = await server.ssrLoadModule(`${root}/src/pages/noticias.tsx`);
  assert.ok(renderToStaticMarkup(React.createElement(NoticiasView, { noticias: [{
    titulo: "TESTE notícia", data: "2026-01-01", resumo: "TESTE resumo", link: "https://example.com/noticia",
  }] })).includes("TESTE notícia"));
  const { buildMailto } = await server.ssrLoadModule(`${root}/src/pages/contato.tsx`);
  const campos = { nome: "Teste & ação", email: "test@example.com", assunto: "Olá & orçamento?", mensagem: "Linha 1\nLinha 2 + 50%" };
  const mail = buildMailto("destino@example.com", campos);
  const query = new URLSearchParams(mail.split("?")[1]);
  assert.equal(query.get("subject"), campos.assunto);
  assert.equal(query.get("body"), `Nome: ${campos.nome}\nE-mail: ${campos.email}\n\n${campos.mensagem}`);
  const { boletins } = await server.ssrLoadModule(`${root}/src/data/boletins.ts`);
  const { noticias } = await server.ssrLoadModule(`${root}/src/data/noticias.ts`);
  assert.equal(boletins.length, 0);
  assert.equal(noticias.length, 0);
  console.log("Temporary bulletin/news fixtures, empty states and encoded mailto verified; public lists remain empty.");
  // React may execute a state updater after the click handler returns.
  // Exercise the actual handler with a deferred updater, not a synchronous mock.
  const header = await readFile(`${root}/src/components/SiteHeader.tsx`, "utf8");
  const handler = header.match(/onClick=\{\(\) => \{([\s\S]*?\/\/ A pointer click[\s\S]*?)\}\}/)?.[1];
  assert.ok(handler, "Desktop dropdown click handler exists");
  for (const [hover, before, expected] of [[true, true, true], [false, false, true], [false, true, false]]) {
    let queued;
    const ref = { current: hover };
    new Function("setOpen", "openedByHover", "window", "timer", handler)(
      (updater) => { queued = updater; }, ref, { clearTimeout() {} }, { current: undefined },
    );
    assert.equal(queued(before), expected);
  }
  console.log("Deferred dropdown updates verified: hover + click stays open; ordinary click toggles.");
} finally {
  await server.close();
}
