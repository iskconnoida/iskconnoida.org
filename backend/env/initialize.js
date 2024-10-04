import Color from "../models/color.js";
import db from "../utils/db.js";
import colors from "./colors.js";

async function initialize() {
  try {
    db.sync();
    console.log("\x1b[36m%s\x1b[0m", "Database connected successfully!");
    for (let color of colors) {
      await Color.create({
        name: color.name,
        shades: {
          fifty: color.fifty,
          hundred: color.hundred,
          twoHundred: color.twoHundred,
          threeHundred: color.threeHundred,
          fourHundred: color.fourHundred,
          fiveHundred: color.fiveHundred,
          sixHundred: color.sixHundred,
          sevenHundred: color.sevenHundred,
          eightHundred: color.eightHundred,
          nineHundred: color.nineHundred,
        },
        selected: false,
      });
      console.log(
        "\x1b[36m%s\x1b[0m",
        `"${color.name}" color object created successfully!`,
      );
    }
    await Color.update({ selected: true }, { where: { name: "violet" } });
    console.log(
      "\x1b[36m%s\x1b[0m",
      `"violet" color object selected as default!`,
    );
  } catch (error) {
    console.log(`Unable to create colors: ${error.message}`);
  }
}

initialize();
