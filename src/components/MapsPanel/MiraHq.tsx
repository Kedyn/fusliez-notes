import React from "react";
import { useTranslation } from "react-i18next";

export default function MiraHq(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg viewBox="0 0 1366 768" {...props}>
      <title>{"MiraHq"}</title>
      <image href="assets/images/Mirahq.jpg" />
      <text y={155} x={812.5}>
        {t("maps.greenhouse")}
      </text>
      <text y={254} x={949.5}>
        {t("maps.admin")}
      </text>
      <text y={232} x={784.5}>
        {t("maps.office")}
      </text>
      <text
        transform="rotate(45.439 727.06 812.293) scale(.78224 1)"
        y={551.511}
        x={705.185}
      >
        {t("maps.communications")}
      </text>
      <text
        transform="rotate(67.008 600.961 652.111) scale(.83183 1)"
        y={580.612}
        x={590.578}
      >
        {t("maps.lockerRoom")}
      </text>
      <text fontSize={28} y={666} x={778.5}>
        {t("maps.medBay")}
      </text>
      <text y={560} x={1054.5}>
        {t("maps.cafeteria")}
      </text>
      <text
        transform="rotate(45 938.725 548.208)"
        fontSize={28}
        y={565}
        x={909.5}
      >
        {t("maps.storage")}
      </text>
      <text y={704} x={1077.5}>
        {t("maps.balcony")}
      </text>
      <text y={612} x={214.5}>
        {t("maps.launchpad")}
      </text>
      <text fontSize={28} y={400} x={408}>
        {t("maps.reactor")}
      </text>
      <text transform="rotate(45 705.725 339.208)" y={420} x={653.5}>
        {t("maps.laboratory")}
      </text>
      <g className="MapDescriptions">
        <text y={63} x={1140}>
          {t("maps.vents")}
        </text>
        <text y={98} x={1140}>
          {t("maps.ventConnections")}
        </text>
        <text y={135} x={1140}>
          {t("maps.wiringTasks")}
        </text>
        <text y={172} x={1140}>
          {t("maps.commonTasks")}
        </text>
      </g>
    </svg>
  );
}
