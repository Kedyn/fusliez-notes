import {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
} from "react";

import InputHandler from "utils/AUMT/InputHandler";
import { MOUSE_BUTTON } from "constants/mouse";
import Vector from "utils/math/Vector";

describe("InputHandler tests", () => {
  test("getMousePosition should return new Vector(0,0)", () => {
    expect(InputHandler.getMousePosition()).toEqual(new Vector(0, 0));
  });

  test("getMouseButtons should return this.mouseButtons (this.propagate === true)", () => {
    expect(InputHandler.getMouseButtons()).toEqual({
      LEFT: false,
      MIDDLE: false,
      RIGHT: false,
    });
  });

  test("getMouseButtons should return default object (this.propagate === false)", () => {
    InputHandler.stopPropagation();

    expect(InputHandler.getMouseButtons()).toEqual({
      LEFT: false,
      MIDDLE: false,
      RIGHT: false,
    });
  });

  test("getKeys should return {}", () => {
    expect(InputHandler.getKeys()).toEqual({});
  });

  test("getWheel should return 0", () => {
    expect(InputHandler.getWheel()).toEqual(0);
  });

  test("getDoubleClicked should return false", () => {
    expect(InputHandler.getDoubleClicked()).toEqual(false);
  });

  test("restoreState should reset the state of wheel, double clicked, and propagate", () => {
    InputHandler.restoreState();
    expect(InputHandler.getPropagate()).toBeTruthy();
    expect(InputHandler.getWheel()).toEqual(0);
    expect(InputHandler.getDoubleClicked()).toEqual(false);
  });

  test("onPointerMove", () => {
    const mockFn = jest.fn();
    const event = {
      preventDefault: () => mockFn(),
      clientX: 320,
      clientY: 160,
      currentTarget: {
        width: 1920,
        height: 1080,
        getBoundingClientRect: () => {
          return {
            left: 0,
            top: 0,
            width: 640,
            height: 320,
          };
        },
      },
    } as ReactPointerEvent<HTMLCanvasElement>;

    InputHandler.onPointerMove(event);

    expect(InputHandler.getMousePosition()).toEqual(new Vector(960, 540));
  });

  describe("onPointerDown tests", () => {
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

    test("invalid button should do nothing", () => {
      const evt = event("fakeButton");
      InputHandler.onPointerDown(evt);

      expect(InputHandler.getMouseButtons().LEFT).toBeFalsy();
      expect(InputHandler.getMouseButtons().RIGHT).toBeFalsy();
      expect(InputHandler.getMouseButtons().MIDDLE).toBeFalsy();
    });

    test("mouse button === LEFT should return true", () => {
      const evt = event(MOUSE_BUTTON.LEFT);
      InputHandler.onPointerDown(evt);

      expect(InputHandler.getMouseButtons().LEFT).toBeTruthy();
    });

    test("mouse button === MIDDLE should return true", () => {
      const evt = event(MOUSE_BUTTON.MIDDLE);
      InputHandler.onPointerDown(evt);

      expect(InputHandler.getMouseButtons().MIDDLE).toBeTruthy();
    });

    test("mouse button === RIGHT should return true", () => {
      const evt = event(MOUSE_BUTTON.RIGHT);
      InputHandler.onPointerDown(evt);

      expect(InputHandler.getMouseButtons().RIGHT).toBeTruthy();
    });
  });

  describe("onPointerUp tests", () => {
    const mockFn = jest.fn();

    const event = (button: MOUSE_BUTTON | string) => {
      return {
        button,
        preventDefault: () => mockFn(),
      } as ReactPointerEvent<HTMLCanvasElement>;
    };

    test("invalid button should do nothing", () => {
      const evt = event("fakeButton");
      InputHandler.onPointerUp(evt);

      expect(InputHandler.getMouseButtons().LEFT).toBeTruthy();
      expect(InputHandler.getMouseButtons().RIGHT).toBeTruthy();
      expect(InputHandler.getMouseButtons().MIDDLE).toBeTruthy();
    });

    test("mouse button === LEFT should return true", () => {
      const evt = event(MOUSE_BUTTON.LEFT);
      InputHandler.onPointerUp(evt);

      expect(InputHandler.getMouseButtons().LEFT).toBeFalsy();
    });

    test("mouse button === MIDDLE should return true", () => {
      const evt = event(MOUSE_BUTTON.MIDDLE);
      InputHandler.onPointerUp(evt);

      expect(InputHandler.getMouseButtons().MIDDLE).toBeFalsy();
    });

    test("mouse button === RIGHT should return true", () => {
      const evt = event(MOUSE_BUTTON.RIGHT);
      InputHandler.onPointerUp(evt);

      expect(InputHandler.getMouseButtons().RIGHT).toBeFalsy();
    });
  });

  test("onPointerEnter should have called preventDefault once", () => {
    const mockFn = jest.fn();

    const event = {
      preventDefault: () => mockFn(),
    } as ReactPointerEvent<HTMLCanvasElement>;

    InputHandler.onPointerEnter(event);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("onPointerLeave should reset mouse position and buttons", () => {
    const mockFn = jest.fn();

    const event = {
      preventDefault: () => mockFn(),
    } as ReactPointerEvent<HTMLCanvasElement>;

    InputHandler.onPointerLeave(event);

    expect(InputHandler.getMousePosition()).toEqual(new Vector(-1, -1));
    expect(InputHandler.getMouseButtons().LEFT).toBeFalsy();
    expect(InputHandler.getMouseButtons().RIGHT).toBeFalsy();
    expect(InputHandler.getMouseButtons().MIDDLE).toBeFalsy();
  });

  test("onDoubleClick should set this.doubleClicked to true", () => {
    const mockFn = jest.fn();

    const event = {
      preventDefault: () => mockFn(),
    } as ReactMouseEvent<HTMLCanvasElement>;

    InputHandler.onDoubleClick(event);

    expect(InputHandler.getDoubleClicked()).toBeTruthy();
  });

  test("onWheel should set this.wheel to deltaY", () => {
    const mockFn = jest.fn();

    const event = {
      preventDefault: () => mockFn(),
      deltaY: -25,
    } as ReactWheelEvent<HTMLCanvasElement>;

    InputHandler.onWheel(event);

    expect(InputHandler.getWheel()).toEqual(-25);
  });

  test("onKeyDown should set a specific key to true", () => {
    const mockFn = jest.fn();

    const event = {
      preventDefault: () => mockFn(),
      key: "Enter",
    } as ReactKeyboardEvent<HTMLCanvasElement>;

    InputHandler.onKeyDown(event);

    expect(InputHandler.getKeys()["Enter"]).toBeTruthy();
  });

  test("onKeyUp should set a specific key to false", () => {
    const mockFn = jest.fn();

    const event = {
      preventDefault: () => mockFn(),
      key: "Enter",
    } as ReactKeyboardEvent<HTMLCanvasElement>;

    InputHandler.onKeyUp(event);

    expect(InputHandler.getKeys()["Enter"]).toBeFalsy();
  });
});
