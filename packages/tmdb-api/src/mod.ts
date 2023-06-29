import { parser, request, type Options } from "tmdb-request";
import { mergeDeep } from "tmdb-request/merge-deep";

export class TMDb {
  private _defaultsOpts: Options;

  constructor({ auth }: { auth: string }) {
    this._defaultsOpts = { headers: { authorization: auth } };
  }

  public request(route: string, opts: Options = {}) {
    return request(route, mergeDeep(this._defaultsOpts, opts));
  }

  public parse(route: string, opts: Options = {}) {
    return parser(route, mergeDeep(this._defaultsOpts, opts));
  }
}

if (import.meta.vitest) {
  const { describe, it } = await import("vitest");

  describe("TMDb", () => {
    it.todo("should create a TMDb instance");
    it.todo("should request");
    it.todo("should parse");
  });
}
