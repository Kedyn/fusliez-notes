import {
  addNewSection,
  delSection,
  getDeadSectionId,
  getResetSectionId,
  getSections,
  getUnusedSectionId,
  resetSectionsState,
  setDeadSection,
  setResetSection,
  setSectionTitle,
  setSections,
  setUnusedSection,
} from "store/slices/SectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import cx from "classnames";
import { getIsMobile } from "store/slices/DeviceSlice";
import useStyles from "./SectionsSettings.styles";
import { useTranslation } from "react-i18next";

export default function SectionsSettings(): JSX.Element {
  const isMobile = useSelector(getIsMobile);
  const sections = useSelector(getSections);
  const resetSection = useSelector(getResetSectionId);
  const deadSection = useSelector(getDeadSectionId);
  const unusedSection = useSelector(getUnusedSectionId);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <div className={classes.SectionsSettings}>
      <ReactSortable
        handle=".list-handle"
        delayOnTouchOnly={isMobile}
        delay={isMobile ? 10 : 0}
        forceFallback={true}
        list={sections}
        setList={(newState) => dispatch(setSections(newState))}
        className={classes.SectionsSettingsList}
      >
        {sections.map((section) => (
          <div
            data-testid={`section${section.id}`}
            key={section.id}
            className={classes.SectionsSettingsItem}
          >
            <div className={cx("list-handle", classes.SectionsSettingsHandle)}>
              <FontAwesomeIcon icon="sort" size="lg" />
            </div>

            <div className={classes.SectionsSettingsInputContainer}>
              <input
                type="text"
                value={t(section.title) as string}
                placeholder={t("settings.sectionName")}
                className={classes.SectionsSettingsInput}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch(
                    setSectionTitle({
                      section: section.id as number,
                      newTitle: evt.currentTarget.value,
                    })
                  );
                }}
              />
            </div>

            <div
              className={classes.SectionsSettingsOption}
              data-selected={resetSection === section.id}
              data-testid={`section-${section.id}-reset`}
              onClick={() => dispatch(setResetSection(section.id as number))}
            >
              <FontAwesomeIcon icon="users" />
            </div>

            <div
              className={classes.SectionsSettingsOption}
              data-selected={deadSection === section.id}
              data-testid={`section-${section.id}-dead`}
              onClick={() => dispatch(setDeadSection(section.id as number))}
            >
              <FontAwesomeIcon icon="skull-crossbones" />
            </div>

            <div
              className={classes.SectionsSettingsOption}
              data-selected={unusedSection === section.id}
              data-testid={`section-${section.id}-unused`}
              onClick={() => dispatch(setUnusedSection(section.id as number))}
            >
              <FontAwesomeIcon icon="users-slash" />
            </div>

            <Button
              danger={
                section.id !== resetSection &&
                section.id !== deadSection &&
                section.id !== unusedSection
              }
              data-testid={`delete-section-${section.id}`}
              disabled={
                section.id === resetSection ||
                section.id === deadSection ||
                section.id === unusedSection
              }
              className={classes.SectionsSettingsDeleteButton}
              onClick={() => {
                dispatch(delSection(section.id as number));
              }}
            >
              <FontAwesomeIcon icon="times" size="sm" />
            </Button>
          </div>
        ))}
      </ReactSortable>

      <div className={classes.SectionsSettingsButtons}>
        <Button
          onClick={() => {
            dispatch(addNewSection());
          }}
        >
          {t("settings.addSection")}
        </Button>
        <Button danger onClick={() => dispatch(resetSectionsState())}>
          {t("settings.resetSections")}
        </Button>
      </div>

      <p className={classes.SectionsSettingsNotesAndLegend}>
        {t("settings.sectionsNote")}
        <br />
        {t("settings.resetSection")} -{" "}
        <FontAwesomeIcon icon="users" size="sm" />
        <br />
        {t("settings.deadSection")} -{" "}
        <FontAwesomeIcon icon="skull-crossbones" size="sm" />
        <br />
        {t("settings.unusedSection")} -{" "}
        <FontAwesomeIcon icon="users-slash" size="sm" />
      </p>
    </div>
  );
}
