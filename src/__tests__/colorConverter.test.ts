import { getColorValue, lightenDarkenColor } from "utils/colorConverter";

import { COLOR_LIBRARY } from "constants/theme";

describe("colorConverter tests", () => {
  test("getColorValue('teal') should return '0, 0, 0' ", () => {
    const rgb = getColorValue("teal");

    expect(rgb).toBe("0, 0, 0");
  });

  test("getColorValue('red') should return '197,17,17' ", () => {
    const rgb = getColorValue("red");
    expect(rgb).toBe("197,17,17");
  });

  test("getColorValue('red', 'dark') should return '123,8,56' ", () => {
    const rgb = getColorValue("red", "dark");
    expect(rgb).toBe("123,8,56");
  });
});
