import { IMap, IMapName } from "utils/types/maps";
import {
  MIRAHQ_POSITION,
  MIRAHQ_SCALE,
  POLUS_POSITION,
  POLUS_SCALE,
  THE_SKELD_POSITION,
  THE_SKELD_SCALE,
} from "constants/maps";
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
import { IPlayerColor } from "utils/types/players";
import { IStoreState } from "utils/types/store";
import { ITheme } from "utils/types/theme";
import { MOUSE_BUTTON } from "constants/mouse";
import { PLAYER_IMAGE } from "constants/players";
import Player from "./Player";
import { Vector } from "utils/math/Vector";
import { getPlayers } from "store/slices/PlayersSlice";
import store from "store";

interface ICanvasEvent {
  clientX: number;
  clientY: number;
  currentTarget: EventTarget & HTMLCanvasElement;
}

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

    this.forEachEntity((entity) => {
      entity.setContext(this.context);

      return true;
    });
  }

  public setTheme(theme: ITheme): void {
    this.theme = theme;
  }

  public getAnimFrame(): number {
    return this.animFrame;
  }

  public setCurrentMap(map: IMapName): void {
    if (map !== this.currentMap.name) {
      switch (map) {
        case "Polus":
          this.currentMap = this.polus;
          this.currentMap.scale = POLUS_SCALE;

          this.offset.set(POLUS_POSITION);

          break;
        case "TheSkeld":
          this.currentMap = this.theSkeld;
          this.currentMap.scale = THE_SKELD_SCALE;

          this.offset.set(THE_SKELD_POSITION);

          break;
        default:
          this.currentMap = this.miraHQ;
          this.currentMap.scale = MIRAHQ_SCALE;

          this.offset.set(MIRAHQ_POSITION);
          break;
      }

      this.setInitialPlayersPositions();

      this.scale = 1.0;
    }
  }

  public setDebug(state: boolean): void {
    this.debug = state;

    this.forEachEntity((entity) => {
      entity.setDebug(state);

      return true;
    });
  }

  public getCurrentMap(): IMapName {
    return this.currentMap.name;
  }

  public onMouseMove(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    this.handleMouseMove(this.getMousePosition(evt));
  }

  public onMouseDown(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    this.handleMouseDown(evt.button, this.getMousePosition(evt));
  }

  public onMouseUp(evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>): void {
    evt.preventDefault();

    this.handleMouseUp(evt.button, this.getMousePosition(evt));
  }

  public onMouseLeave(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    if (this.panning) {
      this.panning = false;
    } else {
      const mousePosition = this.getMousePosition(evt);
      const mapPosition = this.screenToMap(mousePosition);

      this.forEachEntity((entity) => {
        entity.onMouseUp(evt.button, mapPosition);

        return true;
      });
    }
  }

  public onDoubleClick(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    evt.preventDefault();

    this.handleDoubleClick(this.getMousePosition(evt));
  }

  public onWheel(evt: ReactWheelEvent<HTMLCanvasElement>): void {
    this.handleZoom(evt.deltaY * -0.01, this.getMousePosition(evt));
  }

  public onTouchMove(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    this.handleMouseMove(this.getTouchPosition(evt));
  }

  public onTouchStart(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    this.handleMouseDown(MOUSE_BUTTON.LEFT, this.getTouchPosition(evt));
  }

  public onTouchEnd(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    const currentTime = new Date().getTime();
    const touchLength = currentTime - this.lastTouchTime;

    this.handleMouseUp(MOUSE_BUTTON.LEFT, this.lastTouch);

    if (touchLength < 500 && touchLength > 0) {
      this.handleDoubleClick(this.lastTouch);
    }

    this.lastTouchTime = currentTime;
  }

  public onTouchCancel(evt: ReactTouchEvent<HTMLCanvasElement>): void {
    evt.preventDefault();

    this.handleMouseUp(MOUSE_BUTTON.LEFT, this.lastTouch);
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
      this.setInitialPlayersPositions();

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

  private currentMap: IMap;
  private miraHQ: IMap;
  private polus: IMap;
  private theSkeld: IMap;

  private players: HTMLImageElement;

  private loading: number;

  private entities: { [key: string]: Entity };

  private offset: Vector;

  private panning: boolean;
  private panningPosition: Vector;

  private scale: number;

  private lastTouch: Vector;
  private lastTouchTime: number;

  private debug: boolean;
  private positions: { screen: Vector; map: Vector };

  private constructor() {
    this.animFrame = 0;

    this.width = 0;
    this.height = 0;

    this.miraHQ = {
      name: "MiraHQ",
      image: new Image(),
      scale: MIRAHQ_SCALE,
    };

    this.polus = {
      name: "Polus",
      image: new Image(),
      scale: POLUS_SCALE,
    };

    this.theSkeld = {
      name: "TheSkeld",
      image: new Image(),
      scale: THE_SKELD_SCALE,
    };

    this.players = new Image();

    this.loading = 0;

    this.theSkeld.image.src = "assets/images/TheSkeld.png";
    this.miraHQ.image.src = "assets/images/MiraHQ.png";
    this.polus.image.src = "assets/images/Polus.png";

    this.players.src = "assets/images/players.png";

    this.theSkeld.image.onload = () => {
      this.loading += 0.25;
    };

    this.miraHQ.image.onload = () => {
      this.loading += 0.25;
    };

    this.polus.image.onload = () => {
      this.loading += 0.25;
    };

    this.players.onload = () => {
      this.loading += 0.25;
    };

    this.currentMap = this.miraHQ;

    this.entities = {};

    this.offset = new Vector(MIRAHQ_POSITION);

    this.panning = false;
    this.panningPosition = new Vector();

    this.scale = 1.0;

    this.lastTouch = new Vector();
    this.lastTouchTime = 0;

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
        new Vector(),
        [resetSectionId, deadSectionId, unusedSectionId],
        this.players,
        image.alive,
        image.dead
      );
    }

    this.debug = false;
    this.positions = {
      screen: new Vector(),
      map: new Vector(),
    };
  }

  private checkOffset(): void {
    // should be used if we wanna keep the map within vision,
    // this would require a bit more
    this.offset.x = Math.max(
      Math.min(
        this.offset.x,
        this.currentMap.image.width * this.scale * this.currentMap.scale -
          this.width
      ),
      0
    );
    this.offset.y = Math.max(
      Math.min(
        this.offset.y,
        this.currentMap.image.height * this.scale * this.currentMap.scale -
          this.height
      ),
      0
    );
  }

  private screenToMap(screen: Vector): Vector {
    const point = Vector.add(screen, this.offset);

    point.scale(1 / this.scale);

    return point;
  }

  private getMousePosition<T extends ICanvasEvent>(evt: T): Vector {
    const rect = evt.currentTarget.getBoundingClientRect();

    return new Vector(
      (evt.clientX - rect.left) * (this.width / rect.width),
      (evt.clientY - rect.top) * (this.height / rect.height)
    );
  }

  private getTouchPosition(evt: ReactTouchEvent<HTMLCanvasElement>): Vector {
    const rect = evt.currentTarget.getBoundingClientRect();
    const position = new Vector(
      (evt.touches[0].clientX - rect.left) * (this.width / rect.width),
      (evt.touches[0].clientY - rect.top) * (this.height / rect.height)
    );

    this.lastTouch.set(position);

    return position;
  }

  private forEachEntity(cb: (entity: Entity) => boolean) {
    for (const entity in this.entities) {
      if (!cb(this.entities[entity])) {
        break;
      }
    }
  }

  private handleMouseMove(position: Vector): void {
    if (this.panning) {
      this.offset.subtract(Vector.subtract(position, this.panningPosition));

      this.panningPosition.set(position);

      //this.checkOffset();
    } else {
      this.forEachEntity((entity) => {
        entity.onMouseMove(this.screenToMap(position));

        return true;
      });
    }

    const map = this.screenToMap(position);

    this.positions.map.set(map);
    this.positions.screen.set(position);
  }

  private handleMouseDown(button: MOUSE_BUTTON, position: Vector): void {
    let panning = true;

    this.forEachEntity((entity) => {
      entity.onMouseDown(button, this.screenToMap(position));

      if (entity.isActive()) {
        panning = false;

        return false;
      }

      return true;
    });

    if (button === MOUSE_BUTTON.LEFT) {
      this.panning = panning;

      this.panningPosition.set(position);
    }
  }

  private handleMouseUp(button: MOUSE_BUTTON, position: Vector): void {
    if (this.panning) {
      this.panning = false;
    } else {
      this.forEachEntity((entity) => {
        entity.onMouseUp(button, this.screenToMap(position));

        return true;
      });
    }
  }

  private handleDoubleClick(position: Vector): void {
    this.forEachEntity((entity) => {
      entity.onDoubleClick(this.screenToMap(position));

      return true;
    });
  }

  private handleZoom(delta: number, mousePosition: Vector): void {
    const beforeZoom = this.screenToMap(mousePosition);

    this.scale += delta;

    const afterZoom = this.screenToMap(mousePosition);

    beforeZoom.subtract(afterZoom);

    beforeZoom.scale(this.scale);

    this.offset.add(beforeZoom);
  }

  private setInitialPlayersPositions(): void {
    const state: IStoreState = store.getState();
    const players = getPlayers(state);

    let pos = -2;
    for (const player in players) {
      const angle = (Math.PI / 6) * pos;
      const position = new Vector(this.offset);

      position.x += this.width / 2.3 + Math.cos(angle) * (this.width / 5);
      position.y += this.height / 2.7 + Math.sin(angle) * (this.height / 4);

      this.entities[`${player}Player`].setPosition(position);

      pos++;
    }
  }

  private renderDebug(): void {
    if (this.debug) {
      this.context.strokeStyle = "black";
      this.context.lineWidth = 8;
      this.context.fillStyle = "white";

      this.context.strokeText(
        `Screen: x = ${Math.round(this.positions.screen.x)} y = ${Math.round(
          this.positions.screen.y
        )}`,
        0,
        40
      );
      this.context.strokeText(
        `Map: x = ${Math.round(this.positions.map.x)} y = ${Math.round(
          this.positions.map.y
        )}`,
        0,
        100
      );
      this.context.strokeText(
        `Offset: x = ${Math.round(this.offset.x)} y = ${Math.round(
          this.offset.y
        )}`,
        0,
        160
      );

      this.context.fillText(
        `Screen: x = ${Math.round(this.positions.screen.x)} y = ${Math.round(
          this.positions.screen.y
        )}`,
        0,
        40
      );
      this.context.fillText(
        `Map: x = ${Math.round(this.positions.map.x)} y = ${Math.round(
          this.positions.map.y
        )}`,
        0,
        100
      );
      this.context.fillText(
        `Offset: x = ${Math.round(this.offset.x)} y = ${Math.round(
          this.offset.y
        )}`,
        0,
        160
      );
    }
  }

  private update(step: number): void {
    this.forEachEntity((entity) => {
      entity.update(step);

      return true;
    });
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

      this.context.translate(-this.offset.x, -this.offset.y);
      this.context.scale(this.scale, this.scale);

      this.context.save();
      this.context.scale(this.currentMap.scale, this.currentMap.scale);
      this.context.drawImage(this.currentMap.image, 0, 0);
      this.context.restore();

      this.forEachEntity((entity) => {
        entity.render();

        return true;
      });

      this.context.restore();

      this.renderDebug();
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
