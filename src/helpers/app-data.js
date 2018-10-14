import jsonFile from "jsonfile";

const appData = {
  appDataFile: "app-data.json",

  write: (key, value) => {
    let json = jsonFile.readFileSync(this.appDataFile);
    json[key] = value;
    return jsonFile.writeFile(this.appDataFile, json);
  },

  get: (key) => {
    if (this.exists(key)) {
      let json = jsonFile.readFileSync(this.appDataFile);
      return json[key];
    } else {
      throw key + " does not exists"
    }
  },

  modify: (key, value) => {
    let json = jsonFile.readFileSync(this.appDataFile);
    json[key] = value;
    return jsonFile.writeFile(this.appDataFile, json);
  },

  exists: (key) => {
    let json = jsonFile.readFileSync(this.appDataFile);
    return (key in json);
  }

};

module.exports = appData;
