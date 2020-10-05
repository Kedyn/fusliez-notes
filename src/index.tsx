import "./i18n";

import App from "components/App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("root"));

const requestWakeLock = async () => {
  if ("wakeLock" in navigator) {
    await navigator.wakeLock.request("screen");
  }
};

requestWakeLock();

document.addEventListener("visibilitychange", async () => {
  if ("wakeLock" in navigator && document.visibilityState === "visible") {
    await navigator.wakeLock.request("screen");
  }
});
