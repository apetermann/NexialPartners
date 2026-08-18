import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * O site vive hoje em apetermann.github.io/NexialPartners/ (Pages de projeto,
 * portanto num subdiretório). Quando o domínio próprio entrar, basta publicar
 * com as duas variáveis abaixo definidas:
 *
 *   SITE_URL=https://www.nexialpartners.com BASE_PATH=/ npm run build
 *
 * Nada mais no código precisa mudar — todo link e caminho de asset é montado
 * a partir de `import.meta.env.BASE_URL`.
 */
const SITE = process.env.SITE_URL ?? 'https://apetermann.github.io';
const BASE = process.env.BASE_PATH ?? '/NexialPartners';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      // português na raiz, inglês sob /en/
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap({ i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en-US' } } })],

  build: {
    // um .css por página seria pior aqui: a folha é pequena e compartilhada
    inlineStylesheets: 'auto',
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
