import { tokens } from "@/config/tokens";

const SearchPage: React.FC<{
  searchParams: { q: string };
}> = async ({ searchParams }) => {
  return <div>{searchParams.q}</div>;
};

const getSearchInfo = async (q: string, lang = "en-US", page = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${q}&language=${lang}&page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokens.tmdb}`,
        accept: "application/json",
      },
    }
  );
  const data = (await res.json()) as SearchInfo;

  return data;
};

export type SearchInfo = {
  page: number;
  results: Array<{
    ault: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: "movie" | "tv";
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    origin_country: string[];
    vote_average: number;
    vote_count: number;
  }>;
  total_pages: number;
  total_results: number;
};

export default SearchPage;
