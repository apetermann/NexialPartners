# Nexial Partners — Website

Site institucional da **Nexial Partners**: engenharia de alta performance potencializada por Inteligência Artificial.

Site estático (HTML, CSS e JavaScript, sem dependências e sem etapa de build), bilíngue **PT/EN**, publicado no GitHub Pages.

---

## Estrutura

```
.
├── index.html                  # página única — TODO o conteúdo em português
├── 404.html                    # página de erro
├── assets/
│   ├── css/styles.css          # estilos (paleta da marca em variáveis CSS)
│   ├── js/i18n.js              # dicionário de tradução para o INGLÊS
│   ├── js/main.js              # troca de idioma, menu, animações
│   └── img/                    # logos, favicons e imagem de compartilhamento
├── .github/workflows/deploy.yml # publicação automática no GitHub Pages
├── robots.txt
└── sitemap.xml
```

## Como editar o conteúdo

O site funciona com **o português dentro do HTML** e **o inglês em um dicionário à parte**. Isso evita conteúdo duplicado e garante que a página continue legível para o Google e para quem estiver sem JavaScript.

| O que você quer mudar | Onde mexer |
| --- | --- |
| Texto em **português** | `index.html` — edite direto, é o texto que está visível no arquivo |
| Texto em **inglês** | `assets/js/i18n.js` — localize a chave e altere o valor |
| Cores, espaçamentos, tipografia | `assets/css/styles.css` — bloco `:root` no topo |
| E-mail, domínio, dados do rodapé | `index.html` (rodapé e seção de contato) |

Cada trecho traduzível no HTML carrega um atributo `data-i18n="chave"`. A mesma chave aparece em `i18n.js` com a versão em inglês. Ao adicionar um texto novo:

1. escreva o português no `index.html` com um `data-i18n="secao.nome"`;
2. adicione a mesma chave em `assets/js/i18n.js` com o texto em inglês.

Se uma chave não existir no dicionário, o site simplesmente mantém o português — não quebra.

### Paleta da marca

Definida no bloco `:root` de `assets/css/styles.css`, derivada do gradiente do símbolo
(`#1C213F` indigo → `#2D5C8E` → `#3090C0` azul → `#5DB8B1` verde-água):

| Variável | Valor | Uso |
| --- | --- | --- |
| `--ink-deep` | `#0B0F1E` | fundo das seções alternadas |
| `--ink` | `#111729` | fundo principal |
| `--surface` / `--surface-2` | `#1A2238` / `#232D48` | cartões e blocos elevados |
| `--line` | `#2A3552` | bordas e divisórias |
| `--accent` | `#3E9FCC` | acento principal, botões |
| `--accent-bright` | `#6FC7E4` | links e destaques |
| `--accent-teal` | `#5DB8B1` | acento secundário |
| `--brand-gradient` | gradiente | número "10×" e barra de resultado |
| `--mist` / `--slate` / `--muted` | `#C9D6E6` / `#97A9C4` / `#8093B0` | textos sobre fundo escuro |

Todas as cores de texto ficam **acima de 5,7:1** sobre os fundos da marca (WCAG AA exige 4,5:1).

### Arquivos do logo

Gerados a partir do original `Logos para camisa - Nexial-01/02.png`:

| Arquivo | Uso |
| --- | --- |
| `logo-nexial-white.png` | lockup com logotipo branco — usado no site (fundo escuro) |
| `logo-nexial.png` | lockup com logotipo preto — para fundos claros e documentos |
| `mark-nexial.png` | apenas o símbolo, fundo transparente — rodapé |
| `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | ícones do navegador |
| `og-image.png` | imagem de compartilhamento em redes sociais (1200×630) |

### Fotos dos partners

Ficam em `assets/img/partners/`, uma por pessoa, nomeadas em kebab-case
(`alex-petermann.jpg`). São 320×320 JPEG — o dobro do tamanho de exibição
(72px), para ficarem nítidas em telas retina.

Para **trocar uma foto**: substitua o arquivo mantendo o nome, em 320×320.
O recorte circular e o preto e branco são aplicados por CSS, então a imagem
de origem pode ser colorida.

Para **um partner sem foto**, troque a tag no `index.html` por um monograma
com as iniciais — o estilo já existe:

```html
<span class="monogram" aria-hidden="true">XX</span>
```


## Rodar localmente

Não há build. Basta servir a pasta:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

> Abrir o `index.html` com duplo clique também funciona, mas servir por HTTP reproduz melhor o comportamento real (caminhos e cache).

## Publicação

O workflow `.github/workflows/deploy.yml` publica o site a cada `push` na branch `main`.

**Configuração única no GitHub:** `Settings` → `Pages` → em *Source*, selecione **GitHub Actions**.

### Domínio próprio (nexialpartners.com)

1. Crie um arquivo `CNAME` na raiz do repositório contendo apenas:
   ```
   www.nexialpartners.com
   ```
2. No provedor de DNS do domínio, aponte:
   - `www` → registro **CNAME** para `<usuario-ou-org>.github.io`
   - domínio raiz → registros **A** para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Em `Settings` → `Pages`, informe o domínio e marque **Enforce HTTPS** (o certificado leva alguns minutos para ser emitido).

## Acessibilidade e desempenho

- Estrutura semântica com landmarks, hierarquia de títulos e link "pular para o conteúdo".
- Contraste de texto acima de 4.5:1 sobre os fundos escuros da marca.
- Navegação completa por teclado, com foco visível.
- Respeita `prefers-reduced-motion`: sem animações para quem as desativou.
- Sem frameworks nem dependências de runtime — apenas as fontes do Google Fonts.

## Licença e uso

Conteúdo e identidade visual © Nexial Partners Ltda. Uso restrito.
