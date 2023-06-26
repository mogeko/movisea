import type { Endpoint, RequestMethod } from "@/defaults";
import { parseTemplate, type Template } from "url-template";

export function parse(endpoint: Endpoint) {
  const { method: endpointMethod, ...otherEndpoint } = endpoint;

  return (route?: string, opts: Context = {}) => {
    if (typeof route === "string") {
      const [_method, _path] = route.split(" ");
      const method = _path ? _method.toUpperCase() : endpointMethod;
      const path = parseTemplate(_path ?? _method).expand(opts);

      return {
        method: method as RequestMethod,
        url: otherEndpoint.baseUrl + path,
        ...otherEndpoint,
      } as Endpoint;
    } else {
      return Object.assign(endpoint, route);
    }
  };
}

export type Context = Parameters<Template["expand"]>[0];

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");
  const { DEFAULTS } = await import("@/defaults");

  describe("parse", () => {
    const parser = parse(DEFAULTS);

    it("should parse route", () => {
      expect(typeof parser).toBe("function");

      const endpoint = parser("/foo/{bar}", { bar: "baz" });

      expect(endpoint.url).toEqual(`${endpoint.baseUrl}/foo/baz`);
      expect(endpoint.method).toEqual("GET");

      const endpoint2 = parser("POST /foo/{bar}", { bar: "baz" });

      expect(endpoint2.method).toEqual("POST");

      const endpoint3 = parser();

      expect(endpoint3).toEqual(DEFAULTS);
    });
  });
}
