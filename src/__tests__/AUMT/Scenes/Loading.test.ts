import Config from "utils/AUMT/Config";
import Loading from "utils/AUMT/Scenes/Loading";
import TextLine from "utils/AUMT/Entities/TextLine";
import { theme } from "../../default";

describe("Loading tests", () => {
  beforeEach(() => {
    const canvas = document.createElement("canvas").getContext("2d");
    if (canvas) {
      Config.setContext(canvas);
      Config.setTheme(theme);
    }
  });

  test("updateText should set entities' text to maps.loading", () => {
    const loading = new Loading();
    loading.updateText();
    const textline = loading.getLayers()[0].entities[0] as TextLine;
    expect(textline.getText()).toEqual("maps.loading");
  });
});
