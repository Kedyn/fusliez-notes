import { getColorValue, lightenDarkenColor } from "utils/colorConverter";

import { COLOR_LIBRARY } from "constants/theme";

describe("colorConverter tests", () => {
  test("getColorValue('teal') should return '0, 0, 0' ", () => {
    expect(getColorValue("teal")).toBe("0, 0, 0");
  });

  test("getColorValue('red') should return '197,17,17' ", () => {
    expect(getColorValue("red")).toBe("197,17,17");
  });

  test("getColorValue('red', 'dark') should return '123,8,56' ", () => {
    expect(getColorValue("red", "dark")).toBe("123,8,56");
  });

  test("lightenDarkenColor('#EF7D0E', 30) should return '#ff9b2c' ", () => {
    expect(lightenDarkenColor("#EF7D0E", 30)).toBe("#ff9b2c");
  });

  test("lightenDarkenColor('EF7D0E', 30) should return 'ff9b2c' ", () => {
    expect(lightenDarkenColor("EF7D0E", 30)).toBe("ff9b2c");
  });

  test("lightenDarkenColor('#EF7D0E', 200) should return '#ffffd6' ", () => {
    expect(lightenDarkenColor("#EF7D0E", 200)).toBe("#ffffd6");
  });

  test("lightenDarkenColor('#EF7D0E', -300) should return '#0' ", () => {
    expect(lightenDarkenColor("#EF7D0E", -300)).toBe("#0");
  });
});
