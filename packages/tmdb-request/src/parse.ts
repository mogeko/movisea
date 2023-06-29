import type { RequestParams, WithDefaults } from "@/defaults";
import { mergeDeep } from "@/merge-deep";
import { splitObj } from "@/split-obj";
import { parseTemplate, type Template } from "url-template";

export function parse(ctxWithDefaults: WithDefaults<Context>) {
  return (route: string, opts: Context = {}) => {
    const [params, options] = splitParams(mergeDeep(ctxWithDefaults, opts));

    const [method, path] = route.trim().split(" ");
    const safeMethod = path ? method.toUpperCase() : ctxWithDefaults.method;
    const safePath = parseTemplate(path ?? method).expand(options);

    return Object.assign(params, {
      url: ctxWithDefaults.baseUrl + safePath,
      method: safeMethod,
    });
  };
}

function splitParams(ctx: Context): [RequestParams, ExpandParams] {
  const [params, options] = splitObj(ctx, ["method", "url", "headers"]);
  return delete options["baseUrl"], [params, options];
}

type ExpandParams = Parameters<Template["expand"]>[0];
export type Context = RequestParams & ExpandParams;

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

      const endpoint = parser("/foo/{bar}", { bar: "baz" });

      expect(endpoint.url).toEqual(`${DEFAULTS.baseUrl}/foo/baz`);
      expect(endpoint.method).toEqual("GET");

      const endpoint2 = parser("POST /foo/{bar}", { bar: "baz" });

      expect(endpoint2.method).toEqual("POST");
    });
  });
}
