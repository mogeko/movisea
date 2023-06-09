import { request } from "@/mod.ts";
import { getUserAgent } from "universal-user-agent";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("request", () => {
  beforeEach(() => (vi.resetAllMocks(), void 0));

  it("should request", async () => {
    const spy = vi.spyOn(global, "fetch").mockImplementation(async () => {
      return {
        json: vi.fn(async (_) => ({ test: "test" })),
      } as any;
    });

    const result = await request("/movie/{id}?language={language}", {
      headers: { authorization: "Bearer foo" },
      language: "en-US",
      id: 10997,
    });

    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/movie/10997?language=en-US",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: "Bearer foo",
          "user-agent": getUserAgent(),
        },
        body: null,
      }
    );
    expect(result).toEqual({ test: "test" });
  });

  it("should request with endpoint", async () => {
    const spy = vi.spyOn(global, "fetch").mockImplementation(async () => {
      return {
        json: vi.fn(async (_) => ({ test: "test" })),
      } as any;
    });

    const result = await request({
      url: "POST /movie/{id}?language={language}",
      headers: {
        authorization: "Bearer foo",
        "content-type": "application/json",
      },
      body: JSON.stringify({ foo: "bar" }),
      language: "en-US",
      id: 10997,
    });

    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/movie/10997?language=en-US",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          authorization: "Bearer foo",
          "content-type": "application/json",
          "user-agent": getUserAgent(),
        },
        body: '{"foo":"bar"}',
      }
    );
    expect(result).toEqual({ test: "test" });
  });
});
