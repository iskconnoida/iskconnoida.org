import mongoose from "mongoose";

const colourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shades: {
    type: Map,
    of: String,
  },
});

const Colour = mongoose.model("Colour", colourSchema);

export { Colour };
