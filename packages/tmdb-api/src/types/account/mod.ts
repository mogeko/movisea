import type { AccountAddFavorite } from "@/types/account/add-favorite";
import type { AccountAddWatchlist } from "@/types/account/add-watchlist";
import type { AccountDetails } from "@/types/account/details";
import type { AccountFavoriteMovies } from "@/types/account/favorite-movies";
import type { AccountFavoriteTV } from "@/types/account/favorite-tv";
import type { AccountGetParams } from "@/types/account/get-params";
import type { AccountLists } from "@/types/account/lists";
import type { AccountPostParams } from "@/types/account/post-params";
import type { AccountRatedMovies } from "@/types/account/rated-movies";
import type { AccountRatedTV } from "@/types/account/rated-tv";
import type { AccountrRatedTVEpisodes } from "@/types/account/rated-tv-episodes";
import type { AccountWatchlistMovies } from "@/types/account/watchlist-movies";
import type { AccountWatchlistTV } from "@/types/account/watchlist-tv";
import type { Assoc } from "@/types/utils";

export type AccountInterface = Assoc<
  ["account", "detail"],
  (params: Pick<AccountGetParams, "id" | "session_id">) => AccountDetails
> &
  Assoc<
    ["account", "addFavorite"],
    (params: AccountPostParams) => AccountAddFavorite
  > &
  Assoc<
    ["account", "addWatchlist"],
    (params: AccountPostParams) => AccountAddWatchlist
  > &
  Assoc<
    ["account", "favoriteMovies"],
    (params: AccountGetParams) => AccountFavoriteMovies
  > &
  Assoc<
    ["account", "favoriteTV"],
    (params: AccountGetParams) => AccountFavoriteTV
  > &
  Assoc<
    ["account", "lists"],
    (params: Omit<AccountGetParams, "language" | "sort_by">) => AccountLists
  > &
  Assoc<
    ["account", "ratedMovies"],
    (params: AccountGetParams) => AccountRatedMovies
  > &
  Assoc<["account", "ratedTV"], (params: AccountGetParams) => AccountRatedTV> &
  Assoc<
    ["account", "ratedTVEpisodes"],
    (params: AccountGetParams) => AccountrRatedTVEpisodes
  > &
  Assoc<
    ["account", "watchlistMovies"],
    (params: AccountGetParams) => AccountWatchlistMovies
  > &
  Assoc<
    ["account", "watchlistTV"],
    (params: AccountGetParams) => AccountWatchlistTV
  >;
