import Express from "express";
import "./DB/mongoose.js";
import cors from "cors";
import { userRouter } from "./router/user.router.js";
import { getTransactions } from "./controller/trans.controller.js";

const PORT = process.env.PORT || 5000;

const app = Express();
app.use(Express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/transactions", getTransactions);

app.listen(PORT, () => {
  console.log("listining to port, ", PORT);
});
