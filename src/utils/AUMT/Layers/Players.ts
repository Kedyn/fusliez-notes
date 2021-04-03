import { IPlayerColor } from "utils/types/players";
import Layer from "../Layer";
import Player from "../Entities/Player";
import Vector from "utils/math/Vector";

export default class Players extends Layer {
  public addPlayer(color: IPlayerColor, position: Vector): void {
    this.entities.push(new Player(color, position));
  }

  public clear(): void {
    this.entities = [];
  }
}
