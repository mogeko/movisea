import type { AccountInterface } from "@/types/account/mod";
import type { MovieInterface } from "@/types/movie/mod";
import type { SearchInterface } from "@/types/search/mod";

export type RestInterface = AccountInterface & MovieInterface & SearchInterface;

export type { Recur } from "@/types/utils";
