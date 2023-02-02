import { Router } from "express"
import * as moviesCtrl from "../controllers/movies.js"
const router = Router()

/* GET /movies/new */
router.get("/",moviesCtrl.index)
router.get("/new", moviesCtrl.new)



// POST /movies
router.post("/",moviesCtrl.create)
export { router }


