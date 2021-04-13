/* The following is a base class, therefore some vars might not be used here */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Config from "./Config";
import InputHandler from "./InputHandler";
import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

/**
 * Base class for all entities in the AUMT.
 *
 * @export
 * @abstract
 * @class Entity
 */
export default abstract class Entity {
  /**
   * Creates an instance of Entity.
   *
   * @param {boolean} [visible=true] `true` if the object should be render, `false` otherwise.
   * @param {boolean} [draggable=false] `true if the object can be moved using the mouse, `false` otherwise.
   * @memberof Entity
   */
  public constructor(visible = true, draggable = false) {
    this.visible = visible;
    this.draggable = draggable;
    this.active = false;
  }

  /**
   * Changes the visibility state of the Entity.
   *
   * @param {boolean} state `true` if the object should be render, `false` otherwise.
   * @memberof Entity
   */
  public setVisible(state: boolean): void {
    this.visible = state;
  }

  /**
   * Changes the draggability state of the Entity.
   *
   * @param {boolean} state `true` if the object should be draggable, `false` otherwise.
   * @memberof Entity
   */
  public setDraggable(state: boolean): void {
    this.draggable = state;
  }

  /**
   * Sets the position of the Entity.
   *
   * @abstract
   * @param {Vector} position The new position of the Entity.
   * @memberof Entity
   */
  public abstract setPosition(position: Vector): void;

  /**
   * Returns the visibility state of the Entity.
   *
   * @return {*}  {boolean} `true` if is visible, `false` otherwise.
   * @memberof Entity
   */
  public getVisible(): boolean {
    return this.visible;
  }

  /**
   * Returns the draggability state of the CanvasObect.
   *
   * @return {*}  {boolean} `true` if draggable, `false` otherwise.
   * @memberof Entity
   */
  public getDraggable(): boolean {
    return this.draggable;
  }

  /**
   * Returns the active/focus state of the Entity.
   *
   * @return {*}  {boolean}
   * @memberof Entity
   */
  public getActive(): boolean {
    return this.active;
  }

  /**
   * Returns the rectangle of the Entity.
   *
   * @abstract
   * @return {*}  {Rectangle} The rectangle of the Entity.
   * @memberof Entity
   */
  public abstract getRect(): Rectangle;

  /**
   * Updates the object.
   *
   * @param {number} step Time since our last frame.
   * @memberof Entity
   */
  public update(step: number): void {
    const position = Config.screenToWorld(InputHandler.getMousePosition());
    const mouseDown = InputHandler.getMouseButtons().LEFT;

    if (this.active) {
      if (mouseDown) {
        const rect = this.getRect();

        this.setPosition(
          new Vector(
            position.x - rect.getWidth() / 2,
            position.y - rect.getHeight() / 2
          )
        );

        InputHandler.stopPropagation();
      } else {
        this.active = false;
      }
    }

    if (this.visible && this.draggable && mouseDown) {
      if (this.getRect().isPointInside(position)) {
        this.active = true;

        InputHandler.stopPropagation();
      }
    }
  }

  /**
   * Renders our object.
   *
   * @abstract
   * @memberof Entity
   */
  public abstract render(): void;

  protected visible: boolean;
  protected draggable: boolean;
  protected active: boolean;
}
