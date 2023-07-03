// Results
import type { MovieDetailsResult } from "@/types/movie/details";
import type { MovieDetailsParams } from "@/types/movie/details-params";
import type { SearchMovieResult } from "@/types/search/movie";
import type { SearchMovieParams } from "@/types/search/movie-params";
import type { SearchMulitResult } from "@/types/search/mulit";
import type { SearchMulitParams } from "@/types/search/mulit-params";
import type { SearchTVResult } from "@/types/search/tv";
import type { SearchTVParams } from "@/types/search/tv-params";
import type { Assoc } from "@/types/utils";

export type RestInterface = Assoc<
  ["movie", "details"],
  (params: MovieDetailsParams) => MovieDetailsResult
> &
  Assoc<["search", "multi"], (params: SearchMulitParams) => SearchMulitResult> &
  Assoc<["search", "movie"], (params: SearchMovieParams) => SearchMovieResult> &
  Assoc<["search", "tv"], (params: SearchTVParams) => SearchTVResult>;

export type { Recur } from "@/types/utils";
