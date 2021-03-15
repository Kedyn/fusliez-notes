import GameMap from "./GameMap";
import { IMapName } from "utils/types/maps";
import InputHandler from "./InputHandler";
import Layer from "./Layer";
import MiraHQ from "./Maps/MiraHQ";
import Polus from "./Maps/Polus";
import TheSkeld from "./Maps/TheSkeld";
import Vector from "utils/math/Vector";
import i18n from "utils/i18n";
import CanvasGlobals from "./CanvasGlobals";

class AmongUsCanvas {
  public static GetInstance(): AmongUsCanvas {
    if (!AmongUsCanvas.instance) {
      AmongUsCanvas.instance = new AmongUsCanvas();
    }

    return AmongUsCanvas.instance;
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

      this.setOffsetAndScale();
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
    const context = CanvasGlobals.getContext();
    const theme = CanvasGlobals.getTheme();

    if (
      (context !== undefined || context !== null) &&
      (theme !== undefined || theme !== null)
    ) {
      context.fillStyle = theme.textColorPrimary;
      context.font = `20px ${theme.fontFamily}`;

      this.setOffsetAndScale();

      this.loop(0);
    } else {
      throw new Error(
        "Context and theme must be set before initializing the animation."
      );
    }
  }

  private static instance: AmongUsCanvas;

  private layers: Array<Layer>;
  private animFrame: number;
  private miraHQ: MiraHQ;
  private polus: Polus;
  private theSkeld: TheSkeld;
  private panning: boolean;
  private panningPosition: Vector;

  private constructor() {
    CanvasGlobals.setImages([
      "MiraHQ",
      "assets/images/MiraHQ.png",
      "Polus",
      "assets/images/Polus.png",
      "TheSkeld",
      "assets/images/TheSkeld.png",
      "Players",
      "assets/images/players.png",
    ]);

    this.layers = [];

    this.animFrame = 0;

    this.miraHQ = new MiraHQ();
    this.polus = new Polus();
    this.theSkeld = new TheSkeld();

    this.panning = false;
    this.panningPosition = new Vector();

    this.layers.push(this.miraHQ);

    i18n.on("languageChanged", () => {
      // TODO - update maps default texts
      console.log("Update maps default texts");
    });
  }

  private setOffsetAndScale(): void {
    const currentMap = <GameMap>this.layers[0];
    const img = CanvasGlobals.getImages()[currentMap.getName()];

    CanvasGlobals.setOffset(0, 0);
    CanvasGlobals.setScale(
      CanvasGlobals.getContext().canvas.width /
        (img.width * currentMap.getScale()),
      CanvasGlobals.getContext().canvas.height /
        (img.height * currentMap.getScale())
    );
  }

  private update(step: number): void {
    const mousePosition = InputHandler.getMousePosition();

    if (this.panning && InputHandler.getMouseButtons().LEFT) {
      CanvasGlobals.getOffset().subtract(
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
      const beforeZoom = CanvasGlobals.screenToWorld(mousePosition);

      if (wheel > 0) {
        CanvasGlobals.getScale().x *= 0.9;
        CanvasGlobals.getScale().y *= 0.9;
      } else if (wheel < 0) {
        CanvasGlobals.getScale().x *= 1.1;
        CanvasGlobals.getScale().y *= 1.1;
      }

      const afterZoom = CanvasGlobals.screenToWorld(mousePosition);

      beforeZoom.subtract(afterZoom);

      beforeZoom.x *= CanvasGlobals.getScale().x;
      beforeZoom.y *= CanvasGlobals.getScale().y;

      CanvasGlobals.getOffset().add(beforeZoom);
    }

    InputHandler.restoreState();
  }

  private render(): void {
    const context = CanvasGlobals.getContext();

    const width = context.canvas.width;
    const height = context.canvas.height;

    context.clearRect(0, 0, width, height);

    if (!CanvasGlobals.isLoaded()) {
      context.fillText("Loading...", width / 2 - 50, height / 2 - 10);
    } else {
      const offset = CanvasGlobals.getOffset();
      const scale = CanvasGlobals.getScale();

      context.save();

      context.translate(-offset.x, -offset.y);
      context.scale(scale.x, scale.y);

      for (const layer of this.layers) {
        layer.render();
      }

      context.restore();
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
