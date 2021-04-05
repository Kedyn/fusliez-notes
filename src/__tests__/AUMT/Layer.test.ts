import Config from "utils/AUMT/Config";
import Layer from "utils/AUMT/Layer";
import TextLine from "utils/AUMT/Entities/TextLine";
import Vector from "utils/math/Vector";

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

describe("AUMT/Layer tests", () => {
  const layer = new Layer();
  let contextRestoreSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    const canvas = document.createElement("canvas").getContext("2d");
    if (canvas) {
      Config.setContext(canvas);
      contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
      Config.setTheme(theme);
    }
  });

  test("setEntities should set this.entities to argument", () => {
    layer.setEntities([
      ({
        visible: true,
        draggable: false,
        active: false,
        text: "Loading...",
        position: {
          x: 960,
          y: 490,
        },
        center: true,
        fontSize: 100,
        strokeStyle: "black",
        fillStyle: "white",
        lineWidth: 8,
        rect: {
          position: {
            x: 729.8863830566406,
            y: 440,
          },
          width: 460.22723388671875,
          height: 100,
        },
      } as unknown) as TextLine,
      ({
        visible: true,
        draggable: false,
        active: false,
        text: "fusliez notes created by the fuslie family",
        position: {
          x: 960,
          y: 590,
        },
        center: true,
        fontSize: 20,
        strokeStyle: "black",
        fillStyle: "white",
        lineWidth: 8,
        rect: {
          position: {
            x: 769.4603881835938,
            y: 580,
          },
          width: 381.0792236328125,
          height: 20,
        },
      } as unknown) as TextLine,
    ]);

    expect(layer.getEntities()).toStrictEqual([
      {
        visible: true,
        draggable: false,
        active: false,
        text: "Loading...",
        position: {
          x: 960,
          y: 490,
        },
        center: true,
        fontSize: 100,
        strokeStyle: "black",
        fillStyle: "white",
        lineWidth: 8,
        rect: {
          position: {
            x: 729.8863830566406,
            y: 440,
          },
          width: 460.22723388671875,
          height: 100,
        },
      },
      {
        visible: true,
        draggable: false,
        active: false,
        text: "fusliez notes created by the fuslie family",
        position: {
          x: 960,
          y: 590,
        },
        center: true,
        fontSize: 20,
        strokeStyle: "black",
        fillStyle: "white",
        lineWidth: 8,
        rect: {
          position: {
            x: 769.4603881835938,
            y: 580,
          },
          width: 381.0792236328125,
          height: 20,
        },
      },
    ]);
  });

  test("update(4) should update each entity with step 4", () => {
    layer.setEntities([
      new TextLine(
        "Loading...",
        new Vector(1920 / 2, 1080 / 2 - 50),
        true,
        100
      ),
      new TextLine(
        "fusliez notes created by the fuslie family",
        new Vector(1920 / 2, 1080 / 2 + 50),
        true,
        20
      ),
    ]);
    layer.update(4);
  });

  test("render with visible === true should render each entity in this.entities", () => {
    layer.render();
    expect(contextRestoreSpy).toHaveBeenCalledTimes(2);
  });

  test("setVisible(false) should set this.visible to false", () => {
    layer.setVisible(false);
    expect(layer.getVisible()).toBeFalsy();
  });

  test("render with visible === false should do nothing", () => {
    expect(layer.render()).toBeUndefined();
  });
});
