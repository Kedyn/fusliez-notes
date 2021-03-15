import CanvasObject from "./CanvasObject";

/**
 * Base class for all layers on the canvas.
 * It contains a group of `CanvasObjects`.
 *
 * @export
 * @class Layer
 * @extends {CanvasObject}
 */
export default class Layer {
  /**
   * Creates an instance of Layer.
   *
   * @memberof Layer
   */
  public constructor() {
    this.canvasObjects = [];
  }

  /**
   * Updates the layer.
   *
   * @param {number} step
   * @memberof Layer
   */
  public update(step: number): void {
    for (let i = this.canvasObjects.length - 1; i >= 0; i--) {
      this.canvasObjects[i].update(step);
    }
  }

  /**
   * Renders the object.
   *
   * @memberof Layer
   */
  public render(): void {
    for (const canvasObject of this.canvasObjects) {
      canvasObject.render();
    }
  }

  protected canvasObjects: Array<CanvasObject>;
}
