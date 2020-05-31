import express from "express";
import cors from "cors";
import errorHandler from "middlewares/errorHandler";
import postRouter from "api/post/post.router";
import userRouter from "api/user/user.router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(postRouter);
app.use(userRouter);
app.use(errorHandler);

export default app;
