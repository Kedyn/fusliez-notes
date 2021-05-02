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
      "MiraHQSensors",
      "assets/images/MiraHQSensors.png",
      "MiraHQVents",
      "assets/images/MiraHQVents.png",
      "Polus",
      "assets/images/Polus.png",
      "PolusCameras",
      "assets/images/PolusCameras.png",
      "PolusVents",
      "assets/images/PolusVents.png",
      "TheAirship",
      "assets/images/TheAirship.png",
      "TheAirshipCameras",
      "assets/images/TheAirshipCameras.png",
      "TheAirshipVents",
      "assets/images/TheAirshipVents.png",
      "TheSkeld",
      "assets/images/TheSkeld.png",
      "TheSkeldCameras",
      "assets/images/TheSkeldCameras.png",
      "TheSkeldVents",
      "assets/images/TheSkeldVents.png",
      "Players",
      "assets/images/players.png",
      "Logos",
      "assets/images/logos.png",
    ]);

    const context = Config.getContext();
    const layer = new Layer();

    layer.entities.push(
      new TextLine(
        Config.getI18n().t("maps.loading"),
        new Vector(context.canvas.width / 2, context.canvas.height / 2),
        true,
        100
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

  public updateText(): void {
    (<TextLine>this.layers[0].entities[0]).setText(
      Config.getI18n().t("maps.loading")
    );
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
