import React from "react";
import useStyles from "./SlideDrawer.styles";
import Backdrop from "./Backdrop";
import Button from "components/common/Button";
import SettingsContent from "components/common/Settings/SettingsContent";
import { useData } from "context";

export default function SlideDrawer({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (state: boolean) => void;
}): JSX.Element | null {
  const classes = useStyles();
  const { resetPlayersPositions, resetAll } = useData()!; // eslint-disable-line

  const ref = React.useRef<HTMLDivElement>(null);
  //   const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  React.useEffect(() => {
    function handleHideDrawer(event: Event) {
      if (ref.current && !ref?.current?.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    }
    document.addEventListener("click", handleHideDrawer, true);

    return () => {
      document.removeEventListener("click", handleHideDrawer, true);
    };
  }, []);

  if (isDrawerOpen) {
    return (
      <div>
        <Backdrop />
        <div className={`${classes.root} ${classes.drawerOpen}`} ref={ref}>
          <img
            src={`assets/amongNotes.gif`}
            alt="Among Us Notes"
            className={classes.icon}
          />

          <div className={`${classes.container} ${classes.nonLastSection}`}>
            <Button
              classNames={classes.reset}
              onClick={() => resetPlayersPositions()}
            >
              Reset Round
            </Button>
            <Button
              classNames={`${classes.reset} ${classes.dangerButton}`}
              onClick={() => resetAll()}
            >
              Reset All
            </Button>
          </div>
          <div className={classes.container}>
            <h4>Settings ⚙️</h4>
            <SettingsContent />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
