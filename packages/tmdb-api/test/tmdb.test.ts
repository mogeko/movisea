import { TMDb } from "@/mod";
import { beforeEach, describe, expect, it, vi } from "vitest";

const tmdb = new TMDb({ auth: "ONLY_FOR_TESTING" });

describe("TMDb", () => {
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
    expect(context.headers?.authorization).toEqual("ONLY_FOR_TESTING");

    delete context.headers?.["user-agent"];
    expect(context).toMatchSnapshot();
  });
});
