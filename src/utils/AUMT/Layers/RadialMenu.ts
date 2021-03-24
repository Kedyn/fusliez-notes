import { IPlayerColor } from "utils/types/players";
import InputHandler from "../InputHandler";
import Layer from "../Layer";
import Player from "../Entities/Player";
import Rectangle from "utils/math/Rectangle";
import Vector from "utils/math/Vector";

export default class RadialMenu extends Layer {
  public constructor(visible = false) {
    super(visible);

    this.center = new Vector();
  }

  public openMenu(): void {
    if (this.entities.length === 0) {
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

      for (const color of colors) {
        this.entities.push(
          new Player(color, new Rectangle(new Vector(), 20, 40))
        );
      }
    }

    const center = InputHandler.getMousePosition();
    const size = 30;

    let currentAngle = 0;

    for (const entity of this.entities) {
      const position = new Vector();

      position.x =
        center.x +
        80 * Math.sin(Math.PI - (Math.PI / 2 - currentAngle + size)) -
        10;
      position.y =
        center.y +
        80 * Math.cos(Math.PI - (Math.PI / 2 - currentAngle + size)) -
        20;

      entity.setPosition(position);

      currentAngle += size;
    }

    this.center.set(center);
  }

  public getCenter(): Vector {
    return this.center;
  }

  public render(): void {
    super.render();
  }

  private center: Vector;
}
