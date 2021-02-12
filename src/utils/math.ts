import { ICoordinates, IRect } from "./types/shared";

export function pointInRect(point: ICoordinates, rect: IRect): boolean {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.w &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.h
  );
}
