import { IMap, IMapState, IMouseState } from "utils/types/maps";

import { ITheme } from "utils/types/theme";
import { MouseEvent as ReactMouseEvent } from "react";

class AmongUsMaps {
  public static GetInstance(): AmongUsMaps {
    if (!AmongUsMaps.instance) {
      AmongUsMaps.instance = new AmongUsMaps();
    }
    return AmongUsMaps.instance;
  }

  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;

    this.width = this.context.canvas.width;
    this.height = this.context.canvas.height;
  }

  public setTheme(theme: ITheme): void {
    this.theme = theme;
  }

  public changeCurrentMap(map: IMap): void {
    switch (map) {
      case "TheSkeld":
        this.currentMap.image = this.skeld;

        break;

      case "MiraHQ":
        this.currentMap.image = this.mira;

        break;

      case "Polus":
        this.currentMap.image = this.polus;

        break;

      default:
        this.currentMap.image = this.skeld;
    }
  }

  public getAnimFrame(): number {
    return this.animFrame;
  }

  public handleMouseDown(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    this.mouseState.down = true;

    this.mouseState.lastClicked.x = evt.clientX;
    this.mouseState.lastClicked.y = evt.clientY;
  }

  public handleMouseUp(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    this.mouseState.down = false;

    this.mouseState.lastClicked.x = evt.clientX;
    this.mouseState.lastClicked.y = evt.clientY;
  }

  public handleMouseMove(
    evt: ReactMouseEvent<HTMLCanvasElement, MouseEvent>
  ): void {
    this.mouseState.position.x = evt.clientX;
    this.mouseState.position.y = evt.clientY;
  }

  public init(): void {
    if (
      (this.context !== undefined || this.context !== null) &&
      (this.theme !== undefined || this.theme !== null)
    ) {
      this.loop();
    } else {
      throw new Error(
        "Context and theme must be set before initializing the animation."
      );
    }
  }

  private static instance: AmongUsMaps;

  private animFrame: number;

  private context!: CanvasRenderingContext2D;

  private theme!: ITheme;

  private width: number;
  private height: number;

  private skeld: HTMLImageElement;
  private mira: HTMLImageElement;
  private polus: HTMLImageElement;
  private players: HTMLImageElement;

  private loading: number;

  private currentMap: IMapState;

  private mouseState: IMouseState;

  private constructor() {
    this.animFrame = 0;

    this.width = 0;
    this.height = 0;

    this.skeld = new Image();
    this.mira = new Image();
    this.polus = new Image();

    this.players = new Image();

    this.loading = 0;

    this.skeld.src = "assets/images/TheSkeld.png";
    this.mira.src = "assets/images/MiraHQ.png";
    this.polus.src = "assets/images/Polus.png";

    this.players.src = "assets/images/players.png";

    this.skeld.onload = () => {
      this.loading += 0.25;
    };

    this.mira.onload = () => {
      this.loading += 0.25;
    };

    this.polus.onload = () => {
      this.loading += 0.25;
    };

    this.players.onload = () => {
      this.loading += 0.25;
    };

    this.currentMap = { position: { x: 0, y: 0 }, image: this.polus };

    this.mouseState = {
      lastClicked: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      down: false,
    };
  }

  private update(): void {
    // check for dragging
  }

  private render(): void {
    this.context.clearRect(0, 0, this.width, this.height);

    if (this.loading < 1) {
      this.context.fillStyle = this.theme.textColorPrimary;

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
    }
  }

  private loop(): void {
    AmongUsMapsInstance.update();
    AmongUsMapsInstance.render();

    AmongUsMapsInstance.animFrame = window.requestAnimationFrame(
      AmongUsMapsInstance.loop
    );
  }
}

export const AmongUsMapsInstance: AmongUsMaps = AmongUsMaps.GetInstance();
