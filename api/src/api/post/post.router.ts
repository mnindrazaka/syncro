import { Router } from "express";
import PostController from "./post.controller";

const postController = new PostController();
const postRouter = Router();
const baseUrl = "/post";

postRouter.get(baseUrl, postController.index);
postRouter.post(baseUrl, postController.store);
postRouter.put(`${baseUrl}/:postId`, postController.edit);
postRouter.delete(`${baseUrl}/:postId`, postController.destroy);

export default postRouter;
