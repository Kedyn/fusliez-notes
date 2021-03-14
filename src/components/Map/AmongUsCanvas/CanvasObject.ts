/**
 * Base class for all objects in the canvas.
 *
 * @export
 * @abstract
 * @class CanvasObject
 */
export default abstract class CanvasObject {
  /**
   * Creates an instance of CanvasObject.
   * @param {boolean} [debug=false] State of debugging.
   * @memberof CanvasObject
   */
  public constructor(debug = false) {
    this.debug = debug;
  }

  /**
   * Changes the debug state of the object.
   *
   * @param {boolean} state The new debug state of the object.
   * @memberof CanvasObject
   */
  public setDebug(state: boolean): void {
    this.debug = state;
  }

  /**
   * Sets the canvas 2d context where the object will be drawn.
   *
   * @param {CanvasRenderingContext2D} context The canvas context where the object will be drawn.
   * @memberof CanvasObject
   */
  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;
  }

  /**
   * Updates the object.
   *
   * @abstract
   * @param {number} step Time since our last frame.
   * @memberof CanvasObject
   */
  public abstract update(step: number): void;

  /**
   * Renders our object.
   *
   * @abstract
   * @memberof CanvasObject
   */
  public abstract render(): void;

  protected debug: boolean;
  protected context!: CanvasRenderingContext2D;
}
