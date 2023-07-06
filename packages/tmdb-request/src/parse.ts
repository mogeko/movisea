import type { Context, RequestParams } from "@/defaults";
import { mergeDeep } from "@/merge-deep";
import { splitObj } from "@/split-obj";
import { parseTemplate, type Template } from "url-template";

export function parse(defaults: Options) {
  return (route?: string, opts: Options = {}): Context => {
    const [params, options] = splitParams(mergeDeep(defaults, opts));
    const [method, path] = (route || "/").trim().split(" ");

    return Object.assign(params, {
      method: path ? method.toUpperCase() : defaults.method,
      url: parseTemplate(path ?? method).expand(options),
    });
  };
}

function splitParams(opts: Options): readonly [Context, ExpandParams] {
  return splitObj(opts, ["method", "baseUrl", "url", "headers"]) as any;
}

type ExpandParams = Parameters<Template["expand"]>[0];
/** The `opts` parameter of {@link request} and {@link parser}.*/
export type Options = RequestParams & ExpandParams;

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");
  const { DEFAULTS } = await import("@/defaults");

  describe("splitParams", () => {
    it("should split params", () => {
      const [params, options] = splitParams(DEFAULTS);

      expect(params.method).toEqual("GET");
      delete params.headers?.["user-agent"]; // Eliminate environmental impacts
      expect(params.headers).toEqual({ accept: "application/json" });
      expect(params.url).toBeUndefined();
      expect(options).toEqual({});
    });
  });

  describe("parse", () => {
    const parser = parse(DEFAULTS);

    it("should parse route", () => {
      expect(typeof parser).toBe("function");

      const context = parser("/foo/{bar}", { bar: "baz" });

      expect(context.url).toEqual("/foo/baz");
      expect(context.method).toEqual("GET");

      expect(parser("POST /foo/{bar}", { bar: "baz" }).method).toEqual("POST");

      expect(parser().url).toEqual("/");
    });

    it("should parse route with custom baseUrl", () => {
      expect(typeof parser).toBe("function");

      expect(parser("/foo/{bar}", { bar: "baz" }).baseUrl).toEqual(
        "https://api.themoviedb.org/3"
      );

      expect(
        parser("/foo/{bar}", { bar: "baz", baseUrl: "https://foo.bar" }).baseUrl
      ).toEqual("https://foo.bar");
    });

    it("should replace :varname with {varname}", () => {
      expect(parser("/foo/:bar", { bar: "baz" }).url).toEqual("/foo/baz");
    });
  });
}
