import { DEFAULTS } from "@/defaults";
import { mergeDeep } from "@/merge-deep";
import { parse, type Context, type Endpoint } from "@/parse";

export async function request<T extends unknown>(
  route: string,
  opts: Context = {}
): Promise<T | null> {
  const { url, ...options } = parser(route, opts);

  if (url) {
    return (await fetch(url, options)).json();
  }

  return null;
}

export function parser(route: string, opts: Context = {}) {
  return parse(mergeDeep(DEFAULTS, opts) as Endpoint)(route, opts);
}
