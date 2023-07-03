import type { MovieAndTVShared } from "@/types/movie/details";
import type { SearchResult } from "@/types/search/utils";
import type { TVDifferent } from "@/types/tv/details";

export type SearchTVResult = SearchResult<
  Omit<TVDifferent, "media_type"> & MovieAndTVShared
>;
