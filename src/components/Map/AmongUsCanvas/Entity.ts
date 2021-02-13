import { ICoordinates, IRect } from "utils/types/shared";

import { KEYCODE } from "constants/keycodes";
import { MOUSE_BUTTON } from "constants/mouse";
import { pointInRect } from "utils/math";

export default class Entity {
  public constructor(rect: IRect, draggable = false, debug = false) {
    this.rect = rect;
    this.draggable = draggable;
    this.debug = debug;

    this.active = false;
  }

  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;
  }
  public update(step: number): void {} // eslint-disable-line

  public render(): void {
    if (this.debug) {
      this.context.save();
      this.context.lineWidth = 1;
      this.context.strokeStyle = "red";
      this.context.strokeRect(
        this.rect.x,
        this.rect.y,
        this.rect.w,
        this.rect.h
      );
      this.context.restore();
    }
  }

  public isActive(): boolean {
    return this.active;
  }

  public onKeyDown(key: KEYCODE): void {} // eslint-disable-line

  public onKeyUp(key: KEYCODE): void {} // eslint-disable-line

  public onMouseMove(coordinate: ICoordinates): void {
    if (this.active) {
      this.rect.x = coordinate.x - this.rect.w / 2;
      this.rect.y = coordinate.y - this.rect.h / 2;
    }
  }

  public onMouseDown(button: MOUSE_BUTTON, coordinate: ICoordinates): void {
    if (this.draggable && pointInRect(coordinate, this.rect)) {
      this.active = true;
    }
  }

  public onMouseUp(button: MOUSE_BUTTON, coordinate: ICoordinates): void {
    if (this.draggable && pointInRect(coordinate, this.rect)) {
      this.active = false;
    }
  }

  public onDoubleClick(coordinate: ICoordinates): void {} // eslint-disable-line

  protected context!: CanvasRenderingContext2D;

  protected rect: IRect;
  protected draggable: boolean;
  protected debug: boolean;

  private active: boolean;
}
