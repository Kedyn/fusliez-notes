import { ICoordinates, IRect } from "utils/types/shared";

import Entity from "./Entity";
import { IPlayerState } from "utils/types/players";

export default class Player extends Entity {
  public constructor(
    position: ICoordinates,
    image: HTMLImageElement,
    aliveRect: IRect,
    deadRect: IRect,
    state: IPlayerState,
    debug = false
  ) {
    super({ ...aliveRect }, true, debug);

    this.image = image;

    this.aliveRect = aliveRect;
    this.deadRect = deadRect;

    this.state = state;

    if (state === "dead") {
      this.imageRect = deadRect;
    } else {
      this.imageRect = aliveRect;

      if (state === "hidden") {
        this.draggable = false;
      }
    }

    this.rect.x = position.x;
    this.rect.y = position.y;
    this.rect.w = this.imageRect.w * 0.4;
    this.rect.h = this.imageRect.h * 0.4;
  }

  public setState(state: IPlayerState): void {
    this.state = state;

    if (state === "dead") {
      this.imageRect = this.deadRect;
    } else {
      this.imageRect = this.aliveRect;

      if (state === "hidden") {
        this.draggable = false;
      }
    }
  }

  public update(): void {
    // no code here
  }

  public render(): void {
    super.render();

    if (this.state !== "hidden") {
      this.context.save();
      if (this.isActive()) {
        this.context.shadowBlur = 15;
        this.context.shadowColor = "#C2D2E3";
      }

      this.context.drawImage(
        this.image,
        this.imageRect.x,
        this.imageRect.y,
        this.imageRect.w,
        this.imageRect.h,
        this.rect.x,
        this.rect.y,
        this.rect.w,
        this.rect.h
      );

      this.context.restore();
    }
  }

  private image: HTMLImageElement;
  private imageRect: IRect;

  private aliveRect: IRect;
  private deadRect: IRect;

  private state: IPlayerState;
}
