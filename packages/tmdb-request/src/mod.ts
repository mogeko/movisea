import { DEFAULTS, type RequestParameters } from "@/defaults";
import { parse, type Context } from "@/parse";

export async function request<T>(route: string, opts?: Context): Promise<T>;
export async function request(route: string, opts?: Context): Promise<any>;
export async function request(route: string, opts = {}) {
  const { url, ...options } = parser(route, opts);

  return (await fetch(url, options)).json();
}

export function parser(route: undefined, opts?: Context): Endpoint;
export function parser(route: string, opts?: Context): SafeEndpoint;
export function parser(route?: string, opts = {}): Endpoint | SafeEndpoint {
  return parse(DEFAULTS)(route, opts);
}

export type Endpoint = RequestParameters;
export type SafeEndpoint = Omit<Endpoint, "url"> & { url: string };
