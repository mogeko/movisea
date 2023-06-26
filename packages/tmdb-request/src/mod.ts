export function request(_endpoint: string, _opts = {}) {
  return "Hello World";
}

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");

  describe("main", () => {
    it("should return Hello World", () => {
      expect(request("")).toBe("Hello World");
    });
  });
}
