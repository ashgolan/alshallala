import { model, Schema } from "mongoose";

const transSchema = new Schema({
  year: { type: String, required: true },
  firstRead: { type: Number, default: 0 },
  secondRead: { type: Number, default: 0 },
  thirdRead: { type: Number, default: 0 },
  message: { type: Array },
});

export const Trans = model("Trans", transSchema);
