import Link from "next/link";

import { tokens } from "@/config/tokens";
import { Separator } from "@/components/ui/separator";
import { PosterImage } from "@/components/poster-image";

const SearchPage: React.FC<{
  searchParams: { q: string };
}> = async ({ searchParams }) => {
  const data = await getSearchInfo(searchParams.q);

  return (
    <main className="relative flex flex-col px-2">
      <div className="flex flex-row justify-start items-center pb-4">
        <h3 className="text-2xl font-semibold tracking-tight">
          {data.total_results} media results
        </h3>
      </div>
      {data.results.map((result) => (
        <div className="relative lg:max-w-3xl">
          <Separator />
          <Link
            className="relative flex flex-row py-6 gap-4 hover:bg-accent hover:text-accent-foreground"
            href={`${result.media_type}/${result.id}`}
            key={result.id}
          >
            <PosterImage
              className="flex-1 max-w-[120px]"
              src={result.poster_path}
              alt={result.title ?? result.name}
              width={94}
            />
            <div className="flex flex-col items-start pt-6">
              <h4 className="text-lg font-semibold leading-none tracking-tight">
                {result.title ?? result.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {new Date(
                  result.release_date ?? result.first_air_date
                ).toLocaleDateString()}
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6 text-ellipsis line-clamp-3">
                {result.overview}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
};

const getSearchInfo = async (q: string, lang = "en-US", page = 1) => {
  return await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${q}&language=${lang}&page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokens.tmdb}`,
        accept: "application/json",
      },
    }
  ).then((res) => res.json() as Promise<SearchInfo>);
};

export type SearchInfo = {
  page: number;
  results: Array<{
    ault: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: "movie" | "tv";
    genre_ids: number[];
    popularity: number;
    release_date: string;
    first_air_date: string;
    origin_country: string[];
    vote_average: number;
    vote_count: number;
  }>;
  total_pages: number;
  total_results: number;
};

export default SearchPage;
