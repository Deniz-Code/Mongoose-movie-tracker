import mongoose, { mongo } from "mongoose"

const Schema = mongoose.Schema

const movieSchema = new Schema(
  {
    title: String,
    releaseYear: { type: Number, default: 2000 },
    mpaaRating: String,
    cast: [String],
    nowShowing: {type:Boolean ,default:false},
  },
  { timestamps: true }
)

const Movie = mongoose.model("Movie", movieSchema)

export { Movie }
