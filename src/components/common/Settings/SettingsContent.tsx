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
  const { names, setNames } = useSettings()!; // eslint-disable-line
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
      name: "Background Color",
      hex: backgroundColor,
      change: setBackgroundColor,
    },
    {
      name: "Text Color",
      hex: textColor,
      change: setTextColor,
    },
    {
      name: "Input Background Color",
      hex: inputBackgroundColor,
      change: setInputBackgroundColor,
    },
    {
      name: "Input Text Color",
      hex: inputTextColor,
      change: setInputTextColor,
    },
    {
      name: "Neutral Background Color",
      hex: neutralBackgroundColor,
      change: setNeutralBackgroundColor,
    },
    {
      name: "Neutral Text Color",
      hex: neutralTextColor,
      change: setNeutralTextColor,
    },
    {
      name: "Innocent Background Color",
      hex: innocentBackgroundColor,
      change: setInnocentBackgroundColor,
    },
    {
      name: "Innocent Text Color",
      hex: innocentTextColor,
      change: setInnocentTextColor,
    },
    {
      name: "Impostor Background Color",
      hex: impostorBackgroundColor,
      change: setImpostorBackgroundColor,
    },
    {
      name: "Impostor Text Color",
      hex: impostorTextColor,
      change: setImpostorTextColor,
    },
    {
      name: "Button Background Color",
      hex: buttonBackgroundColor,
      change: setButtonBackgroundColor,
    },
    {
      name: "Button Text Color",
      hex: buttonTextColor,
      change: setButtonTextColor,
    },
    {
      name: "Button Danger Background Color",
      hex: buttonDangerBackgroundColor,
      change: setButtonDangerBackgroundColor,
    },
    {
      name: "Button Danger Text Color",
      hex: buttonDangerTextColor,
      change: setButtonDangerTextColor,
    },
    {
      name: "Border Color",
      hex: borderColor,
      change: setBorderColor,
    },
    {
      name: "Link Color",
      hex: linkColor,
      change: setLinkColor,
    },
  ];

  const [language, setLanguage] = React.useState<string>("en-US");
  const [themeHover, setThemeHover] = React.useState<string>(
    "Click a color to change it"
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

    setDisplayColorPicker(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.uiContainer}>
        <h4>UI Settings</h4>
        <div className={classes.content}>
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
        <h4>Theme Settings</h4>

        <div className={`${classes.content} ${classes.themeButtons}`}>
          {colors.map((color, index) => (
            <button
              key={index}
              className={classes.themeButton}
              onMouseEnter={() => setThemeHover(color.name)}
              onMouseLeave={() => setThemeHover("Click a color to change it")}
              onClick={() => changeColor(color)}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>

        <Modal
          title={`Change ${activeColor.name}`}
          show={displayColorPicker}
          onClose={() => setDisplayColorPicker(false)}
          footer={
            <button
              onClick={() => {
                setDisplayColorPicker(false);
              }}
            >
              Done
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
          Reset Colors
        </button>
      </div>
    </div>
  );
}
