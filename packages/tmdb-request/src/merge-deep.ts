import { isPlainObject } from "@mogeko/is-plain-object";

/**
 * Deep merge two objects.
 *
 * It will merge any plain object properties recursively. If the property
 * is not a plain object, it will be covered by the right hand object.
 *
 * @param lObj The left hand object to be merged
 * @param rObj The right hand object to be merged
 * @returns The merged object
 *
 * @example
 * ```ts
 * mergeDeep({ foo: { bar1: "baz" } }, { foo: { bar2: "qux" } });
 * // => { foo: { bar1: "baz", bar2: "qux" } }
 *
 * mergeDeep({ foo: { bar: "baz" } }, { foo: { bar: "qux" } });
 * // => { foo: { bar: "qux" } }
 * ```
 */
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
