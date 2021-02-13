import { ICoordinates, IRect } from "utils/types/shared";
import { getSections, setSections } from "store/slices/SectionsSlice";

import Entity from "./Entity";
import { IPlayer } from "utils/types/players";
import { pointInRect } from "utils/math";
import { setPlayerSection } from "store/slices/PlayersSlice";
import store from "store";

export default class Player extends Entity {
  public constructor(
    data: IPlayer,
    sections: Array<number>,
    image: HTMLImageElement,
    aliveRect: IRect,
    deadRect: IRect,
    debug = false
  ) {
    super({ ...aliveRect }, true, debug);

    this.aliveRect = aliveRect;
    this.deadRect = deadRect;

    this.updatePlayer(data, sections);

    this.image = image;

    this.rect.x = data.position.x;
    this.rect.y = data.position.y;
  }

  public updatePlayer(data: IPlayer, sections: Array<number>): void {
    this.data = data;

    this.resetSectionId = sections[0];
    this.deadSectionId = sections[1];
    this.unusedSectionId = sections[2];

    this.draggable = true;

    if (data.section === this.deadSectionId) {
      this.imageRect = this.deadRect;
    } else {
      this.imageRect = this.aliveRect;

      if (data.section === this.unusedSectionId) {
        this.draggable = false;
      }
    }

    this.rect.w = this.imageRect.w;
    this.rect.h = this.imageRect.h;
  }

  public render(): void {
    super.render();

    if (this.data.section !== this.unusedSectionId) {
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

  public onDoubleClick(coordinate: ICoordinates): void {
    if (
      pointInRect(coordinate, this.rect) &&
      this.data.section !== this.unusedSectionId
    ) {
      const sections = getSections(store.getState());

      let newSection = this.resetSectionId;

      if (this.data.section === this.deadSectionId) {
        store.dispatch(
          setSections(
            sections.map((section) => ({
              ...section,
              players:
                section.id === this.deadSectionId
                  ? [
                      ...section.players.filter(
                        (player) => player.id !== this.data.color
                      ),
                    ]
                  : section.id === this.resetSectionId
                  ? [
                      ...section.players,
                      {
                        id: this.data.color as string,
                      },
                    ]
                  : [...section.players],
            }))
          )
        );
      } else {
        store.dispatch(
          setSections(
            sections.map((section) => ({
              ...section,
              players:
                section.id !== this.deadSectionId
                  ? [
                      ...section.players.filter(
                        (player) => player.id !== this.data.color
                      ),
                    ]
                  : [
                      ...section.players,
                      {
                        id: this.data.color as string,
                      },
                    ],
            }))
          )
        );

        newSection = this.deadSectionId;
      }

      store.dispatch(setPlayerSection({ player: this.data.color, newSection }));
    }
  }

  private data!: IPlayer;

  private resetSectionId!: number;
  private deadSectionId!: number;
  private unusedSectionId!: number;

  private image: HTMLImageElement;
  private imageRect!: IRect;

  private aliveRect: IRect;
  private deadRect: IRect;
}
