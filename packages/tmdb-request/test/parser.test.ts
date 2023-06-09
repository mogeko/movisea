import { parser } from "@/mod.ts";
import { describe, expect, it } from "vitest";

describe("parser", () => {
  it("should parse route", () => {
    const context = parser("/foo/{bar}", {
      headers: { authorization: "Bearer xxx" },
      bar: "baz",
    });

    expect(context.method).toEqual("GET");
    expect(context.url).toEqual("/foo/baz");
    expect(context.headers.authorization).toEqual("Bearer xxx");

    delete context.headers["user-agent"];
    expect(context).toMatchSnapshot();
  });

  it("should parse endpoint", () => {
    const context = parser({
      url: "POST /foo/{bar}",
      headers: {
        authorization: "Bearer xxx",
        "content-type": "application/json",
      },
      body: JSON.stringify({ foo: "bar" }),
      bar: "baz",
    });

    expect(context.method).toEqual("POST");
    expect(context.url).toEqual("/foo/baz");
    expect(context.headers.authorization).toEqual("Bearer xxx");
    expect(context.headers["content-type"]).toEqual("application/json");

    delete context.headers["user-agent"];
    expect(context).toMatchSnapshot();
  });

  it("should be covered by route", () => {
    expect(
      parser("/foo/bar", { url: "/This/should/be/covered/by/route" }).url
    ).toEqual("/foo/bar");
  });

  it("should pass undefined values", () => {
    expect(parser("/foo/{bar}", { baz: "bar" }).url).toEqual("/foo/");
  });
});
