// Root of the site: '/' live, '/bolienvano/' on the GitHub Pages preview
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

// Link to a page: pageUrl('about') -> '/about.html', pageUrl('') -> '/'
export function pageUrl(path = '') {
  return path ? `${base}${path}.html` : base;
}

// Link to a file in public/: assetUrl('favicon.png') -> '/favicon.png'
export function assetUrl(path) {
  return base + path;
}
