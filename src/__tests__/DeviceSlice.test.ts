import DeviceSlice from "store/slices/DeviceSlice";
import { IOrientation } from "utils/types/device";
import store from "store";

describe("DeviceSlice tests", () => {
  const state = store.getState();

  describe("landscape orientation", () => {
    test("mock setOrientation", () => {
      const mockSetOrientation = jest.fn(
        DeviceSlice.caseReducers.setOrientation
      );

      mockSetOrientation(state, {
        payload: "portrait" as IOrientation,
        type: "string",
      });

      expect(mockSetOrientation).toHaveBeenLastCalledWith(state, {
        payload: "portrait" as IOrientation,
        type: "string",
      });
    });

    test("mock resetDeviceState", () => {
      const mockResetDeviceState = jest.fn(
        DeviceSlice.caseReducers.resetDeviceState
      );

      mockResetDeviceState();

      expect(mockResetDeviceState).toHaveBeenCalledTimes(1);
    });
  });
});
