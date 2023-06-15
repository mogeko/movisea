import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function tap<T>(fn: (x: T) => void) {
  return (x: T) => (fn(x), x);
}

export function range(to: number): number[];
export function range(from: number, to: number): number[];
export function range(from: number, to?: number) {
  return Array.from({ length: to ? to - from : from }, (_, i) => i + from);
}

// XOR<{foo: string;}, {bar: number}>
// { foo: "test" } // OK
// { bar: 1 } // OK
// { foo: "test",  bar: 1 } // Error
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
