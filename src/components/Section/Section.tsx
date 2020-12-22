import { useDispatch, useSelector } from "react-redux";

import { IPlayerColor } from "utils/types/players";
import { ISection } from "utils/types/sections";
import Player from "components/Player";
import React from "react";
import { ReactSortable } from "react-sortablejs";
import { getIsMobile } from "store/slices/DeviceSlice";
import { getShowNames } from "store/slices/SettingsSlice";
import { setPlayerSection } from "store/slices/PlayersSlice";
import { setSectionPlayers } from "store/slices/SectionsSlice";
import useStyles from "./Section.styles";
import { useTranslation } from "react-i18next";

export interface ISectionProps {
  data: ISection;
}

export default function Section(props: ISectionProps): JSX.Element {
  const showNames = useSelector(getShowNames);
  const isMobile = useSelector(getIsMobile);

  const [isSorting, setIsSorting] = React.useState(false);

  const classes = useStyles({ showNames });

  const { data } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isMobile) {
      if (isSorting) {
        document.querySelector("body")!.classList.add("dragging"); // eslint-disable-line
      } else {
        document.querySelector("body")!.classList.remove("dragging"); // eslint-disable-line
      }
    }
  }, [isSorting]);

  return (
    <div className={classes.Section}>
      <h2 className={classes.SectionTitle}>{t(data.title)}</h2>

      <ReactSortable
        id={`Section${data.id}`}
        group="players"
        handle=".player-handle"
        delayOnTouchOnly={isMobile}
        // have to add filter and preventOnFilter
        // to enable input on mobile devices
        // but by doing so
        // limits the dragging by the icon only
        filter={isMobile ? "input" : ""}
        preventOnFilter={false}
        delay={isMobile ? 10 : 0}
        touchStartThreshold={3}
        list={data.players}
        setList={(newState) => {
          dispatch(
            setSectionPlayers({
              section: data.id as number,
              newPlayers: newState,
            })
          );
        }}
        className={classes.SectionArea}
        forceFallback={true}
        onChoose={() => setIsSorting(true)}
        onUnchoose={() => setIsSorting(false)}
        onEnd={(evt) => {
          dispatch(
            setPlayerSection({
              player: evt.item.id as IPlayerColor,
              newSection: parseInt(evt.to.id.substr(7)),
            })
          );
        }}
      >
        {data.players.map(({ id }) => (
          <Player key={id} playerId={id as IPlayerColor} />
        ))}
      </ReactSortable>
    </div>
  );
}
