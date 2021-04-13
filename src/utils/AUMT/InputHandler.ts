import { KeysPressed, MouseButtonsPressed } from "utils/types/input";
import {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  WheelEvent as ReactWheelEvent,
} from "react";

import { MOUSE_BUTTON } from "constants/mouse";
import Vector from "utils/math/Vector";

// Mobile support is added using a modified version of https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Pinch_zoom_gestures

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

    if (this.pointers.length <= 1) {
      this.mousePosition.set(this.getMousePositionFromEvent(evt));
    } else if (this.pointers.length === 2) {
      this.pointers[0].currentTarget = evt.currentTarget;
      this.pointers[1].currentTarget = evt.currentTarget;

      const p1 = new Vector(this.getMousePositionFromEvent(this.pointers[0]));
      const p2 = new Vector(this.getMousePositionFromEvent(this.pointers[1]));
      const distance = p1.getDistance(p2);
      const center = p1.getCenter(p2);

      if (!this.previousDistance) {
        this.previousDistance = distance;
      }

      const difference = this.previousDistance - distance;

      if (difference > 0) {
        this.wheel = 1;
      } else if (difference < 0) {
        this.wheel = -1;
      }

      this.previousDistance = distance;

      this.mousePosition.set(center);
    }
  }

  public onPointerDown(evt: ReactPointerEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    evt.currentTarget.focus();

    switch (evt.button) {
      case MOUSE_BUTTON.LEFT:
        this.mouseButtons.LEFT = true;

        this.pointers.push(evt);
        evt.persist();

        this.mousePosition.set(this.getMousePositionFromEvent(evt));

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

        this.removePointer(evt);

        const currentTime = new Date().getTime();
        const timeUp = currentTime - this.previousPointerUpTime;

        if (timeUp < 500 && timeUp > 0) {
          this.doubleClicked = true;
        }

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

    this.removePointer(evt);
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
  private pointers: Array<ReactPointerEvent<HTMLCanvasElement>>;
  private previousDistance: number;
  private previousPointerUpTime: number;

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

    this.pointers = [];

    this.previousDistance = -1;

    this.previousPointerUpTime = 0;
  }

  private removePointer(evt: ReactPointerEvent<HTMLCanvasElement>): void {
    for (let i = 0; i < this.pointers.length; i++) {
      if (evt.pointerId === this.pointers[i].pointerId) {
        this.pointers.splice(i, 1);

        break;
      }
    }

    if (this.pointers.length < 2) {
      this.previousDistance = -1;
    }
  }

  private getMousePositionFromEvent(
    evt: ReactPointerEvent<HTMLCanvasElement>
  ): Vector {
    const rect = evt.currentTarget.getBoundingClientRect();

    return new Vector(
      (evt.clientX - rect.left) * (evt.currentTarget.width / rect.width),
      (evt.clientY - rect.top) * (evt.currentTarget.height / rect.height)
    );
  }
}

const InputHandlerInstance: InputHandler = InputHandler.GetInstance();

export default InputHandlerInstance;
