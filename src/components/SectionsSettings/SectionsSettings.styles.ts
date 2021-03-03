import { ITheme } from "utils/types/theme";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  SectionsSettings: {
    padding: "0 1rem",
    flexGrow: 1,
  },
  SectionsSettingsList: {},
  SectionsSettingsItem: {
    display: "flex",
    marginBottom: "0.5rem",
  },
  SectionsSettingsHandle: {
    cursor: "grab",
    display: "flex",
    alignItems: "center",

    "&:active": {
      cursor: "grabbing",
    },
  },
  SectionsSettingsInputContainer: {
    flexGrow: 1,
    padding: "0 0.5rem",
    display: "flex",
    alignItems: "center",
  },
  SectionsSettingsInput: {
    display: "block",
    width: "100%",
    padding: "0.25rem 0.5rem",

    "&:hover": {
      border: `1px solid ${theme.borderColor}`,
    },
  },
  SectionsSettingsOption: {
    cursor: "pointer",
    padding: "0 0.5rem",
    display: "flex",
    alignItems: "center",

    "&[data-selected='false']": {
      opacity: 0.25,
    },
  },
  SectionsSettingsDeleteButton: {
    width: "2rem",
    height: "2rem",
    display: "flex",
    padding: "0",
    alignItems: "center",
    lineHeight: "2rem",
    borderRadius: "50%",
    justifyContent: "center",
  },
  SectionsSettingsButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "0.5rem",
  },
  SectionsSettingsNotesAndLegend: {
    fontSize: "smaller",
  },
}));
