import mongoose, { mongo } from "mongoose"

const Schema = mongoose.Schema

const movieSchema = new Schema(
  {
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean,
  },
  { timestamps: true }
)

const Movie =mongoose.model("Movie",movieSchema)

export {
  Movie
}