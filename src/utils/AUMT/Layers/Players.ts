import { IPlayerColor } from "utils/types/players";
import Layer from "../Layer";
import Player from "../Entities/Player";
import Vector from "utils/math/Vector";
import { getInitMapWithAllPlayers } from "store/slices/SettingsSlice";
import store from "store";

export default class Players extends Layer {
  public constructor(height: number, visible?: boolean) {
    super(visible);

    this.addInitialPlayers(height);
  }

  public addPlayer(color: IPlayerColor, position: Vector): void {
    this.entities.push(new Player(color, position));
  }

  public clear(height: number): void {
    this.entities = [];

    this.addInitialPlayers(height);
  }

  private addInitialPlayers(height: number): void {
    const state = store.getState();

    if (getInitMapWithAllPlayers(state)) {
      const colors: Array<IPlayerColor> = [
        "black",
        "blue",
        "brown",
        "cyan",
        "green",
        "lime",
        "orange",
        "pink",
        "purple",
        "red",
        "white",
        "yellow",
      ];

      let x = 0;
      for (const color of colors) {
        this.addPlayer(color, new Vector(0, 0));

        const imgRect = this.entities[this.entities.length - 1].getRect();

        this.entities[this.entities.length - 1].setPosition(
          new Vector(x, height - imgRect.getHeight() - 10)
        );

        x += imgRect.getWidth() * 2;
      }
    }
  }
}
