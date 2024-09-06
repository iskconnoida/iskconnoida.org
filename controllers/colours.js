import { Colour } from "../models/colours.js";

export async function getColour(req, res) {
  try {
    const name = req.body.name;
    const colour = await Colour.findOne({ name: name });
    if (!colour) {
      res.status(404).send("Colour not found");
    } else {
      res.status(200).json(colour.shades);
    }
  } catch (err) {
    console.log(`Error - ${err}`);
    res.status(500).send("Internal Server Error");
  }
}
