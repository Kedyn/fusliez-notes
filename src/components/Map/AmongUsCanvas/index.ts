import GameMap from "./GameMap";
import { IMapName } from "utils/types/maps";
import { ITheme } from "utils/types/theme";
import InputHandler from "./InputHandler";
import Layer from "./Layer";
import MiraHQ from "./Maps/MiraHQ";
import Polus from "./Maps/Polus";
import TheSkeld from "./Maps/TheSkeld";
import Vector from "utils/math/Vector";

class AmongUsCanvas {
  public static GetInstance(): AmongUsCanvas {
    if (!AmongUsCanvas.instance) {
      AmongUsCanvas.instance = new AmongUsCanvas();
    }
    return AmongUsCanvas.instance;
  }

  public setDebug(state: boolean): void {
    this.debug = state;

    for (const layer of this.layers) {
      layer.setDebug(state);
    }
  }

  public setContext(context: CanvasRenderingContext2D): void {
    this.context = context;

    this.miraHQ.setContext(context);
    this.polus.setContext(context);
    this.theSkeld.setContext(context);

    for (const layer of this.layers) {
      layer.setContext(context);
    }
  }

  public setTheme(theme: ITheme): void {
    this.theme = theme;
  }

  public setCurrentMap(map: IMapName): void {
    if (map !== (<GameMap>this.layers[0]).getName()) {
      switch (map) {
        case "Polus":
          this.layers[0] = this.polus;

          break;

        case "TheSkeld":
          this.layers[0] = this.theSkeld;

          break;

        default:
          this.layers[0] = this.miraHQ;

          break;
      }

      const currentMap = <GameMap>this.layers[0];

      this.offset.set(0, 0);
      this.scale.x =
        this.context.canvas.width /
        (currentMap.getImage().width * currentMap.getScale());
      this.scale.y =
        this.context.canvas.height /
        (currentMap.getImage().height * currentMap.getScale());
    }
  }

  public updatePlayers(): void {
    // TODO - Add update players logic
  }

  public getAnimFrame(): number {
    return this.animFrame;
  }

  public getCurrentMap(): IMapName {
    return (<GameMap>this.layers[0]).getName();
  }

  public init(): void {
    if (
      (this.context !== undefined || this.context !== null) &&
      (this.theme !== undefined || this.theme !== null)
    ) {
      const currentMap = <GameMap>this.layers[0];

      this.context.fillStyle = this.theme.textColorPrimary;
      this.context.font = `50px ${this.theme.fontFamily}`;

      this.offset.set(0, 0);
      this.scale.x =
        this.context.canvas.width /
        (currentMap.getImage().width * currentMap.getScale());
      this.scale.y =
        this.context.canvas.height /
        (currentMap.getImage().height * currentMap.getScale());

      this.loop(0);
    } else {
      throw new Error(
        "Context and theme must be set before initializing the animation."
      );
    }
  }

  private static instance: AmongUsCanvas;

  private debug: boolean;
  private layers: Array<Layer>;
  private context!: CanvasRenderingContext2D;
  private theme!: ITheme;
  private animFrame: number;
  private miraHQ: MiraHQ;
  private polus: Polus;
  private theSkeld: TheSkeld;
  private loading: number;
  private offset: Vector;
  private scale: Vector;
  private panning: boolean;
  private panningPosition: Vector;

  private constructor() {
    const miraHQ = new Image();
    const polus = new Image();
    const theSkeld = new Image();
    const players = new Image();

    miraHQ.src = "assets/images/MiraHQ.png";
    polus.src = "assets/images/Polus.png";
    theSkeld.src = "assets/images/TheSkeld.png";
    players.src = "assets/images/players.png";

    const incrementLoading = () => {
      this.loading += 0.25;
    };

    miraHQ.onload = incrementLoading;
    polus.onload = incrementLoading;
    theSkeld.onload = incrementLoading;
    players.onload = incrementLoading;

    this.debug = false;

    this.layers = [];

    this.animFrame = 0;

    this.miraHQ = new MiraHQ(miraHQ, players);
    this.polus = new Polus(polus, players);
    this.theSkeld = new TheSkeld(theSkeld, players);

    this.loading = 0;

    this.offset = new Vector();
    this.scale = new Vector(1, 1);

    this.panning = false;
    this.panningPosition = new Vector();

    this.layers.push(this.miraHQ);
  }

  public update(step: number): void {
    if (this.panning && InputHandler.getMouseButtons().LEFT) {
      const position = InputHandler.getMousePosition();

      this.offset.subtract(Vector.subtract(position, this.panningPosition));

      this.panningPosition.set(position);

      InputHandler.stopPropagation();
    }

    for (let i = this.layers.length - 1; i >= 0; i--) {
      this.layers[i].update(step);
    }

    // TODO - zooming
    // TODO - hud
    if (InputHandler.getMouseButtons().LEFT) {
      this.panning = true;

      this.panningPosition.set(InputHandler.getMousePosition());
    } else {
      this.panning = false;
    }

    InputHandler.restoreStates();
  }

  public render(): void {
    const width = this.context.canvas.width;
    const height = this.context.canvas.height;

    this.context.clearRect(0, 0, width, height);

    if (this.loading < 1) {
      this.context.fillText("Loading...", width / 2 - 50, height / 2 - 10);
    } else {
      this.context.save();

      this.context.translate(-this.offset.x, -this.offset.y);
      this.context.scale(this.scale.x, this.scale.y);

      for (const layer of this.layers) {
        layer.render();
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
