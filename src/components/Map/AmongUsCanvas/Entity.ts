/* The following is disabled because this is a base class */
/* eslint-disable @typescript-eslint/no-unused-vars */

import CanvasObject from "./CanvasObject";
import { KEYCODE } from "constants/keycodes";
import { MOUSE_BUTTON } from "constants/mouse";
import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

/**
 * Base class for all entities on the canvas.
 *
 * @export
 * @abstract
 * @class Entity
 */
export default class Entity extends CanvasObject {
  /**
   * Creates an instance of Entity.
   * @param {Rectangle} rect The position and size of the entity.
   * @param {boolean} [debug=false] Shows a red rectangle when true.
   * @memberof Entity
   */
  public constructor(rect: Rectangle, debug = false) {
    super();
    this.rect = rect;
    this.debug = debug;
  }

  /**
   * Sets the canvas 2d context where the entity will be drawn.
   *
   * @param {CanvasRenderingContext2D} context The canvas context where `this` will be drawn.
   * @memberof Entity
   */
  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;
  }

  /**
   * Changes the debug state of the entity.
   *
   * @param {boolean} state The new debug state of `this`.
   * @memberof Entity
   */
  public setDebug(state: boolean): void {
    this.debug = state;
  }

  /**
   * Updates the entity.
   *
   * @abstract
   * @param {number} step Time since our last frame.
   * @memberof Entity
   */
  public update(step: number): void {
    // not all entities might need this
  }

  /**
   * Renders our entity.
   *
   * @abstract
   * @memberof Entity
   */
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

  /**
   * Listens to keys pressed.
   *
   * @param {KEYCODE} key The key being pressed.
   * @return {*}  {boolean} Return `true`, if the propagation of the event should stop, `false` otherwise.
   * @memberof Entity
   */
  public onKeyDown(key: KEYCODE): boolean {
    return false;
  }

  /**
   * Listens to keys unpressed.
   *
   * @param {KEYCODE} key The key being unpressed.
   * @return {*}  {boolean} Return `true`, if the propagation of the event should stop, `false` otherwise.
   * @memberof Entity
   */
  public onKeyUp(key: KEYCODE): boolean {
    return false;
  }

  /**
   * Listens to mouse movement.
   *
   * @param {Vector} coordinate The position of the mouse.
   * @return {*}  {boolean} Return `true`, if the propagation of the event should stop, `false` otherwise.
   * @memberof Entity
   */
  public onMouseMove(coordinate: Vector): boolean {
    return false;
  }

  /**
   * Listens to mouse being pressed.
   *
   * @param {MOUSE_BUTTON} button The button being pressed.
   * @param {Vector} coordinate The position of the mouse.
   * @return {*}  {boolean} Return `true`, if the propagation of the event should stop, `false` otherwise.
   * @memberof Entity
   */
  public onMouseDown(button: MOUSE_BUTTON, coordinate: Vector): boolean {
    return false;
  }

  /**
   * Listens to mouse being unpressed.
   *
   * @param {MOUSE_BUTTON} button The button being pressed.
   * @param {Vector} coordinate The position of the mouse.
   * @return {*}  {boolean} Return `true`, if the propagation of the event should stop, `false` otherwise.
   * @memberof Entity
   */
  public onMouseUp(button: MOUSE_BUTTON, coordinate: Vector): boolean {
    return false;
  }

  /**
   * Listens to mouse being double pressed.
   *
   * @param {Vector} coordinate
   * @return {*}  {boolean} Return `true`, if the propagation of the event should stop, `false` otherwise.
   * @memberof Entity
   */
  public onDoubleClick(coordinate: Vector): boolean {
    return false;
  }

  protected context!: CanvasRenderingContext2D;

  protected rect: Rectangle;
  protected debug: boolean;
}
