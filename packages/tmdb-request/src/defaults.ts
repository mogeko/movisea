import { getUserAgent } from "universal-user-agent";

export const DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "user-agent": getUserAgent(),
  },
  body: null,
} as const;

/**
 * The type for parameters of {@link parse}. It will set the default
 * behavior of {@link parser} and {@link request}.
 *
 * @remarks
 * The signature of this type is same as {@link Context} but with
 * optional properties.
 */
export type DefaultParams = {
  /**
   * The HTTP method for the request.
   *
   * @remarks
   * HTTP defines a set of request methods to indicate the desired action to be
   * performed for a given resource.
   *
   * In this case, the only methods supported by TMDB are `GET`, `POST`, and `DELETE`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods}
   *
   * @defaultValue "GET"
   */
  method?: "GET" | "POST" | "DELETE";
  /**
   * The `headers` for the request.
   *
   * @remarks
   * HTTP `headers` let the client and the server pass additional information with
   * an HTTP request or response.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/web/http/headers}
   */
  headers?: {
    /**
     * The `Accept` header for the request.
     *
     * @remarks
     * The `Accept` request HTTP header indicates which content types, expressed as MIME types,
     * the client is able to understand.
     *
     * For TMDB API, the only response format we support is JSON.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept}
     * @see {@link https://developer.themoviedb.org/docs/json-and-jsonp}
     *
     * @defaultValue "application/json"
     */
    accept?: "application/json";
    /**
     * The `Content-Type` header for the request with `POST` and `DELETE` methods.
     *
     * @remarks
     * The Content-Type representation header is used to indicate the original media type of the resource
     * (prior to any content encoding applied for sending).
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type}
     */
    "content-type"?: "application/json" | "application/json;charset=utf-8";
    /**
     * The `Authorization` header for the request.
     *
     * @remarks
     * The HTTP `Authorization` request header can be used to provide credentials that authenticate
     * a user agent with a server, allowing access to a protected resource.
     *
     * In here, it should be a string that starts with `Bearer `.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization}
     */
    authorization?: `Bearer ${string}`;
    /**
     * The `User-Agent` header for the request.
     *
     * @remarks
     * The `User-Agent` request header is a characteristic string that lets servers and network peers
     * identify the application, operating system, vendor, and/or version of the requesting user agent.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent}
     */
    "user-agent"?: string;
    /** other headers */
    [key: string]: any;
  };
  /**
   * The base URL for the request.
   *
   * @defaultValue "https://api.themoviedb.org/3"
   */
  baseUrl?: `https://${string}` | `http://${string}`;
  /**
   * The URL (relative to the {@link baseUrl}) for the request.
   *
   * @remarks
   * It has to be a string consisting of `URL Template` and the request method, e.g. `GET /movie/{id}`.
   * If it’s set to a pure URL, only the method defaults to `GET`.
   *
   * @see {@link https://www.rfc-editor.org/rfc/rfc6570}
   */
  url?: `/${string}` | `${Context["method"]} /${string}`;
  body?: BodyInit | null;
};

/** The result of {@link parser}. */
export type Context = Required<DefaultParams>;
