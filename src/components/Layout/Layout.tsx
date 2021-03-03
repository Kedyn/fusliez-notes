import { BREAKPOINT, NAMESPACE, VERSION } from "constants/main";
import { Trans, useTranslation } from "react-i18next";
import {
  getIsMobile,
  getOrientation,
  setIsMobile,
  setOrientation,
} from "store/slices/DeviceSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/Button";
import React from "react";
import useStyles from "./Layout.styles";

const DesktopLayout = React.lazy(
  () => import(/* webpackChunkName: "desktop" */ "components/DesktopLayout")
);
const MobileLayout = React.lazy(
  () => import(/* webpackChunkName: "mobile" */ "components/MobileLayout")
);

export default function Content(): JSX.Element {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [showDisclaimer, setShowDisclaimer] = React.useState<null | string>(
    localStorage.getItem(`${NAMESPACE}disclaimer`)
  );

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);

  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  // This is only used to load the current theme colors
  const classes = useStyles(); // eslint-disable-line

  let content = <DesktopLayout />;

  React.useEffect(() => {
    const version = localStorage.getItem(`${NAMESPACE}version`);

    if (version === null || version !== VERSION) {
      const oldData = localStorage.getItem(`${NAMESPACE}data`);

      if (oldData) {
        const data = JSON.parse(oldData);

        localStorage.setItem(`${NAMESPACE}notes`, data.notes);

        localStorage.removeItem(`${NAMESPACE}data`);
      }
    }
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      dispatch(setIsMobile(window.innerWidth <= BREAKPOINT));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  React.useEffect(() => {
    const handleOrientationChange = () => {
      // logically, it's supposed to be innerHeight > innerWidth
      // return portrait, but it isn't behaving as expected
      dispatch(
        setOrientation(
          window.innerHeight < window.innerWidth ? "portrait" : "landscape"
        )
      );
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [window, orientation]);

  if (isMobile) {
    content = <MobileLayout />;
  }

  return (
    <React.Fragment>
      {content}

      {showDisclaimer === null && (
        <div
          style={{ direction: i18n.dir() }}
          className={classes.LayoutDisclaimer}
        >
          <p>
            <Trans i18nKey="main.disclaimer">
              Please know that we utilize Google Analytics to collect anonymous
              data, to help us with development.
              <br />
              For information on how Google utilizes or collects data please
              check
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </Trans>
          </p>
          <Button
            onClick={() => {
              setShowDisclaimer("Understood");

              localStorage.setItem(`${NAMESPACE}disclaimer`, "Understood");
            }}
          >
            {t("main.understand")}
          </Button>
        </div>
      )}
    </React.Fragment>
  );
}
