import { NOTES } from "constants/changelog";
import React from "react";
import { VERSION } from "constants/main";
import { getIsMobile } from "store/slices/DeviceSlice";
import { useSelector } from "react-redux";
import useStyles from "./ChangelogPanel.styles";

export default function ChangelogPanel(): JSX.Element {
  const isMobile = useSelector(getIsMobile);

  const classes = useStyles({ isMobile });

  return (
    <div className={classes.ChangelogPanel}>
      {isMobile && (
        <h2
          className={classes.ChangelogPanelTitle}
        >{`fusliez notes v${VERSION} notes`}</h2>
      )}
      {NOTES.map(({ title, items }, index) => (
        <div key={index}>
          <h3>{title}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
