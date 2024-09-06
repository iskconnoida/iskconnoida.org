import { Colour } from "../models/colours.js";

export async function getColour(req, res) {
  try {
    const colours = await Colour.find();
    if (!colours) {
      res.status(404).send("Colours not found");
    } else {
      res.status(200).json(colours);
    }
  } catch (err) {
    console.log(`Error - ${err}`);
    res.status(500).send("Internal Server Error");
  }
}
