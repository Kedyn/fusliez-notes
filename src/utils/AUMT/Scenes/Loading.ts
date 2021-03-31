import Config from "../Config";
import Layer from "../Layer";
import Menu from "./Menu";
import MiraHQ from "./Maps/MiraHQ";
import Polus from "./Maps/Polus";
import Scene from "../Scene";
import SceneManager from "../SceneManager";
import TextLine from "../Entities/TextLine";
import TheAirship from "./Maps/TheAirship";
import TheSkeld from "./Maps/TheSkeld";
import Vector from "utils/math/Vector";

export default class Loading extends Scene {
  public constructor() {
    super();

    Config.setImages([
      "MiraHQ",
      "assets/images/MiraHQ.png",
      "Polus",
      "assets/images/Polus.png",
      "TheSkeld",
      "assets/images/TheSkeld.png",
      "Players",
      "assets/images/players.png",
      "Logos",
      "assets/images/logos.png",
    ]);

    const context = Config.getContext();
    const layer = new Layer();

    layer.entities.push(
      new TextLine(
        "Loading...",
        new Vector(context.canvas.width / 2, context.canvas.height / 2 - 50),
        true,
        100
      )
    );

    layer.entities.push(
      new TextLine(
        "fusliez notes created by the fuslie family",
        new Vector(context.canvas.width / 2, context.canvas.height / 2 + 50),
        true,
        20
      )
    );

    this.layers.push(layer);
  }

  public onEnter(): void {
    // nothing to do here
  }

  public onExit(): void {
    // nothing to do here
  }

  public update(): void {
    if (Config.isLoaded()) {
      SceneManager.addScene("Menu", new Menu());

      SceneManager.addScene("MiraHQ", new MiraHQ());
      SceneManager.addScene("Polus", new Polus());
      SceneManager.addScene("TheAirship", new TheAirship());
      SceneManager.addScene("TheSkeld", new TheSkeld());

      SceneManager.changeScene("Menu");
    }
  }
}
