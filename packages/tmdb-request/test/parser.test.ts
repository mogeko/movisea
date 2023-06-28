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

    delete context.headers?.["user-agent"];
    expect(context).toMatchSnapshot();
  });

  it("should parse endpoint", () => {
    const context = parser({
      url: "POST /foo/{bar}",
      headers: {
        authorization: "xxx",
        "content-type": "application/json",
      },
      bar: "baz",
    });

    expect(context.method).toEqual("POST");
    expect(context.url).toEqual("https://api.themoviedb.org/3/foo/baz");
    expect(context.headers?.authorization).toEqual("xxx");
    expect(context.headers?.["content-type"]).toEqual("application/json");

    delete context.headers?.["user-agent"];
    expect(context).toMatchSnapshot();
  });

  it("should be covered by route", () => {
    expect(
      parser("/foo/bar", { url: "This should be covered by route" }).url
    ).toEqual("https://api.themoviedb.org/3/foo/bar");
  });
});
