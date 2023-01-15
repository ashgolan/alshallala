import { User } from "../model/user.model.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};
export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  if (!user) throw Error("bad data!!");
  res.send(user);
};
