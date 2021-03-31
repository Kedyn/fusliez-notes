import DeviceSlice, {
  getOrientation,
  resetDeviceState,
  setOrientation,
} from "store/slices/DeviceSlice";

import store from "store";

describe("DeviceSlice tests", () => {
  //   describe("landscape orientation", () => {
  //     test("", () => {
  //       console.log("placeholder");
  //     });
  //   });

  describe("portrait orientation", () => {
    beforeEach(() => {
      global.innerHeight = 1024;
      global.innerWidth = 768;
    });

    test("device orientation should be portrait after reset", () => {
      resetDeviceState();
      console.log(store.getState().Device);
      expect(getOrientation(store.getState())).toEqual("portrait");
    });
  });
});
