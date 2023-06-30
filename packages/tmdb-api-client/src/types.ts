/**
 * @example
 * ```ts
 * type FooOrBar = XOR<{foo: string;}, {bar: number}>
 * const a: FooOrBar = { foo: "test" } // OK
 * const b: FooOrBar = { bar: 1 } // OK
 * const c: FooOrBar = { foo: "test",  bar: 1 }// Error
 * ```
 */
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * @example
 * ```ts
 * type X = Assoc<["a", "b", "c"], number> // => {a: {b: {c: number } } }
 * ```
 */
type Assoc<P extends string[], D> = P extends [
  infer F extends string,
  ...infer R
]
  ? { [K in F]: Assoc<R extends string[] ? R : never, D> }
  : D;

export type Recur<R> = {
  [T in keyof R]: { [S in keyof R[T]]: R[T][S] };
};

// Results

type MovieDetailsResult = {
  belongs_to_collection: null;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  imdb_id: `tt${number}`;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline: string;
  video: boolean;
} & Omit<MovieDifferent, "media_type"> &
  MovieAndTVShared;
type MovieDifferent = {
  media_type: "movie";
  title: string;
  original_title: string;
  release_date: string;
};
type MovieAndTVShared = {
  ault: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
};

type TVDifferent = {
  media_type: "tv";
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
};

type SearchResult<T> = {
  page: number;
  results: Array<T>;
  total_pages: number;
  total_results: number;
};
type SearchMulitResult = SearchResult<
  XOR<MovieDifferent, TVDifferent> & MovieAndTVShared
>;
type SearchTVResult = SearchResult<
  Omit<TVDifferent, "media_type"> & MovieAndTVShared
>;
type SearchMovieResult = SearchResult<
  Omit<MovieDifferent, "media_type"> & MovieAndTVShared
>;

// Params

type MovieDetailsParams = {
  append_to_response?: string;
  language?: string;
  id: number;
};
type SearchMulitParams = {};
type SearchMovieParams = {};
type SearchTVParams = {};

export type RestInterface = Assoc<
  ["movie", "details"],
  (params: MovieDetailsParams) => MovieDetailsResult
> &
  Assoc<["search", "multi"], (params: SearchMulitParams) => SearchMulitResult> &
  Assoc<["search", "movie"], (params: SearchMovieParams) => SearchMovieResult> &
  Assoc<["search", "tv"], (params: SearchTVParams) => SearchTVResult>;
