import { players, theme } from "../../default";

import Config from "utils/AUMT/Config";
import InputHandler from "utils/AUMT/InputHandler";
import Loading from "utils/AUMT/Scenes/Loading";
import { MOUSE_BUTTON } from "constants/mouse";
import Menu from "utils/AUMT/Scenes/Menu";
import { PointerEvent as ReactPointerEvent } from "react";
import SceneManager from "utils/AUMT/SceneManager";

describe("Scenes/Menu tests", () => {
  let loading: Loading;
  let menu: Menu;

  beforeEach(() => {
    const canvas = document.createElement("canvas").getContext("2d");
    if (canvas) {
      Config.setContext(canvas);
      Config.setTheme(theme);
      //   clearRectSpy = jest.spyOn(Config.getContext(), "clearRect");

      Config.updatePlayers(players, 3, 5, 1);
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
