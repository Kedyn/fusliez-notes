import Config from "utils/AUMT/Config";
import InputHandler from "utils/AUMT/InputHandler";
import Loading from "utils/AUMT/Scenes/Loading";
import { MOUSE_BUTTON } from "constants/mouse";
import Menu from "utils/AUMT/Scenes/Menu";
import { PointerEvent as ReactPointerEvent } from "react";
import SceneManager from "utils/AUMT/SceneManager";

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

describe("Scenes/Menu tests", () => {
  let loading: Loading;
  let menu: Menu;

  beforeEach(() => {
    const canvas = document.createElement("canvas").getContext("2d");
    if (canvas) {
      Config.setContext(canvas);
      Config.setTheme(theme);
      //   clearRectSpy = jest.spyOn(Config.getContext(), "clearRect");

      Config.updatePlayers();
      loading = new Loading();
      Config.setLoaded();
      loading.update();
      menu = new Menu();
    }
  });

  test("onExit should do nothing", () => {
    expect(menu.onExit()).toBeUndefined();
  });

  test("update should do nothing if no mouse button is clicked", () => {
    menu.update();
    expect(SceneManager.getCurrentScene()).toEqual("Menu");
  });

  describe("update() tests", () => {
    beforeEach(() => {
      const mockFn = jest.fn();
      const event = (button: MOUSE_BUTTON | string) => {
        return {
          button,
          preventDefault: () => mockFn(),
          currentTarget: {
            focus: () => mockFn(),
          },
        } as ReactPointerEvent<HTMLCanvasElement>;
      };

      InputHandler.onPointerDown(event(MOUSE_BUTTON.LEFT));
    });

    test("mouse pointer on MiraHQ: should set current scene to MiraHQ", () => {
      const mockFn = jest.fn();
      const event = {
        preventDefault: () => mockFn(),
        clientX: 600,
        clientY: 540,
        currentTarget: {
          width: 1920,
          height: 1080,
          getBoundingClientRect: () => {
            return {
              left: 0,
              top: 0,
              width: 1920,
              height: 1080,
            };
          },
        },
      } as ReactPointerEvent<HTMLCanvasElement>;
      InputHandler.onPointerMove(event);

      menu.update();

      expect(SceneManager.getCurrentScene()).toEqual("MiraHQ");
    });

    test("mouse pointer on Polus: should set current scene to Polus", () => {
      const mockFn = jest.fn();
      const event = {
        preventDefault: () => mockFn(),
        clientX: 1259,
        clientY: 555,
        currentTarget: {
          width: 1920,
          height: 1080,
          getBoundingClientRect: () => {
            return {
              left: 0,
              top: 0,
              width: 1920,
              height: 1080,
            };
          },
        },
      } as ReactPointerEvent<HTMLCanvasElement>;
      InputHandler.onPointerMove(event);

      menu.update();

      expect(SceneManager.getCurrentScene()).toEqual("Polus");
    });

    test("mouse pointer on TheAirship: should set current scene to TheAirship", () => {
      const mockFn = jest.fn();
      const event = {
        preventDefault: () => mockFn(),
        clientX: 627,
        clientY: 648,
        currentTarget: {
          width: 1920,
          height: 1080,
          getBoundingClientRect: () => {
            return {
              left: 0,
              top: 0,
              width: 1920,
              height: 1080,
            };
          },
        },
      } as ReactPointerEvent<HTMLCanvasElement>;
      InputHandler.onPointerMove(event);

      menu.update();

      expect(SceneManager.getCurrentScene()).toEqual("TheAirship");
    });

    test("mouse pointer on TheSkeld: should set current scene to TheSkeld", () => {
      const mockFn = jest.fn();
      const event = {
        preventDefault: () => mockFn(),
        clientX: 1247,
        clientY: 708,
        currentTarget: {
          width: 1920,
          height: 1080,
          getBoundingClientRect: () => {
            return {
              left: 0,
              top: 0,
              width: 1920,
              height: 1080,
            };
          },
        },
      } as ReactPointerEvent<HTMLCanvasElement>;
      InputHandler.onPointerMove(event);

      menu.update();

      expect(SceneManager.getCurrentScene()).toEqual("TheSkeld");
    });
  });
});
