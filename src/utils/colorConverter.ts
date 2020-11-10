import { COLOR_LIBRARY } from "constants/theme";
import { ITheme } from "./types";

export function getColorValue(color: string, shade: string): string {
  if (typeof COLOR_LIBRARY[color.toLowerCase()] != "undefined") {
    if (shade === "dark") {
      return hexToRGB(COLOR_LIBRARY[color.toLowerCase()].dark);
    } else {
      return hexToRGB(COLOR_LIBRARY[color.toLowerCase()].base);
    }
  }
  return "0, 0, 0";
}

export function hexToRGB(hex: string): string {
  let r = 0,
    g = 0,
    b = 0;

  hex = hex.replace("#", "");

  r = parseInt(hex.slice(0, 2), 16);
  g = parseInt(hex.slice(2, 4), 16);
  b = parseInt(hex.slice(4, 6), 16);

  return `${r},${g},${b}`;
}

//function to decide whether to use light or dark text color
export function contrastColor(color: string, theme: ITheme): string {
  const output =
    luma(color) >= 140
      ? theme.backgroundColorSecondary
      : theme.textColorSecondary;
  return output;
}

// function to find the luma of a color for contrast purposes
export function luma(color: string): number {
  const rgb = color.split(",");
  return (
    0.2126 * parseInt(rgb[0]) +
    0.7152 * parseInt(rgb[1]) +
    0.0733 * parseInt(rgb[2])
  );
}

// lighten or darken a color (like in sass)
export function lightenDarkenColor(color: string, amount: number): string {
  let usePound = false;

  if (color[0] == "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
