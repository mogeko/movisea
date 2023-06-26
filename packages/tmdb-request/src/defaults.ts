import { getUserAgent } from "universal-user-agent";

export const DEFAULTS = {
  method: "GET" as RequestMethod,
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "user-agent": getUserAgent(),
  },
};

export type RequestParameters = {
  method?: RequestMethod;
  headers?: {
    accept?: string;
    authorization?: string;
    "user-agent"?: string;
    [header: string]: string | number | undefined;
  };
  url?: string;
  [parameter: string]: unknown;
};

export type Endpoint = RequestParameters & typeof DEFAULTS;
export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";
