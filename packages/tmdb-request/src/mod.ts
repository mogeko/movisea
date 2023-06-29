// Copyright (c) 2023 Zheng Junyi. All rights reserved. Licensed under the MIT license.

/**
 * A library for making requests to the TMDB API.
 *
 * @remarks
 * First, You need to apply an API Token from TMDb. It's **completely free**, you just need
 * to register an account.
 *
 * We need thanks TMDb provide this great service for us, so please **do not abuse** the API.
 *
 * @see {@link https://developer.themoviedb.org/reference/intro/getting-started}
 * @see {@link https://www.themoviedb.org/settings/api}
 *
 * @packageDocumentation
 */

import { DEFAULTS, type RequestParams } from "@/defaults";
import { parse, type Options } from "@/parse";

/**
 * Wrapper of {@link fetch} API.
 *
 * @param context - The result of {@link parser}.
 *
 * @see {@link https://developer.mozilla.org/zh-CN/docs/Web/API/fetch}
 */
async function fetcher({ baseUrl, url, ...params }: Context) {
  return (await fetch(baseUrl + url, params)).json();
}

/**
 * Makes a request to the TMDB API. Use generic to specify the type of the response.
 *
 * @param route - It has to be a string consisting of URL Template and the request method,
 * e.g. `GET /movie/{id}`. If it’s set to a URL, only the method defaults to GET.
 * @param opts - The options object. To set a custom base URL by `baseUrl`. To expand the URL Template,
 * pass the values as properties of this object. To set the method and request headers.
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
 * @see {@link https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestroute-opts-and-parserroute-opts}
 * @see {@link https://www.rfc-editor.org/rfc/rfc6570}
 */
export async function request<T>(route: string, opts: Options): Promise<T>;
/**
 * Makes a request to the TMDB API. Use generic to specify the type of the response.
 *
 * @param endpoint - The Endpoint object. In this case, the `url` field is required. It has to be
 * a string consisting of URL Template and the request method, e.g. `GET /movie/{id}`. If it’s set to
 * a URL, only the method defaults to GET. To set a custom base URL by `baseUrl`. To expand
 * the URL Template, pass the values as properties of this object. To set the method and request headers.
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
 * @see {@link https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestendpoint-and-parserendpoint}
 * @see {@link https://www.rfc-editor.org/rfc/rfc6570}
 */
export async function request<T>(endpoint: Endpoint): Promise<T>;
/**
 * Makes a request to the TMDB API.
 *
 * @param route - It has to be a string consisting of URL Template and the request method,
 * e.g. `GET /movie/{id}`. If it’s set to a URL, only the method defaults to GET.
 * @param opts - The options object. To set a custom base URL by `baseUrl`. To expand the URL Template,
 * pass the values as properties of this object. To set the method and request headers.
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
 * @see {@link https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestroute-opts-and-parserroute-opts}
 * @see {@link https://www.rfc-editor.org/rfc/rfc6570}
 */
export async function request(route: string, opts: Options): Promise<any>;
/**
 * Makes a request to the TMDB API.
 *
 * @param endpoint - The Endpoint object. In this case, the `url` field is required. It has to be
 * a string consisting of URL Template and the request method, e.g. `GET /movie/{id}`. If it’s set to
 * a URL, only the method defaults to GET. To set a custom base URL by `baseUrl`. To expand
 * the URL Template, pass the values as properties of this object. To set the method and request headers.
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
 * @see {@link https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestendpoint-and-parserendpoint}
 * @see {@link https://www.rfc-editor.org/rfc/rfc6570}
 */
export async function request(endpoint: Endpoint): Promise<any>;
export async function request(route: string | Endpoint, opts?: Options) {
  return fetcher(parser(route as any, opts));
}

/**
 * Parse the URL Template and Options into a {@link Context} that can be used by {@link fetcher}.
 *
 * @param route - It has to be a string consisting of URL Template and the request method,
 * e.g. `GET /movie/{id}`. If it’s set to a URL, only the method defaults to GET.
 * @param opts - The options object. To set a custom base URL by `baseUrl`. To expand the URL Template,
 * pass the values as properties of this object. To set the method and request headers.
 *
 * @example
 * ```ts
 * parser("GET /movie/{movie_id}?language={lang}", {
 *   headers: {
 *     authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *   },
 *   movie_id: 10997,
 *   lang: "en-US",
 * });
 * ```
 *
 * @see {@link https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestroute-opts-and-parserroute-opts}
 * @see {@link https://www.rfc-editor.org/rfc/rfc6570}
 */
export function parser(route: string, opts?: Options): Context;
/**
 * Parse the URL Template and Options into a {@link Context} that can be used by {@link fetcher}.
 *
 * @param endpoint - The Endpoint object. In this case, the `url` field is required. It has to be
 * a string consisting of URL Template and the request method, e.g. `GET /movie/{id}`. If it’s set to
 * a URL, only the method defaults to GET. To set a custom base URL by `baseUrl`. To expand
 * the URL Template, pass the values as properties of this object. To set the method and request headers.
 *
 * @example
 * ```ts
 * parser({
 *   url: "GET /movie/{movie_id}?language={lang}",
 *   headers: {
 *     authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *   },
 *   movie_id: 10997,
 *   lang: "en-US",
 * });
 * ```
 *
 * @see {@link https://github.com/mogeko/movisea/tree/master/packages/tmdb-request#requestendpoint-and-parserendpoint}
 * @see {@link https://www.rfc-editor.org/rfc/rfc6570}
 */
export function parser(endpoint: Endpoint): Context;
export function parser(route: string | Endpoint, opts?: Options) {
  const parserInside = parse(DEFAULTS);

  if (typeof route === "string") {
    return parserInside(route, opts);
  } else {
    return parserInside(route.url, route);
  }
}

/**
 * Make fields `K` in `T` to required.
 *
 * @typeParam `T` - The {@link Record} type to be modified.
 * @typeParam `K` - The keys of `T` need to be required.
 *
 * @example
 * ```ts
 * type X = { a?: string; b?: number; c?: boolean };
 * type Y = RequiredFields<X, "a" | "b">; // { a: string; b: number; c?: boolean; }
 * ```
 */
type RequiredFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
/**
 * The type of the `endpoint` parameter.
 *
 * @remarks `url` here is required.
 *
 * @see {@link parser}
 */
export type Endpoint = RequiredFields<Options, "url">;
/** The result of {@link parser}. */
export type Context = RequiredFields<RequestParams, "baseUrl" | "url">;
