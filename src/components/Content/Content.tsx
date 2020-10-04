import DesktopContent from "components/Content/DesktopContent";
import MobileContent from "components/Content/MobileContent";
import React from "react";
import { useMobile } from "context/MobileContextProvider";

export default function Content(): JSX.Element {
  const { isMobile } = useMobile()!; // eslint-disable-line

  let content = <DesktopContent />;

  if (isMobile) {
    content = <MobileContent />;
  }

  return <React.Fragment>{content}</React.Fragment>;
}
