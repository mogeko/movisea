export const endpoints = {
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
