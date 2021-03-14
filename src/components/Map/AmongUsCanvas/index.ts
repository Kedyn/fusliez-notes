import GameMap from "./GameMap";
import { IMapName } from "utils/types/maps";
import { ITheme } from "utils/types/theme";
import InputHandler from "./InputHandler";
import Layer from "./Layer";
import MiraHQ from "./Maps/MiraHQ";
import Polus from "./Maps/Polus";
import TheSkeld from "./Maps/TheSkeld";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";

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

    i18n.on("languageChanged", () => {
      // TODO - update maps default texts
      console.log("Update maps default texts");
    });
  }

  private screenToWorld(screenPoint: Vector): Vector {
    const point = Vector.add(screenPoint, this.offset);

    point.x /= this.scale.x;
    point.y /= this.scale.y;

    return point;
  }

  private update(step: number): void {
    const mousePosition = InputHandler.getMousePosition();

    if (this.panning && InputHandler.getMouseButtons().LEFT) {
      this.offset.subtract(
        Vector.subtract(mousePosition, this.panningPosition)
      );

      this.panningPosition.set(mousePosition);

      InputHandler.stopPropagation();
    }

    for (let i = this.layers.length - 1; i >= 0; i--) {
      this.layers[i].update(step);
    }

    // TODO - hud
    if (InputHandler.getMouseButtons().LEFT) {
      this.panning = true;

      this.panningPosition.set(mousePosition);
    } else {
      this.panning = false;
    }

    const wheel = InputHandler.getWheel();

    if (wheel) {
      const beforeZoom = this.screenToWorld(mousePosition);

      if (wheel > 0) {
        this.scale.x *= 0.9;
        this.scale.y *= 0.9;
      } else if (wheel < 0) {
        this.scale.x *= 1.1;
        this.scale.y *= 1.1;
      }

      const afterZoom = this.screenToWorld(mousePosition);

      beforeZoom.subtract(afterZoom);

      beforeZoom.x *= this.scale.x;
      beforeZoom.y *= this.scale.y;

      this.offset.add(beforeZoom);
    }

    InputHandler.restoreState();
  }

  private render(): void {
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
