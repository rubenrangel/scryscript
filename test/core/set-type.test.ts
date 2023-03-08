import { describe, expect, test } from "vitest";
import { SetType } from "../../src/core/set-type";

describe("SetType", () => {
  test.each([
    [SetType.CORE, "core"],
    [SetType.EXPANSION, "expansion"],
    [SetType.MASTERS, "masters"],
    [SetType.ALCHEMY, "alchemy"],
    [SetType.MASTERPIECE, "masterpiece"],
    [SetType.ARSENAL, "arsenal"],
    [SetType.FROM_THE_VAULT, "from_the_vault"],
    [SetType.SPELLBOOK, "spellbook"],
    [SetType.PREMIUM_DECK, "premium_deck"],
    [SetType.DUEL_DECK, "duel_deck"],
    [SetType.DRAFT_INNOVATION, "draft_innovation"],
    [SetType.TREASURE_CHEST, "treasure_chest"],
    [SetType.COMMANDER, "commander"],
    [SetType.PLANECHASE, "planechase"],
    [SetType.ARCHENEMY, "archenemy"],
    [SetType.VANGUARD, "vanguard"],
    [SetType.FUNNY, "funny"],
    [SetType.STARTER, "starter"],
    [SetType.BOX, "box"],
    [SetType.PROMO, "promo"],
    [SetType.TOKEN, "token"],
    [SetType.MEMORABILIA, "memorabilia"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});
