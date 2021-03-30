import * as React from "react";

import {
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import DefaultComponentWrapper from "./DefaultComponentWrapper";
import Map from "components/Map";
import registerFaIcons from "utils/registerFaIcons";
import store from "store";
import userEvent from "@testing-library/user-event";

describe("Map tests", () => {
  //   const setActiveViewMock = jest.fn();
  //   onContextMenu={(evt) => evt.preventDefault()}
  //   onMouseMove={(evt) => AmongUsCanvas.onMouseMove(evt)}
  //   onMouseDown={(evt) => AmongUsCanvas.onMouseDown(evt)}
  //   onMouseUp={(evt) => AmongUsCanvas.onMouseUp(evt)}
  //   onMouseLeave={(evt) => AmongUsCanvas.onMouseLeave(evt)}
  //   onDoubleClick={(evt) => AmongUsCanvas.onDoubleClick(evt)}
  //   onTouchMove={(evt) => AmongUsCanvas.onTouchMove(evt)}
  //   onTouchStart={(evt) => AmongUsCanvas.onTouchStart(evt)}
  //   onTouchEnd={(evt) => AmongUsCanvas.onTouchEnd(evt)}
  //   onTouchCancel={(evt) => AmongUsCanvas.onTouchCancel(evt)}
  //   onWheel={(evt) => AmongUsCanvas.onWheel(evt)}

  const mockEvent = {
    preventDefault: (): void => {
      return;
    },
  } as Event;

  //   const mockMouseEvent: ReactMouseEvent<HTMLCanvasElement, MouseEvent> = {
  //     preventDefault: (): void => {
  //       return;
  //     },
  //     currentTarget: {
  //       addEventListener: (): void => {
  //         return;
  //       },
  //       removeEventListener: (): void => {
  //         return;
  //       },
  //       dispatchEvent: () => true,
  //       getBoundingClientRect: () => {
  //         return {
  //           x: 0,
  //           y: 0,
  //           bottom: 0,
  //           left: 0,
  //           right: 0,
  //           top: 0,
  //           width: 1024,
  //           height: 768,
  //           toJSON: () => {
  //             return;
  //           },
  //         } as DOMRect;
  //       },
  //     },
  //   };

  beforeEach(() => {
    jest.clearAllMocks();
    registerFaIcons();
    render(
      <DefaultComponentWrapper testStore={store}>
        <Map currentMap="Polus" />
      </DefaultComponentWrapper>
    );
  });

  test("should preventDefault on onContextMenu call", () => {
    const canvas = screen.getByText(/This section is not/);

    const onContextMenu = jest.fn(
      Object.values(canvas)[0].pendingProps.onContextMenu(mockEvent)
    );

    onContextMenu();
  });

  test("should call onMouseMove", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.mouseMove(canvas);
  });

  test("should call onMouseDown", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.mouseDown(canvas);
  });

  test("should call onMouseUp", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.mouseUp(canvas);
  });

  test("should call onMouseLeave", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.mouseLeave(canvas);
  });

  test("should call onTouchStart", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.touchStart(canvas);
  });

  test("should call onTouchMove", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.touchMove(canvas);
  });

  test("should call onTouchEnd", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.touchEnd(canvas);
  });

  test("should call onTouchCancel", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.touchCancel(canvas);
  });

  test("should call onWheel", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.wheel(canvas);
  });

  test("should call onDoubleClick", () => {
    const canvas = screen.getByText(/This section is not/);

    fireEvent.dblClick(canvas);
  });
});
