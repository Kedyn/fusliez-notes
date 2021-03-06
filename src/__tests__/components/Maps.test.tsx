import * as React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "../DefaultComponentWrapper";
import Maps from "components/Maps";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";

describe("Maps tests", () => {
  describe("testing === false (should render the canvas element)", () => {
    let canvas: HTMLCanvasElement;

    beforeEach(() => {
      registerFaIcons();
      render(
        <DefaultComponentWrapper testStore={store}>
          <Maps />
        </DefaultComponentWrapper>
      );

      canvas = screen.getByText(/This section is not/) as HTMLCanvasElement;
    });

    test("should preventDefault on onContextMenu call", () => {
      fireEvent.contextMenu(canvas);
    });

    test("should call onPointerMove", () => {
      fireEvent.pointerMove(canvas);
    });

    test("should call onPointerDown", () => {
      fireEvent.pointerDown(canvas);
    });

    test("should call onPointerUp", () => {
      fireEvent.pointerUp(canvas);
    });

    test("should call onPointerEnter", () => {
      fireEvent.pointerEnter(canvas);
    });

    test("should call onPointerLeave", () => {
      fireEvent.pointerLeave(canvas);
    });

    test("should call onWheel", () => {
      fireEvent.wheel(canvas);
    });

    test("should call onDoubleClick", () => {
      fireEvent.dblClick(canvas);
    });

    test("should call onKeyUp", () => {
      fireEvent.keyUp(canvas);
    });

    test("should call onKeyDown", () => {
      fireEvent.keyDown(canvas);
    });
  });

  describe("testing === true (should NOT render the canvas element)", () => {
    let canvas: HTMLCanvasElement;

    beforeEach(async () => {
      registerFaIcons();
      render(
        <DefaultComponentWrapper testStore={store}>
          <Maps testing={true} />
        </DefaultComponentWrapper>
      );

      canvas = (await screen.queryByText(
        /This section is not/
      )) as HTMLCanvasElement;
    });

    test("canvas should NOT be rendered", () => {
      expect(canvas).toBeNull();
    });
  });
});
