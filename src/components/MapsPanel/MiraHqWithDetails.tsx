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
        href="assets/images/Mirahq.jpg"
        preserveAspectRatio="xMidYMid meet"
      />
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={155}
        x={812.5}
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.greenhouse")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={254}
        x={949.5}
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
        y={232}
        x={784.5}
        strokeWidth="0.75"
        stroke="#fff"
        fill="#000"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.office")}
      </text>
      <text
        transform="rotate(45.439 727.06 812.293) scale(.78224 1)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={26}
        y={551.511}
        x={705.185}
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.communications")}
      </text>
      <text
        transform="rotate(67.008 600.961 652.111) scale(.83183 1)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={580.612}
        x={590.578}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0.75"
        stroke="#fff"
        fill="#000"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.lockerRoom")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={28}
        y={666}
        x={778.5}
        strokeOpacity="null"
        strokeWidth="0.75"
        stroke="#fff"
        fill="#000"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.medBay")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={560}
        x={1054.5}
        strokeOpacity="null"
        strokeWidth="0.75"
        stroke="#fff"
        fill="#000"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.cafeteria")}
      </text>
      <text
        transform="rotate(45 938.725 548.208)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={28}
        y={565}
        x={909.5}
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
        y={704}
        x={1077.5}
        strokeOpacity="null"
        strokeWidth="1.75"
        stroke="#000"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.balcony")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={32}
        y={612}
        x={214.5}
        strokeOpacity="null"
        strokeWidth="0.75"
        stroke="#fff"
        fill="#000"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.launchpad")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={28}
        y={400}
        x={408}
        strokeOpacity="null"
        strokeWidth="1.75"
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
        fontSize={28}
        y={420}
        x={653.5}
        strokeOpacity="null"
        strokeWidth="0.75"
        stroke="#fff"
        fill="#000"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.laboratory")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={63}
        x={1140}
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
        fontSize={22}
        y={98}
        x={1140}
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
        fontSize={22}
        y={135}
        x={1140}
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
        fontSize={22}
        y={172}
        x={1140}
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
