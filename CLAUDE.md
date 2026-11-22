# Instruções para o Claude — site da Nexial Partners

Leia também o `README.md`, que é a documentação técnica (estrutura, edição,
publicação). Este arquivo guarda o que foi decidido e o que já deu errado.

## Estado

- Site no ar: https://nexialpartners.com (apex; `www` e a URL antiga redirecionam)
- Astro 7, estático, PT na raiz e EN em `/en/`, páginas próprias por idioma
- Publicação: GitHub Actions a cada push na `main` (deploy leva ~1 minuto)
- Quase todo texto fica em `src/i18n/dict.js`, as duas línguas lado a lado
- Sócios (4, em ordem alfabética, em `t.partners.people`): Alex Petermann,
  Antonio Neves Santana, Arley Costa, Iran Zan

## Fluxo de trabalho

1. `npm run build` antes de cada commit: pega rota quebrada, imagem não
   importada e chave faltando no dicionário.
2. **Commit automático, push não.** Cada etapa é commitada sem perguntar, com
   mensagem em português e a linha de coautoria. `git push` e qualquer
   publicação esperam Alex dizer "pode subir para o ar".
3. Depois do push, conferir o deploy (`gh run list --limit 1`) e o endereço
   público. Depois de trocar uma imagem, o teste mais confiável é ver o hash
   novo no nome do arquivo no HTML publicado.
4. **Relato curto**, no máximo 10 linhas, sem recapitular o processo.

## Decisões de Alex (valem até ele dizer o contrário)

1. Nenhum e-mail na página. Não reintroduzir `mailto:`. O contato é pelo
   formulário (Formspree, `CONTACT.formEndpoint`) e pelo LinkedIn.
2. O texto não pode soar escrito por IA: português direto, sem adjetivo
   exagerado, sem travessão para comentário intercalado, sem mencionar IA,
   agente ou processo de elaboração.
3. Sem ponto final em título (`h1`/`h2`/`h3` e eyebrows).
4. Bios dos sócios com ~200 caracteres, todas do mesmo tamanho. Ao trocar uma,
   reequilibrar as quatro.
5. Sem cargos nos cartões de partner.
6. O logo tem o mesmo tamanho em todas as páginas (`.brand img` no
   `Header.astro`), na proporção do teaser.
7. O halo do ponteiro é discreto. Já foi reduzido uma vez.
8. O repositório fica público.

## Armadilhas já pagas

- **Imagem de conteúdo trocada em `public/` com o mesmo nome:** o cache serve
  a antiga. Imagem de conteúdo vai em `src/assets/`, que ganha hash.
- **Link interno escrito na mão:** gera 301. Usar `url()` de `src/i18n/utils.js`
  (`trailingSlash: 'always'`).
- **`robots.txt`:** é gerado por `src/pages/robots.txt.js` a partir de
  `SITE_URL`. Não criar arquivo estático.
- **404:** é autocontida (CSS embutido, marca em data URI). Não usar caminho
  absoluto nela.
- **Menu mobile:** ancora em `--header-h`. Não fixar altura.
- **`.stat` fica fora de `CARTOES`** no `PointerFx.astro`, senão perde o
  `position: sticky`.
- **Ao substituir uma landing em `public/`** (`geointelligence`, `valuepath`):
  refazer o link `#contato` → `/contato/` e as tags `canonical`/`og:*`/
  `twitter:card`. Sem elas o LinkedIn publica o link sem preview.
- **Contagem de sócios por extenso** ("quatro sócios" etc.) aparece em vários
  pontos do `dict.js`, nas duas línguas. Ao entrar ou sair alguém, procurar
  pelo número por extenso, não só pelo nome.

## Pendências (decisões que ficaram com Alex)

1. Lagoa Azul nomeia "Grupo GVS" no herói, na legenda e nos logos, mas o corpo
   diz "um grupo minerador". Assumir o nome ou anonimizar.
2. As landings existem só em português.
3. O formulário não registra de qual landing veio o lead (campo oculto
   resolveria).
4. Páginas individuais de sócio, com as bios longas do teaser.
5. Fotografia real de obra, ativo e equipe no lugar dos fundos em duotone.
