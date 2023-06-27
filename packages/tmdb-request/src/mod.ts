import { DEFAULTS, type RequestParameters } from "@/defaults";
import { parse, type Context } from "@/parse";

export async function request<T>(route: string, opts?: Context): Promise<T>;
export async function request(route: string, opts?: Context): Promise<any>;
export async function request(route: string, opts = {}) {
  const { url, ...options } = parser(route, opts);

  return (await fetch(url, options)).json();
}

export function parser(endpoint: Endpoint): Endpoint;
export function parser(route: string, opts?: Context): Endpoint;
export function parser(route: string | Endpoint, opts = {}) {
  const parserInside = parse(DEFAULTS);

  if (typeof route === "string") {
    return parserInside(route, opts);
  } else {
    return parserInside(route.url, route);
  }
}

export type Endpoint = Omit<RequestParameters, "url"> & { url: string };
