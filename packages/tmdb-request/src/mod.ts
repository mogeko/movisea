import { DEFAULTS } from "@/defaults";
import { parse, type Context } from "@/parse";

export const parser = parse(DEFAULTS);

export async function request<T extends unknown>(
  route: string,
  opts: Context = {}
): Promise<T> {
  const { url, ...options } = parser(route, opts);
  return (await fetch(url, options)).json();
}
