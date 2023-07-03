import type { MovieDetailsResult } from "@/types/movie/details";
import type { MovieDetailsParams } from "@/types/movie/details-params";
import type { Assoc } from "@/types/utils";

export type MovieInterface = Assoc<
  ["movie", "details"],
  (params: MovieDetailsParams) => MovieDetailsResult
>;
