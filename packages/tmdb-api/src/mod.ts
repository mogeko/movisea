export function tmdb() {
  return "Hello World";
}

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");

  describe("main", () => {
    it("should return Hello World", () => {
      expect(tmdb()).toBe("Hello World");
    });
  });
}
