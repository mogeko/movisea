import { ENDPOINTS } from "@/endpoints";
import type { Recur, RestInterface } from "@/types";
import { parser, request, type Options } from "tmdb-request";
import { mergeDeep } from "tmdb-request/merge-deep";

export class TMDB {
  private _defaultOpts: Options;

  constructor({ auth }: { auth: string }) {
    this._defaultOpts = { headers: { authorization: auth } };
  }

  public rest: Recur<RestInterface> = Object.fromEntries(
    Object.entries(ENDPOINTS).map(([topLevelKey, subs]) => [
      topLevelKey,
      Object.fromEntries(
        Object.entries(subs).map(([subLevelKey, [route, opts]]) => [
          subLevelKey,
          (params: any) => this.request(route, mergeDeep(opts, params)),
        ])
      ),
    ])
  ) as any;

  public request(route: string, opts: Options = {}) {
    return request(route, mergeDeep(this._defaultOpts, opts));
  }

  public parser(route: string, opts: Options = {}) {
    return parser(route, mergeDeep(this._defaultOpts, opts));
  }
}
