import { ROUTES, DEFAULT_LANG } from './dict.js';

/** Prefixo do site (ex.: "/NexialPartners/"), sempre com barra no fim. */
const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + '/';

/**
 * Monta a URL de uma página numa língua.
 *   url('servicos', 'pt') -> /NexialPartners/servicos
 *   url('servicos', 'en') -> /NexialPartners/en/services
 *   url('home', 'en')     -> /NexialPartners/en
 */
export function url(page, lang = DEFAULT_LANG) {
  const slug = ROUTES[page]?.[lang];
  if (slug === undefined) throw new Error(`Rota desconhecida: "${page}"`);

  const prefix = lang === DEFAULT_LANG ? '' : `${lang}/`;
  const path = `${BASE}${prefix}${slug}`;

  // remove a barra final, exceto quando a URL for só a raiz
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

/** Caminho de um arquivo em /public, já com o prefixo do site. */
export function asset(path) {
  return BASE + path.replace(/^\/+/, '');
}

/** A outra língua, para o seletor do cabeçalho. */
export function otherLang(lang) {
  return lang === 'pt' ? 'en' : 'pt';
}

/** Código de idioma completo, para o atributo lang e og:locale. */
export const LOCALE = { pt: 'pt-BR', en: 'en-US' };
export const OG_LOCALE = { pt: 'pt_BR', en: 'en_US' };

/**
 * Escolhe o valor da língua num nó do dicionário.
 * Aceita tanto { pt, en } quanto valores já resolvidos.
 */
export function pick(node, lang) {
  if (node && typeof node === 'object' && (lang in node)) return node[lang];
  return node;
}
