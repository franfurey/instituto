# Pendências do site Instituto NoFront

Itens que dependem de conteúdo ou destinos ainda não fornecidos. Enquanto vazios, o site mostra "Em breve" e nunca usa links falsos. A maioria se configura em `src/lib/site.ts`.

## Contato e redes
- [ ] `CONTATO_EMAIL` (src/lib/site.ts): e-mail real. Vazio = formulário valida e informa "Em breve", sem abrir mailto.
- [ ] `SOCIAL_URLS.facebook`, `.instagram`, `.x`, `.linkedin`: redes sem URL ficam ocultas (rodapé e /contato).

## Chamadas sem destino
- [ ] `APOIE_URL`: botão "Apoie" do menu (desktop e celular).
- [ ] `VOLUNTARIA_URL`: botão "Seja voluntária" na abertura da Início.
- [ ] `TEORIA_MUDANCA_URL`: "Conheça nossa Teoria de Mudança" (/sobre/nossa-visao).
- [ ] `MANIFESTO_COMPLETO_URL`: "Leia o Manifesto completo".
- [ ] `MANIFESTO_FORMACAO_URL`: "Conheça os processos de formação sobre o Manifesto".
- [ ] `MANIFESTO_INCIDENCIA_URL`: "Acompanhe nossas ações de incidência".
  - Observação: o link editorial antigo (institutonofront.org.br/manifesto) não foi reutilizado como documento completo; no texto do pilar Incidência ele aponta para a página interna /projetos/manifesto.

## Legal
- [ ] `ACESSIBILIDADE_URL` e `PRIVACIDADE_URL`: páginas/textos de Acessibilidade e Política de Privacidade.

## Equipe (/sobre/quem-somos)
- [ ] Fotos das cinco lideranças: preencher o campo `foto` em `EQUIPE` (src/pages/quem-somos.tsx). Sem foto, aparecem as iniciais.
- [ ] Demais membros da equipe (nome, cargo, dois parágrafos de biografia) — o modelo editorial não é exibido publicamente.

## Conteúdo editorial
- [ ] Boletins: preencher `src/data/boletins.ts` (edicao, titulo, data, resumo, tema, capa, linkLeitura, linkPdf). O de maior edição vira destaque; com 2+ itens aparece a grade. A seção "Receba os próximos boletins" permanece disponível também com a lista vazia. Vazio = "Os boletins serão publicados aqui em breve." + Substack.
- [ ] Notícias: preencher `src/data/noticias.ts` (titulo, data, resumo, imagem?, link?). Vazio = "Em breve".
- [ ] Início, "Últimos insights & histórias": os cards de demonstração (títulos/datas não verificáveis) foram removidos; incluir publicações reais do Substack quando houver.
- [ ] Estudos e publicações / Análises e artigos (arquitetura editorial): fora do escopo, sem página.

## Verificação de dados futuros
`BoletinsView`, `BoletimDestaque`, `BoletinsGrade` (src/pages/boletins.tsx) e `NoticiasView` (src/pages/noticias.tsx) são exportados e recebem a lista por props, permitindo testes com fixtures temporárias sem publicá-las. `buildMailto` (src/pages/contato.tsx) é exportado para testar a codificação do mailto.

## Verificações realizadas
- `pnpm run typecheck` na raiz e build do site.
- `node artifacts/instituto-nofront/scripts/verify-content.mjs`: compara 79 parágrafos integrais com o documento final, exercita boletins/notícias com dados temporários, estados vazios, codificação do mailto e atualizações adiadas do menu.
- Navegador: sete rotas diretas e pela navegação, página de erro, logo, destaque da página atual, retorno ao topo, teclado, toque, expansões e validação do contato sem envio.
- Responsividade nas larguras 360, 375, 390 e 430px; correções de largura dos botões Substack e do cabeçalho confirmadas sem corte horizontal.
