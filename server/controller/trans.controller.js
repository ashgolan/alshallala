import { Trans } from "../model/trans.model.js";

export const getTransactions = async (req, res) => {
  const transactions = await Trans.find();
  res.send(transactions);
};
export const getTransactionsById = async (req, res) => {
  const transactions = await Trans.find({ owner: req.params.id });
  res.send(transactions);
};
export const createTrans = async (req, res) => {
  const trans = await Trans.create(req.body);
  if (!trans) throw Error("bad data!!");
  res.send(trans);
};
