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
        href="assets/images/TheSkeld.png"
        preserveAspectRatio="xMidYMid meet"
      />
      <text
        fontFamily="Titillium Web, sans-serif"
        fontWeight="bold"
        fontSize={22}
        y={30}
        x={1160}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#fff"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.vents")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontWeight="bold"
        fontSize={22}
        y={55}
        x={1160}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#fff"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.ventConnections")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontWeight="bold"
        fontSize={22}
        y={82}
        x={1160}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#fff"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.wiringTasks")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontWeight="bold"
        fontSize={22}
        y={108}
        x={1160}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#fff"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.commonTasks")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontWeight="bold"
        fontSize={22}
        y={136}
        x={1160}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#fff"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.securityCameras")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontWeight="bold"
        fontSize={22}
        y={165}
        x={1160}
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
        fontSize={32}
        y={168}
        x={700}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.cafeteria")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={225}
        x={1000}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.weapons")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={355}
        x={1155}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.navigation")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={28}
        y={560}
        x={990}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.shields")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={28}
        y={655}
        x={830}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.communications")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={565}
        x={680}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.storage")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={492}
        x={515.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.electrical")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={540}
        x={185.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.lowerEngine")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={370}
        x={170}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.reactor")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={175}
        x={190.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.upperEngine")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={315}
        x={490}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.medBay")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={360}
        x={365}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.security")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={425}
        x={885.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.admin")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={330}
        x={942.5}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.o2")}
      </text>
    </svg>
  );
}
