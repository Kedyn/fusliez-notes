import { Trans, useTranslation } from "react-i18next";
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
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { getIsMobile } from "store/slices/DeviceSlice";
import useStyles from "./SettingsPlayersSections.styles";

export default function SettingsPlayersSections(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const playersLists = useSelector(getPlayersLists);
  const playersContainer = useSelector(getPlayersContainer);

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
              onClick={() => dispatch(setPlayersContainer(list.id as number))}
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
          <Trans i18nKey="settings.sectionsNote">
            Note: changing the players container (
            <FontAwesomeIcon icon="users" size="sm" />) will only reset after
            clicking Reset Round or Reset All.
          </Trans>
        </small>
      </p>
    </React.Fragment>
  );
}
