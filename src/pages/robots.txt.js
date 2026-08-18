/**
 * robots.txt gerado a partir da configuração `site` do Astro.
 *
 * Antes era um arquivo estático em public/ com o domínio escrito à mão. Quando
 * o site migrou para o domínio próprio, ele ficou apontando para um sitemap
 * que não existia mais — e o Google segue essa linha para descobrir as páginas.
 * Gerando aqui, o endereço acompanha o build e nunca mais diverge.
 */
export const GET = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;

  const corpo = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(corpo, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
