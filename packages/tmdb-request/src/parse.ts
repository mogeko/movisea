import type { RequestParameters, WithDefaults } from "@/defaults";
import { pick } from "@/pick";
import { parseTemplate, type Template } from "url-template";

export function parse(endpoint: WithDefaults<Context>) {
  const { method: endpointMethod, ...otherEndpoint } = endpoint;

  return (route?: string, opts: Context = {}) => {
    if (typeof route === "string") {
      const [_method, _path] = route.split(" ");
      const method = _path ? _method.toUpperCase() : endpointMethod;
      const path = parseTemplate(_path ?? _method).expand(opts);

      return pick_params({
        method: method,
        url: otherEndpoint.baseUrl + path,
        ...otherEndpoint,
      } as Context);
    } else {
      return pick_params(Object.assign(endpoint, route));
    }
  };
}

const pick_params = (opts: Context): RequestParameters => {
  return pick(opts, ["method", "url", "headers"]);
};

type ExpandParameters = Parameters<Template["expand"]>[0];
export type Context = RequestParameters & ExpandParameters;

if (import.meta.vitest) {
  const { describe, it, expect } = await import("vitest");
  const { DEFAULTS } = await import("@/defaults");

  describe("parse", () => {
    const parser = parse(DEFAULTS);

    it("should parse route", () => {
      expect(typeof parser).toBe("function");

      const endpoint = parser("/foo/{bar}", { bar: "baz" });

      expect(endpoint.url).toEqual(`${DEFAULTS.baseUrl}/foo/baz`);
      expect(endpoint.method).toEqual("GET");

      const endpoint2 = parser("POST /foo/{bar}", { bar: "baz" });

      expect(endpoint2.method).toEqual("POST");

      expect(parser()).toEqual({
        method: DEFAULTS.method,
        headers: DEFAULTS.headers,
      });
    });
  });
}
