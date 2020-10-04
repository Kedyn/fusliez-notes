import { SheetsRegistry, jss } from "react-jss";

import { ITheme } from "./types";
import preset from "jss-preset-default";

export default function jssSetUp(theme: ITheme): SheetsRegistry {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const globalStyleSheet = jss
    .createStyleSheet({
      "@global": {
        "*, *:before, *:after": {
          boxSizing: "inherit",
        },
        html: {
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          fontFamily: "Titillium Web, sans-serif",
          fontSize: 20,
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
        main: {
          flexGrow: 1,
          display: "flex",
          margin: "0 1rem",
        },
        footer: {
          textAlign: "center",
          fontSize: "smaller",
        },
        "#main": {
          padding: "0.25rem",
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
        'input[type="text"],input[type="number"],input[type="text"]:focus,input[type="number"]:focus': {
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
          fontFamily: "inherit",
          borderRadius: "0.5rem",
          transition:
            "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
          display: "block",
          width: "100%",
          cursor: "pointer",
          backgroundColor: theme.buttonBackgroundColor,
          color: theme.buttonTextColor,
        },
        a: {
          textDecoration: "none",
          color: theme.linkColor,
        },
        ul: {
          marginTop: 0,
        },
        li: {
          fontSize: "1rem",
        },
      },
    })
    .attach();

  sheetsRegistry.add(globalStyleSheet);

  return sheetsRegistry;
}
