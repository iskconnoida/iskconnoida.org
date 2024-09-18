import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import get404 from "./controllers/error.js";
import colorRouter from "./routes/colors.js";
import mailRouter from "./routes/mail.js";
import db from "./utils/db.js";

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
app.use(colorRouter);
app.use(mailRouter);
app.use(get404);

try {
  await db.authenticate();
  app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
    console.log("Connected to Database!");
  });
} catch (error) {
  console.error(`Unable to connect to database: ${error}`);
}
