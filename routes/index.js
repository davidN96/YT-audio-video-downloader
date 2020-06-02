import express from "express";
import findController from "../controllers/find.controller.js";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/find", findController.getInfo);

export default router;
