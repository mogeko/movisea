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
      headers: {
        Authorization: `Bearer ${tokens.tmdb}`,
        accept: "application/json",
      },
    }
  ).then((res) => res.json());
};

export default MoviePage;
