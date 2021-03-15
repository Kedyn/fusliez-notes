/**
 * Base class for all objects in the canvas.
 *
 * @export
 * @abstract
 * @class CanvasObject
 */
export default abstract class CanvasObject {
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
}
