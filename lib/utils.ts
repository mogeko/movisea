import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function tap<T extends unknown>(fn: (x: T) => void) {
  return (x: T) => (fn(x), x);
}

// XOR<{foo: string;}, {bar: number}>
// { foo: "test" } // OK
// { bar: 1 } // OK
// { foo: "test",  bar: 1 } // Error
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
