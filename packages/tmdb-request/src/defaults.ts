import { getUserAgent } from "universal-user-agent";

export const DEFAULTS: RequestParams = {
  method: "GET",
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "user-agent": getUserAgent(),
  },
};

export type RequestParams = {
  method?: "GET" | "POST" | "DELETE";
  headers?: {
    accept?: string;
    authorization?: string;
    "user-agent"?: string;
  } & Record<string, string>;
  baseUrl?: string;
  url?: string;
};

/** The result of {@link parser}. */
export type Context = Required<RequestParams>;
