import type { Context, DefaultParams } from "@/defaults";
import { mergeDeep } from "@/merge-deep";
import { splitObj } from "@/split-obj";
import { parseTemplate, type Template } from "url-template";

export function parse(defaults: DefaultParams) {
  return (route?: string, opts: Options = {}): Context => {
    // replace :varname with {varname} to make it RFC 6570 compatible
    const _route = (route || "/").replace(/:([a-z]\w+)/g, "{$1}");
    const [_method, path] = _route.trim().split(" ") as [string, string?];
    const [params, options] = splitParams(mergeDeep(defaults, opts));

    const method = path ? _method.toUpperCase() : defaults.method;
    const url = parseTemplate(path ?? _method).expand(options);
    const body = method === "POST" ? params.body : defaults.body;

    return Object.assign(params, { method, url, body });
  };
}

function splitParams(opts: Options): [Context, ExpandParams] {
  return splitObj(opts, ["method", "headers", "baseUrl", "url", "body"]);
}

/** Any object that can be expanded into a URL */
type ExpandParams = Parameters<Template["expand"]>[0];
/** The `opts` parameter of {@link request} and {@link parser}.*/
export type Options = DefaultParams & ExpandParams;

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

      const getCtx = parser("/foo/{bar}", { body: "foo", bar: "baz" });

      expect(getCtx.url).toEqual("/foo/baz");
      expect(getCtx.body).toBeNull();
      expect(getCtx.method).toEqual("GET");

      const postCtx = parser("POST /foo/{bar}", { body: "foo", bar: "baz" });

      expect(postCtx.url).toEqual("/foo/baz");
      expect(postCtx.body).toEqual("foo");
      expect(postCtx.method).toEqual("POST");

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
