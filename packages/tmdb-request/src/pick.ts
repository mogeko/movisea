export function pick(obj: any, keys: string[]) {
  return keys.reduce((acc, key) => {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as any);
}

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");

  describe("pick", () => {
    it("should pick keys", () => {
      expect(pick({ foo: "bar", baz: "qux" }, ["foo"])).toEqual({ foo: "bar" });
    });
  });
}
