import Config from "../Config";
import Entity from "../Entity";
import { IPlayerColor } from "utils/types/players";
import Rectangle from "utils/math/Rectangle";
import Sprite from "./Sprite";
import Vector from "utils/math/Vector";

export default class Player extends Entity {
  public constructor(color: IPlayerColor, position: Vector) {
    super(true, true);

    const image = Config.getPlayers().get(color);

    this.color = color;

    if (image !== undefined) {
      this.image = image;

      const imgRect = image.getSourceRect();

      this.position = new Vector(
        position.x - imgRect.getWidth() / 2,
        position.y - imgRect.getHeight() / 2
      );
    } else {
      throw new Error(`${color} has no image.`);
    }
  }

  public setPosition(position: Vector): void {
    this.position = position;
  }

  public getRect(): Rectangle {
    return this.image.getRect();
  }

  public getColor(): IPlayerColor {
    return this.color;
  }

  public isPointInRect(point: Vector): boolean {
    return this.visible && this.image.getRect().isPointInside(point);
  }

  public render(): void {
    this.image.setPosition(this.position);

    this.image.render();
  }

  public color: IPlayerColor;
  public image: Sprite;
  public position: Vector;
}
