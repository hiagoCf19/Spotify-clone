export function urlFormater(text: string) {
  return `/${encodeURIComponent(
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
  )}`;
}
