import { request } from "@/mod.ts";
import { getUserAgent } from "universal-user-agent";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("request", () => {
  beforeEach(() => {});

  it("should request", async () => {
    const spy = vi.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve({ test: "test" }),
      }) as any;
    });

    const result = await request("/movie/{id}?page={page}", {
      headers: { authorization: "Bearer foo" },
      page: 1,
      id: 10997,
    });

    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/movie/10997?page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: "Bearer foo",
          "user-agent": getUserAgent(),
        },
      }
    );
    expect(result).toEqual({ test: "test" });
  });
});
