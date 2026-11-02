import { t } from '../content/index.js';

// '2022-08-04' -> "August 4, 2022" in the site language
export function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString(t.locale, {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}
