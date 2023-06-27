export function splitObj(obj: Record<string, any>, keys: string[]) {
  const rest = Object.assign({}, obj);
  const result = Object.keys(obj).reduce((acc, k) => {
    if (keys.includes(k)) (acc[k] = obj[k]), delete rest[k];
    return acc;
  }, {} as Record<string, any>);

  return [result, rest] as const;
}

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");

  describe("splitObj", () => {
    it("should split object", () => {
      expect(
        splitObj({ foo: "bar", bar: "baz", baz: "foo" }, ["foo", "bar"])
      ).toEqual([{ foo: "bar", bar: "baz" }, { baz: "foo" }]);
    });
  });
}
