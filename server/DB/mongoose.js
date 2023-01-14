import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.3gg7oig.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose
  .connect(URL)
  .then(() => {
    console.log("connected ...");
  })
  .catch((e) => {
    console.log("error", e);
  });
