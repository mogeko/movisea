import { DEFAULTS, type RequestParams } from "@/defaults";
import { parse, type Context } from "@/parse";

async function fetcher({ url, ...options }: Endpoint) {
  return (await fetch(url, options)).json();
}

export async function request<T>(route: string, opts: Context): Promise<T>;
export async function request<T>(endpoint: EndpointParams): Promise<T>;
export async function request(route: string, opts: Context): Promise<any>;
export async function request(endpoint: EndpointParams): Promise<any>;
export async function request(route: string | EndpointParams, opts?: Context) {
  return fetcher(parser(route as any, opts));
}

export function parser(route: string, opts?: Context): Endpoint;
export function parser(endpoint: EndpointParams): Endpoint;
export function parser(route: string | EndpointParams, opts?: Context) {
  const parserInside = parse(DEFAULTS);

  if (typeof route === "string") {
    return parserInside(route, opts);
  } else {
    return parserInside(route.url, route);
  }
}

type RequiredFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type EndpointParams = RequiredFields<Context, "url">;
export type Endpoint = RequiredFields<RequestParams, "url">;
