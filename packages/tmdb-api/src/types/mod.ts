import type { MovieInterface } from "@/types/movie/mod";
import type { SearchInterface } from "@/types/search/mod";

export type RestInterface = MovieInterface & SearchInterface;

export type { Recur } from "@/types/utils";
