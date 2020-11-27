import { Trans, useTranslation } from "react-i18next";
import {
  getDefaultSection,
  getPlayersSections,
  resetPlayersSections,
  setDefaultSection,
  setPlayersSections,
  setPlayersSectionsTitle,
} from "store/slices/PlayersSectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { getIsMobile } from "store/slices/DeviceSlice";
import useStyles from "./SettingsPlayersSections.styles";

export default function SettingsPlayersSections(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const playersSections = useSelector(getPlayersSections);
  const defaultSection = useSelector(getDefaultSection);

  const classes = useStyles();

  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ReactSortable
        handle=".list-handle"
        delayOnTouchOnly={isMobile}
        delay={isMobile ? 10 : 0}
        forceFallback={true}
        list={playersSections}
        setList={(newState) => dispatch(setPlayersSections(newState))}
        className={classes.SettingsPlayersSections}
      >
        {playersSections.map((list) => (
          <div key={list.id} className={classes.SettingsPlayersSectionItem}>
            <div
              className={`list-handle ${classes.SettingsPlayersSectionsHandle}`}
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
                    setPlayersSectionsTitle({
                      index: list.id as number,
                      title: event.currentTarget.value,
                    })
                  );
                }}
                value={t(list.title) as string}
              />
            </div>

            <div
              className={classes.SettingsPlayersSection}
              data-selected={defaultSection === list.id}
              onClick={() => dispatch(setDefaultSection(list.id as number))}
            >
              <FontAwesomeIcon icon="users" />
            </div>

            <div>
              <Button
                danger={list.id !== defaultSection}
                className={classes.SettingsDeleteButton}
                onClick={() => {
                  if (list.id !== defaultSection) {
                    dispatch(
                      setPlayersSections([
                        ...playersSections.filter(
                          (element) => element.id !== list.id
                        ),
                      ])
                    );
                  }
                }}
                disabled={list.id === defaultSection}
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
              setPlayersSections([
                ...playersSections,

                { id: playersSections.length, title: "", players: [] },
              ])
            );
          }}
        >
          {t("settings.addSection")}
        </Button>
        <Button
          danger
          onClick={() => {
            dispatch(resetPlayersSections());
          }}
        >
          {t("settings.resetSections")}
        </Button>
      </div>

      <p>
        <small>
          <Trans i18nKey="settings.sectionsNote">
            Note: changing the default section (
            <FontAwesomeIcon icon="users" size="sm" />) will only be affected
            after clicking Reset Round or Reset All.
          </Trans>
        </small>
      </p>
    </React.Fragment>
  );
}
