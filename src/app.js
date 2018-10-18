//import "./stylesheets/main.css";
import "./helpers/context_menu.js";
import "./helpers/external_links.js";
import {remote} from "electron";
import firstRun from "./helpers/first-run";
import "./secure";
import url from "url";
import path from "path";

const app = remote.app;
const currentWindow = remote.getCurrentWindow();

console.log("starting app.js");

const firstCheck = () => {
  console.log("Checking if app is running for first time");
  if (firstRun.isFirstRun()) {
    console.log("......App is running for first time");

    currentWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "html/intro.html"),
        protocol: "file:",
        slashes: true
      })
    );
  }
};

window.onload = firstCheck;

//document.addEventListener("load", firstCheck);

