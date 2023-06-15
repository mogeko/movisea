import { NextResponse } from "next/server";

import { tokens } from "@/config/tokens";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const { results } = await fetch(
    `https://api.themoviedb.org/3/search/multi?${searchParams.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokens.tmdb}`,
        accept: "application/json",
      },
    }
  ).then((res) => res.json());

  const data: SearchResults = results.map((result: any) => {
    if (result.media_type === "movie") {
      return { id: result.id, title: result.title, type: "movie" };
    }
    if (result.media_type === "tv") {
      return { id: result.id, title: result.name, type: "tv" };
    }
    if (result.media_type === "person") {
      return { id: result.id, title: result.name, type: "person" };
    }
  });

  return NextResponse.json({ data });
}

// Set how Next.js handles caching
// See: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#fetchcache
export const fetchCache = "default-cache";

type SearchResults = {
  data: Array<{
    type: "movie" | "tv" | "person";
    id: number;
    title: string;
  }>;
};
