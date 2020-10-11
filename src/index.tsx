import "./i18n";

import App from "components/App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("load", setVh);
window.addEventListener("resize", setVh);

const requestWakeLock = async () => {
  if ("wakeLock" in navigator) {
    await navigator?.wakeLock.request("screen");
  }
};

requestWakeLock();

document.addEventListener("visibilitychange", async () => {
  if ("wakeLock" in navigator && document.visibilityState === "visible") {
    await navigator?.wakeLock.request("screen");
  }
});
