import { DataTypes } from "sequelize";
import db from "../utils/db.js";

const Color = db.define("colors", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  shades: {
    type: DataTypes.JSON,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

try {
  db.sync();
  console.log('"colors" table created successfully!');
} catch (error) {
  console.log(`Unable to create table colors: ${error.message}`);
}

export default Color;
