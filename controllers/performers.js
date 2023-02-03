import { Performer } from "../models/performer.js"

function newPerformer(req, res) {
  res.render("performers/new", 
  { title: "Add Performer" })
}

export { newPerformer as new }
