import express from "express";
import findController from "../controllers/find.controller.js";
import downloadController from "../controllers/download.controller.js";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/find", findController.getInfo);

router.get("/downloadAudio", (req, res) =>
  downloadController.downloadFile(req, res, "audio")
);

router.get("/downloadVideo", (req, res) =>
  downloadController.downloadFile(req, res, "video")
);

export default router;
