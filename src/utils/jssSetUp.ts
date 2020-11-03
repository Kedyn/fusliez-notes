import { SheetsRegistry, jss } from "react-jss";

import normalize from "normalize-jss";
import preset from "jss-preset-default";

export default function jssSetUp(): SheetsRegistry {
  jss.setup(preset());

  const sheetsRegistry = new SheetsRegistry();

  const normalizeStyles = jss.createStyleSheet(normalize).attach();

  const globalStyles = jss
    .createStyleSheet({
      "@global": {
        "*, *:before, *:after": {
          boxSizing: "inherit",
        },
        html: {
          boxSizing: "border-box",
          height: "100%",
        },
        body: {
          fontWeight: 400,
          lineHeight: 1.5,
          height: "100%",
        },
        "#root": {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxWidth: "1920px",
          margin: "0 auto",
          width: "100vw",
          overflowX: "hidden",
        },
        footer: {
          textAlign: "center",
          fontSize: "smaller",
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
          fontWeight: 400,
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
          fontFamily: "inherit",
          padding: ".375rem .75rem",
          borderRadius: "0.5rem",
        },
        a: {
          textDecoration: "none",
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
