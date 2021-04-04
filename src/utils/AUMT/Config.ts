import {
  getDeadSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";

import { IPlayerColor } from "utils/types/players";
import { IStoreState } from "utils/types/store";
import { ITheme } from "utils/types/theme";
import { PLAYER_IMAGE } from "constants/players";
import Rectangle from "utils/math/Rectangle";
import Sprite from "./Entities/Sprite";
import Vector from "utils/math/Vector";
import { getPlayers } from "store/slices/PlayersSlice";
import store from "store";

class Config {
  public static GetInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }

    return Config.instance;
  }

  public setDebug(state: boolean): void {
    this.debug = state;
  }

  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;
  }

  public setTheme(theme: ITheme): void {
    this.theme = theme;
  }

  public setImages(images: Array<string>): void {
    for (let i = 0; i < images.length; i += 2) {
      const img = new Image();

      this.images.set(images[i], img);

      img.src = images[i + 1];

      img.onload = () => {
        this.loaded++;
      };
    }
  }

  public setOffset(x: number, y: number): void {
    this.offset.set(x, y);
  }

  public setScale(x: number, y: number): void {
    this.scale.set(x, y);
  }

  public getDebug(): boolean {
    return this.debug;
  }

  public getContext(): CanvasRenderingContext2D {
    return this.context;
  }

  public getImages(): Readonly<Map<string, HTMLImageElement>> {
    return this.images;
  }

  public getTheme(): Readonly<ITheme> {
    return this.theme;
  }

  public getOffset(): Vector {
    return this.offset;
  }

  public getScale(): Vector {
    return this.scale;
  }

  public getPlayers(): Map<IPlayerColor, Sprite> {
    return this.players;
  }

  // FOR TESTING ONLY
  public setLoaded(): void {
    this.loaded = this.images.size;
  }

  public isLoaded(): boolean {
    return this.loaded === this.images.size;
  }

  public screenToWorld(screenPoint: Vector): Vector {
    const point = Vector.add(screenPoint, this.offset);

    point.x /= this.scale.x;
    point.y /= this.scale.y;

    return point;
  }

  public updatePlayers(): void {
    /*
     NOTE: Might want to switch this to the scene manager and update players by
           scene player layer instead of this, it will solve the dstRect issue.
    */

    const state: IStoreState = store.getState();
    const players = getPlayers(state);
    const deadSectionId = getDeadSectionId(state);
    const unusedSectionId = getUnusedSectionId(state);

    for (const player of Object.keys(players)) {
      const data = players[player as IPlayerColor];

      let srcRect = PLAYER_IMAGE[player as IPlayerColor].alive;
      let visible = true;
      let draggable = true;

      if (data.section === deadSectionId) {
        srcRect = PLAYER_IMAGE[player as IPlayerColor].dead;
      } else if (data.section === unusedSectionId) {
        visible = false;
        draggable = false;
      }

      const rect = new Rectangle(
        new Vector(srcRect.x, srcRect.y),
        srcRect.w,
        srcRect.h
      );

      const sprite = this.players.get(player as IPlayerColor);

      if (sprite !== undefined) {
        const oldDstRect = sprite.getRect();
        const oldSrcRect = sprite.getSourceRect();

        if (
          oldDstRect.getWidth() === oldSrcRect.getWidth() &&
          oldDstRect.getHeight() === oldSrcRect.getHeight()
        ) {
          sprite.setDestinationRect(
            new Rectangle(
              oldDstRect.getPosition(),
              rect.getWidth(),
              rect.getHeight()
            )
          );
        }

        sprite.setSourceRect(rect);

        sprite.setVisible(visible);
        sprite.setDraggable(draggable);
      } else {
        this.players.set(
          player as IPlayerColor,
          new Sprite("Players", rect, rect, undefined, visible, draggable)
        );
      }
    }
  }

  private static instance: Config;

  private debug: boolean;
  private context!: CanvasRenderingContext2D;
  private theme!: ITheme;
  private images: Map<string, HTMLImageElement>;
  private loaded: number;
  private offset: Vector;
  private scale: Vector;
  private players: Map<IPlayerColor, Sprite>;

  private constructor() {
    this.debug = false;

    this.images = new Map<string, HTMLImageElement>();

    this.loaded = 0;

    this.offset = new Vector();
    this.scale = new Vector(1, 1);

    this.players = new Map<IPlayerColor, Sprite>();
  }
}

const ConfigInstance: Config = Config.GetInstance();

export default ConfigInstance;
