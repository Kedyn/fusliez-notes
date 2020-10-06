import Backdrop from "./Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { IView } from "utils/types";
import React from "react";
import useStyles from "./SlideDrawer.styles";

export interface ISideDrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (state: boolean) => void;
  views: Array<IView>;
  setActiveView: (value: IView) => void;
}

export default function SlideDrawer(
  props: ISideDrawerProps
): JSX.Element | null {
  const classes = useStyles();

  const { isDrawerOpen, setIsDrawerOpen, views, setActiveView } = props;

  const ref = React.useRef<HTMLDivElement>(null);

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

  const handleChangeActiveView = (view: IView) => {
    setActiveView(view);

    setIsDrawerOpen(false);
  };

  if (isDrawerOpen) {
    return (
      <React.Fragment>
        <Backdrop />

        <div className={`${classes.root} ${classes.drawerOpen}`} ref={ref}>
          <div className={classes.back} onClick={() => setIsDrawerOpen(false)}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </div>

          <ul className={classes.nav}>
            {views.map((view, index) => (
              <li
                key={index}
                className={classes.navItem}
                onClick={() => handleChangeActiveView(view)}
              >
                {view.title}
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
}
