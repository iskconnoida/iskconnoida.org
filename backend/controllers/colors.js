import Color from "../models/color.js";

export default async function getColors(req, res) {
  try {
    const colors = await Color.findAll();
    if (colors) {
      res.status(200).json(colors);
    } else {
      res.status(404).send("Colors not found!");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).send("Internal Server Error");
  }
}
