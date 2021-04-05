import { IDeviceState } from "./device";
import { IPlayersState } from "./players";
import { IScoresState } from "./scores";
import { ISectionsState } from "./sections";
import { ISettingsState } from "./settings";

// import { IMap } from "./maps";

export interface IStoreState {
  Settings: ISettingsState;
  Device: IDeviceState;
  Scores: IScoresState;
  Players: IPlayersState;
  PlayerEditLock: boolean;
  Sections: ISectionsState;
  // Maps: IMap;
}
