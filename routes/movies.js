import { Router } from "express";
// import * as moviesCtrl from "../controllers/movies.js"
const router = Router();

/* GET movies listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

export { router };
