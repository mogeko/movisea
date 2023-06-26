import { DEFAULTS } from "@/defaults";
import type { Endpoint, Options } from "@/defaults";
import { mergeDeep } from "@/merge-deep";
import { parse } from "@/parse";

export async function request<T extends unknown>(
  route: string,
  opts: Options = {}
): Promise<T | null> {
  const { url, ...options } = parser(route, opts);

  if (url) {
    return (await fetch(url, options)).json();
  }

  return null;
}

export function parser(route: string, opts: Options = {}) {
  return parse(mergeDeep(DEFAULTS, opts) as Endpoint)(route, opts);
}

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");
  const { getUserAgent } = await import("universal-user-agent");

  describe("main", () => {
    it("should parse route", () => {
      expect(
        parser("/foo/{bar}", { bar: "baz", headers: { authorization: "xxx" } })
      ).toEqual({
        method: "GET",
        url: "https://api.themoviedb.org/3/foo/baz",
        headers: {
          accept: "application/json",
          authorization: "xxx",
          "user-agent": getUserAgent(),
        },
      });
    });
  });
}
