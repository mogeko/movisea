import type { MovieAndTVShared, MovieDifferent } from "@/types/movie/details";
import type { SearchResult } from "@/types/search/utils";
import type { TVDifferent } from "@/types/tv/details";
import type { XOR } from "@/types/utils";

export type SearchMulitResult = SearchResult<
  XOR<MovieDifferent, TVDifferent> & MovieAndTVShared
>;
