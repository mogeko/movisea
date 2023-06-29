# tmdb-request.js

A simple wrapper for the [The Movie Database API](https://developer.themoviedb.org/reference/intro/getting-started).

It use [RFC 6570 URI Template specification](https://www.rfc-editor.org/rfc/rfc6570) to build the API endpoints and [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to get the data.

## Installation

By install with [npm](https://www.npmjs.com/package/npm), [yarn](https://yarnpkg.com), [pnpm](https://pnpm.io) or any other package manager that you use.

```shell
pnpm add tmdb-request
```

> **Note**
>
> Make sure you Node.js environment has [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) support. If not, you can use [node-fetch](https://www.npmjs.com/package/node-fetch) or [cross-fetch](https://www.npmjs.com/package/cross-fetch) to polyfill it.
>
> If you use framework like [Next.js](https://nextjs.org), you should not need to worry about this. They usually have an out-of-the-box Fetch API implementation.

## Usage

First, You need to apply an API Token from [TMDB](https://www.themoviedb.org/settings/api). It's **completely free**, you just need to register an account.

We need thanks TMDB provide this great service for us, so please **do not abuse** the API.

### GET request example

This library 1:1 mapping of REST API endpoints in the [The Movie Database API Reference](https://developer.themoviedb.org/reference/intro/getting-started).

For example, to get the details of a movie, you would do:

```js
import { request } from "tmdb-request";

// The default method is GET, so you can omit it.
const result = request("/movie/{movie_id}?language={lang}", {
  headers: {
    authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  movie_id: 10997,
  lang: "en-US",
});

console.log(result);
```

### POST request example

You can also use `POST` request to interact with TMDB Server.

For example, to rate a movie, you would do:

```js
import { request } from "tmdb-request";

const result = request("POST /movie/{movie_id}/rating", {
  headers: {
    authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "content-type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(data),
  movie_id: 10997,
});

console.log(result);
```

### Working with `axios`

If you prefer to use other HTTP client, like [axios](https://axios-http.com).

You can use `parser` function to only parse the URL.

```js
import { parser } from "tmdb-request";

parser("GET /movie/{movie_id}?language={lang}", {
  headers: {
    authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  movie_id: 10997,
  lang: "en-US",
});
```

It will result like:

```js
{
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "user-agent": "Node.js/20.3.1 (Linux x64)",
  },
  method: "GET",
  url: "/movie/10997?language=en-US",
}
```

Then you can use it with you HTTP client.

### omit the `route` argument

We also allow you to omit the `route` parameter and [only pass the `endpoint` (`opts`) parameter](#requestendpoint-and-parserendpoint).

In this case, we will use the `endpoint.url` as the `route` parameter, so the `url` field is required.

This feature is implemented by TypeScript's [function overloading](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads).

```js
import { parser, request } from "tmdb-request";

// For request function
request({
  url: "GET /movie/{movie_id}?language={lang}",
  headers: {
    authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  movie_id: 10997,
  lang: "en-US",
});

// For parser function
parser({
  url: "POST /movie/{movie_id}/rating",
  headers: {
    authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "content-type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(data),
  movie_id: 10997,
});
```

## API

Both `request` and `parser` function have the same arguments. The only difference is that `request` will **send the request** and return the result, while `parser` will **only parse the URL** and return the request information.

### `request(route, opts)` and `parser(route, opts)`

| Name           | Type        | Description                                                                                                                                                                                                                                                                            |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `route`        | `string`    | It has to be a string consisting of [URL Template](https://www.rfc-editor.org/rfc/rfc6570) and the request method, e.g. `GET /movie/{id}`. If it’s set to a URL, only the method defaults to GET.                                                                                      |
| `opts.method`  | `string`    | Required unless route is set. supported `GET`, `POST` and `DELETE`. Defaults to `GET`.                                                                                                                                                                                                 |
| `opts.headers` | `object`    | Custom headers to send with the request. **Only `authorization` header is required.** By default, it will set `accept` to `application/json` and `user-agent` to suitably value.                                                                                                       |
| `opts.baseUrl` | `string`    | The custom base URL for the request. It will be prepended to the URL (parsed from the `route` parameter) when we make the request.                                                                                                                                                     |
| `otp.url`      | `undefined` | **Unrecommended.** To be honest, it is an useless field, because it will be [overwritten by the `route` parameter](https://github.com/mogeko/movisea/blob/7a171ca35aa9b4f53deb066f36edf457f3dd7189/packages/tmdb-request/test/parser.test.ts#L38) always. **You should NEVER use it**. |

### `request(endpoint)` and `parser(endpoint)`

| Name               | Type     | Description                                                                                                                                                           |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `endpoint.url`     | `string` | In this case, **the `url` field is required**. We will use it to parse the URL and request method. It is equivalent to the `route` parameter in the previous chapter. |
| `endpoint.baseUrl` | `string` | Same as the previous article.                                                                                                                                         |
| `endpoint.method`  | `string` | Same as the previous article.                                                                                                                                         |
| `endpoint.headers` | `object` | Same as the previous article.                                                                                                                                         |

## License

The code in this project is released under the [MIT License](./LICENSE).
