import path from "path";
import fs from "fs";
import rimraf from "rimraf";

export default {
  createDir: (path) => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  },
  removeDir: (path) => {
    rimraf(path, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },
};
