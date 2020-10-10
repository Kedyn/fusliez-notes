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
        href="assets/Polus.png"
        preserveAspectRatio="xMidYMid meet"
      />
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={368}
        x={334.5}
        strokeOpacity="null"
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
        y={355}
        x={189.5}
        strokeOpacity="null"
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
        y={435}
        x={813.5}
        strokeOpacity="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.east")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={361}
        x={631.5}
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
        y={266}
        x={929.5}
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
        y={597}
        x={1013.5}
        strokeOpacity="null"
        strokeWidth="null"
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
        fontSize={20}
        y={662}
        x={653.5}
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
        y={676}
        x={403.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.weapons")}
      </text>
      <text
        transform="rotate(45 434.608 494)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={501}
        x={353.5}
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
        y={487}
        x={669.5}
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
        fontSize={20}
        y={519}
        x={181.5}
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
        fontSize={20}
        y={434}
        x={469.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.central")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={254}
        x={704.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.northeast")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={634}
        x={510.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.south")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={611}
        x={186.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.southwest")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={242}
        x={363.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.northwest")}
      </text>
      <text
        fontFamily="Titillium Web, sans-serif"
        fontSize={20}
        y={60}
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
        fontSize={20}
        y={95}
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
        fontSize={20}
        y={130}
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
        fontSize={20}
        y={60}
        x={1090}
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
        y={95}
        x={1090}
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
        y={130}
        x={1090}
        strokeOpacity="null"
        strokeWidth={0}
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.cameraZones")}
      </text>
      <ellipse
        ry={3}
        rx={3.5}
        cy={273.707}
        cx={444}
        fill="red"
        preserveAspectRatio="xMidYMid meet"
      />
      <ellipse
        ry={3}
        rx={3.5}
        cy={466.016}
        cx={892.72}
        fill="red"
        preserveAspectRatio="xMidYMid meet"
      />
      <ellipse
        ry={3}
        rx={3.5}
        cy={467.192}
        cx={553.975}
        fill="red"
        preserveAspectRatio="xMidYMid meet"
      />
      <ellipse
        ry={3}
        rx={3.5}
        cy={287.821}
        cx={787.45}
        fill="red"
        preserveAspectRatio="xMidYMid meet"
      />
      <ellipse
        ry={3}
        rx={3.5}
        cy={587.752}
        cx={595.141}
        fill="red"
        preserveAspectRatio="xMidYMid meet"
      />
      <ellipse
        ry={3}
        rx={3.5}
        cy={650.091}
        cx={266.394}
        fill="red"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}
