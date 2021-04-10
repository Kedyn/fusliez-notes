import Config from "utils/AUMT/Config";
import InputHandler from "utils/AUMT/InputHandler";
import RadialMenu from "utils/AUMT/Layers/RadialMenu";
import { PointerEvent as ReactPointerEvent } from "react";
import Vector from "utils/math/Vector";
import { theme } from "../../default";

describe("RadialMenu tests", () => {
  let radialMenu: RadialMenu;

  beforeEach(() => {
    radialMenu = new RadialMenu(true);
    jest.clearAllMocks();
    const canvas = document.createElement("canvas").getContext("2d");
    if (canvas) {
      Config.setContext(canvas);
      Config.setTheme(theme);
    }
  });

  test("openMenu should set this.center to the current mouse position", () => {
    const mockFn = jest.fn();
    const pointerEvent = {
      preventDefault: () => mockFn(),
      clientX: 355.1071646949839,
      clientY: 875.382203260517,
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
    InputHandler.onPointerMove(pointerEvent);
    radialMenu.openMenu();

    expect(radialMenu.getCenter()).toEqual(
      new Vector(355.1071646949839, 875.382203260517)
    );
  });

  test("setCenter should set this.center to the Vector", () => {
    radialMenu.setCenter(new Vector(1012, 686));
    expect(radialMenu.getCenter()).toEqual(new Vector(1012, 686));
  });

  test("getColorFromPosition from a vector outside of the menu should return null", () => {
    expect(radialMenu.getColorFromPosition(new Vector(1000, 60))).toBeNull();
  });

  test("getColorFromPosition from a vector inside the menu should return the corresponding color: in this case, orange", () => {
    radialMenu.setCenter(new Vector(355.1071646949839, 875.382203260517));

    expect(
      radialMenu.getColorFromPosition(
        new Vector(333.417391450761, 808.3973227262256)
      )
    ).toEqual("orange");
  });

  test("render should have called beginPath, moveTo, closePath12 times; lineTo should have been called 36 times, and restore once", () => {
    const beginPathSpy = jest.spyOn(Config.getContext(), "beginPath");
    const moveToSpy = jest.spyOn(Config.getContext(), "moveTo");
    const lineToSpy = jest.spyOn(Config.getContext(), "lineTo");
    const closePathSpy = jest.spyOn(Config.getContext(), "closePath");
    const restoreSpy = jest.spyOn(Config.getContext(), "restore");

    radialMenu.render();

    expect(beginPathSpy).toHaveBeenCalledTimes(12);
    expect(moveToSpy).toHaveBeenCalledTimes(12);
    expect(lineToSpy).toHaveBeenCalledTimes(36);
    expect(closePathSpy).toHaveBeenCalledTimes(12);
    expect(restoreSpy).toHaveBeenCalledTimes(1);
  });

  test("render with menu invisible should return undefined", () => {
    expect(new RadialMenu().render()).toBeUndefined();
  });
});
