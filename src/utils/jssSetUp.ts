import { SheetsRegistry, jss } from "react-jss";

import { ITheme } from "./types";
import preset from "jss-preset-default";

export default function jssSetUp(theme: ITheme): SheetsRegistry {
  jss.setup(preset());

  const sheets_registry = new SheetsRegistry();

  const global_style_sheet = jss
    .createStyleSheet({
      "@global": theme.global,
    })
    .attach();

  sheets_registry.add(global_style_sheet);

  return sheets_registry;
}
