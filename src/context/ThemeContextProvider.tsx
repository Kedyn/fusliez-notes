import { DEFAULT_THEME_DATA, NAMESPACE } from "utils/constants";
import { ITheme, IThemeContext } from "utils/types";
import { JssProvider, ThemeProvider } from "react-jss";

import React from "react";
import jssSetUp from "utils/jssSetUp";

const ThemeContext: React.Context<
  IThemeContext | undefined
> = React.createContext<IThemeContext | undefined>(undefined);

const namespace = `${NAMESPACE}theme`;

const localThemeData: string | null = localStorage.getItem(namespace);
const themeData: ITheme = localThemeData
  ? JSON.parse(localThemeData)
  : DEFAULT_THEME_DATA;

export interface IThemeContextProviderProps {
  children?: React.ReactNode;
}

export default function ThemeContextProvider(
  props: IThemeContextProviderProps
): JSX.Element {
  const [backgroundColor, setBackgroundColor] = React.useState<string>(
    themeData.backgroundColor
  );
  const [textColor, setTextColor] = React.useState<string>(themeData.textColor);

  const [inputBackgroundColor, setInputBackgroundColor] = React.useState<
    string
  >(themeData.inputBackgroundColor);
  const [inputTextColor, setInputTextColor] = React.useState<string>(
    themeData.inputTextColor
  );

  const [neutralBackgroundColor, setNeutralBackgroundColor] = React.useState<
    string
  >(themeData.neutralBackgroundColor);
  const [neutralTextColor, setNeutralTextColor] = React.useState<string>(
    themeData.neutralTextColor
  );

  const [innocentBackgroundColor, setInnocentBackgroundColor] = React.useState<
    string
  >(themeData.innocentBackgroundColor);
  const [innocentTextColor, setInnocentTextColor] = React.useState<string>(
    themeData.innocentTextColor
  );

  const [impostorBackgroundColor, setImpostorBackgroundColor] = React.useState<
    string
  >(themeData.impostorBackgroundColor);
  const [impostorTextColor, setImpostorTextColor] = React.useState<string>(
    themeData.impostorTextColor
  );

  const [buttonBackgroundColor, setButtonBackgroundColor] = React.useState<
    string
  >(themeData.buttonBackgroundColor);
  const [buttonTextColor, setButtonTextColor] = React.useState<string>(
    themeData.buttonTextColor
  );

  const [
    buttonDangerBackgroundColor,
    setButtonDangerBackgroundColor,
  ] = React.useState<string>(themeData.buttonDangerBackgroundColor);
  const [buttonDangerTextColor, setButtonDangerTextColor] = React.useState<
    string
  >(themeData.buttonDangerTextColor);

  const [borderColor, setBorderColor] = React.useState<string>(
    themeData.borderColor
  );

  const [linkColor, setLinkColor] = React.useState<string>(themeData.linkColor);

  const [theme, setTheme] = React.useState<ITheme>({
    backgroundColor,
    textColor,

    inputBackgroundColor,
    inputTextColor,

    neutralBackgroundColor,
    neutralTextColor,

    innocentBackgroundColor,
    innocentTextColor,

    impostorBackgroundColor,
    impostorTextColor,

    buttonBackgroundColor,
    buttonTextColor,

    buttonDangerBackgroundColor,
    buttonDangerTextColor,

    borderColor,

    linkColor,
  });

  React.useEffect(() => {
    setTheme({
      backgroundColor,
      textColor,

      inputBackgroundColor,
      inputTextColor,

      neutralBackgroundColor,
      neutralTextColor,

      innocentBackgroundColor,
      innocentTextColor,

      impostorBackgroundColor,
      impostorTextColor,

      buttonBackgroundColor,
      buttonTextColor,

      buttonDangerBackgroundColor,
      buttonDangerTextColor,

      borderColor,

      linkColor,
    });
  }, [
    backgroundColor,
    textColor,

    inputBackgroundColor,
    inputTextColor,

    neutralBackgroundColor,
    neutralTextColor,

    innocentBackgroundColor,
    innocentTextColor,

    impostorBackgroundColor,
    impostorTextColor,

    buttonBackgroundColor,
    buttonTextColor,

    buttonDangerBackgroundColor,
    buttonDangerTextColor,

    borderColor,

    linkColor,
  ]);

  React.useEffect(() => {
    localStorage.setItem(namespace, JSON.stringify(theme));
  }, [theme]);

  const resetColors = () => {
    setBackgroundColor(DEFAULT_THEME_DATA.backgroundColor);
    setTextColor(DEFAULT_THEME_DATA.textColor);

    setInputBackgroundColor(DEFAULT_THEME_DATA.inputBackgroundColor);
    setInputTextColor(DEFAULT_THEME_DATA.inputTextColor);

    setNeutralBackgroundColor(DEFAULT_THEME_DATA.neutralBackgroundColor);
    setNeutralTextColor(DEFAULT_THEME_DATA.neutralTextColor);

    setInnocentBackgroundColor(DEFAULT_THEME_DATA.innocentBackgroundColor);
    setInnocentTextColor(DEFAULT_THEME_DATA.innocentTextColor);

    setImpostorBackgroundColor(DEFAULT_THEME_DATA.impostorBackgroundColor);
    setImpostorTextColor(DEFAULT_THEME_DATA.impostorTextColor);

    setButtonBackgroundColor(DEFAULT_THEME_DATA.buttonBackgroundColor);
    setButtonTextColor(DEFAULT_THEME_DATA.buttonTextColor);

    setButtonDangerBackgroundColor(
      DEFAULT_THEME_DATA.buttonDangerBackgroundColor
    );
    setButtonDangerTextColor(DEFAULT_THEME_DATA.buttonDangerTextColor);

    setBorderColor(DEFAULT_THEME_DATA.borderColor);

    setLinkColor(DEFAULT_THEME_DATA.linkColor);
  };

  return (
    <ThemeContext.Provider
      value={{
        backgroundColor,
        textColor,

        inputBackgroundColor,
        inputTextColor,

        neutralBackgroundColor,
        neutralTextColor,

        innocentBackgroundColor,
        innocentTextColor,

        impostorBackgroundColor,
        impostorTextColor,

        buttonBackgroundColor,
        buttonTextColor,

        buttonDangerBackgroundColor,
        buttonDangerTextColor,

        borderColor,

        linkColor,

        setBackgroundColor,
        setTextColor,

        setInputBackgroundColor,
        setInputTextColor,

        setNeutralBackgroundColor,
        setNeutralTextColor,

        setInnocentBackgroundColor,
        setInnocentTextColor,

        setImpostorBackgroundColor,
        setImpostorTextColor,

        setButtonBackgroundColor,
        setButtonTextColor,

        setButtonDangerBackgroundColor,
        setButtonDangerTextColor,

        setBorderColor,

        setLinkColor,

        resetColors,
      }}
    >
      <JssProvider registry={jssSetUp(theme)}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </JssProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = (): IThemeContext | undefined =>
  React.useContext(ThemeContext);
