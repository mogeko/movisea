export type MovieDifferent = {
  media_type: "movie";
  title: string;
  original_title: string;
  release_date: string;
};

export type MovieDetailsResult = {
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

export type MovieAndTVShared = {
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
