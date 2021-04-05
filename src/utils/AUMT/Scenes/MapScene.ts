import Config from "../Config";
import { IMapName } from "utils/types/maps";
import InputHandler from "../InputHandler";
import Layer from "../Layer";
import { MAPS_ICON } from "constants/maps";
import Players from "../Layers/Players";
import RadialMenu from "../Layers/RadialMenu";
import Rectangle from "utils/math/Rectangle";
import Scene from "../Scene";
import SceneManager from "../SceneManager";
import Sprite from "../Entities/Sprite";
import TextLine from "../Entities/TextLine";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

export default class MapScene extends Scene {
  public constructor(name: IMapName, scale: number) {
    super();

    this.panning = false;
    this.panningPosition = new Vector();

    const images = Config.getImages();
    const bg = new Layer();

    bg.entities.push(
      new Sprite(name, undefined, undefined, new Vector(scale, scale))
    );

    if (images.has(name + "Cameras")) {
      bg.entities.push(
        new Sprite(
          name + "Cameras",
          undefined,
          undefined,
          new Vector(scale, scale)
        )
      );
    }

    if (images.has(name + "Sensors")) {
      bg.entities.push(
        new Sprite(
          name + "Sensors",
          undefined,
          undefined,
          new Vector(scale, scale)
        )
      );
    }

    if (images.has(name + "Vents")) {
      bg.entities.push(
        new Sprite(
          name + "Vents",
          undefined,
          undefined,
          new Vector(scale, scale)
        )
      );
    }

    this.layers.push(bg);

    this.offset = new Vector(0, 0);
    this.scale = new Vector(1, 1);

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
          new Vector(1900 - MAPS_ICON.w * 3, 20),
          MAPS_ICON.w * 3,
          MAPS_ICON.h * 3
        )
      )
    );

    this.texts = new Map<string, TextLine>();

    this.menu = new RadialMenu();
    this.players = new Players();

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

  public updateText(): void {
    this.texts.forEach((value, key) => value.setText(i18n.t(`maps.${key}`)));
  }

  public update(step: number): void {
    const mousePosition = InputHandler.getMousePosition();

    if (this.menu.getVisible()) {
      if (!InputHandler.getMouseButtons().RIGHT) {
        const color = this.menu.getColorFromPosition(mousePosition);

        if (color !== null) {
          this.players.addPlayer(
            color,
            Config.screenToWorld(this.menu.getCenter())
          );
        }

        this.menu.setVisible(false);
      }

      InputHandler.stopPropagation();
    }

    let panned = false;

    if (this.panning && InputHandler.getMouseButtons().LEFT) {
      Config.getOffset().subtract(
        Vector.subtract(mousePosition, this.panningPosition)
      );

      this.panningPosition.set(mousePosition);

      InputHandler.stopPropagation();

      panned = true;
    }

    super.update(step);

    if (InputHandler.getMouseButtons().LEFT) {
      if (this.hub.entities[0].getRect().isPointInside(mousePosition)) {
        SceneManager.changeScene("Menu");

        InputHandler.stopPropagation();
      } else if (!this.panning) {
        this.panning = true;

        this.panningPosition.set(mousePosition);
      }
    } else if (!panned && this.panning) {
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

    if (InputHandler.getMouseButtons().RIGHT) {
      this.menu.openMenu();
    }

    if (InputHandler.getDoubleClicked()) {
      this.players.clear();
    }

    const keys = InputHandler.getKeys();

    if (keys["M"] || keys["m"]) {
      SceneManager.changeScene("Menu");
    }

    if (keys["C"] || keys["c"]) {
      this.players.clear();
    }

    InputHandler.restoreState();
  }

  public render(): void {
    super.render();

    this.hub.render();

    this.menu.render();
  }

  protected panning: boolean;
  protected panningPosition: Vector;
  protected offset: Vector;
  protected scale: Vector;
  protected hub: Layer;
  protected texts: Map<string, TextLine>;
  protected menu: RadialMenu;
  protected players: Players;
}
