/** Lowercase a string and join its alphanumeric runs with single hyphens. */
export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Shorten a string to at most `max` characters, ending in an ellipsis when cut. */
export function truncate(input: string, max: number): string {
  if (!Number.isInteger(max) || max < 1) {
    throw new RangeError("max must be a positive integer");
  }
  if (input.length <= max) {
    return input;
  }
  return `${input.slice(0, max - 1)}…`;
}

/** Count whitespace-separated words. */
export function wordCount(input: string): number {
  const trimmed = input.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}
