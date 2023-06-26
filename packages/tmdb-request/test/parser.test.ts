import { parser } from "@/mod.ts";
import { describe, expect, it } from "vitest";

describe("parser", () => {
  it("should parse route", () => {
    const context = parser("/foo/{bar}", {
      headers: { authorization: "xxx" },
      bar: "baz",
    });

    expect(context.method).toEqual("GET");
    expect(context.url).toEqual("https://api.themoviedb.org/3/foo/baz");
    expect(context.headers?.authorization).toEqual("xxx");

    expect(context).toMatchSnapshot();
  });
});
