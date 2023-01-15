import Express from "express";
import "./DB/mongoose.js";
import cors from "cors";
import { userRouter } from "./router/user.router.js";
import { getTransactions } from "./controller/trans.controller.js";
import { transRouter } from "./router/trans.router.js";

const PORT = process.env.PORT || 5000;

const app = Express();
app.use(Express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/transactions", transRouter);

app.listen(PORT, () => {
  console.log("listining to port, ", PORT);
});
