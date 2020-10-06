import { STYLE_VARS, COLOR_LIBRARY } from "utils/styleVars";

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
export function contrastColor(color: string): string {
  const output =
    luma(color) >= 140
      ? STYLE_VARS.backgroundColorSecondary
      : STYLE_VARS.textColorSecondary;
  // console.log(output);
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
