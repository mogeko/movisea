export const ENDPOINTS = {
  account: {
    details: ["GET /account/{id}", {}],
    addFavorite: ["POST /account/{id}/favorite?session_id={session_id}", {}],
    addWatchlist: ["POST /account/{id}/watchlist?session_id={session_id}", {}],
    favoriteMovies: [
      "GET /account/{id}/favorite/movies?language={language}&page={page}&session_id={session_id}&sort_by={sort_by}",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
    favoriteTV: [
      "GET /account/{id}/favorite/tv?language={language}&page={page}&session_id={session_id}&sort_by={sort_by}",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
    lists: [
      "GET /account/{id}/lists?page={page}&session_id={session_id}",
      { page: 1 },
    ],
    ratedMovies: [
      "GET /account/{id}/rated/movies?language={language}&page={page}&session_id={session_id}&sort_by={sort_by}",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
    ratedTV: [
      "GET /account/{id}/rated/tv?language={language}&page={page}&session_id={session_id}&sort_by={sort_by}",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
    ratedTVEpisodes: [
      "GET /account/{id}/rated/tv/episodes?language={language}&page={page}&session_id={session_id}&sort_by={sort_by}",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
    watchlistMovies: [
      "GET /account/{id}/watchlist/movies?language={language}&page={page}&session_id={session_id}&sort_by={sort_by}",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
    watchlistTV: [
      "GET /account/{id}/watchlist/tv?language={language}&page={page}&session_id={session_id}&sort_by={sort_by}",
      { language: "en-US", page: 1, sort_by: "created_at.asc" },
    ],
  },
  movie: {
    details: [
      "GET /movie/{id}?append_to_response={append_to_response}&language={language}",
      { language: "en-US" },
    ],
  },
  search: {
    multi: [
      "GET /search/multi?query={query}&include_adult={include_adult}&language={language}&page={page}",
      { include_adult: false, language: "en-US", page: 1 },
    ],
    movie: [
      "GET /search/movie?query={query}&include_adult={include_adult}&language={language}&primary_release_year={primary_release_year}&page={page}&region={region}&year={year}",
      { include_adult: false, language: "en-US", page: 1 },
    ],
    tv: [
      "GET /search/tv?query={query}&first_air_date_year={first_air_date_year}&include_adult={include_adult}&language={language}&page={page}&year={year}",
      { include_adult: false, language: "en-US", page: 1 },
    ],
  },
} as const;
