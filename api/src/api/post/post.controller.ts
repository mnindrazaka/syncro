import { Response, NextFunction } from "express";
import { Request } from "../type";
import HttpException from "utils/httpException";
import PostService from "./post.service";
import { PostRequest } from "./post.type";

const postService = new PostService();

export default class PostController {
  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await postService.getAllPost();
      res.send(posts);
    } catch (error) {
      next(new HttpException(error.statusCode || 500, error.message));
    }
  };

  store = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const postRequest: PostRequest = req.body;
      const post = await postService.createPost(user._id, postRequest);
      res.send(post);
    } catch (error) {
      next(new HttpException(error.statusCode || 500, error.message));
    }
  };

  edit = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.postId;
      const postRequest: PostRequest = req.body;
      const post = await postService.updatePost(postId, postRequest);
      res.send(post);
    } catch (error) {
      next(new HttpException(error.statusCode || 500, error.message));
    }
  };

  destroy = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.postId;
      const post = await postService.deletePost(postId);
      res.send(post);
    } catch (error) {
      next(new HttpException(error.statusCode || 500, error.message));
    }
  };
}
