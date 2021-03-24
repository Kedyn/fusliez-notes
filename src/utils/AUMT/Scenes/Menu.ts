import Config from "../Config";
import InputHandler from "../InputHandler";
import { LOGOS } from "constants/maps";
import Layer from "../Layer";
import Rectangle from "utils/math/Rectangle";
import Scene from "../Scene";
import SceneManager from "../SceneManager";
import Sprite from "../Entities/Sprite";
import TextLine from "../Entities/TextLine";
import Vector from "utils/math/Vector";

export default class Menu extends Scene {
  public constructor() {
    super();

    const buttons = new Layer();

    // TODO - Translate
    buttons.entities.push(
      new TextLine("Choose a map:", new Vector(960, 400), true, 60)
    );

    buttons.entities.push(
      new Sprite(
        "Logos",
        new Rectangle(
          new Vector(LOGOS.MiraHQ.x, LOGOS.MiraHQ.y),
          LOGOS.MiraHQ.w,
          LOGOS.MiraHQ.h
        ),
        new Rectangle(new Vector(700, 500), 200, 45)
      )
    );

    buttons.entities.push(
      new Sprite(
        "Logos",
        new Rectangle(
          new Vector(LOGOS.Polus.x, LOGOS.Polus.y),
          LOGOS.Polus.w,
          LOGOS.Polus.h
        ),
        new Rectangle(new Vector(1000, 500), 200, 45)
      )
    );

    buttons.entities.push(
      new Sprite(
        "Logos",
        new Rectangle(
          new Vector(LOGOS.TheAirship.x, LOGOS.TheAirship.y),
          LOGOS.TheAirship.w,
          LOGOS.TheAirship.h
        ),
        new Rectangle(new Vector(700, 600), 200, 45)
      )
    );

    buttons.entities.push(
      new Sprite(
        "Logos",
        new Rectangle(
          new Vector(LOGOS.TheSkeld.x, LOGOS.TheSkeld.y),
          LOGOS.TheSkeld.w,
          LOGOS.TheSkeld.h
        ),
        new Rectangle(new Vector(1000, 600), 200, 45)
      )
    );

    this.layers.push(buttons);
  }

  public onEnter(): void {
    Config.setOffset(0, 0);
    Config.setScale(1, 1);
  }

  public onExit(): void {
    // Nothing to do here
  }

  public update(): void {
    if (InputHandler.getMouseButtons().LEFT) {
      const position = InputHandler.getMousePosition();
      const entities = this.layers[0].entities;

      for (let i = 1; i < entities.length; i++) {
        const rect = entities[i].getRect();

        if (rect.isPointInside(position)) {
          switch (i) {
            case 1:
              SceneManager.changeScene("MiraHQ");

              break;

            case 2:
              SceneManager.changeScene("Polus");

              break;

            case 3:
              SceneManager.changeScene("TheSkeld");

              break;

            default:
              SceneManager.changeScene("TheAirship");

              break;
          }

          break;
        }
      }
    }
  }
}
