import Config from "../Config";
import Entity from "../Entity";
import { IPlayerColor } from "utils/types/players";
import Rectangle from "utils/math/Rectangle";
import Sprite from "./Sprite";
import Vector from "utils/math/Vector";

export default class Player extends Entity {
  public constructor(
    color: IPlayerColor,
    rect?: Rectangle,
    draggable?: boolean
  ) {
    super(true, draggable);

    const image = Config.getPlayers().get(color);

    this.color = color;

    if (image !== undefined) {
      this.image = image;

      if (rect === undefined) {
        const imgRect = image.getSourceRect();

        this.rect = new Rectangle(
          new Vector(),
          imgRect.getWidth(),
          imgRect.getHeight()
        );
      } else {
        this.rect = rect;
      }
    } else {
      throw new Error(`${color} has no image.`);
    }
  }

  public setPosition(position: Vector): void {
    this.rect.setPosition(position);
  }

  public getRect(): Rectangle {
    return this.rect;
  }

  public getColor(): IPlayerColor {
    return this.color;
  }

  public isPointInRect(point: Vector): boolean {
    return this.visible && this.rect.isPointInside(point);
  }

  public render(): void {
    const originalRect = this.image.getRect();

    this.image.setDestinationRect(this.rect);

    this.image.render();

    this.image.setDestinationRect(originalRect);
  }

  public color: IPlayerColor;
  public image: Sprite;
  public rect: Rectangle;
}
