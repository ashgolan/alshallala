import { Router } from "express";
import { getAllUsers } from "../controller/user.controller.js";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
