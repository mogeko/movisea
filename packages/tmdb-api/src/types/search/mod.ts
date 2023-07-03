import type { SearchMovieResult } from "@/types/search/movie";
import type { SearchMovieParams } from "@/types/search/movie-params";
import type { SearchMulitResult } from "@/types/search/mulit";
import type { SearchMulitParams } from "@/types/search/mulit-params";
import type { SearchTVResult } from "@/types/search/tv";
import type { SearchTVParams } from "@/types/search/tv-params";
import type { Assoc } from "@/types/utils";

export type SearchInterface = Assoc<
  ["search", "multi"],
  (params: SearchMulitParams) => SearchMulitResult
> &
  Assoc<["search", "movie"], (params: SearchMovieParams) => SearchMovieResult> &
  Assoc<["search", "tv"], (params: SearchTVParams) => SearchTVResult>;
