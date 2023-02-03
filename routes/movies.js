import { Router } from "express"
import * as moviesCtrl from "../controllers/movies.js"
const router = Router()

/* GET /movies*/
router.get("/", moviesCtrl.index)
/* GET /movies/new */
router.get("/new", moviesCtrl.new)
/* GET /movies/:id */
router.get("/:id", moviesCtrl.show)
//GET /movies/:id/edit
router.get("/:id/edit", moviesCtrl.edit)

// POST /movies
router.post("/", moviesCtrl.create)

//DELETE /movies/:id
router.delete("/:id", moviesCtrl.delete)

//PUT /movies/:id
router.put("/:id",moviesCtrl.update)
export { router }
