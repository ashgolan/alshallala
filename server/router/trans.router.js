import { Router } from "express";
import { getTransactions } from "../controller/trans.controller.js";

export const transRouter = Router();

transRouter.get("/", getTransactions);
