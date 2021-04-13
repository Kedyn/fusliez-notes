import Entity from "./Entity";
import TextLine from "utils/AUMT/Entities/TextLine";

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

    this.lastActive = null;
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

  public getEntities(): Array<Entity> {
    return this.entities;
  }

  public setEntities(entities: Array<TextLine>): void {
    this.entities = entities;
  }

  /**
   * Updates the layer.
   *
   * @param {number} step
   * @memberof Layer
   */
  public update(step: number): void {
    if (this.lastActive !== null) {
      this.lastActive.update(step);

      if (!this.lastActive.getActive()) {
        this.lastActive = null;
      }
    }

    for (let i = this.entities.length - 1; i >= 0; i--) {
      const entity = this.entities[i];

      if (entity !== this.lastActive) {
        entity.update(step);
      }

      if (entity.getActive()) {
        this.lastActive = entity;
      }
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

  private lastActive: Entity | null;
}
