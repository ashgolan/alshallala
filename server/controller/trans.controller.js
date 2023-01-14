import { Trans } from "../model/year.model.js";

export const getTransactions = async (req, res) => {
  const transactions = await Trans.find();
  res.send(transactions);
};
