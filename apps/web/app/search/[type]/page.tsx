import Link from "next/link";

import { tokens } from "@/config/tokens";
import type { XOR } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { PosterImage } from "@/components/poster-image";
import { Pagination } from "@/app/search/components/pagination";

const SearchPage: React.FC<{
  searchParams: { q: string; page?: number };
  params: { type: string };
}> = async ({ searchParams: { q, page }, params }) => {
  const data = await getSearchInfo(params.type, {
    query: q,
    include_adult: "false",
    language: "en-US",
    page: page?.toString() ?? "1",
  });

  return (
    <main className="relative flex flex-col px-2 lg:max-w-3xl">
      <div className="flex flex-row justify-start items-center pb-4">
        <h3 className="text-2xl font-semibold tracking-tight">
          {data.total_results} media results
        </h3>
      </div>
      {data.results.map((result) => (
        <div className="relative" key={result.id}>
          <Separator />
          <Link
            className="relative flex flex-row py-6 gap-4 hover:bg-accent hover:text-accent-foreground"
            href={`${result.media_type}/${result.id}`}
          >
            <PosterImage
              className="flex-1 max-w-[120px]"
              src={result.poster_path ?? "/no-poster.png"}
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
      <Pagination totalPages={data.total_pages} />
    </main>
  );
};

const getSearchInfo = async (type: string, params: SearchParams) => {
  const searchParams = new URLSearchParams(params);

  return (await fetch(
    `https://api.themoviedb.org/3/search/${type}?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokens.tmdb}`,
        accept: "application/json",
      },
    }
  ).then((res) => res.json())) as Promise<SearchInfo>;
};

type SearchParams = {
  query: string;
  include_adult?: "false" | "true";
  language?: string;
  page?: string;
};

export type SearchInfo = {
  page: number;
  results: Array<
    XOR<
      {
        media_type: "movie";
        title: string;
        original_title: string;
        release_date: string;
      },
      {
        media_type: "tv";
        name: string;
        original_name: string;
        first_air_date: string;
        origin_country: string[];
      }
    > & {
      ault: boolean;
      backdrop_path: string;
      id: number;
      original_language: string;
      overview: string;
      poster_path: string;
      genre_ids: number[];
      popularity: number;
      origin_country: string[];
      vote_average: number;
      vote_count: number;
    }
  >;
  total_pages: number;
  total_results: number;
};

export default SearchPage;
