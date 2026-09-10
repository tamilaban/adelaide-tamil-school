const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** '2025-11-29' -> { day: '29', month: 'Nov', year: '2025' } */
export function splitDate(iso) {
  const [y, m, d] = iso.split('-');
  return { day: d, month: MONTHS[Number(m) - 1], year: y };
}

/** '2025-11-29' -> '29 Nov 2025' */
export function longDate(iso) {
  const { day, month, year } = splitDate(iso);
  return `${Number(day)} ${month} ${year}`;
}
