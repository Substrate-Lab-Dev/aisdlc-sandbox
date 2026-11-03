import { describe, expect, it } from "vitest";
import { slugify, truncate, wordCount } from "./index.js";

describe("slugify", () => {
  it("lowercases and hyphenates words", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });

  it("strips accents and trims separators", () => {
    expect(slugify("  Café  au lait--")).toBe("cafe-au-lait");
  });

  it("returns an empty string when nothing is alphanumeric", () => {
    expect(slugify("!!!")).toBe("");
  });
});

describe("truncate", () => {
  it("returns short strings unchanged", () => {
    expect(truncate("short", 10)).toBe("short");
  });

  it("cuts long strings to the limit with an ellipsis", () => {
    const out = truncate("abcdefghij", 5);
    expect(out).toBe("abcd…");
    expect(out).toHaveLength(5);
  });

  it("rejects a non-positive limit", () => {
    expect(() => truncate("x", 0)).toThrow(RangeError);
  });
});

describe("wordCount", () => {
  it("counts words across mixed whitespace", () => {
    expect(wordCount("  one two\tthree\nfour ")).toBe(4);
  });

  it("returns zero for blank input", () => {
    expect(wordCount("   ")).toBe(0);
  });
});
