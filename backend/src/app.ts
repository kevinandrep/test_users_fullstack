import express from "express";
import { userRouter } from "./pods/user/index.js";
import { errorHandler } from "./shared/middlewares/index.js";

export const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.use(errorHandler);
