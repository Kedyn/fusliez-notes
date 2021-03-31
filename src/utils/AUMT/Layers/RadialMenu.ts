import { COLOR_LIBRARY } from "constants/theme";
import Config from "../Config";
import { IPlayerColor } from "utils/types/players";
import InputHandler from "../InputHandler";
import Layer from "../Layer";
import Vector from "utils/math/Vector";
import { getPlayers } from "store/slices/PlayersSlice";
import { getUnusedSectionId } from "store/slices/SectionsSlice";
import store from "store";

export default class RadialMenu extends Layer {
  public constructor(visible = false) {
    super(visible);

    this.center = new Vector();

    this.colors = [
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
  }

  public openMenu(): void {
    this.center.set(InputHandler.getMousePosition());

    /*
      TODO - Split logic so that is only called when players are updated
             might want to use SceneManager for this.
    */

    const state = store.getState();
    const players = getPlayers(state);
    const unusedSectionId = getUnusedSectionId(state);

    this.colors = [
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

    this.colors = this.colors.filter(
      (color) => players[color].section !== unusedSectionId
    );

    this.visible = true;
  }

  public getCenter(): Vector {
    return this.center;
  }

  // Modified from: https://www.eecs.umich.edu/courses/eecs380/HANDOUTS/PROJ2/InsidePoly.html
  public pointInPolygon(polygon: Array<Vector>, point: Vector): boolean {
    const N = polygon.length;

    let counter = 0;
    let xinters = 0;
    let p1 = polygon[0];
    let p2 = polygon[0];

    for (let i = 1; i <= N; i++) {
      p2 = polygon[i % N];

      if (point.y > Math.min(p1.y, p2.y)) {
        if (point.y <= Math.max(p1.y, p2.y)) {
          if (point.x <= Math.max(p1.x, p2.x)) {
            if (p1.y !== p2.y) {
              xinters =
                ((point.y - p1.y) * (p2.x - p1.x)) / (p2.y - p1.y) + p1.x;
              if (p1.x === p2.x || point.x <= xinters) {
                counter++;
              }
            }
          }
        }
      }

      p1 = p2;
    }

    return !(counter % 2 === 0);
  }

  public getColorFromPosition(position: Vector): IPlayerColor | null {
    const size = (2 * Math.PI) / this.colors.length;

    let currentAngle = 0;

    for (const color of this.colors) {
      const p1 = new Vector(
        this.center.x + 40 * Math.sin(currentAngle),
        this.center.y + 40 * Math.cos(currentAngle)
      );
      const p2 = new Vector(
        this.center.x + 100 * Math.sin(currentAngle),
        this.center.y + 100 * Math.cos(currentAngle)
      );
      const p3 = new Vector(
        this.center.x + 100 * Math.sin(currentAngle + size),
        this.center.y + 100 * Math.cos(currentAngle + size)
      );
      const p4 = new Vector(
        this.center.x + 40 * Math.sin(currentAngle + size),
        this.center.y + 40 * Math.cos(currentAngle + size)
      );

      if (this.pointInPolygon([p1, p2, p3, p4], position)) {
        return color;
      }

      currentAngle += size;
    }

    return null;
  }

  public render(): void {
    if (this.visible) {
      const context = Config.getContext();

      const size = (2 * Math.PI) / this.colors.length;

      let currentAngle = 0;

      context.save();
      context.lineWidth = 1;

      for (const color of this.colors) {
        context.fillStyle = COLOR_LIBRARY[color].base;

        context.beginPath();
        context.moveTo(
          this.center.x + 40 * Math.sin(currentAngle),
          this.center.y + 40 * Math.cos(currentAngle)
        );
        context.lineTo(
          this.center.x + 100 * Math.sin(currentAngle),
          this.center.y + 100 * Math.cos(currentAngle)
        );
        context.lineTo(
          this.center.x + 100 * Math.sin(currentAngle + size),
          this.center.y + 100 * Math.cos(currentAngle + size)
        );
        context.lineTo(
          this.center.x + 40 * Math.sin(currentAngle + size),
          this.center.y + 40 * Math.cos(currentAngle + size)
        );
        context.closePath();

        context.fill();

        currentAngle += size;
      }

      context.restore();
    }
  }

  private center: Vector;
  private colors: Array<IPlayerColor>;
}
