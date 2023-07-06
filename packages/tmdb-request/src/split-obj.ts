export function splitObj<L, R>(obj: Record<PropertyKey, any>, keys: string[]) {
  const rObj = Object.assign({}, obj);
  const lObj = Object.keys(obj).reduce((acc, k) => {
    if (keys.includes(k)) (acc[k] = obj[k]), delete rObj[k];
    return acc;
  }, {} as Record<PropertyKey, any>);

  return [lObj, rObj] as [L, R];
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
