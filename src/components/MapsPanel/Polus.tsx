import React from "react";
import { useTranslation } from "react-i18next";

export default function Polus(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg viewBox="0 0 1366 768" {...props}>
      <title>{"Polus"}</title>
      <image href="assets/images/Polus.jpg" />
      <text y={375} x={244.5}>
        {t("maps.electrical")}
      </text>
      <text y={365} x={75.5}>
        {t("maps.security")}
      </text>
      <text y={433} x={865.5}>
        {t("maps.east")}
      </text>
      <text y={361} x={618.5}>
        {t("maps.storage")}
      </text>
      <text fontSize={32} y={260} x={994.5}>
        {t("maps.laboratory")}
      </text>
      <text fontSize={28} y={597} x={1035.5}>
        {t("maps.specimenRoom")}
      </text>
      <text transform="rotate(45 684.608 655)" y={632} x={673.5}>
        {t("maps.admin")}
      </text>
      <text y={660} x={342.5}>
        {t("maps.weapons")}
      </text>
      <text transform="rotate(45 424.608 494)" y={531} x={303.5}>
        {t("maps.communications")}
      </text>
      <text y={499} x={659.5}>
        {t("maps.office")}
      </text>
      <text y={500} x={71.5}>
        {t("maps.o2")}
      </text>
      <text y={428} x={409.5}>
        {t("maps.central")}
      </text>
      <text y={250} x={712.5}>
        {t("maps.northeast")}
      </text>
      <text y={632} x={475.5}>
        {t("maps.south")}
      </text>
      <text y={598} x={85.5}>
        {t("maps.southwest")}
      </text>
      <text y={248} x={285.5}>
        {t("maps.northwest")}
      </text>
      <g className="MapDescriptions">
        <text fontSize={22} y={45} x={890}>
          {t("maps.vents")}
        </text>
        <text fontSize={22} y={77.5} x={890}>
          {t("maps.commonTasks")}
        </text>
        <text fontSize={22} y={110} x={890}>
          {t("maps.wiringTasks")}
        </text>
        <text fontSize={22} y={45} x={1110}>
          {t("maps.ventConnections")}
        </text>
        <text fontSize={22} y={77.5} x={1110}>
          {t("maps.securityCameras")}
        </text>
        <text fontSize={22} y={110} x={1110}>
          {t("maps.cameraZones")}
        </text>
      </g>
    </svg>
  );
}
