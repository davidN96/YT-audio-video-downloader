import dir from "../utils/dir.js";
import ytdl from "ytdl-core";
import fs from "fs";
import path from "path";

export default {
  downloadAudio: async (req, res, next) => {
    const clientID =
      "client-" + req.connection.remoteAddress.replace(/\D/g, "");
    const outputDirectory = process.env.OUTPUT_DIR || "downloaded";
    let fileOutputDirectory = path.join(outputDirectory, clientID);
    const { videoURL } = req.query;

    dirUtils.createDir(fileOutputDirectory);

    await ytdl.getInfo(videoURL, (err, info) => {
      if (err) {
        err.status = 500;
        err.stack = "Internal server error.";
        res.render("error", {
          error: err,
        });
      }
      fileOutputDirectory = path.join(fileOutputDirectory, `${info.title}.mp4`);
    });

    ytdl(videoURL)
      .pipe(fs.createWriteStream(fileOutputDirectory))
      .on("finish", () => {
        res.download(fileOutputDirectory);
      });
  },
};
