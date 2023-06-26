import { getUserAgent } from "universal-user-agent";

export const DEFAULTS = {
  method: "GET" as RequestMethod,
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "user-agent": getUserAgent(),
  },
} as const;

export type Endpoint = typeof DEFAULTS & { url?: string };
export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";
