import { DEFAULTS, type RequestParameters } from "@/defaults";
import { parse, type Context } from "@/parse";

export async function request<T>(route: string, opts: Context): Promise<T>;
export async function request<T>(endpoint: EndpointParameters): Promise<T>;
export async function request(route: string, opts: Context): Promise<any>;
export async function request(endpoint: EndpointParameters): Promise<any>;
export async function request(route: string | EndpointParameters, opts = {}) {
  const { url, ...options } = parser(route as any, opts);

  return (await fetch(url, options)).json();
}

export function parser(route: string, opts?: Context): Endpoint;
export function parser(endpoint: EndpointParameters): Endpoint;
export function parser(route: string | EndpointParameters, opts = {}) {
  const parserInside = parse(DEFAULTS);

  if (typeof route === "string") {
    return parserInside(route, opts);
  } else {
    return parserInside(route.url, route);
  }
}

type RequiredFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type EndpointParameters = RequiredFields<Context, "url">;
export type Endpoint = RequiredFields<RequestParameters, "url">;
