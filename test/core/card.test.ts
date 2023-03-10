import { describe, expect, test } from "vitest";
import { BorderColor, Finish, Frame, FrameEffect, Game, Rarity, SecurityStamp } from "../../src/core/card";

describe("BorderColor", () => {
  test.each([
    [BorderColor.BLACK, "black"],
    [BorderColor.WHITE, "white"],
    [BorderColor.BORDERLESS, "borderless"],
    [BorderColor.SILVER, "silver"],
    [BorderColor.GOLD, "gold"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});

describe("Finish", () => {
  test.each([
    [Finish.FOIL, "foil"],
    [Finish.NONFOIL, "nonfoil"],
    [Finish.ETCHED, "etched,"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});

describe("Frame", () => {
  test.each([
    [Frame._1993, "1993"],
    [Frame._1997, "1997"],
    [Frame._2003, "2003"],
    [Frame._2015, "2015"],
    [Frame.FUTURE, "future"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});

describe("FrameEffect", () => {
  test.each([
    [FrameEffect.LEGENDARY, "legendary"],
    [FrameEffect.MIRACLE, "miracle"],
    [FrameEffect.NYX_TOUCHED, "nyxtouched"],
    [FrameEffect.DRAFT, "draft"],
    [FrameEffect.DEVOID, "devoid"],
    [FrameEffect.TOMBSTONE, "tombstone"],
    [FrameEffect.COLORSHIFTED, "colorshifted"],
    [FrameEffect.INVERTED, "inverted"],
    [FrameEffect.SUN_MOON_DFC, "sunmoondfc"],
    [FrameEffect.COMPASS_LAND_DFC, "compasslanddfc"],
    [FrameEffect.ORIGIN_PW_DFC, "originpwdfc"],
    [FrameEffect.MOON_ELDRAZI_DFC, "mooneldrazidfc"],
    [FrameEffect.WAXING_AND_WANING_MOON_DFC, "waxingandwaningmoondfc"],
    [FrameEffect.SHOWCASE, "showcase"],
    [FrameEffect.EXTENDED_ART, "extendedart"],
    [FrameEffect.COMPANION, "companion"],
    [FrameEffect.ETCHED, "etched"],
    [FrameEffect.SNOW, "snow"],
    [FrameEffect.LESSON, "lesson"],
    [FrameEffect.SHATTERED_GLASS, "shatteredglass"],
    [FrameEffect.CONVERT_DFC, "convertdfc"],
    [FrameEffect.FAN_DFC, "fandfc"],
    [FrameEffect.UPSIDE_DOWN_DFC, "upsidedowndfc"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});

describe("Game", () => {
  test.each([
    [Game.PAPER, "paper"],
    [Game.ARENA, "arena"],
    [Game.MTGO, "mtgo"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});

describe("Rarity", () => {
  test.each([
    [Rarity.COMMON, "common"],
    [Rarity.UNCOMMON, "uncommon"],
    [Rarity.RARE, "rare"],
    [Rarity.SPECIAL, "special"],
    [Rarity.MYTHIC, "mythic"],
    [Rarity.BONUS, "bonus"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});

describe("SecurityStamp", () => {
  test.each([
    [SecurityStamp.OVAL, "oval"],
    [SecurityStamp.TRIANGLE, "triangle"],
    [SecurityStamp.ACORN, "acorn"],
    [SecurityStamp.CIRCLE, "circle"],
    [SecurityStamp.ARENA, "arena"],
    [SecurityStamp.HEART, "heart"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});
