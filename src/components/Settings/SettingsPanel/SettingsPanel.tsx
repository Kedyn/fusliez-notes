import {
  getIsColorBlind,
  getShowNames,
  setIsColorBlind,
  setShowNames,
} from "store/slices/SettingsSlice";
import {
  getPlayersContainer,
  getPlayersLists,
  resetPlayersLists,
  setPlayersContainer,
  setPlayersLists,
  setPlayersListsTitle,
} from "store/slices/PlayersListsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILanguage } from "utils/types";
import RadioButton from "components/common/RadioButton";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import Switch from "components/common/Switch";
import { getIsMobile } from "store/slices/DeviceSlice";
import i18next from "i18next";
import useStyles from "./SettingsPanel.styles";
import { useTranslation } from "react-i18next";

export default function SettingsPanel(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const showNames = useSelector(getShowNames);
  const isColorBlind = useSelector(getIsColorBlind);
  const playersLists = useSelector(getPlayersLists);
  const playersContainer = useSelector(getPlayersContainer);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [language, setLanguage] = React.useState<string>("en-US");

  const classes = useStyles({ isMobile });

  React.useEffect(() => {
    const localLanguage = localStorage.getItem("i18nextLng");

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  const handleSwitchLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.currentTarget.value;

    i18next.changeLanguage(newLanguage);

    setLanguage(newLanguage);
  };

  const languages: Array<ILanguage> = [
    {
      id: "en-US",
      label: "English (US)",
    },
    {
      id: "es-MX",
      label: "Spanish (MX)",
    },
    {
      id: "pt-BR",
      label: "Portuguese (BR)",
    },
    {
      id: "ru-RU",
      label: "Russian (RU)",
    },
    {
      id: "de-DE",
      label: "German (DE)",
    },
    {
      id: "fa-IR",
      label: "Persian (IR)",
    },
    {
      id: "pl-PL",
      label: "Polish (PL)",
    },
  ];

  return (
    <div className={classes.SettingsPanel}>
      {isMobile && (
        <h2 className={classes.SettingsPanelTitle}>{t("settings.title")}</h2>
      )}
      <div className={classes.SettingsContent}>
        <div className={classes.SettingsPane}>
          <h4>{t("settings.playerTiles")}</h4>
          <Switch
            label={t("settings.usePlayerNames")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setShowNames(event.currentTarget.checked));
            }}
            checked={showNames}
          />
          <Switch
            label={t("settings.colorBlindMode")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setIsColorBlind(event.currentTarget.checked));
            }}
            checked={isColorBlind}
          />

          <div className={classes.SettingsContentDivider} />

          <ReactSortable
            handle=".list-handle"
            delayOnTouchOnly={isMobile}
            delay={isMobile ? 10 : 0}
            forceFallback={true}
            list={playersLists}
            setList={(newState) => dispatch(setPlayersLists(newState))}
            className={classes.SettingsPlayersLists}
          >
            {playersLists.map((list) => (
              <div key={list.id} className={classes.SettingsPlayersListItem}>
                <div
                  className={`list-handle ${classes.SettingsPlayersListsHandle}`}
                >
                  <FontAwesomeIcon icon="sort" size="lg" />
                </div>

                <div className={classes.SettingsInputContainer}>
                  <input
                    type="text"
                    placeholder="Section name"
                    className={classes.SettingsInput}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch(
                        setPlayersListsTitle({
                          index: list.id as number,
                          title: event.currentTarget.value,
                        })
                      );
                    }}
                    value={t(list.title) as string}
                  />
                </div>

                <div
                  className={classes.SettingsPlayersContainer}
                  data-selected={playersContainer === list.id}
                  onClick={() =>
                    dispatch(setPlayersContainer(list.id as number))
                  }
                >
                  <FontAwesomeIcon icon="users" />
                </div>

                <div>
                  <Button
                    danger
                    className={classes.SettingsDeleteButton}
                    onClick={() => {
                      if (list.id !== playersContainer) {
                        dispatch(
                          setPlayersLists([
                            ...playersLists.filter(
                              (element) => element.id !== list.id
                            ),
                          ])
                        );
                      }
                    }}
                  >
                    <FontAwesomeIcon icon="times" size="sm" />
                  </Button>
                </div>
              </div>
            ))}
          </ReactSortable>

          <div className={classes.SettingsSectionsButtons}>
            <Button
              onClick={() => {
                dispatch(
                  setPlayersLists([
                    ...playersLists,

                    { id: playersLists.length, title: "", players: [] },
                  ])
                );
              }}
            >
              {t("settings.addSection")}
            </Button>
            <Button
              danger
              onClick={() => {
                dispatch(resetPlayersLists());
              }}
            >
              {t("settings.resetSections")}
            </Button>
          </div>

          <p>
            <small>
              Note: changing the players container (
              <FontAwesomeIcon icon="users" size="sm" />) will only reset after
              clicking Reset Round or Reset All.
            </small>
          </p>
        </div>

        <div className={classes.SettingsPane}>
          <h4>{t("settings.language")}</h4>
          {languages.map((option, index) => (
            <RadioButton
              key={index}
              label={option.label}
              name="appLanguage"
              id={option.id}
              value={option.id}
              onChange={handleSwitchLanguage}
              checked={language === option.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
