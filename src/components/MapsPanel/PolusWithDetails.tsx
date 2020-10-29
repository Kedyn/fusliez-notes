import React from "react";
import { useTranslation } from "react-i18next";

export default function Polus(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg viewBox="0 0 1366 768" {...props}>
      <title>{"Polus"}</title>
      <image
        fill="#b3cde0"
        href="assets/Polus-detailed.jpg"
        preserveAspectRatio="xMidYMid meet"
      />
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={375}
        x={244.5}
        strokeOpacity="null"
        strokeWidth="0.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.electrical")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={365}
        x={75.5}
        strokeOpacity="null"
        strokeWidth="0.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.security")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={433}
        x={865.5}
        strokeOpacity="null"
        strokeWidth="0.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.east")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={361}
        x={618.5}
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
        fontSize={32}
        y={260}
        x={994.5}
        strokeOpacity="null"
        strokeWidth="1.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.laboratory")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={28}
        y={597}
        x={1035.5}
        strokeOpacity="null"
        strokeWidth="1"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.specimenRoom")}
      </text>
      <text
        transform="rotate(45 684.608 655)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={28}
        y={632}
        x={673.5}
        strokeOpacity="null"
        strokeWidth="1"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.admin")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={660}
        x={342.5}
        strokeOpacity="null"
        strokeWidth="1"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.weapons")}
      </text>
      <text
        transform="rotate(45 424.608 494)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={531}
        x={303.5}
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
        fontSize={26}
        y={499}
        x={659.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.office")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={500}
        x={71.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.o2")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={428}
        x={409.5}
        strokeOpacity="null"
        strokeWidth="1.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.central")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={250}
        x={712.5}
        strokeOpacity="null"
        strokeWidth="0.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.northeast")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={632}
        x={475.5}
        strokeOpacity="null"
        strokeWidth="0.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.south")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={598}
        x={85.5}
        strokeOpacity="null"
        strokeWidth="0.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.southwest")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={248}
        x={285.5}
        strokeOpacity="null"
        strokeWidth="0.5"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.northwest")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontWeight="bold"
        fontSize={22}
        y={45}
        x={890}
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
        fontWeight="bold"
        fontSize={22}
        y={77.5}
        x={890}
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
        fontWeight="bold"
        fontSize={22}
        y={110}
        x={890}
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
        fontWeight="bold"
        fontSize={22}
        y={45}
        x={1110}
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
        fontWeight="bold"
        fontSize={22}
        y={77.5}
        x={1110}
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
        fontWeight="bold"
        fontSize={22}
        y={110}
        x={1110}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.cameraZones")}
      </text>
    </svg>
  );
}
