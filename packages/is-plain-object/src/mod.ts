/**
 * Returns true if the given value is an object.
 *
 * @param value The value to test
 */
function isObject(value: any) {
  return value !== null && typeof value === "object";
}

/**
 * Returns true if an object was created by the `Object` constructor, or Object.create(null).
 *
 * @param o The object to test
 *
 * @example
 * ```ts
 * isPlainObject(Object.create({})); // => true
 * isPlainObject(Object.create(Object.prototype)); // => true
 * isPlainObject({foo: "bar"}); // => true
 * isPlainObject({}); // => true
 * isPlainObject(Object.create(null)); // => true
 *
 * isPlainObject(["foo", "bar"]); // => false
 * isPlainObject([]); // => false
 * isPlainObject(new Foo); // => false
 * ```
 */
export function isPlainObject(o: object): o is Record<PropertyKey, unknown> {
  if (isObject(o) === false) return false;

  // If has modified constructor
  const ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  const prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");

  describe("isPlainObject", () => {
    it("returns true for plain objects", () => {
      expect(isPlainObject(Object.create({}))).toBe(true);
      expect(isPlainObject(Object.create(Object.prototype))).toBe(true);
      expect(isPlainObject({ foo: "bar" })).toBe(true);
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject(Object.create(null))).toBe(true);
    });

    it("returns false for non-plain objects", () => {
      expect(isPlainObject(["foo", "bar"])).toBe(false);
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject(new Date())).toBe(false);
      // @ts-expect-error
      expect(isPlainObject(null)).toBe(false);
      // @ts-expect-error
      expect(isPlainObject(1)).toBe(false);
    });
  });
}
