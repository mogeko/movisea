import { isPlainObject } from "@mogeko/is-plain-object";

export function mergeDeep<
  L extends Record<PropertyKey, any>,
  R extends Record<PropertyKey, any>
>(lObj: L, rObj: R): L & R {
  const result: Record<PropertyKey, any> = Object.assign({}, lObj);

  Object.keys(rObj).forEach((key) => {
    if (isPlainObject(rObj[key])) {
      if (!(key in lObj)) {
        Object.assign(result, { [key]: rObj[key] });
      } else {
        result[key] = mergeDeep(lObj[key], rObj[key]);
      }
    } else {
      Object.assign(result, { [key]: rObj[key] });
    }
  });

  return result;
}

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");

  describe("mergeDeep", () => {
    it("should merge objects", () => {
      expect(
        mergeDeep({ foo: { bar1: "baz" } }, { foo: { bar2: "qux" } })
      ).toEqual({ foo: { bar1: "baz", bar2: "qux" } });
    });

    it("should cover by right hand", () => {
      expect(
        mergeDeep({ foo: { bar: "baz" } }, { foo: { bar: "qux" } })
      ).toEqual({ foo: { bar: "qux" } });
    });
  });
}
