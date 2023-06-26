import { getUserAgent } from "universal-user-agent";

export const DEFAULTS = {
  method: "GET" as RequestMethod,
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "user-agent": getUserAgent(),
  },
} as const;

export type RequestParameters = {
  method?: RequestMethod;
  headers?: {
    accept?: string;
    authorization?: string;
    "user-agent"?: string;
  };
  url?: string;
};

export type Options = RequestParameters & Record<string, any>;
export type Endpoint = Options & typeof DEFAULTS;
export type RequestMethod = "GET" | "POST" | "DELETE";
