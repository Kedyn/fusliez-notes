import {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
} from "react";

import Config from "utils/AUMT/Config";
import InputHandler from "utils/AUMT/InputHandler";
import Loading from "utils/AUMT/Scenes/Loading";
import { MOUSE_BUTTON } from "constants/mouse";
import Map from "utils/AUMT/Scenes/Map";
import SceneManager from "utils/AUMT/SceneManager";
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

describe("Scenes/Map tests", () => {
  let loading: Loading;
  let map: Map;
  let contextRestoreSpy: jest.SpyInstance;
  const mockFn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    const canvas = document.createElement("canvas").getContext("2d");
    if (canvas) {
      Config.setContext(canvas);
      contextRestoreSpy = jest.spyOn(Config.getContext(), "restore");
      Config.setTheme(theme);
      Config.updatePlayers();
      loading = new Loading();
      Config.setLoaded();
      loading.update();
      map = new Map("MiraHQ", 1);
    }
  });

  test("onEnter should set offset and scale", () => {
    map.onEnter();
    expect(Config.getOffset()).toEqual({ x: 0, y: 0 });
    expect(Config.getScale()).toEqual({ x: Infinity, y: Infinity });
  });

  test("onExit should set offset and scale to the current offset and scale in Config", () => {
    map.onExit();
    expect(Config.getOffset()).toEqual({ x: 0, y: 0 });
    expect(Config.getScale()).toEqual({ x: 1, y: 1 });
  });

  test("getMenuVisible should return false", () => {
    expect(map.getMenuVisible()).toBeFalsy();
  });

  test("render should have called context.restore 45 times", () => {
    map.render();
    expect(contextRestoreSpy).toHaveBeenCalledTimes(45);
  });

  describe("update() tests", () => {
    function pickValidColor(visible = true) {
      if (visible) map.setMenuVisible(true);

      const event = {
        preventDefault: () => mockFn(),
        clientX: 333.417391450761,
        clientY: 808.3973227262256,
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

      map.getMenu().setCenter(new Vector(355.1071646949839, 875.382203260517));

      InputHandler.onPointerMove(event);
    }

    const mouseEvent = (button: MOUSE_BUTTON | string) => {
      return {
        button,
        preventDefault: () => mockFn(),
        currentTarget: {
          focus: () => mockFn(),
        },
      } as ReactPointerEvent<HTMLCanvasElement>;
    };

    const keyboardEvent = (key: string) => {
      return {
        preventDefault: () => mockFn(),
        key,
      } as ReactKeyboardEvent<HTMLCanvasElement>;
    };

    const restoreStateSpy = jest.spyOn(InputHandler, "restoreState");
    const screenToWorldSpy = jest.spyOn(Config, "screenToWorld");

    beforeEach(() => {
      InputHandler.restoreState();
      InputHandler.resetMouseButtons();
      jest.clearAllMocks();
    });

    test("should do nothing if menu is invisible", () => {
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

      const restoreStateSpy = jest.spyOn(InputHandler, "restoreState");

      InputHandler.onPointerMove(event);
      map.update(4);
      expect(restoreStateSpy).toHaveBeenCalledTimes(1);
    });

    test("menu === visible, update with MOUSE_BUTTON.RIGHT === true", () => {
      // sets MOUSE_BUTTON.RIGHT === true
      InputHandler.onPointerDown(mouseEvent(MOUSE_BUTTON.RIGHT));

      pickValidColor();

      map.update(4);
      expect(restoreStateSpy).toHaveBeenCalledTimes(1);
      InputHandler.onPointerUp(mouseEvent(MOUSE_BUTTON.RIGHT));
    });

    test("menu === visible, MOUSE_BUTTON.LEFT === true, valid color", () => {
      pickValidColor();

      // sets MOUSE_BUTTON.LEFT === true
      InputHandler.onPointerDown(mouseEvent(MOUSE_BUTTON.LEFT));

      map.update(4);
      expect(screenToWorldSpy).toHaveBeenCalledTimes(2);
      expect(restoreStateSpy).toHaveBeenCalledTimes(1);
    });

    test("menu !== visible, MOUSE_BUTTON.LEFT === true, valid color, wheel < 0", () => {
      const wheelEvent = {
        preventDefault: () => mockFn(),
        deltaY: -25,
      } as ReactWheelEvent<HTMLCanvasElement>;

      // sets MOUSE_BUTTON.LEFT === true
      InputHandler.onPointerDown(mouseEvent(MOUSE_BUTTON.LEFT));

      pickValidColor(false);
      InputHandler.onWheel(wheelEvent);

      const screenToWorldSpy = jest.spyOn(Config, "screenToWorld");

      map.update(4);
      expect(screenToWorldSpy).toHaveBeenCalledTimes(3);
      expect(map.getPanningPosition()).toStrictEqual(
        InputHandler.getMousePosition()
      );
    });

    test("menu !== visible, MOUSE_BUTTON.LEFT === true, valid color, wheel > 0", () => {
      const wheelEvent = {
        preventDefault: () => mockFn(),
        deltaY: 156,
      } as ReactWheelEvent<HTMLCanvasElement>;

      // sets MOUSE_BUTTON.LEFT === true
      InputHandler.onPointerDown(mouseEvent(MOUSE_BUTTON.LEFT));

      pickValidColor(false);
      InputHandler.onWheel(wheelEvent);

      const screenToWorldSpy = jest.spyOn(Config, "screenToWorld");

      map.update(4);
      expect(screenToWorldSpy).toHaveBeenCalledTimes(3);
      expect(map.getPanningPosition()).toStrictEqual(
        InputHandler.getMousePosition()
      );

      // running update again
      // should check the if statement
      // (this.panning && InputHandler.getMouseButtons().LEFT)
      map.update(2);
      expect(map.getPanningPosition()).toStrictEqual(
        InputHandler.getMousePosition()
      );
    });

    test("menu !== visible, MOUSE_BUTTON.LEFT === true, mousePosition inside this.hub.entities[0] should set current scene to Menu", () => {
      // sets MOUSE_BUTTON.LEFT === true
      InputHandler.onPointerDown(mouseEvent(MOUSE_BUTTON.LEFT));

      const event = {
        preventDefault: () => mockFn(),
        clientX: 1816.2036022263742,
        clientY: 82.72805414390622,
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

      map.update(4);
      expect(SceneManager.getCurrentScene()).toEqual("Menu");
    });

    test("menu !== visible, doubleClicked === true, invalid color should set this.center to current mouse position", () => {
      // sets MOUSE_BUTTON.RIGHT === true
      InputHandler.onPointerDown(mouseEvent(MOUSE_BUTTON.RIGHT));

      const event = {
        preventDefault: () => mockFn(),
        clientX: 1816.2036022263742,
        clientY: 82.72805414390622,
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

      map.update(2);
      expect(InputHandler.getMousePosition()).toEqual(
        new Vector(1816.2036022263742, 82.72805414390622)
      );
    });

    test("menu !== visible, MOUSE_BUTTON.RIGHT === true, invalid color should set this.center to current mouse position", () => {
      // sets MOUSE_BUTTON.RIGHT === true
      InputHandler.onPointerDown(mouseEvent(MOUSE_BUTTON.RIGHT));

      const event = {
        preventDefault: () => mockFn(),
        clientX: 1816.2036022263742,
        clientY: 82.72805414390622,
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

      map.update(2);
      expect(InputHandler.getMousePosition()).toEqual(
        new Vector(1816.2036022263742, 82.72805414390622)
      );
    });

    test("menu === visible, doubleClicked === true should clear this.players", () => {
      // sets MOUSE_BUTTON.LEFT === true
      InputHandler.onPointerDown(mouseEvent(MOUSE_BUTTON.LEFT));

      pickValidColor();

      // adds player to this.players
      map.update(4);
      expect(map.getPlayers().entities).toHaveLength(1);

      InputHandler.onDoubleClick({
        preventDefault: () => mockFn(),
      } as ReactMouseEvent<HTMLCanvasElement>);
      map.update(1);
      expect(map.getPlayers().entities).toHaveLength(0);
    });

    test("hitting key 'M' or 'm' should change scene to 'Menu'", () => {
      SceneManager.changeScene("MiraHQ");

      InputHandler.onKeyDown(keyboardEvent("M"));

      map.update(0);
      expect(SceneManager.getCurrentScene()).toEqual("Menu");
      InputHandler.onKeyUp(keyboardEvent("M"));

      SceneManager.changeScene("MiraHQ");

      InputHandler.onKeyDown(keyboardEvent("m"));

      map.update(2);
      expect(SceneManager.getCurrentScene()).toEqual("Menu");
      InputHandler.onKeyUp(keyboardEvent("m"));
    });

    test("hitting key 'C' should should clear this.players", () => {
      pickValidColor();

      // adds player to this.players
      map.update(4);
      expect(map.getPlayers().entities).toHaveLength(1);

      InputHandler.onKeyDown(keyboardEvent("C"));
      map.update(1);
      expect(map.getPlayers().entities).toHaveLength(0);
      InputHandler.onKeyUp(keyboardEvent("C"));
    });

    test("hitting key 'c' should should clear this.players", () => {
      pickValidColor();

      // adds player to this.players
      map.update(0);
      expect(map.getPlayers().entities).toHaveLength(1);

      InputHandler.onKeyDown(keyboardEvent("c"));
      map.update(1);
      expect(map.getPlayers().entities).toHaveLength(0);
      InputHandler.onKeyUp(keyboardEvent("c"));
    });
  });
});
