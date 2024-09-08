import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import mysql from "mysql";
import { get404 } from "./controllers/error.js";
import mailRouter from "./routes/mail.js";

const app = express();
const port = process.env.PORT || 3000;

/** server configs */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://localhost:5173",
      "http://localhost:80",
      "https://localhost:80",
      "http://localhost:443",
      "https://localhost:443",
      "http://prd.master.iskconnoida.org",
      "https://prd.master.iskconnoida.org",
      "http://dev.env.iskconnoida.org",
      "https://dev.env.iskconnoida.org",
      "http://iskconnoida.org",
      "https://iskconnoida.org",
    ],
    optionsSuccessStatus: 200,
  }),
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

/** handle endpoints */
app.use(mailRouter);
app.use(get404);

const con = mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});
MYSQL_USER = "root"
MYSQL_PASSWORD = "password"

con.connect((err) => {
  if (err) console.error(err);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("Connected to Database");
  });
  // con.query("select * from Loans", (err, res) => {
  //   if (err) console.error(err);
  //   console.log(res);
  // });
});
