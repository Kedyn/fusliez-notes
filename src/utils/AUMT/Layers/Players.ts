import { IPlayerColor } from "utils/types/players";
import Layer from "../Layer";
import Player from "../Entities/Player";
import Vector from "utils/math/Vector";

export default class Players extends Layer {
  public addPlayer(color: IPlayerColor, position: Vector): void {
    const player = new Player(color, undefined, true);
    const rect = player.getRect();
    const playerPosition = new Vector(position);

    playerPosition.x -= rect.getWidth() / 2;
    playerPosition.y -= rect.getHeight() / 2;

    player.setPosition(playerPosition);

    this.entities.push(player);
  }

  public clear(): void {
    this.entities = [];
  }
}
