import { TMDB } from "@/mod";
import { beforeEach, describe, expect, it, vi } from "vitest";

const tmdb = new TMDB({ auth: "Bearer ONLY_FOR_TESTING" });

describe("Re-exported form tmdb-request", () => {
  beforeEach(() => (vi.resetAllMocks(), void 0));

  it("constructor", () => {
    expect(tmdb).toBeDefined();
  });

  it("should request", async () => {
    const spy = vi.spyOn(tmdb, "request").mockImplementation(async () => {
      return { test: "test" };
    });

    expect(
      await tmdb.request("/movie/{id}?language={language}", {
        language: "en-US",
        id: 10997,
      })
    ).toEqual({ test: "test" });

    expect(spy).toHaveBeenCalledOnce();
  });

  it("should parse", () => {
    const context = tmdb.parser("/foo/{bar}", { bar: "baz" });

    expect(context.method).toEqual("GET");
    expect(context.url).toEqual("/foo/baz");
    expect(context.headers?.authorization).toEqual("Bearer ONLY_FOR_TESTING");

    delete context.headers?.["user-agent"];
    expect(context).toMatchSnapshot();
  });
});

describe("TMDB REST API", () => {
  beforeEach(() => (vi.resetAllMocks(), void 0));

  it("should get movie details", async () => {
    const spy = vi.spyOn(tmdb, "request").mockImplementation(async () => {
      return { test: "test" };
    });

    const result = await tmdb.rest.movie.details({ id: 10997 });

    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith(
      "GET /movie/{id}?append_to_response={append_to_response}&language={language}",
      { language: "en-US", id: 10997 }
    );
    expect(result).toEqual({ test: "test" });
  });
});
