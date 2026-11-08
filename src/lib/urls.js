// Root of the site: '/' live, '/bolienvano/' on the GitHub Pages preview
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

// Languages of the site. English lives at the root (the addresses of the old site);
// the others under their own folder: /es/about.html, /pt/about.html.
export const languages = ['en', 'es', 'pt'];
export const defaultLang = 'en';

// Link to a page: pageUrl('about') -> '/about.html', pageUrl('about', 'es') -> '/es/about.html',
// pageUrl('') -> '/', pageUrl('', 'pt') -> '/pt/'
export function pageUrl(path = '', lang = defaultLang) {
  const root = lang === defaultLang ? base : `${base}${lang}/`;
  return path ? `${root}${path}.html` : root;
}

// The language of a page, from its address
export function langOf(url) {
  const path = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname.replace(/^\//, '');
  const first = path.split(/[/.]/)[0];
  return languages.includes(first) ? first : defaultLang;
}

// For getStaticPaths of a page that exists in every language: the [...lang] part of
// its address is empty for English and 'es' or 'pt' for the others
export const langParams = () => languages.map((lang) => ({ lang: lang === defaultLang ? undefined : lang }));

// Link to a file in public/: assetUrl('favicon.png') -> '/favicon.png'
export function assetUrl(path) {
  return base + path;
}
