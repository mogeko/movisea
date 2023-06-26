import { DEFAULTS, type Endpoint } from "@/defaults";
import { mergeDeep } from "@/merge-deep";
import { parse } from "@/parse";

export function request(_route: string, _opts = {}) {
  return "Hello World";
}

export function parser(route: string, opts = {}) {
  return parse(mergeDeep(DEFAULTS, opts) as Endpoint)(route, opts);
}

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");
  const { getUserAgent } = await import("universal-user-agent");

  describe("main", () => {
    it("should return Hello World", () => {
      expect(request("")).toBe("Hello World");
    });

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
