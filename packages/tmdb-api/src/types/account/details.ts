import { ISO_639_1, ISO_3166_1 } from "@/types/shared";

export type AccountDetails = {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: null;
    };
  };
  id: number;
  iso_639_1: ISO_639_1;
  iso_3166_1: ISO_3166_1;
  name: string;
  include_adult: boolean;
  username: string;
};
