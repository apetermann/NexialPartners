# Nexial Partners — Website

Site institucional da **Nexial Partners**: engenharia de alta performance potencializada por Inteligência Artificial.

Site estático construído com [Astro](https://astro.build), bilíngue **PT/EN** com URLs próprias por idioma, publicado no GitHub Pages.

---

## Rodar localmente

```bash
npm install
npm run dev
```

O endereço aparece no terminal (normalmente `http://localhost:4321/NexialPartners/`).

| Comando | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento, com recarga automática |
| `npm run build` | gera o site estático em `dist/` |
| `npm run preview` | serve o `dist/` já construído, como ficará em produção |

## Estrutura

```
src/
├── i18n/
│   ├── dict.js          # TODO o conteúdo do site, nas duas línguas
│   └── utils.js         # montagem de URLs com idioma e caminho base
├── layouts/Base.astro   # <head>, SEO, hreflang, dados estruturados
├── components/
│   ├── Header.astro     # cabeçalho, menu e seletor de idioma
│   ├── Footer.astro
│   ├── HeroCanvas.astro # campo de curvas de nível animado
│   ├── sections/        # blocos reutilizáveis entre páginas
│   └── pages/           # composição de cada página (uma por idioma)
├── pages/               # rotas — arquivos finos que só escolhem o idioma
│   ├── index.astro          → /
│   ├── modelo.astro         → /modelo
│   └── en/model.astro       → /en/model
└── styles/global.css    # tokens e sistema de design
public/                  # arquivos servidos como estão (imagens, robots.txt)
```

## Como editar o conteúdo

**Todo o texto vive em `src/i18n/dict.js`**, com as duas línguas lado a lado:

```js
title: {
  pt: 'A engenharia mudou — e a mineração sente primeiro.',
  en: 'Engineering has changed — and mining feels it first.',
},
```

Edite o valor da língua desejada e salve. Não há texto solto dentro dos componentes — assim as duas versões nunca saem de sincronia.

Diferente da versão anterior do site, cada idioma é uma **página estática própria** (`/servicos` e `/en/services`), com `hreflang` ligando as duas. O Google indexa as duas versões e nada depende de JavaScript para traduzir.

### Adicionar uma página

1. Acrescente as rotas em `ROUTES` no `dict.js` (o slug em cada língua).
2. Crie o componente em `src/components/pages/`.
3. Crie os dois arquivos finos de rota: `src/pages/<slug-pt>.astro` e `src/pages/en/<slug-en>.astro`.

### Paleta e tipografia

No bloco `:root` de `src/styles/global.css`. A paleta deriva do gradiente do símbolo da marca (`#1C213F` indigo → `#4FA8D8` azul → `#5DB8B1` verde-água). Todas as cores de texto ficam **acima de 6:1** sobre os fundos (WCAG AA exige 4,5:1).

Tipografia: **Fraunces** (serifada variável) nos títulos, **Inter** no texto corrido, **IBM Plex Mono** nos rótulos e numeração.

### O herói animado

`src/components/HeroCanvas.astro` desenha um campo de curvas de nível — vocabulário visual de carta topográfica e seção de corpo mineral. É gerado por código, sem imagem nem vídeo: o campo escalar é a soma de ondas planas em direções e frequências incomensuráveis, e as isolinhas saem por *marching squares*.

Ele respeita `prefers-reduced-motion` (desenha um quadro estático), pausa quando sai da tela ou a aba vai para segundo plano, e limita o `devicePixelRatio` a 1,5.

Para ajustar o desenho, mexa em `OCT` (o relevo), `NIVEIS` (quantidade de curvas) e `PASSO` (resolução da grade).

### Fotos dos partners

Em `public/assets/img/partners/`, uma por pessoa, 320×320. O recorte circular e o preto e branco são aplicados por CSS — a imagem de origem pode ser colorida. Para trocar, substitua o arquivo mantendo o nome.

## Publicação

O workflow `.github/workflows/deploy.yml` instala as dependências, roda o build e publica a cada `push` na `main`.

**Configuração única no GitHub:** `Settings` → `Pages` → em *Source*, selecione **GitHub Actions**.

### Domínio próprio (nexialpartners.com)

Hoje o site vive num subdiretório (`/NexialPartners/`) porque é um GitHub Pages de projeto. Para migrar:

1. No `.github/workflows/deploy.yml`, troque as variáveis do passo de build:
   ```yaml
   SITE_URL: https://www.nexialpartners.com
   BASE_PATH: /
   ```
2. Crie `public/CNAME` contendo apenas `www.nexialpartners.com`.
3. No DNS: `www` → **CNAME** para `apetermann.github.io`; e o domínio raiz → registros **A** para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
4. Em `Settings` → `Pages`, informe o domínio e marque **Enforce HTTPS**.

Nenhum link no código precisa mudar: todos são montados a partir de `BASE_PATH`.

## Acessibilidade

- Estrutura semântica, hierarquia de títulos e link "pular para o conteúdo".
- Contraste de texto acima de 6:1 em todos os pares usados.
- Navegação completa por teclado, com foco visível e `aria-current` na página ativa.
- `prefers-reduced-motion` respeitado em toda animação, inclusive no herói.
- Sem JavaScript, o conteúdo continua legível: o texto é estático e a revelação por scroll só esconde elementos quando o JS está ativo.

## Licença e uso

Conteúdo e identidade visual © Nexial Partners Ltda. Uso restrito.
