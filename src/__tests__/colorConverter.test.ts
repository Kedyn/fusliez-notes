import { getColorValue, lightenDarkenColor } from "utils/colorConverter";

describe("colorConverter tests", () => {
  test("getColorValue('teal') should return '0, 0, 0' ", () => {
    expect(getColorValue("teal")).toEqual("0, 0, 0");
  });

  test("getColorValue('red') should return '197,17,17' ", () => {
    expect(getColorValue("red")).toEqual("197,17,17");
  });

  test("getColorValue('red', 'dark') should return '123,8,56' ", () => {
    expect(getColorValue("red", "dark")).toEqual("123,8,56");
  });

  test("lightenDarkenColor('#EF7D0E', 30) should return '#ff9b2c' ", () => {
    expect(lightenDarkenColor("#EF7D0E", 30)).toEqual("#ff9b2c");
  });

  test("lightenDarkenColor('EF7D0E', 30) should return 'ff9b2c' ", () => {
    expect(lightenDarkenColor("EF7D0E", 30)).toEqual("ff9b2c");
  });

  test("lightenDarkenColor('#EF7D0E', 200) should return '#ffffd6' ", () => {
    expect(lightenDarkenColor("#EF7D0E", 200)).toEqual("#ffffd6");
  });

  test("lightenDarkenColor('#EF7D0E', -300) should return '#0' ", () => {
    expect(lightenDarkenColor("#EF7D0E", -300)).toEqual("#0");
  });
});
