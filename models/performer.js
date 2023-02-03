import mongoose from "mongoose"

const Schema = mongoose.Schema

const performerSchema = new Schema(
  {
    //                           makes the date be unique
    name: { type: String, required: true }, //,unique:true}
  },
  { timestamps: true }
)

const Performer = mongoose.model("Performer", performerSchema)

export { Performer }
