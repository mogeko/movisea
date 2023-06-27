import { getUserAgent } from "universal-user-agent";

export const DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "user-agent": getUserAgent(),
  },
} as const;

export type RequestParameters = {
  method?: "GET" | "POST" | "DELETE";
  headers?: {
    accept?: string;
    authorization?: string;
    "user-agent"?: string;
  };
  url?: string;
};

export type WithDefaults<T extends unknown> = T & typeof DEFAULTS;
