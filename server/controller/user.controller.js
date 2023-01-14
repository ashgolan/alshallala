import { User } from "../model/user.model.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};
