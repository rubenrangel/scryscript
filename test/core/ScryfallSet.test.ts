import { beforeAll, describe, expect, test } from "vitest";
import { ScryfallSet } from "../../src/core/ScryfallSet";

describe("Set", () => {
  let set: ScryfallSet;

  beforeAll(() => {
    set = new ScryfallSet({
      id: "a4a0db50-8826-4e73-833c-3fd934375f96",
      code: "aer",
      mtgoCode: "aer",
      arenaCode: "aer",
      tcgplayerId: 1857,
      name: "Aether Revolt",
      uri: "https://api.scryfall.com/sets/a4a0db50-8826-4e73-833c-3fd934375f96",
      scryfallUri: "https://scryfall.com/sets/aer",
      searchUri:
        "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aaer&unique=prints",
      releasedAt: "2017-01-20",
      setType: "expansion",
      cardCount: 194,
      printedSize: 184,
      digital: false,
      nonfoilOnly: false,
      foilOnly: false,
      blockCode: "kld",
      block: "Kaladesh",
      iconSvgUri: "https://svgs.scryfall.io/sets/aer.svg?1678680000",
    });
  });

  test("fromSet", () => {
    expect(
      ScryfallSet.fromSet({
        object: "set",
        id: "a4a0db50-8826-4e73-833c-3fd934375f96",
        code: "aer",
        mtgoCode: "aer",
        arenaCode: "aer",
        tcgplayerId: 1857,
        name: "Aether Revolt",
        uri: "https://api.scryfall.com/sets/a4a0db50-8826-4e73-833c-3fd934375f96",
        scryfallUri: "https://scryfall.com/sets/aer",
        searchUri:
          "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aaer&unique=prints",
        releasedAt: "2017-01-20",
        setType: "expansion",
        cardCount: 194,
        printedSize: 184,
        digital: false,
        nonfoilOnly: false,
        foilOnly: false,
        blockCode: "kld",
        block: "Kaladesh",
        iconSvgUri: "https://svgs.scryfall.io/sets/aer.svg?1678680000",
      })
    ).toBeInstanceOf(ScryfallSet);
  });

  test("scryfallUrl", () => {
    expect(set.scryfallUrl).toEqual(new URL("https://scryfall.com/sets/aer"));
  });

  test("searchUrl", () => {
    expect(set.searchUrl).toEqual(
      new URL(
        "https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aaer&unique=prints"
      )
    );
  });

  test("iconSvgUrl", () => {
    expect(set.iconSvgUrl).toEqual(new URL("https://svgs.scryfall.io/sets/aer.svg?1678680000"));
  });

  describe("releasedAtDate", () => {
    test("has releasedAt", () => {
      expect(set.releasedAtDate).toEqual(new Date("2017-01-20"));
    });

    test("releasedAt is undefined", () => {
      expect(new ScryfallSet({ ...set, releasedAt: undefined }).releasedAtDate).toBeUndefined();
    });

    test("releasedAt is null", () => {
      expect(new ScryfallSet({ ...set, releasedAt: null }).releasedAtDate).toBeUndefined();
    });
  });
});
