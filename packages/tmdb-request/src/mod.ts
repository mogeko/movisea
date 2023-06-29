import { DEFAULTS, type RequestParams } from "@/defaults";
import { parse, type Options } from "@/parse";

async function fetcher({ baseUrl, url, ...params }: Context) {
  return (await fetch(baseUrl + url, params)).json();
}

export async function request<T>(route: string, opts: Options): Promise<T>;
export async function request<T>(endpoint: Endpoint): Promise<T>;
export async function request(route: string, opts: Options): Promise<any>;
export async function request(endpoint: Endpoint): Promise<any>;
export async function request(route: string | Endpoint, opts?: Options) {
  return fetcher(parser(route as any, opts));
}

export function parser(route: string, opts?: Options): Context;
export function parser(endpoint: Endpoint): Context;
export function parser(route: string | Endpoint, opts?: Options) {
  const parserInside = parse(DEFAULTS);

  if (typeof route === "string") {
    return parserInside(route, opts);
  } else {
    return parserInside(route.url, route);
  }
}

type RequiredFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type Endpoint = RequiredFields<Options, "url">;
export type Context = RequiredFields<RequestParams, "baseUrl" | "url">;
