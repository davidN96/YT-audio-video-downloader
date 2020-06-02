import ytdl from "ytdl-core";
import time from "../utils/time.js";

export default {
  getInfo: (req, res, next) => {
    const url = req.query.video_url;

    const getInfoCallback = (err, info) => {
      if (err) {
        err.status = 404;
        err.stack = "Could not find video.";
        res.render("error", {
          error: err,
          message: " Wrong URL address.",
        });
      } else {
        const videoId = info.playerResponse.videoDetails.videoId;

        res.render("find", {
          title: info.title,
          time: time.secondsToHours(info.length_seconds),
          author: info.author.name,
          thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`,
          videoURL: url,
        });
      }
    };

    ytdl.getInfo(url, getInfoCallback);
  },
};
