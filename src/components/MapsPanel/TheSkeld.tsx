import React from "react";
import { useTranslation } from "react-i18next";

export default function TheSkeld(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg viewBox="0 0 1366 768" {...props}>
      <title>{"TheSkeld"}</title>
      <image href="assets/images/TheSkeld.png" />
      <g className="MapDescriptions">
        <text y={30} x={1160}>
          {t("maps.vents")}
        </text>
        <text y={55} x={1160}>
          {t("maps.ventConnections")}
        </text>
        <text y={82} x={1160}>
          {t("maps.wiringTasks")}
        </text>
        <text y={108} x={1160}>
          {t("maps.commonTasks")}
        </text>
        <text y={136} x={1160}>
          {t("maps.securityCameras")}
        </text>
        <text y={165} x={1160}>
          {t("maps.cameraZones")}
        </text>
      </g>
      <text fontSize={32} y={168} x={700}>
        {t("maps.cafeteria")}
      </text>
      <text fontSize={32} y={225} x={1000}>
        {t("maps.weapons")}
      </text>
      <text fontSize={32} y={355} x={1155}>
        {t("maps.navigation")}
      </text>
      <text fontSize={28} y={560} x={990}>
        {t("maps.shields")}
      </text>
      <text fontSize={28} y={655} x={830}>
        {t("maps.communications")}
      </text>
      <text fontSize={32} y={565} x={680}>
        {t("maps.storage")}
      </text>
      <text fontSize={32} y={492} x={515.5}>
        {t("maps.electrical")}
      </text>
      <text fontSize={32} y={540} x={185.5}>
        {t("maps.lowerEngine")}
      </text>
      <text fontSize={32} y={370} x={170}>
        {t("maps.reactor")}
      </text>
      <text fontSize={32} y={175} x={190.5}>
        {t("maps.upperEngine")}
      </text>
      <text fontSize={32} y={315} x={490}>
        {t("maps.medBay")}
      </text>
      <text fontSize={32} y={360} x={365}>
        {t("maps.security")}
      </text>
      <text fontSize={32} y={425} x={885.5}>
        {t("maps.admin")}
      </text>
      <text fontSize={32} y={330} x={942.5}>
        {t("maps.o2")}
      </text>
    </svg>
  );
}
