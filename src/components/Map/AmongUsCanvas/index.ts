import { IMap, IMapState } from "utils/types/maps";
import {
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  WheelEvent as ReactWheelEvent,
} from "react";
import {
  getDeadSectionId,
  getResetSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";

import Entity from "./Entity";
import { ICoordinates } from "utils/types/shared";
import { IPlayerColor } from "utils/types/players";
import { IStoreState } from "utils/types/store";
import { ITheme } from "utils/types/theme";
import { MOUSE_BUTTON } from "constants/mouse";
import { PLAYER_IMAGE } from "constants/players";
import Player from "./Player";
import { getPlayers } from "store/slices/PlayersSlice";
import store from "store";

class AmongUsCanvas {
  public static GetInstance(): AmongUsCanvas {
    if (!AmongUsCanvas.instance) {
      AmongUsCanvas.instance = new AmongUsCanvas();
    }
    return AmongUsCanvas.instance;
  }

  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;

    this.width = this.context.canvas.width;
    this.height = this.context.canvas.height;

    for (const entity in this.entities) {
      this.entities[entity].setContext(this.context);
    }
  }

  public setTheme(theme: ITheme): void {
    this.theme = theme;
  }

  public getAnimFrame(): number {
    return this.animFrame;
  }

  public setCurrentMap(map: IMap): void {
    switch (map) {
      case "Polus":
        this.currentMap.image = this.polus;

        break;
      case "TheSkeld":
        this.currentMap.image = this.theSkeld;
        break;
      default:
        this.currentMap.image = this.miraHQ;
        break;
    }

    this.currentMap.position.x = this.currentMap.image.width / 2;
    this.currentMap.position.y = this.currentMap.image.height / 2;
  }

  public onMouseMove(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    this.handleMouseMove(coo);
  }

  public onMouseDown(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    this.handleMouseDown(evt.button, coo);
  }

  public onMouseUp(evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>): void {
    evt.preventDefault();

    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    this.handleMouseUp(evt.button, coo);
  }

  public onMouseLeave(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    if (this.panning) {
      this.panning = false;
    } else {
      const rect = evt.currentTarget.getBoundingClientRect();
      const coo = {
        x: (evt.clientX - rect.left) * (this.width / rect.width),
        y: (evt.clientY - rect.top) * (this.height / rect.height),
      };

      const mapCoo = {
        x: coo.x + this.currentMap.position.x,
        y: coo.y + this.currentMap.position.y,
      };

      for (const entity in this.entities) {
        this.entities[entity].onMouseUp(evt.button, mapCoo);
      }
    }
  }

  public onDoubleClick(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    this.handleDoubleClick(coo);
  }

  public onTouchMove(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.touches[0].clientX - rect.left) * (this.width / rect.width),
      y: (evt.touches[0].clientY - rect.top) * (this.height / rect.height),
    };

    this.handleMouseMove(coo);

    this.touchCoordinates = coo;
  }

  public onTouchStart(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.touches[0].clientX - rect.left) * (this.width / rect.width),
      y: (evt.touches[0].clientY - rect.top) * (this.height / rect.height),
    };

    this.handleMouseDown(MOUSE_BUTTON.LEFT, coo);

    this.touchCoordinates = coo;
  }

  public onTouchEnd(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    const currentTime = new Date().getTime();
    const touchLength = currentTime - this.lastTouched;

    this.handleMouseUp(MOUSE_BUTTON.LEFT, this.touchCoordinates);

    if (touchLength < 500 && touchLength > 0) {
      this.handleDoubleClick(this.touchCoordinates);
    }

    this.lastTouched = currentTime;
  }

  public onTouchCancel(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    this.handleMouseUp(MOUSE_BUTTON.LEFT, this.touchCoordinates);
  }

  public onWheel(evt: ReactWheelEvent<HTMLCanvasElement>): void {
    // working on it
  }

  public updatePlayers(): void {
    const state: IStoreState = store.getState();
    const players = getPlayers(state);
    const resetSectionId = getResetSectionId(state);
    const deadSectionId = getDeadSectionId(state);
    const unusedSectionId = getUnusedSectionId(state);

    for (const player of Object.keys(players)) {
      const data = players[player as IPlayerColor];
      const entity: Player = this.entities[`${player}Player`] as Player;

      entity.updatePlayer(data, [
        resetSectionId,
        deadSectionId,
        unusedSectionId,
      ]);
    }
  }

  public init(): void {
    if (
      (this.context !== undefined || this.context !== null) &&
      (this.theme !== undefined || this.theme !== null)
    ) {
      this.loop(0);
    } else {
      throw new Error(
        "Context and theme must be set before initializing the animation."
      );
    }
  }

  private static instance: AmongUsCanvas;

  private animFrame: number;

  private context!: CanvasRenderingContext2D;

  private theme!: ITheme;

  private width: number;
  private height: number;

  private theSkeld: HTMLImageElement;
  private miraHQ: HTMLImageElement;
  private polus: HTMLImageElement;
  private players: HTMLImageElement;

  private loading: number;

  private currentMap: IMapState;

  private entities: { [key: string]: Entity };

  private lastTouched: number;
  private touchCoordinates: ICoordinates;

  private panning: boolean;
  private lastPanClick: ICoordinates;

  private constructor() {
    this.animFrame = 0;

    this.width = 0;
    this.height = 0;

    this.theSkeld = new Image();
    this.miraHQ = new Image();
    this.polus = new Image();

    this.players = new Image();

    this.loading = 0;

    this.theSkeld.src = "assets/images/TheSkeld.png";
    this.miraHQ.src = "assets/images/MiraHQ.png";
    this.polus.src = "assets/images/Polus.png";

    this.players.src = "assets/images/players.png";

    this.theSkeld.onload = () => {
      this.loading += 0.25;
    };

    this.miraHQ.onload = () => {
      this.loading += 0.25;
    };

    this.polus.onload = () => {
      this.loading += 0.25;
    };

    this.players.onload = () => {
      this.loading += 0.25;
    };

    this.currentMap = {
      position: { x: this.miraHQ.width / 2, y: this.miraHQ.height / 2 },
      image: this.miraHQ,
    };

    this.entities = {};

    const state: IStoreState = store.getState();
    const players = getPlayers(state);
    const resetSectionId = getResetSectionId(state);
    const deadSectionId = getDeadSectionId(state);
    const unusedSectionId = getUnusedSectionId(state);

    for (const player in players) {
      const data = players[player as IPlayerColor];
      const image = PLAYER_IMAGE[player as IPlayerColor];

      this.entities[`${player}Player`] = new Player(
        data,
        [resetSectionId, deadSectionId, unusedSectionId],
        this.players,
        image.alive,
        image.dead
      );
    }

    this.lastTouched = 0;
    this.touchCoordinates = { x: 0, y: 0 };

    this.panning = false;
    this.lastPanClick = { x: 0, y: 0 };
  }

  private handleMouseMove(coo: ICoordinates): void {
    const mapCoo = {
      x: coo.x + this.currentMap.position.x,
      y: coo.y + this.currentMap.position.y,
    };

    if (this.panning) {
      this.currentMap.position.x += this.lastPanClick.x - coo.x;
      this.currentMap.position.y += this.lastPanClick.y - coo.y;

      this.currentMap.position.x = Math.max(
        Math.min(
          this.currentMap.image.width - this.width,
          this.currentMap.position.x
        ),
        0
      );

      this.currentMap.position.y = Math.max(
        Math.min(
          this.currentMap.image.height - this.height,
          this.currentMap.position.y
        ),
        0
      );

      this.lastPanClick = coo;
    } else {
      for (const entity in this.entities) {
        this.entities[entity].onMouseMove(mapCoo);
      }
    }
  }

  private handleMouseDown(button: MOUSE_BUTTON, coo: ICoordinates): void {
    const mapCoo = {
      x: coo.x + this.currentMap.position.x,
      y: coo.y + this.currentMap.position.y,
    };

    let panning = true;

    for (const entity in this.entities) {
      this.entities[entity].onMouseDown(button, mapCoo);

      if (this.entities[entity].isActive()) {
        panning = false;
        break;
      }
    }

    this.panning = panning;
    this.lastPanClick = coo;
  }

  private handleMouseUp(button: MOUSE_BUTTON, coo: ICoordinates): void {
    if (this.panning) {
      this.panning = false;
    } else {
      const mapCoo = {
        x: coo.x + this.currentMap.position.x,
        y: coo.y + this.currentMap.position.y,
      };

      for (const entity in this.entities) {
        this.entities[entity].onMouseUp(button, mapCoo);
      }
    }
  }

  private handleDoubleClick(coo: ICoordinates): void {
    const mapCoo = {
      x: coo.x + this.currentMap.position.x,
      y: coo.y + this.currentMap.position.y,
    };

    for (const entity in this.entities) {
      this.entities[entity].onDoubleClick(mapCoo);
    }
  }

  private update(step: number): void {
    for (const entity in this.entities) {
      this.entities[entity].update(step);
    }
  }

  private render(): void {
    this.context.clearRect(0, 0, this.width, this.height);

    if (this.loading < 1) {
      this.context.fillStyle = this.theme.textColorPrimary;
      this.context.font = `50px ${this.theme.fontFamily}`;

      this.context.fillText(
        "Loading...",
        this.width / 2 - 50,
        this.height / 2 - 10
      );
    } else {
      this.context.save();

      this.context.translate(
        -this.currentMap.position.x,
        -this.currentMap.position.y
      );

      this.context.drawImage(this.currentMap.image, 0, 0);

      for (const entity in this.entities) {
        this.entities[entity].render();
      }

      this.context.restore();
    }
  }

  private loop(step: number): void {
    AmongUsCanvasInstance.update(step);
    AmongUsCanvasInstance.render();

    AmongUsCanvasInstance.animFrame = window.requestAnimationFrame(
      AmongUsCanvasInstance.loop
    );
  }
}

const AmongUsCanvasInstance: AmongUsCanvas = AmongUsCanvas.GetInstance();

export default AmongUsCanvasInstance;
