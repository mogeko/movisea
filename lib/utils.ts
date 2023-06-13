import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function tap<T extends unknown>(fn: (x: T) => void) {
  return (x: T) => (fn(x), x);
}
