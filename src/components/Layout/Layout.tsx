import { BREAKPOINT, NAMESPACE, VERSION } from "utils/constants";
import {
  getIsMobile,
  getOrientation,
  setIsMobile,
  setOrientation,
} from "store/slices/DeviceSlice";
import { useDispatch, useSelector } from "react-redux";

import DesktopLayout from "components/Layout/DesktopLayout";
import MobileLayout from "components/Layout/MobileLayout";
import React from "react";

export default function Content(): JSX.Element {
  const [width, setWidth] = React.useState(window.innerWidth);

  const isMobile = useSelector(getIsMobile);
  const orientation = useSelector(getOrientation);

  const dispatch = useDispatch();

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

  return <React.Fragment>{content}</React.Fragment>;
}
