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
        href="assets/Mirahq-detailed.jpg"
        preserveAspectRatio="xMidYMid meet"
      />
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={155}
        x={842.5}
        stroke="#000"
        strokeWidth="1"
        fill="#EEC200"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.greenhouse")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={254}
        x={949.5}
        stroke="#000"
        strokeWidth="1"
        fill="#EEC200"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.admin")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={232}
        x={794.5}
        stroke="#000"
        strokeWidth="0.75"
        fill="#EEC200"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.office")}
      </text>
      <text
        transform="rotate(45.439 727.06 812.293) scale(.78224 1)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={551.511}
        x={705.185}
        strokeOpacity="null"
        stroke="#000"
        fill="#FFEA8A"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.communications")}
      </text>
      <text
        transform="rotate(67.008 640.961 672.111) scale(.83183 1)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={625.612}
        x={643.578}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="1.25"
        stroke="#000"
        fill="#EEC200"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.lockerRoom")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={666}
        x={788.5}
        strokeOpacity="null"
        strokeWidth="1"
        stroke="#000"
        fill="#EEC200"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.medBay")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={560}
        x={1054.5}
        strokeOpacity="null"
        strokeWidth="1"
        stroke="#000"
        fill="#EEC200"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.cafeteria")}
      </text>
      <text
        transform="rotate(45 938.725 548.208)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={565}
        x={919.5}
        strokeOpacity="null"
        strokeWidth="1"
        stroke="#000"
        fill="#FFEA8A"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.storage")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={704}
        x={1077.5}
        strokeOpacity="null"
        strokeWidth="null"
        stroke="#000"
        fill="#FFEA8A"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.balcony")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={612}
        x={224.5}
        strokeOpacity="null"
        strokeWidth="1.25"
        stroke="#000"
        fill="#EEC200"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.launchpad")}
      </text>
      <text
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={400}
        x={428}
        strokeOpacity="null"
        strokeWidth="1"
        stroke="#000"
        fill="#FFEA8A"
        preserveAspectRatio="xMidYMid meet"
      >
        {t("maps.reactor")}
      </text>
      <text
        transform="rotate(45 705.725 339.208)"
        fontWeight="bold"
        fontFamily="Titillium Web, sans-serif"
        fontSize={22}
        y={420}
        x={653.5}
        strokeOpacity="null"
        strokeWidth="1"
        stroke="#000"
        fill="#EEC200"
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
