import Config from "../Config";
import { IMapName } from "utils/types/maps";
import InputHandler from "../InputHandler";
import Layer from "../Layer";
import { MAPS_ICON } from "constants/maps";
import Rectangle from "utils/math/Rectangle";
import Scene from "../Scene";
import SceneManager from "../SceneManager";
import Sprite from "../Entities/Sprite";
import Vector from "utils/math/Vector";

export default class Map extends Scene {
  public constructor(name: IMapName, scale: number) {
    super();

    this.panning = false;
    this.panningPosition = new Vector();

    const bg = new Layer();

    bg.entities.push(
      new Sprite(name, undefined, undefined, new Vector(scale, scale))
    );

    this.layers.push(bg);

    this.offset = new Vector(0, 0);
    this.scale = new Vector(0, 0);

    this.hub = new Layer();

    this.hub.entities.push(
      new Sprite(
        "Logos",
        new Rectangle(
          new Vector(MAPS_ICON.x, MAPS_ICON.y),
          MAPS_ICON.w,
          MAPS_ICON.h
        ),
        new Rectangle(
          new Vector(1900 - MAPS_ICON.w, 20),
          MAPS_ICON.w,
          MAPS_ICON.h
        )
      )
    );

    const context = Config.getContext();

    const width = context.canvas.width;
    const height = context.canvas.height;
    const img = Config.getImages().get(name);

    if (img != undefined) {
      this.scale.x = width / (img.width * scale);
      this.scale.y = height / (img.height * scale);
    }
  }

  public onEnter(): void {
    Config.setOffset(this.offset.x, this.offset.y);
    Config.setScale(this.scale.x, this.scale.y);
  }

  public onExit(): void {
    this.offset.set(Config.getOffset());
    this.scale.set(Config.getScale());
  }

  public update(step: number): void {
    const mousePosition = InputHandler.getMousePosition();

    // TODO - Add RadialMenuLogic

    if (this.panning && InputHandler.getMouseButtons().LEFT) {
      Config.getOffset().subtract(
        Vector.subtract(mousePosition, this.panningPosition)
      );

      this.panningPosition.set(mousePosition);

      InputHandler.stopPropagation();
    }

    super.update(step);

    if (InputHandler.getMouseButtons().LEFT) {
      if (this.hub.entities[0].getRect().isPointInside(mousePosition)) {
        SceneManager.changeScene("Menu");

        InputHandler.stopPropagation();
      } else {
        this.panning = true;

        this.panningPosition.set(mousePosition);
      }
    } else {
      this.panning = false;
    }

    const wheel = InputHandler.getWheel();

    if (wheel) {
      const beforeZoom = Config.screenToWorld(mousePosition);

      if (wheel > 0) {
        Config.getScale().x *= 0.9;
        Config.getScale().y *= 0.9;
      } else if (wheel < 0) {
        Config.getScale().x *= 1.1;
        Config.getScale().y *= 1.1;
      }

      const afterZoom = Config.screenToWorld(mousePosition);

      beforeZoom.subtract(afterZoom);

      beforeZoom.x *= Config.getScale().x;
      beforeZoom.y *= Config.getScale().y;

      Config.getOffset().add(beforeZoom);
    }

    if (InputHandler.getKeys()["M"]) {
      SceneManager.changeScene("Menu");
    }

    InputHandler.restoreState();
  }

  public render(): void {
    super.render();

    this.hub.render();
  }

  protected panning: boolean;
  protected panningPosition: Vector;
  protected offset: Vector;
  protected scale: Vector;
  protected hub: Layer;
}
