import dir from "../utils/dir.js";
import ytdl from "ytdl-core";
import fs from "fs";
import path from "path";
import extractAudio from "ffmpeg-extract-audio";

export default {
  downloadFile: async (req, res, type) => {
    const clientID =
      "client-" + req.connection.remoteAddress.replace(/\D/g, "");
    const outputDirectory = process.env.OUTPUT_DIR || "downloaded";
    let fileOutputDirectory = path.join(outputDirectory, clientID);
    const { videoURL } = req.query;

    dir.createDir(fileOutputDirectory);

    await ytdl.getInfo(videoURL, (err, info) => {
      if (err) {
        err.status = 500;
        err.stack = "Internal server error.";
        res.render("error", {
          error: err,
        });
      }
      fileOutputDirectory = path.join(fileOutputDirectory, info.title);
    });

    ytdl(videoURL)
      .pipe(fs.createWriteStream(fileOutputDirectory+".mp4"))
      .on("finish", () => {

        if(type ==='audio'){
            await extractAudio({
                input: fileOutputDirectory+".mp4",
                output: fileOutputDirectory+".mp3"
            });

            res.download(fileOutputDirectory+".mp3");
        }
         else {
            res.download(fileOutputDirectory+".mp4");
         }

      });
  },
};
