import { PostFormValues, Post } from "../../interfaces/Post";
import Service from "./service";

const baseURL = process.env.SOSMED_SERVICE_URL || "";
const service = new Service(baseURL);

const getAllPosts = () => {
  return service.get<Post[]>("/post");
};

const createPost = (post: PostFormValues) => {
  return service.post<Post>("/post", post);
};

const editPost = (postId: string, post: PostFormValues) => {
  return service.put<Post>(`/post/${postId}`, post);
};

const deletePost = (postId: string) => {
  return service.delete<Post>(`/post/${postId}`);
};

export default {
  baseURL,
  getAllPosts,
  createPost,
  editPost,
  deletePost
};
