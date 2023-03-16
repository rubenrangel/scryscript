import { describe, expect, test } from "vitest";
import {
  ArenaIdRulingsRequest,
  CardIdRulingsProps,
  MtgoFoilIdRulingsRequest,
  MtgoIdRulingsRequest,
  MultiverseIdRulingsRequest,
  SetCodeCollectorNumberRulingsProps,
} from "../../src/client/IRulingsClient";

describe("CardIdRulingsProps", () => {
  test("it returns the correct URL", () => {
    expect(new CardIdRulingsProps({ cardId: "1234" }).url).toEqual("/cards/1234/rulings");
  });
});

describe("SetCodeCollectorNumberRulingsProps", () => {
  test("it returns the correct URL", () => {
    expect(new SetCodeCollectorNumberRulingsProps({ setCode: "mm1", collectorNumber: "1234" }).url).toEqual(
      "/cards/mm1/1234/rulings"
    );
  });
});

describe("MtgoIdRulingsRequest", () => {
  test("it returns the correct URL", () => {
    expect(new MtgoIdRulingsRequest({ mtgoId: "1234" }).url).toEqual("/cards/mtgo/1234/rulings");
  });
});

describe("MtgoFoilIdRulingsRequest", () => {
  test("it returns the correct URL", () => {
    expect(new MtgoFoilIdRulingsRequest({ mtgoFoilId: "1234" }).url).toEqual("/cards/mtgo/1234/rulings");
  });
});

describe("MultiverseIdRulingsRequest", () => {
  test("it returns the correct URL", () => {
    expect(new MultiverseIdRulingsRequest({ multiverseId: 1234 }).url).toEqual("/cards/multiverse/1234/rulings");
  });
});

describe("ArenaIdRulingsRequest", () => {
  test("it returns the correct URL", () => {
    expect(new ArenaIdRulingsRequest({ arenaId: 1234 }).url).toEqual("/cards/arena/1234/rulings");
  });
});
