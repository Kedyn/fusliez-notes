import { IMobileContext } from "utils/types";
import React from "react";

const MobileContext: React.Context<
  IMobileContext | undefined
> = React.createContext<IMobileContext | undefined>(undefined);

export interface IMobileContextProviderProps {
  children?: React.ReactNode;
}

export default function MobileContextProvider(
  props: IMobileContextProviderProps
): JSX.Element {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [orientation, setOrientation] = React.useState(
    window.innerHeight > window.innerWidth ? "portrait" : "landscape"
  );

  const breakpoint = 846;

  const isMobile = width <= breakpoint;

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
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
      setOrientation(
        window.innerHeight < window.innerWidth ? "portrait" : "landscape"
      );
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [window, orientation]);

  return (
    <MobileContext.Provider value={{ isMobile, orientation }}>
      {props.children}
    </MobileContext.Provider>
  );
}

export const useMobile = (): IMobileContext | undefined =>
  React.useContext(MobileContext);
