import firstRun from "./helpers/first-run";
import appData from "./helpers/app-data";

document.getElementById('finish').onclick = () => {
  let username = document.getElementById('username').value;
  appData.write('username', username);
  firstRun.firstRunDone();
};