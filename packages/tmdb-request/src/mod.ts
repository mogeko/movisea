import { DEFAULTS, type RequestParams } from "@/defaults";
import { parse, type Options } from "@/parse";

/** Wrapper of `fetch`. */
async function fetcher({ baseUrl, url, ...params }: Context) {
  return (await fetch(baseUrl + url, params)).json();
}

/**
 * Makes a request to the TMDB API. Use generic to specify the type of the response.
 *
 * @param route It has to be a string consisting of URL Template and the request method, e.g. `GET /movie/{id}`. If it’s set to a URL, only the method defaults to GET.
 * @param opts The options object. To set a custom base URL by `baseUrl`. To expand the URL Template, pass the values as properties of this object. To set the method and request headers.
 *
 * @example
 * ```ts
 * type MovieInfo = {
 *   title: string;
 *   id: number;
 *   // ...
 * };
 *
 * request<MovieInfo>("GET /movie/{movie_id}?language={lang}", {
 *   headers: {
 *     authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *   },
 *   movie_id: 10997,
 *   lang: "en-US",
 * });
 * ```
 *
 * @see https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestroute-opts-and-parserroute-opts
 */
export async function request<T>(route: string, opts: Options): Promise<T>;
/**
 * Makes a request to the TMDB API. Use generic to specify the type of the response.
 *
 * @param endpoint The Endpoint object. In this case, the `url` field is required. It has to be a string consisting of URL Template and the request method, e.g. `GET /movie/{id}`. If it’s set to a URL, only the method defaults to GET. To set a custom base URL by `baseUrl`. To expand the URL Template, pass the values as properties of this object. To set the method and request headers.
 *
 * @example
 * ```ts
 * type MovieInfo = {
 *   title: string;
 *   id: number;
 *   // ...
 * };
 *
 * request<MovieInfo>({
 *   url: "GET /movie/{movie_id}?language={lang}",
 *   headers: {
 *     authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *   },
 *   movie_id: 10997,
 *   lang: "en-US",
 * });
 * ```
 *
 * @see https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestroute-opts-and-parserroute-opts
 */
export async function request<T>(endpoint: Endpoint): Promise<T>;
/**
 * Makes a request to the TMDB API.
 *
 * @param route It has to be a string consisting of URL Template and the request method, e.g. `GET /movie/{id}`. If it’s set to a URL, only the method defaults to GET.
 * @param opts The options object. To set a custom base URL by `baseUrl`. To expand the URL Template, pass the values as properties of this object. To set the method and request headers.
 *
 * @example
 * ```ts
 * request("GET /movie/{movie_id}?language={lang}", {
 *   headers: {
 *     authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *   },
 *   movie_id: 10997,
 *   lang: "en-US",
 * });
 * ```
 *
 *  @see https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestroute-opts-and-parserroute-opts
 */
export async function request(route: string, opts: Options): Promise<any>;
/**
 * Makes a request to the TMDB API.
 *
 * @param endpoint The Endpoint object. In this case, the `url` field is required. It has to be a string consisting of URL Template and the request method, e.g. `GET /movie/{id}`. If it’s set to a URL, only the method defaults to GET. To set a custom base URL by `baseUrl`. To expand the URL Template, pass the values as properties of this object. To set the method and request headers.
 *
 * @example
 * ```ts
 * request({
 *   url: "GET /movie/{movie_id}?language={lang}",
 *   headers: {
 *     authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *   },
 *   movie_id: 10997,
 *   lang: "en-US",
 * });
 * ```
 *
 * @see https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestroute-opts-and-parserroute-opts
 */
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
