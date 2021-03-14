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
   * @param {boolean} [debug=false] State of debugging.
   * @memberof Layer
   */
  public constructor(debug = false) {
    this.canvasObjects = [];

    this.debug = debug;
  }

  /**
   * Changes the debug state of the layer.
   *
   * @param {boolean} state
   * @memberof Layer
   */
  public setDebug(state: boolean): void {
    this.debug = state;

    for (const canvasObject of this.canvasObjects) {
      canvasObject.setDebug(state);
    }
  }

  /**
   * Sets the context of the canvas, where all will be drawn to.
   *
   * @param {CanvasRenderingContext2D} context The context of the canvas.
   * @memberof Layer
   */
  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;

    for (const canvasObject of this.canvasObjects) {
      canvasObject.setContext(context);
    }
  }

  /**
   * Updates the layer.
   *
   * @param {number} step
   * @memberof Layer
   */
  public update(step: number): void {
    for (const canvasObject of this.canvasObjects) {
      canvasObject.update(step);
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

  protected context!: CanvasRenderingContext2D;
  protected canvasObjects: Array<CanvasObject>;
  protected debug: boolean;
}
