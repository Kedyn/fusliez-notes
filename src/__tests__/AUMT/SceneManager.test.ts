import Config from "utils/AUMT/Config";
import Loading from "utils/AUMT/Scenes/Loading";
import SceneManager from "utils/AUMT/SceneManager";

const theme = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  baseFontSize: 16,
  textColorPrimary: "#eeeeee",
  textColorSecondary: "#ffffff",
  backgroundColorPrimary: "#202225",
  backgroundColorSecondary: "#282b2f",
  linkColor: "#9EC4D5",
  linkColorHover: "#C2D2E3",
  dangerColor: "#8B0000",
  dangerColorHover: "#be0000",
  activeColor: "#667c84",
  borderColor: "#36383a",
  crewmateColorPrimary: "#008dfc",
  crewmateColorSecondary: "#30a4ff",
  impostorColorPrimary: "#af1211",
  impostorColorSecondary: "#dd1716",
  neutralColor: "#8d86b7",
};

describe("SceneManager tests", () => {
  let loading: Loading;
  let clearRectSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();

    const canvas = document.createElement("canvas").getContext("2d");
    if (canvas) {
      Config.setContext(canvas);
      Config.setTheme(theme);
      clearRectSpy = jest.spyOn(Config.getContext(), "clearRect");

      Config.updatePlayers();
      loading = new Loading();
      Config.setLoaded();
      loading.update();
    }
  });

  test("delScene should delete the specified scene", () => {
    SceneManager.delScene("Menu");
    expect(SceneManager.getAllScenes().has("Menu")).toBeFalsy();
  });

  test("changeScene should change the scene to the specific scene (if Map contains the scene)", () => {
    SceneManager.changeScene("MiraHQ");
    expect(SceneManager.getCurrentScene()).toEqual("MiraHQ");
  });

  test("changeScene should change the scene to the specific scene (if Map does NOT contain the scene)", () => {
    SceneManager.delScene("MiraHQ");

    expect(() => SceneManager.changeScene("MiraHQ")).toThrow(
      "MiraHQ no such a scene."
    );
  });

  test("update(4) should update Menu to be step 4", () => {
    SceneManager.update(4);
  });

  test("update(4) should not doing anything if Menu is missing", () => {
    SceneManager.delScene("Menu");
    SceneManager.update(4);
  });

  test("render() should have called context.clearRect once", () => {
    SceneManager.render();
    expect(clearRectSpy).toHaveBeenCalledTimes(1);
  });

  test("context.clearRect should not have been called on rendering undefined", () => {
    SceneManager.delScene("Menu");
    SceneManager.render();
    expect(clearRectSpy).toHaveBeenCalledTimes(0);
  });
});
