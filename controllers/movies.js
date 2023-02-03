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
  //if a input is left blank it will remove it so the default we set in models appears otherwise it will take a empty string as the input
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

function show(req, res) {
  //find movie by _id
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movies/show", {
        title: "Movie Detail",
        movie: movie,
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
  //pass it to a render for movies/show.ejs
}

function deleteMovie(req, res) {
  Movie.findByIdAndDelete(req.params.id)
    .then((movie) => {
      res.redirect("/movies")
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}

function edit(req, res) {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movies/edit", {
        title: "Edit Movie",
        movie,
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}

function update(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(", ")
  }

  for (const key in req.body) {
    if (req.body[key] === "") {
      delete req.body[key]
    }
  }
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((movie) => {
      res.redirect(`/movies/${movie._id}`)
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
export {
  newMovie as new,
  create,
  index,
  show,
  deleteMovie as delete,
  edit,
  update,
}
