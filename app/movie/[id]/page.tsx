import { tokens } from "@/config/tokens";
import { PosterImage } from "@/components/poster-image";

const MoviePage: React.FC<{
  params: { id: string };
}> = async ({ params }) => {
  const data = await getMovieInfo(params.id);

  return <main>{/* TODO: Fill content */}</main>;
};

const getMovieInfo = async (id: string, lang = "en-US") => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=${lang}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokens.tmdb}`,
        accept: "application/json",
      },
    }
  ).then((res) => res.json() as Promise<MovieInfo>);
};

export type MovieInfo = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id: `tt${number}`;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
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
  release_date: string;
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
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default MoviePage;
