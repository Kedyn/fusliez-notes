import { IDeviceState } from "./device";
import { IMapsState } from "./maps";
import { IPlayersState } from "./players";
import { IScoresState } from "./scores";
import { ISectionsState } from "./sections";
import { ISettingsState } from "./settings";

export interface IStoreState {
  Settings: ISettingsState;
  Device: IDeviceState;
  Scores: IScoresState;
  Players: IPlayersState;
  PlayerEditLock: boolean;
  Sections: ISectionsState;
  Maps: IMapsState;
}
