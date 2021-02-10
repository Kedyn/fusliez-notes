import {
  getDeadSectionId,
  getResetSectionId,
  getUnusedSectionId,
} from "store/slices/SectionsSlice";
import { getPlayers, setPlayerPosition } from "store/slices/PlayersSlice";
import { useDispatch, useSelector } from "react-redux";

import { IPlayerColor } from "utils/types/players";
import { PLAYER_IMAGE } from "constants/players";
import React from "react";
import { useMapContext } from "components/Map/Map";

export default function MapPlayers(): null {
  const mapContext = useMapContext();

  const players = useSelector(getPlayers);
  const resetSectionId = useSelector(getResetSectionId);
  const deadSectionId = useSelector(getDeadSectionId);
  const unusedSectionId = useSelector(getUnusedSectionId);

  const dispatch = useDispatch();

  const [movingPlayer, setMovingPlayer] = React.useState<IPlayerColor | "">("");

  if (mapContext.players != null) {
    for (const player of Object.keys(players)) {
      const data = players[player as IPlayerColor];

      let image = PLAYER_IMAGE[player as IPlayerColor].alive;

      if (data.section === deadSectionId) {
        image = PLAYER_IMAGE[player as IPlayerColor].dead;
      }

      if (data.section !== unusedSectionId) {
        const imageRect = {
          x: data.position.x,
          y: data.position.y,
          w: image.w * 0.4,
          h: image.h * 0.4,
        };

        const maxX = mapContext.canvasContext!.canvas.width - imageRect.w;
        const maxY = mapContext.canvasContext!.canvas.height - imageRect.h;

        if (mapContext.mouseDown) {
          if (
            movingPlayer === "" &&
            mapContext.mousePos.x >= imageRect.x &&
            mapContext.mousePos.x <= imageRect.x + imageRect.w &&
            mapContext.mousePos.y >= imageRect.y &&
            mapContext.mousePos.y <= imageRect.y + imageRect.h
          ) {
            setMovingPlayer(player as IPlayerColor);
          } else if (movingPlayer === player) {
            imageRect.x = Math.min(
              Math.max(0, mapContext.mousePos.x - imageRect.w / 2),
              maxX
            );
            imageRect.y = Math.min(
              Math.max(0, mapContext.mousePos.y - imageRect.h / 2),
              maxY
            );
          }
        } else if (movingPlayer !== "" && movingPlayer === player) {
          setMovingPlayer("");

          dispatch(
            setPlayerPosition({
              player: player as IPlayerColor,
              newPosition: {
                x: Math.min(
                  Math.max(0, mapContext.mousePos.x - imageRect.w / 2),
                  maxX
                ),
                y: Math.min(
                  Math.max(0, mapContext.mousePos.y - imageRect.h / 2),
                  maxY
                ),
              },
            })
          );
        }

        mapContext.canvasContext?.drawImage(
          mapContext.players,
          image.x,
          image.y,
          image.w,
          image.h,
          imageRect.x,
          imageRect.y,
          imageRect.w,
          imageRect.h
        );
      }
    }
  }

  return null;
}
