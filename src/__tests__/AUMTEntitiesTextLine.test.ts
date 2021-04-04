import Config from "utils/AUMT/Config";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";

// import Rectangle from "utils/math/Rectangle";

const theme = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  baseFontSize: 16,
  textColorPrimary: "#eeeeee",
  textColorSecondary: "#ffffff",
  backgroundColorPrimary: "#202225",
  backgroundColorSecondary: "#282b2f",
  linkColor: "#9EC4D5",
  linkColorHover: "#C2D2E3",
  dangerColor: "#8B0000",
  dangerColorHover: "#be0000",
  activeColor: "#667c84",
  borderColor: "#36383a",
  crewmateColorPrimary: "#008dfc",
  crewmateColorSecondary: "#30a4ff",
  impostorColorPrimary: "#af1211",
  impostorColorSecondary: "#dd1716",
  neutralColor: "#8d86b7",
};

describe("TextLine tests", () => {
  let contextRestoreSpy: jest.SpyInstance;
  let contextStrokeTextSpy: jest.SpyInstance;
  let contextFillSpy: jest.SpyInstance;

  describe("centered", () => {
    let textLine: TextLine;

    beforeEach(() => {
      jest.clearAllMocks();

      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        Config.setTheme(theme);
        contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
        contextStrokeTextSpy = jest.spyOn(Config.getContext(), "strokeText");
        contextFillSpy = jest.spyOn(Config.getContext(), "fill");
        textLine = new TextLine("", new Vector());
      }
    });

    test("setPosition should set the text position with centered being factored", () => {
      textLine.setPosition(new Vector(-100, -100));

      expect(textLine.getPosition()).toEqual({ x: -100, y: -90 });
    });

    test("setText should set the text", () => {
      textLine.setText("testing");

      expect(textLine.getText()).toEqual("testing");
    });

    test("getRect should return the rectangle", () => {
      expect(textLine.getRect()).toEqual({
        height: 20,
        position: { x: 0, y: -10 },
        width: 0,
      });
    });

    test("render should have drawn the text on canvas", () => {
      textLine.setText("testing");
      textLine.render();

      const { x, y } = textLine.getPosition();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(3);
      expect(contextStrokeTextSpy).toHaveBeenLastCalledWith("testing", x, y);
    });

    test("render should have drawn the text on canvas, debug === true", () => {
      Config.setDebug(true);
      textLine.setText("testing");
      textLine.render();

      const { x, y } = textLine.getPosition();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(3);
      expect(contextStrokeTextSpy).toHaveBeenLastCalledWith("testing", x, y);
      expect(contextFillSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("not centered", () => {
    let textLine: TextLine;

    beforeEach(() => {
      jest.clearAllMocks();

      const canvas = document.createElement("canvas").getContext("2d");
      if (canvas) {
        Config.setContext(canvas);
        Config.setTheme(theme);
        contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
        contextStrokeTextSpy = jest.spyOn(Config.getContext(), "strokeText");
        contextFillSpy = jest.spyOn(Config.getContext(), "fill");
        textLine = new TextLine("", new Vector(), false, 20);
      }
    });

    test("setPosition should set the text position", () => {
      textLine.setPosition(new Vector(-100, -100));

      expect(textLine.getPosition()).toEqual({ x: -100, y: -100 });
    });

    test("render should have drawn the text on canvas, debug === true", () => {
      Config.setDebug(true);
      textLine.setText("testing");
      textLine.render();

      const { x, y } = textLine.getPosition();
      expect(contextRestoreSpy).toHaveBeenCalledTimes(3);
      expect(contextStrokeTextSpy).toHaveBeenLastCalledWith("testing", x, y);
      expect(contextFillSpy).toHaveBeenCalledTimes(0);
    });

    test("render should not have drawn the text on canvas, text === ''", () => {
      textLine.render();

      expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
      expect(contextStrokeTextSpy).toHaveBeenCalledTimes(0);
    });
  });
});
