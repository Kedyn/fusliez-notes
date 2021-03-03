import {
  getPlayerEditLock,
  togglePlayerEditLock,
} from "store/slices/PlayerEditLockSlice";
import {
  getResetSectionId,
  getSections,
  movePlayersToResetSection,
} from "store/slices/SectionsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import React from "react";
import Section from "components/Section";
import { getIsMobile } from "store/slices/DeviceSlice";
import { getShowNames } from "store/slices/SettingsSlice";
import { setPlayersSection } from "store/slices/PlayersSlice";
import useStyles from "./Sections.styles";
import { useTranslation } from "react-i18next";

export default function Sections(): JSX.Element {
  const showNames = useSelector(getShowNames);
  const isLocked = useSelector(getPlayerEditLock);
  const isMobile = useSelector(getIsMobile);
  const sections = useSelector(getSections);
  const resetSectionId = useSelector(getResetSectionId);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const classes = useStyles({ isMobile });

  return (
    <div className={classes.Sections}>
      {sections.map((section) => (
        <Section key={section.id} data={section} />
      ))}

      <div className={classes.SectionsControls}>
        {showNames && (
          <Button onClick={() => dispatch(togglePlayerEditLock())}>
            {isLocked ? t("controls.unlockEditing") : t("controls.lockEditing")}
          </Button>
        )}

        {isMobile && (
          <Button
            onClick={() => {
              dispatch(movePlayersToResetSection());
              dispatch(setPlayersSection(resetSectionId));
            }}
          >
            {t("controls.resetSections")}
          </Button>
        )}
      </div>
    </div>
  );
}
