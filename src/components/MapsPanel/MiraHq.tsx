import React from "react";
import { useTranslation } from "react-i18next";

export default function MiraHq(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg viewBox="0 0 1366 768" {...props}>
      <title>{"MiraHq"}</title>
      <image
        fill="#b3cde0"
        href="assets/Mirahq.png"
        preserveAspectRatio="xMidYMid meet"
      />
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={106}
        x={842.5}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.greenhouse")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={154}
        x={936.5}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.admin")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={232}
        x={794.5}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.office")}
      </text>
      <text
        transform="rotate(45.439 727.06 812.293) scale(.78224 1)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={551.511}
        x={705.185}
        strokeOpacity="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.communications")}
      </text>
      <text
        transform="rotate(67.008 640.961 672.111) scale(.83183 1)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={583.612}
        x={630.578}
        fillOpacity="null"
        strokeOpacity="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.lockerRoom")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={651}
        x={798.5}
        strokeOpacity="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.medBay")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={544}
        x={1054.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.cafeteria")}
      </text>
      <text
        transform="rotate(45 938.725 548.208)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={555}
        x={901.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.storage")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={699}
        x={1047.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.balcony")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={629}
        x={310.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.launchpad")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={328}
        x={492.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.reactor")}
      </text>
      <text
        transform="rotate(45 705.725 339.208)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={346}
        x={653.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.laboratory")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={280}
        x={264.5}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.vents")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={315}
        x={265}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.ventConnections")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={345}
        x={265}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.wiringTasks")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={380}
        x={264.5}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.commonTasks")}
      </text>
    </svg>
  );
}
