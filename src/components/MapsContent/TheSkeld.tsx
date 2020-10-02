import React from "react";
import { useTranslation } from "react-i18next";

export default function TheSkeld(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg viewBox="0 0 1366 768" {...props}>
      <title>{"TheSkeld"}</title>
      <image
        fill="#b3cde0"
        href="assets/TheSkeld.png"
        preserveAspectRatio="xMidYMid meet"
      />
      <text
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={65}
        x={1165}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.vents")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={165}
        x={1165}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.commonTasks")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={135}
        x={1165}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.wiringTasks")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={100}
        x={1165}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.ventConnections")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={195}
        x={1165}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.securityCameras")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={230}
        x={1165}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.cameraZones")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={139}
        x={677.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.cafeteria")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={220}
        x={964.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.weapons")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={360}
        x={1205}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.navigation")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={575}
        x={983.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.shields")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={687}
        x={796}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.communications")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={565}
        x={650.5}
        fillOpacity="null"
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
        y={492}
        x={451.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.electrical")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={560}
        x={178.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.lowerEngine")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={381}
        x={81.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.reactor")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={190}
        x={181.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.upperEngine")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={276}
        x={440.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
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
        y={380}
        x={324}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.security")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={423}
        x={852.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
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
        y={364}
        x={932.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.o2")}
      </text>
    </svg>
  );
}
