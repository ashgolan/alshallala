import { Router } from "express";
import {
  createTrans,
  getTransactions,
  getTransactionsById,
} from "../controller/trans.controller.js";

export const transRouter = Router();

transRouter.get("/", getTransactions);
transRouter.get("/:id", getTransactionsById);
transRouter.post("/", createTrans);
