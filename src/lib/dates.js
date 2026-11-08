// '2022-08-04' -> "August 4, 2022" (en-US), "4 de agosto de 2022" (es)… in the given locale
export function formatDate(isoDate, locale) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString(locale, {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}
