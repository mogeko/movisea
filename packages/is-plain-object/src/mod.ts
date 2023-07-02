function isObject(o: object) {
  return Object.prototype.toString.call(o) === "[object Object]";
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
 * isPlainObject({foo: 'bar'}); // => true
 * isPlainObject({}); // => true
 * isPlainObject(null); // => true
 * isPlainObject(1); // => false
 * isPlainObject(['foo', 'bar']); // => false
 * isPlainObject([]); // => false
 * isPlainObject(new Foo); // => false
 * isPlainObject(Object.create(null)); // => false
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
