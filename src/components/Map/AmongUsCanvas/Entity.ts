import { KEYCODE } from "constants/keycodes";
import { MOUSE_BUTTON } from "constants/mouse";
import { Rectangle } from "utils/math/Rectangle";
import { Vector } from "utils/math/Vector";

export default class Entity {
  public constructor(rect: Rectangle, draggable = false, debug = false) {
    this.rect = rect;
    this.draggable = draggable;
    this.debug = debug;

    this.active = false;
  }

  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;
  }

  public setDebug(state: boolean): void {
    this.debug = state;
  }

  public setPosition(position: Vector): void {
    this.rect.setPosition(position);
  }

  public getPosition(): Vector {
    return this.rect.getPosition();
  }

  public update(step: number): void {} // eslint-disable-line

  public render(): void {
    if (this.debug) {
      this.context.save();

      const position = `${Math.round(this.rect.getX())} - ${Math.round(
        this.rect.getY()
      )}`;

      const width = this.context.measureText(position).width;

      this.context.fillStyle = "red";
      this.context.fillText(
        position,
        this.rect.getX() + (this.rect.getWidth() - width) / 2,
        this.rect.getY() - 20
      );

      this.context.lineWidth = 1;
      this.context.strokeStyle = "red";
      this.context.strokeRect(
        this.rect.getX(),
        this.rect.getY(),
        this.rect.getWidth(),
        this.rect.getHeight()
      );
      this.context.restore();
    }
  }

  public isActive(): boolean {
    return this.active;
  }

  public onKeyDown(key: KEYCODE): void {} // eslint-disable-line

  public onKeyUp(key: KEYCODE): void {} // eslint-disable-line

  public onMouseMove(coordinate: Vector): void {
    if (this.active) {
      this.rect.setPosition(
        coordinate.x - this.rect.getWidth() / 2,
        coordinate.y - this.rect.getHeight() / 2
      );
    }
  }

  public onMouseDown(button: MOUSE_BUTTON, coordinate: Vector): void {
    if (this.draggable && this.rect.isPointInside(coordinate)) {
      this.active = true;
    }
  }

  public onMouseUp(button: MOUSE_BUTTON, coordinate: Vector): void {
    if (this.draggable && this.rect.isPointInside(coordinate)) {
      this.active = false;
    }
  }

  public onDoubleClick(coordinate: Vector): void {} // eslint-disable-line
  public getContext = (): CanvasRenderingContext2D => this.context;

  protected context!: CanvasRenderingContext2D;

  protected rect: Rectangle;
  protected draggable: boolean;
  protected debug: boolean;

  private active: boolean;
}
