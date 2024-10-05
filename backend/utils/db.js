import "dotenv/config";
import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.MYSQL_HOST,
    pool: {
      max: 10,
    },
  },
);

export default db;
