import { KeysPressed, MouseButtonsPressed } from "utils/types/input";
import {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react";

import { MOUSE_BUTTON } from "constants/mouse";
import Vector from "utils/math/Vector";

interface IMouseEvent {
  clientX: number;
  clientY: number;
  currentTarget: EventTarget & HTMLCanvasElement;
}

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

  public getKeys(): KeysPressed {
    return this.keys;
  }

  public stopPropagation(): void {
    this.propagate = false;
  }

  public restoreStates(): void {
    this.propagate = true;
  }

  public onMouseMove(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    this.mousePosition.set(this.getCurrentMousePosition(evt));
  }

  public onMouseDown(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

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

  public onMouseUp(evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>): void {
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

  public onMouseLeave(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
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

    // TODO - add logic
  }

  public onWheel(evt: ReactWheelEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    // TODO - add logic
  }

  public onTouchMove(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    // TODO - add logic
  }

  public onTouchStart(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    // TODO - add logic
  }

  public onTouchEnd(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    // TODO - add logic
  }

  public onTouchCancel(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    // TODO - add logic
  }

  public onKeyDown(evt: ReactKeyboardEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    // TODO - add logic
  }

  public onKeyUp(evt: ReactKeyboardEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    // TODO - add logic
  }

  private static instance: InputHandler;

  private mousePosition: Vector;
  private mouseButtons: MouseButtonsPressed;
  private keys: KeysPressed;
  private propagate: boolean;

  private constructor() {
    this.mousePosition = new Vector();

    this.mouseButtons = {
      LEFT: false,
      MIDDLE: false,
      RIGHT: false,
    };

    this.keys = {};

    this.propagate = true;
  }

  private getCurrentMousePosition<T extends IMouseEvent>(evt: T): Vector {
    const rect = evt.currentTarget.getBoundingClientRect();

    return new Vector(
      (evt.clientX - rect.left) * (evt.currentTarget.width / rect.width),
      (evt.clientY - rect.top) * (evt.currentTarget.height / rect.height)
    );
  }
}

const InputHandlerInstance: InputHandler = InputHandler.GetInstance();

export default InputHandlerInstance;
