import { Movie } from "../models/movie.js"

function newMovie(req, res) {
  res.render("movies/new", {
    title: "Add Movie",
  })
}

function create(req, res) {
  //massage the data
  //handle checkbox
  //handle separating the big cast string into smaller ones
  req.body.nowShowing = !!req.body.nowShowing
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(", ")
  }
  for (const key in req.body) {
    if (req.body[key] === "") {
      delete req.body[key]
    }
  }
  //use the model to create a movie(using form data in req.body)
  Movie.create(req.body)
    .then((movie) => {
      res.redirect("/movies")
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/movies/new")
    })
  //redirect to new movie page
}

function index(req, res) {
  Movie.find({})
    .then((movies) => {
      res.render("movies/index", {
        title: "All Movies",
        movies: movies,
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}

export { newMovie as new, create, index }
