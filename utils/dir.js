import path from "path";
import fs from "fs";

export default {
  createDir: (path) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  },
};
