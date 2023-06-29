import { ENDPOINTS } from "@/endpoints";
import { parser, request, type Options } from "tmdb-request";
import { mergeDeep } from "tmdb-request/merge-deep";

export class TMDB {
  private _defaultOpts: Options;

  constructor({ auth }: { auth: string }) {
    this._defaultOpts = { headers: { authorization: auth } };
  }

  public rest = Object.fromEntries(
    Object.entries(ENDPOINTS).map(([topLevelKey, subs]) => [
      topLevelKey,
      Object.fromEntries(
        Object.entries(subs).map(([subLevelKey, [route, opts]]) => [
          subLevelKey,
          (params) => this.request(route, mergeDeep(opts, params)),
        ])
      ),
    ])
  ) as Rest;

  public request(route: string, opts: Options = {}) {
    return request(route, mergeDeep(this._defaultOpts, opts));
  }

  public parser(route: string, opts: Options = {}) {
    return parser(route, mergeDeep(this._defaultOpts, opts));
  }
}

type RestMethod = (params: any) => ReturnType<TMDB["request"]>;
type Rest = {
  [K in keyof typeof ENDPOINTS]: {
    [K2 in keyof (typeof ENDPOINTS)[K]]: RestMethod;
  };
};
