// AmongUs Map Tool - could not come up with a better name for this

import Config from "./Config";
import InputHandler from "./InputHandler";
import Loading from "./Scenes/Loading";
import SceneManager from "./SceneManager";

class AmongUsMapTool {
  public static GetInstance(): AmongUsMapTool {
    if (!AmongUsMapTool.instance) {
      AmongUsMapTool.instance = new AmongUsMapTool();
    }

    return AmongUsMapTool.instance;
  }

  public getAnimFrame(): number {
    return this.animFrame;
  }

  public init(): void {
    const context = Config.getContext();
    const theme = Config.getTheme();

    if (
      (context !== undefined || context !== null) &&
      (theme !== undefined || theme !== null)
    ) {
      SceneManager.addScene("Loading", new Loading());
      SceneManager.changeScene("Loading");

      this.loop(0);
    } else {
      throw new Error(
        "Context and theme must be set before initializing the animation."
      );
    }
  }

  private static instance: AmongUsMapTool;

  private animFrame: number;

  private constructor() {
    this.animFrame = 0;
  }

  private update(step: number): void {
    SceneManager.update(step);
  }

  private render(): void {
    SceneManager.render();
  }

  private loop(step: number): void {
    Main.update(step);
    Main.render();

    Main.animFrame = window.requestAnimationFrame(Main.loop);
  }
}

const Main: AmongUsMapTool = AmongUsMapTool.GetInstance();

export default {
  Main,
  Config,
  InputHandler,
  SceneManager,
};
