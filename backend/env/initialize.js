//NOTE: UNFINISHED FILE, PROCEED WITH CAUTION
import Color from "../models/color.js";

export default async function initialize() {
  try {
    Color.create({
      name: "red",
      shades: {
        fifty: "#ffebee",
        hundred: "#ffcdd2",
        twoHundred: "#ef9a9a",
        threeHundred: "#e57373",
        fourHundred: "#ef5350",
        fiveHundred: "#f44336",
        sixHundred: "#e53935",
        sevenHundred: "#d32f2f",
        eightHundred: "#c62828",
        nineHundred: "#b71c1c",
      },
      selected: true,
    });
    console.log("Red color object created successfully!");
  } catch (error) {
    console.log(`Unable to create colors: ${error.message}`);
  }
}
