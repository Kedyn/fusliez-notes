import Config from "./Config";
import Layer from "./Layer";

export default abstract class Scene {
  public constructor() {
    this.layers = [];
  }

  public abstract onEnter(): void;
  public abstract onExit(): void;

  public abstract updateText(): void;

  public update(step: number): void {
    for (let i = this.layers.length - 1; i >= 0; i--) {
      this.layers[i].update(step);
    }
  }

  public render(): void {
    const context = Config.getContext();

    const width = context.canvas.width;
    const height = context.canvas.height;

    context.clearRect(0, 0, width, height);

    const offset = Config.getOffset();
    const scale = Config.getScale();

    context.save();

    context.translate(-offset.x, -offset.y);
    context.scale(scale.x, scale.y);

    for (const layer of this.layers) {
      layer.render();
    }

    context.restore();
  }

  protected layers: Array<Layer>;
}
