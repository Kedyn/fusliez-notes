import {
  getDeadSectionId,
  getResetSectionId,
  getSections,
  setSections,
} from "store/slices/SectionsSlice";
import { getPlayer, setPlayerSection } from "store/slices/PlayersSlice";

import Config from "../Config";
import Entity from "../Entity";
import { IPlayerColor } from "utils/types/players";
import InputHandler from "../InputHandler";
import Rectangle from "utils/math/Rectangle";
import Sprite from "./Sprite";
import TextLine from "./TextLine";
import Vector from "utils/math/Vector";
import { players } from "./../../../__tests__/default";
import store from "store";

export default class Player extends Entity {
  public color: IPlayerColor;
  public image: Sprite;
  public position: Vector;
  public name: TextLine;

  public constructor(color: IPlayerColor, position: Vector) {
    super(true, true);

    const image = Config.getPlayers().get(color);
    const name = Config.getPlayersNames().get(color);

    this.color = color;

    if (image !== undefined && name !== undefined) {
      this.image = image;

      this.position = new Vector(0, 0);

      this.name = new TextLine(name, new Vector(0, 0), true, 120);

      const imgRect = image.getSourceRect();

      const x = position.x - imgRect.getWidth() / 2;
      const y = position.y - imgRect.getHeight() / 2;

      this.setPosition(new Vector(x, y));
    } else {
      throw new Error(`${color} has no image or name.`);
    }
  }

  public setPosition(position: Vector): void {
    this.position = position;

    this.name.setPosition(
      new Vector(
        position.x +
          (this.image.getRect().getWidth() - this.name.getRect().getWidth()) /
            2,
        position.y - 120
      )
    );
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

  public update(step: number): void {
    if (this.image.getVisible()) {
      super.update(step);

      this.name.setText(Config.getPlayersNames().get(this.color));

      const position = Config.screenToWorld(InputHandler.getMousePosition());

      if (InputHandler.getDoubleClicked() && this.isPointInRect(position)) {
        const state = store.getState();
        const player = getPlayer(this.color)(state);
        const resetSectionId = getResetSectionId(state);
        const deadSectionId = getDeadSectionId(state);
        const sections = getSections(store.getState());

        let newSection = resetSectionId;

        if (player.section === deadSectionId) {
          store.dispatch(
            setSections(
              sections.map((section) => ({
                ...section,
                players:
                  section.id === deadSectionId
                    ? [
                        ...section.players.filter(
                          (sectionPlayer) => sectionPlayer.id !== player.color
                        ),
                      ]
                    : section.id === resetSectionId
                    ? [
                        ...section.players,
                        {
                          id: player.color as string,
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
                  section.id !== deadSectionId
                    ? [
                        ...section.players.filter(
                          (sectionPlayer) => sectionPlayer.id !== player.color
                        ),
                      ]
                    : [
                        ...section.players,
                        {
                          id: player.color as string,
                        },
                      ],
              }))
            )
          );

          newSection = deadSectionId;
        }

        store.dispatch(setPlayerSection({ player: player.color, newSection }));

        InputHandler.stopPropagation();
      }
    }
  }

  public render(): void {
    this.image.setPosition(this.position);

    this.image.render();

    this.name.render();
  }
}
