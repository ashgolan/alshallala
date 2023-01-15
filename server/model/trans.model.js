import { model, Schema } from "mongoose";

const transSchema = new Schema({
  owner: { type: String, required: true },
  year: { type: String, required: true },
  data: { type: Array },
  price: { type: Array },
  message: { type: Array },
});

export const Trans = model("Trans", transSchema);
