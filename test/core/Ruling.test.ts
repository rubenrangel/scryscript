import { beforeAll, describe, expect, test } from "vitest";
import { Ruling } from "../../src/core/Ruling";

describe("Ruling", () => {
  let ruling: Ruling;

  beforeAll(() => {
    ruling = new Ruling({
      oracleId: "19a2f0a0-9e68-4982-a5f5-b77d805befd7",
      source: "wotc",
      publishedAt: "2015-06-22",
      comment:
        "You choose the mode as the triggered ability goes on the stack. You can choose a mode that requires targets" +
        " only if there are legal targets available.",
    });
  });

  test("fromRuling", () => {
    expect(
      Ruling.fromRuling({
        object: "ruling",
        oracleId: "19a2f0a0-9e68-4982-a5f5-b77d805befd7",
        source: "wotc",
        publishedAt: "2015-06-22",
        comment:
          "You choose the mode as the triggered ability goes on the stack. You can choose a mode that requires targets" +
          " only if there are legal targets available.",
      })
    ).toBeInstanceOf(Ruling);
  });

  test("publishedAtDate", () => {
    expect(ruling.publishedAtDate).toEqual(new Date("2015-06-22"));
  });
});
