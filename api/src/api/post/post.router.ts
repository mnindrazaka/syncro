import { Router } from "express";
import PostController from "./post.controller";
import verifyToken from "middlewares/verifyToken";

const postController = new PostController();
const postRouter = Router();
const baseUrl = "/post";

postRouter.get(baseUrl, verifyToken, postController.index);
postRouter.post(baseUrl, verifyToken, postController.store);
postRouter.put(`${baseUrl}/:postId`, verifyToken, postController.edit);
postRouter.delete(`${baseUrl}/:postId`, verifyToken, postController.destroy);

export default postRouter;
