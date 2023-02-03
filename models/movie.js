import mongoose from "mongoose"

const Schema = mongoose.Schema
const reviewSchema = new Schema(
  {
    content: String,
    rating: { type: Number, min: 1, max: 5, default: 5 },
  },
  { timestamps: true }
)

const movieSchema = new Schema(
  {
    title: { type: String, required: true }, //make is required to enter a title
    releaseYear: {
      type: Number,
      //add the current year in case year is left blank
      default: function () {
        return new Date().getFullYear()
      },
      min: 1927, //makes it so the minimum year inserted is that
    },
    mpaaRating: { type: String, enum: ["G", "PG", "PG-13", "R"] }, //makes it so that only these are acceptable
    nowShowing: { type: Boolean, default: false },
    reviews: [reviewSchema],
  },
  { timestamps: true }
)

const Movie = mongoose.model("Movie", movieSchema)

export { Movie }
