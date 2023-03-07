import { RelatedCardComponent } from "../../src/core/related-card";

describe("RelatedCardComponent", () => {
  test.each([
    [RelatedCardComponent.COMBO_PIECE, "combo_piece"],
    [RelatedCardComponent.MELD_PART, "meld_part"],
    [RelatedCardComponent.TOKEN, "token"],
    [RelatedCardComponent.MELD_RESULT, "meld_result"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});