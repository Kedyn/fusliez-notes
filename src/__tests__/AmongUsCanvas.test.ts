// import { AmongUsCanvas } from "components/Map/AmongUsCanvas";

import AmongUsCanvasInstance from "components/Map/AmongUsCanvas";

describe("AmongUsCanvas tests", () => {
  let mapInstance: typeof AmongUsCanvasInstance;

  beforeEach(() => {
    mapInstance = AmongUsCanvasInstance;
  });

  test("setCurrentMap('Polus') should change map to Polus", () => {
    mapInstance.setCurrentMap("Polus");

    expect(mapInstance.getCurrentMap()).toBe("Polus");
  });
  test("setCurrentMap('The Skeld') should change map to The Skeld", () => {
    mapInstance.setCurrentMap("TheSkeld");

    expect(mapInstance.getCurrentMap()).toBe("TheSkeld");
  });
  test("setCurrentMap('MiraHQ') should change map to MiraHQ", () => {
    mapInstance.setCurrentMap("MiraHQ");

    expect(mapInstance.getCurrentMap()).toBe("MiraHQ");
  });
});
