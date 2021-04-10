import { KeysPressed, MouseButtonsPressed } from "utils/types/input";
import {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
} from "react";

import { MOUSE_BUTTON } from "constants/mouse";
import Vector from "utils/math/Vector";

// TODO - Add Mobile support

class InputHandler {
  public static GetInstance(): InputHandler {
    if (!InputHandler.instance) {
      InputHandler.instance = new InputHandler();
    }

    return InputHandler.instance;
  }

  public getMousePosition(): Vector {
    return this.mousePosition;
  }

  public getMouseButtons(): MouseButtonsPressed {
    if (this.propagate) {
      return this.mouseButtons;
    }

    return {
      LEFT: false,
      MIDDLE: false,
      RIGHT: false,
    };
  }

  public getPropagate(): boolean {
    return this.propagate;
  }

  public getKeys(): KeysPressed {
    return this.keys;
  }

  public getWheel(): number {
    return this.wheel;
  }

  public getDoubleClicked(): boolean {
    return this.propagate && this.doubleClicked;
  }

  public stopPropagation(): void {
    this.propagate = false;
  }

  public restoreState(): void {
    this.wheel = 0;

    this.doubleClicked = false;

    this.propagate = true;
  }

  public resetMouseButtons(): void {
    this.mouseButtons = {
      LEFT: false,
      MIDDLE: false,
      RIGHT: false,
    };
  }

  public onPointerMove(evt: ReactPointerEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    const rect = evt.currentTarget.getBoundingClientRect();

    this.mousePosition.set(
      (evt.clientX - rect.left) * (evt.currentTarget.width / rect.width),
      (evt.clientY - rect.top) * (evt.currentTarget.height / rect.height)
    );
  }

  public onPointerDown(evt: ReactPointerEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    evt.currentTarget.focus();

    switch (evt.button) {
      case MOUSE_BUTTON.LEFT:
        this.mouseButtons.LEFT = true;

        break;

      case MOUSE_BUTTON.MIDDLE:
        this.mouseButtons.MIDDLE = true;

        break;

      case MOUSE_BUTTON.RIGHT:
        this.mouseButtons.RIGHT = true;

        break;

      default:
        break;
    }
  }

  public onPointerUp(evt: ReactPointerEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    switch (evt.button) {
      case MOUSE_BUTTON.LEFT:
        this.mouseButtons.LEFT = false;

        break;

      case MOUSE_BUTTON.MIDDLE:
        this.mouseButtons.MIDDLE = false;

        break;

      case MOUSE_BUTTON.RIGHT:
        this.mouseButtons.RIGHT = false;

        break;

      default:
        break;
    }
  }

  public onPointerEnter(evt: ReactPointerEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    // NOTE - Might not need it and could be deleted.
  }

  public onPointerLeave(evt: ReactPointerEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    this.mousePosition.set(-1, -1);

    this.mouseButtons = {
      LEFT: false,
      MIDDLE: false,
      RIGHT: false,
    };
  }

  public onDoubleClick(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    this.doubleClicked = true;
  }

  public onWheel(evt: ReactWheelEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    this.wheel = evt.deltaY;
  }

  public onKeyDown(evt: ReactKeyboardEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    this.keys[evt.key] = true;
  }

  public onKeyUp(evt: ReactKeyboardEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    this.keys[evt.key] = false;
  }

  private static instance: InputHandler;

  private mousePosition: Vector;
  private mouseButtons: MouseButtonsPressed;
  private keys: KeysPressed;
  private wheel: number;
  private doubleClicked: boolean;
  private propagate: boolean;

  private constructor() {
    this.mousePosition = new Vector();

    this.mouseButtons = {
      LEFT: false,
      MIDDLE: false,
      RIGHT: false,
    };

    this.keys = {};

    this.wheel = 0;

    this.doubleClicked = false;

    this.propagate = true;
  }
}

const InputHandlerInstance: InputHandler = InputHandler.GetInstance();

export default InputHandlerInstance;
