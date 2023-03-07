import { Color } from "../../src/core/color";

describe("Color", () => {
  test.each([
    [Color.WHITE, "W"],
    [Color.BLUE, "U"],
    [Color.BLACK, "B"],
    [Color.RED, "R"],
    [Color.GREEN, "G"],
  ])("enum %s equals %s", (enumValue, expectedValue) => {
    expect(enumValue).toBe(expectedValue);
  });
});
