import { NAMESPACE, VERSION } from "utils/constants";

import DesktopLayout from "components/Layout/DesktopLayout";
import MobileLayout from "components/Layout/MobileLayout";
import React from "react";
import { useMobile } from "context/MobileContextProvider";

export default function Content(): JSX.Element {
  const { isMobile } = useMobile()!; // eslint-disable-line

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

  if (isMobile) {
    content = <MobileLayout />;
  }

  return <React.Fragment>{content}</React.Fragment>;
}
