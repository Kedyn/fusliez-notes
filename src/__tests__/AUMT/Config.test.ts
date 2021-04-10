import { players, theme } from "../default";

import Config from "utils/AUMT/Config";
import Vector from "utils/math/Vector";
import { setPlayerSection } from "store/slices/PlayersSlice";
import store from "store";

describe("Config tests", () => {
  beforeAll(() => {
    const canvas = document.createElement("canvas").getContext("2d");
    if (canvas) {
      Config.setContext(canvas);
      Config.setTheme(theme);
    }
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
  });

  test("setDebug(true) should set this.debug to true", () => {
    Config.setDebug(true);
    expect(Config.getDebug()).toBeTruthy();
  });

  test("img.onload should increase this.loaded", () => {
    const images = Config.getImages();
    for (const image of images.values()) {
      if (image.onload) image.onload(new Event("load"));
    }

    expect(Config.isLoaded()).toBeTruthy();
  });

  test("setOffset(x,y) should set offset by x and y", () => {
    Config.setOffset(50, 100);

    expect(Config.getOffset()).toEqual(new Vector(50, 100));
  });

  test("setScale(x,y) should set the scale to x and y", () => {
    Config.setScale(10, 10);

    expect(Config.getScale()).toEqual(new Vector(10, 10));
  });

  test("getContext should return this.context", () => {
    expect(JSON.stringify(Config.getContext())).toEqual(
      JSON.stringify(document.createElement("canvas").getContext("2d"))
    );
  });

  test("getTheme should return this.theme === theme", () => {
    expect(Config.getTheme()).toEqual(theme);
  });

  test("screenToWorld should return a point that's Point +/- offset divided by scale", () => {
    const screenPoint = new Vector(100, 20);
    Config.setOffset(50, 100);
    Config.setScale(2, 5);

    expect(Config.screenToWorld(screenPoint)).toEqual(new Vector(75, 24));
  });

  test("updatePlayers should check rectangle sizes and set visible/draggable", () => {
    // first instance to load this.players with data
    Config.updatePlayers(players, 3, 5, 1);

    // dead
    store.dispatch(setPlayerSection({ player: "orange", newSection: 3 }));
    // unused
    store.dispatch(setPlayerSection({ player: "pink", newSection: 5 }));

    Config.updatePlayers(store.getState().Players, 3, 5, 1);
    const orange = Config.getPlayers().get("orange");
    const pink = Config.getPlayers().get("pink");

    expect(orange?.getRect()).toEqual({
      height: 117,
      position: { x: 888, y: 0 },
      width: 124,
    });

    expect(pink?.getVisible()).toBeFalsy();
    expect(pink?.getDraggable()).toBeFalsy();
  });

  test("setLoaded should set this.loaded to equal to this.images.size", () => {
    Config.setLoaded();

    expect(Config.isLoaded()).toBeTruthy();
  });
});
