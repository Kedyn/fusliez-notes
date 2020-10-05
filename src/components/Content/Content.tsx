import { NAMESPACE, VERSION } from "utils/constants";

import DesktopContent from "components/Content/DesktopContent";
import MobileContent from "components/Content/MobileContent";
import React from "react";
import { useMobile } from "context/MobileContextProvider";

export default function Content(): JSX.Element {
  const { isMobile } = useMobile()!; // eslint-disable-line

  let content = <DesktopContent />;

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

  if (isMobile) {
    content = <MobileContent />;
  }

  return <React.Fragment>{content}</React.Fragment>;
}
