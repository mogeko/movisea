/**
 * @example
 * ```ts
 * type FooOrBar = XOR<{foo: string;}, {bar: number}>
 * const a: FooOrBar = { foo: "test" } // OK
 * const b: FooOrBar = { bar: 1 } // OK
 * const c: FooOrBar = { foo: "test",  bar: 1 }// Error
 * ```
 */
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * @example
 * ```ts
 * type X = Assoc<["a", "b", "c"], number> // => {a: {b: {c: number } } }
 * ```
 */
export type Assoc<P extends string[], D> = P extends [
  infer F extends string,
  ...infer R
]
  ? { [K in F]: Assoc<R extends string[] ? R : never, D> }
  : D;

export type Recur<R> = {
  [T in keyof R]: { [S in keyof R[T]]: R[T][S] };
};
