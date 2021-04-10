import Scene from "./Scene";
import i18n from "utils/i18n";

class SceneManager {
  public static GetInstance(): SceneManager {
    if (!SceneManager.instance) {
      SceneManager.instance = new SceneManager();
    }

    return SceneManager.instance;
  }

  public addScene(name: string, scene: Scene): void {
    this.scenes.set(name, scene);
  }

  public delScene(name: string): void {
    this.scenes.delete(name);
  }

  public changeScene(name: string): void {
    if (this.scenes.has(name)) {
      if (this.currentScene !== "") {
        this.scenes.get(this.currentScene)?.onExit();
      }

      this.scenes.get(name)?.onEnter();

      this.currentScene = name;
    } else {
      throw new Error(`${name} no such a scene.`);
    }
  }

  public getCurrentScene(): string {
    return this.currentScene;
  }

  // FOR TESTING ONLY
  public getAllScenes(): Map<string, Scene> {
    return this.scenes;
  }

  public update(step: number): void {
    const currentScene = this.scenes.get(this.currentScene);

    if (currentScene !== undefined) {
      currentScene.update(step);
    }
  }

  public render(): void {
    const currentScene = this.scenes.get(this.currentScene);

    if (currentScene !== undefined) {
      currentScene.render();
    }
  }

  private static instance: SceneManager;

  private scenes: Map<string, Scene>;
  private currentScene: string;

  private constructor() {
    this.scenes = new Map<string, Scene>();

    this.currentScene = "";

    i18n.on("languageChanged", () => {
      this.scenes.forEach((scene) => scene.updateText());
    });
  }
}

const SceneManagerInstance: SceneManager = SceneManager.GetInstance();

export default SceneManagerInstance;
