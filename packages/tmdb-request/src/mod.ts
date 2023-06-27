import { DEFAULTS } from "@/defaults";
import { parse, type Context } from "@/parse";

export const parser = parse(DEFAULTS);

export async function request<T>(route: string, opts?: Context): Promise<T>;
export async function request(route: string, opts?: Context): Promise<any>;
export async function request(route: string, opts = {}) {
  const { url, ...options } = parser(route, opts);

  return (await fetch(url, options)).json();
}
