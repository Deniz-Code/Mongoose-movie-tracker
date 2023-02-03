import { Router } from "express"
import * as moviesCtrl from "../controllers/movies.js"
const router = Router()

/* GET /movies*/
router.get("/",moviesCtrl.index)
/* GET /movies/new */
router.get("/new", moviesCtrl.new)
/* GET /movies/:id */
router.get("/:id", moviesCtrl.show)


// POST /movies
router.post("/",moviesCtrl.create)
export { router }


