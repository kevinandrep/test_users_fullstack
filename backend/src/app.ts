import express from "express";
import { userRouter } from "./pods/user/index.js";
import { errorHandler } from "./shared/middlewares/index.js";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.use("/api/users", userRouter);

app.use(errorHandler);
