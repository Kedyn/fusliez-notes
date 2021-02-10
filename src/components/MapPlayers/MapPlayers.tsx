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
            imageRect.x = mapContext.mousePos.x - imageRect.w / 2;
            imageRect.y = mapContext.mousePos.y - imageRect.h / 2;
          }
        } else if (movingPlayer !== "" && movingPlayer === player) {
          setMovingPlayer("");

          dispatch(
            setPlayerPosition({
              player: player as IPlayerColor,
              newPosition: {
                x: mapContext.mousePos.x - imageRect.w / 2,
                y: mapContext.mousePos.y - imageRect.h / 2,
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
