import { SheetsRegistry, jss } from "react-jss";
import normalize from "normalize-jss";

import { ITheme } from "./types";
import { STYLE_VARS } from "./styleVars";
import preset from "jss-preset-default";

export default function jssSetUp(theme: ITheme): SheetsRegistry {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const normalizeStyles = jss.createStyleSheet(normalize).attach();

  const globalStyles = jss
    .createStyleSheet({
      "@global": {
        body: {
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          fontFamily: STYLE_VARS.fontFamily,
          fontSize: STYLE_VARS.baseFontSize,
        },
        "#root": {
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          maxWidth: "1920px",
          margin: "0 auto",
          width: "100vw",
          overflowX: "hidden",
        },
        footer: {
          textAlign: "center",
          fontSize: "smaller",
        },
        "#controls": {
          padding: "1rem",
        },
        "#maps": {
          flexGrow: 1,
        },
        h1: {
          fontSize: "2rem",
          margin: 0,
        },
        h2: {
          fontSize: "1.75rem",
          margin: ".5rem 0",
          fontWeight: "500",
          lineHeight: "1.2",
        },
        h3: {
          margin: 0,
        },
        h4: {
          margin: ".5rem 0",
        },
        img: {
          maxWidth: "100%",
          height: "auto",
        },
        input: {
          backgroundColor: "transparent",
          color: theme.inputTextColor,
          appearance: "none",
          border: "none",
          boxShadow: "none",
        },
        "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "input[type=number]": {
          "-moz-appearance": "textfield",
        },
        textarea: {
          backgroundColor: theme.inputBackgroundColor,
          color: theme.inputTextColor,
          fontFamily: "inherit",
          padding: ".375rem .75rem",
          border: `1px solid ${theme.borderColor}`,
          borderRadius: "0.5rem",
        },
        button: {
          textAlign: "center",
          border: "1px solid transparent",
          padding: ".375rem .75rem",
          fontFamily: STYLE_VARS.fontFamily,
          borderRadius: "0.5rem",
          transition:
            "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
          display: "block",
          width: "100%",
          cursor: "pointer",
          backgroundColor: theme.linkColor,
          color: theme.backgroundColor,

          "&:hover": {
            backgroundColor: theme.linkColorHover,
          },
        },
        a: {
          textDecoration: "none",
          color: theme.linkColor,
          "&:hover": {
            textDecoration: "underline",
          },
          "&:focus": {
            textDecoration: "underline",
          },
        },
        ul: {
          marginTop: 0,
        },
        li: {
          fontSize: "1rem",
        },
        ".sr-only": {
          border: 0,
          clip: "rect(0, 0, 0, 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",
        },
      },
    })
    .attach();

  sheetsRegistry.add(normalizeStyles);
  sheetsRegistry.add(globalStyles);

  return sheetsRegistry;
}
