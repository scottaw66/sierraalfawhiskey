export function camelize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export function titleCase(str) {
  return str.replace(/\b[A-Za-z]/g, (x) => x.toUpperCase());
}
