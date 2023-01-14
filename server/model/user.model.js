import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  Phone: { type: String, default: "0000000000" },
  userID: { type: String, default: "000000000" },
  waterTrans: { type: Array },
});

export const User = model("User", userSchema);
