import type { MovieAndTVShared, MovieDifferent } from "@/types/movie/details";
import type { SearchResult } from "@/types/search/utils";

export type SearchMovieResult = SearchResult<
  Omit<MovieDifferent, "media_type"> & MovieAndTVShared
>;
