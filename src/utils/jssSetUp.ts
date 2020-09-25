import { SheetsRegistry, jss } from "react-jss";

import { ITheme } from "./types";
import preset from "jss-preset-default";

export default function jssSetUp(theme: ITheme): SheetsRegistry {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss
    .createStyleSheet({
      "@global": theme.global,
    })
    .attach();

  sheetsRegistry.add(globalStyleSheet);

  return sheetsRegistry;
}
