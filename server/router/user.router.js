import { Router } from "express";
import { createUser, getAllUsers } from "../controller/user.controller.js";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
