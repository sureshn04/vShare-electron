// This is main process of Electron, started as first thing when your
// app starts. It runs through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import path from "path";
import url from "url";
import {app, Menu} from "electron";
import {devMenuTemplate} from "./menu/dev_menu_template";
import {aboutMenuTemplate, fileMenuTemplate} from "./menu/menu_templates";
import createWindow from "./helpers/window";

import env from "env";


const setApplicationMenu = () => {
  const menus = [fileMenuTemplate];
  if (env.name !== "production") {
    menus.push(devMenuTemplate);
  }
  menus.push(aboutMenuTemplate);
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};


// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
if (env.name !== "production") {
  const userDataPath = app.getPath("userData");
  app.setPath("userData", `${userDataPath} (${env.name})`);
}

app.on("ready", () => {
  setApplicationMenu();

  const options = {};
  options.width = 1000;
  options.height = 600;
  /*  options.webPreferences = {
      nodeIntegration: true
    };*/

  const mainWindow = createWindow("main", options);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "html/app.html"),
      protocol: "file:",
      slashes: true
    })
  );
});

app.on("window-all-closed", () => {
  app.quit();
});
