import { createUseStyles } from "react-jss";

export default createUseStyles({
  SettingsPlayersSections: {},
  SettingsPlayersSectionItem: {
    display: "flex",

    marginBottom: "0.5rem",
  },
  SettingsPlayersSectionsHandle: {
    cursor: "grab",

    "&:active": {
      cursor: "grabbing",
    },
  },
  SettingsInputContainer: {
    flexGrow: 1,
    padding: "0 0.5rem",
  },
  SettingsInput: {
    display: "block",
    width: "100%",
  },
  SettingsPlayersSection: {
    cursor: "pointer",
    padding: "0 0.5rem",

    "&[data-selected='false']": {
      opacity: 0.25,
    },
  },
  SettingsDeleteButton: {
    padding: "0rem 0.25rem",
    marginRight: "0.5rem",
  },
  SettingsSectionsButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "0.5rem",
  },
});
