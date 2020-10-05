import { ChromePicker } from "react-color";
import { IColor } from "utils/types";
import Modal from "../Modal";
import React from "react";
import Switch from "../Switch";
import i18next from "i18next";
import { useMobile } from "context/MobileContextProvider";
import { useSettings } from "context/SettingsContextProvider";
import useStyles from "./SettingsContent.styles";
import { useTheme } from "context/ThemeContextProvider";
import { useTranslation } from "react-i18next";

export default function SettingsContent(): JSX.Element {
  const { t } = useTranslation();
  const { isMobile } = useMobile()!; // eslint-disable-line
  const { names, scoresStyle, setNames, setScoresStyle } = useSettings()!; // eslint-disable-line
  const {
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
  } = useTheme()!; // eslint-disable-line

  const colors = [
    {
      name: t("settings.backgroundColor"),
      hex: backgroundColor,
      change: setBackgroundColor,
    },
    {
      name: t("settings.textColor"),
      hex: textColor,
      change: setTextColor,
    },
    {
      name: t("settings.inputBackgroundColor"),
      hex: inputBackgroundColor,
      change: setInputBackgroundColor,
    },
    {
      name: t("settings.inputTextColor"),
      hex: inputTextColor,
      change: setInputTextColor,
    },
    {
      name: t("settings.neutralBackgroundColor"),
      hex: neutralBackgroundColor,
      change: setNeutralBackgroundColor,
    },
    {
      name: t("settings.neutralTextColor"),
      hex: neutralTextColor,
      change: setNeutralTextColor,
    },
    {
      name: t("settings.innocentBackgroundColor"),
      hex: innocentBackgroundColor,
      change: setInnocentBackgroundColor,
    },
    {
      name: t("settings.innocentTextColor"),
      hex: innocentTextColor,
      change: setInnocentTextColor,
    },
    {
      name: t("settings.impostorBackgroundColor"),
      hex: impostorBackgroundColor,
      change: setImpostorBackgroundColor,
    },
    {
      name: t("settings.impostorTextColor"),
      hex: impostorTextColor,
      change: setImpostorTextColor,
    },
    {
      name: t("settings.buttonBackgroundColor"),
      hex: buttonBackgroundColor,
      change: setButtonBackgroundColor,
    },
    {
      name: t("settings.buttonTextColor"),
      hex: buttonTextColor,
      change: setButtonTextColor,
    },
    {
      name: t("settings.buttonDangerBackgroundColor"),
      hex: buttonDangerBackgroundColor,
      change: setButtonDangerBackgroundColor,
    },
    {
      name: t("settings.buttonDangerTextColor"),
      hex: buttonDangerTextColor,
      change: setButtonDangerTextColor,
    },
    {
      name: t("settings.borderColor"),
      hex: borderColor,
      change: setBorderColor,
    },
    {
      name: t("settings.linkColor"),
      hex: linkColor,
      change: setLinkColor,
    },
  ];

  const [language, setLanguage] = React.useState<string>("en-US");
  const [themeHover, setThemeHover] = React.useState<string>(
    t("settings.themeClick")
  );
  const [displayColorPicker, setDisplayColorPicker] = React.useState<boolean>(
    false
  );
  const [activeColor, setActiveColor] = React.useState<IColor>(colors[0]);
  const [selectedColor, setSelectedColor] = React.useState<string>(
    activeColor.hex
  );

  const classes = useStyles({ isMobile });

  React.useEffect(() => {
    const localLanguage = localStorage.getItem("i18nextLng");

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  const changeColor = (color: IColor) => {
    setActiveColor(color);

    setSelectedColor(color.hex);

    setDisplayColorPicker(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.uiContainer}>
        <h4>{t("settings.uiSettings")}</h4>
        <div className={classes.content}>
          {t("settings.scoresTypes")}:{" "}
          <select
            value={scoresStyle}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setScoresStyle(event.currentTarget.value);
            }}
          >
            <option value="bars">{t("settings.bars")}</option>
            <option value="circles">{t("settings.circles")}</option>
          </select>
          <hr />
          <Switch
            label={t("settings.usePlayerNames")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNames(event.currentTarget.checked);
            }}
            checked={names}
          />
          <hr />
          {t("settings.language")}:{" "}
          <select
            value={language}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              const newLanguage = event.currentTarget.value;

              i18next.changeLanguage(newLanguage);

              setLanguage(newLanguage);
            }}
          >
            <option value="en-US">English (US)</option>
            <option value="es-MX">Spanish (MX)</option>
            <option value="ru-RU">Russian (RU)</option>
          </select>
        </div>
      </div>
      <div className={classes.themeContainer}>
        <h4>{t("settings.themeSettings")}</h4>

        <div className={`${classes.content} ${classes.themeButtons}`}>
          {colors.map((color, index) => (
            <button
              key={index}
              className={classes.themeButton}
              onMouseEnter={() => setThemeHover(color.name)}
              onMouseLeave={() => setThemeHover(t("settings.themeClick"))}
              onClick={() => changeColor(color)}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>

        <Modal
          title={`${t("settings.change")} ${activeColor.name}`}
          show={displayColorPicker}
          onClose={() => setDisplayColorPicker(false)}
          footer={
            <button
              onClick={() => {
                setDisplayColorPicker(false);

                activeColor.change(selectedColor);
              }}
            >
              {t("settings.done")}
            </button>
          }
        >
          <ChromePicker
            color={selectedColor}
            onChangeComplete={(color) => setSelectedColor(color.hex)}
          />
        </Modal>

        <div className={classes.themeDescription}>
          <small>{themeHover}</small>
        </div>

        <button className={classes.resetTheme} onClick={() => resetColors()}>
          {t("settings.resetColors")}
        </button>
      </div>
    </div>
  );
}
