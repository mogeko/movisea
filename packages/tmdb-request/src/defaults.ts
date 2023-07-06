import { getUserAgent } from "universal-user-agent";

export const DEFAULTS: DefaultParams = {
  method: "GET",
  baseUrl: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "user-agent": getUserAgent(),
  },
};

/**
 * The type for parameters of {@link parse}. It will set the default
 * behavior of {@link parser} and {@link request}.
 *
 * @remarks
 * The signature of this type is same as {@link Context} but with
 * optional properties.
 */
export type DefaultParams = {
  method?: "GET" | "POST" | "DELETE";
  headers?: {
    accept?: string;
    authorization?: string;
    "user-agent"?: string;
  } & Record<PropertyKey, any>;
  baseUrl?: string;
  url?: string;
};

/** The result of {@link parser}. */
export type Context = Required<DefaultParams>;
