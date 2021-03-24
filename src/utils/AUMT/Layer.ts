import Entity from "./Entity";

/**
 * Base class for all layers on the canvas.
 * It contains a group of `CanvasObjects`.
 *
 * @export
 * @class Layer
 * @extends {CanvasObject}
 */
export default class Layer {
  public entities: Array<Entity>;

  /**
   * Creates an instance of Layer.
   *
   * @memberof Layer
   */
  public constructor(visible = true) {
    this.entities = [];

    this.visible = visible;
  }

  /**
   * Sets the visibility state of the layer.
   *
   * @param {boolean} state `true` for visible, `false` otherwise.
   * @memberof Layer
   */
  public setVisible(state: boolean): void {
    this.visible = state;
  }

  /**
   * Returns the visibility state of the layer.
   *
   * @return {*}  {boolean} Returns `true` for visible, `false` otherwise.
   * @memberof Layer
   */
  public getVisible(): boolean {
    return this.visible;
  }

  /**
   * Updates the layer.
   *
   * @param {number} step
   * @memberof Layer
   */
  public update(step: number): void {
    for (let i = this.entities.length - 1; i >= 0; i--) {
      this.entities[i].update(step);
    }
  }

  /**
   * Renders the object.
   *
   * @memberof Layer
   */
  public render(): void {
    if (this.visible) {
      for (const entity of this.entities) {
        entity.render();
      }
    }
  }

  protected visible: boolean;
}
