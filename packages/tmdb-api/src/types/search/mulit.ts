import type { MovieAndTVShared, MovieDifferent } from "@/types/movie/details";
import type { TVDifferent } from "@/types/tv/details";
import type { XOR } from "@/types/utils";

export type SearchResult<T> = {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
};

export type SearchMulitResult = SearchResult<
  XOR<MovieDifferent, TVDifferent> & MovieAndTVShared
>;
