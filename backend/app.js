import express from "express";
import goalRouter from "./routes/goalRouter.js";
import userRouter from "./routes/userRouter.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import colors from "colors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

export default app;
