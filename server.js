import express from "express";
import bodyParser from "body-parser";
import mongoose, { get } from "mongoose";
import cors from "cors";
import env from "dotenv";

import { get404 } from "./controllers/error.js";

import mailRouter from "./routes/mail.js";
import colourRouter from "./routes/colours.js";

const app = express();
const port = process.env.PORT || 3000;
env.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(mailRouter);
app.use(colourRouter);
app.use(get404);

mongoose
  .connect(
    `mongodb+srv://ishu:${process.env.MONGO_KEY}@cluster0.bbugwp2.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log("Connected to Database");
    });
  })
  .catch((err) => {
    console.log(err);
  });
