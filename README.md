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

Definida em `assets/css/styles.css`, extraída do logo e do teaser institucional:

| Variável | Valor | Uso |
| --- | --- | --- |
| `--navy-deep` | `#03161F` | fundo das seções alternadas |
| `--navy` | `#04212F` | fundo principal |
| `--teal` | `#03B0B0` | acento da marca, botões |
| `--teal-bright` | `#4FD8D8` | destaques e links |
| `--mist` / `--slate` | `#C3D4DA` / `#8FA7B0` | textos sobre fundo escuro |

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
