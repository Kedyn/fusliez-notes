import { IMap, IMapState } from "utils/types/maps";
import { IPlayer, IPlayerColor, IPlayerState } from "utils/types/players";
import {
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
import {
  getDeadSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";

import Entity from "./Entity";
import { IStoreState } from "utils/types/store";
import { ITheme } from "utils/types/theme";
import { MOUSE_BUTTON } from "constants/mouse";
import { PLAYER_IMAGE } from "constants/players";
import Player from "./Player";
import { getCurrentMap } from "store/slices/MapsSlice";
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

  public handleMouseMove(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    for (const entity in this.entities) {
      this.entities[entity].onMouseMove(coo);
    }
  }

  public handleMouseDown(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    for (const entity in this.entities) {
      this.entities[entity].onMouseDown(evt.button, coo);

      if (this.entities[entity].isActive()) {
        break;
      }
    }
  }

  public handleMouseUp(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    for (const entity in this.entities) {
      this.entities[entity].onMouseUp(evt.button, coo);
    }
  }

  public handleMouseLeave(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    for (const entity in this.entities) {
      this.entities[entity].onMouseUp(evt.button, coo);
    }
  }

  public handleDoubleClick(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.clientX - rect.left) * (this.width / rect.width),
      y: (evt.clientY - rect.top) * (this.height / rect.height),
    };

    for (const entity in this.entities) {
      this.entities[entity].onDoubleClick(coo);
    }
  }

  public handleTouchStart(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.touches[0].clientX - rect.left) * (this.width / rect.width),
      y: (evt.touches[0].clientY - rect.top) * (this.height / rect.height),
    };

    for (const entity in this.entities) {
      this.entities[entity].onMouseDown(MOUSE_BUTTON.LEFT, coo);

      if (this.entities[entity].isActive()) {
        break;
      }
    }
  }

  public handleTouchEnd(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.touches[0].clientX - rect.left) * (this.width / rect.width),
      y: (evt.touches[0].clientY - rect.top) * (this.height / rect.height),
    };
    const currentTime = new Date().getTime();
    const touchLength = currentTime - this.lastTouched;

    for (const entity in this.entities) {
      this.entities[entity].onMouseUp(MOUSE_BUTTON.LEFT, coo);

      if (touchLength < 500 && touchLength > 0) {
        this.entities[entity].onDoubleClick(coo);
      }
    }

    this.lastTouched = currentTime;
  }

  public handleTouchCancel(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.touches[0].clientX - rect.left) * (this.width / rect.width),
      y: (evt.touches[0].clientY - rect.top) * (this.height / rect.height),
    };

    for (const entity in this.entities) {
      this.entities[entity].onMouseUp(MOUSE_BUTTON.LEFT, coo);
    }
  }

  public handleTouchMove(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    const rect = evt.currentTarget.getBoundingClientRect();
    const coo = {
      x: (evt.touches[0].clientX - rect.left) * (this.width / rect.width),
      y: (evt.touches[0].clientY - rect.top) * (this.height / rect.height),
    };

    for (const entity in this.entities) {
      this.entities[entity].onMouseMove(coo);
    }
  }

  public updatePlayers(): void {
    const state: IStoreState = store.getState();
    const players = getPlayers(state);

    for (const player of Object.keys(players)) {
      const data = players[player as IPlayerColor];
      const entity: Player = this.entities[`${player}Player`] as Player;

      entity.setState(this.getPlayerState(data, state));
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

  private currentMapName: IMap;
  private currentMap: IMapState;

  private entities: { [key: string]: Entity };

  private lastTouched: number;

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

    this.currentMapName = "MiraHQ";
    this.currentMap = { position: { x: 0, y: 0 }, image: this.miraHQ };

    this.entities = {};

    const state: IStoreState = store.getState();
    const players = getPlayers(state);

    for (const player of Object.keys(players)) {
      const data = players[player as IPlayerColor];
      const image = PLAYER_IMAGE[player as IPlayerColor];

      this.entities[`${player}Player`] = new Player(
        data.position,
        this.players,
        image.alive,
        image.dead,
        this.getPlayerState(data, state)
      );
    }

    this.lastTouched = 0;
  }

  private getPlayerState(
    player: IPlayer,
    storeState: IStoreState
  ): IPlayerState {
    const deadSectionId = getDeadSectionId(storeState);
    const unusedSectionId = getUnusedSectionId(storeState);

    return player.section === deadSectionId
      ? "dead"
      : player.section === unusedSectionId
      ? "hidden"
      : "normal";
  }

  private setCurrentMap(state: IStoreState): void {
    const currentMap = getCurrentMap(state);

    if (this.currentMapName != currentMap) {
      switch (currentMap) {
        case "Polus":
          this.currentMap = { position: { x: 0, y: 0 }, image: this.polus };

          break;
        case "TheSkeld":
          this.currentMap = { position: { x: 0, y: 0 }, image: this.theSkeld };

          break;
        default:
          this.currentMap = { position: { x: 0, y: 0 }, image: this.miraHQ };

          break;
      }
    }

    this.currentMapName = currentMap;
  }

  private update(step: number): void {
    const state: IStoreState = store.getState();

    this.setCurrentMap(state);

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
      this.context.drawImage(
        this.currentMap.image,
        this.currentMap.position.x,
        this.currentMap.position.y,
        this.currentMap.image.width,
        this.currentMap.image.height,
        0,
        0,
        this.width,
        this.height - 200
      );

      for (const entity in this.entities) {
        this.entities[entity].render();
      }
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
