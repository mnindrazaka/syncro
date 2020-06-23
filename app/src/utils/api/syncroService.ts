import { SYNCRO_SERVICE_URL } from "react-native-dotenv";
import { PostRequest, Post } from "../../stores/post/postAction";
import Service from "./service";
import {
  UserLoginRequest,
  UserRegisterRequest,
  User
} from "../../stores/user/userAction";

const baseURL = SYNCRO_SERVICE_URL || "";
const service = new Service(baseURL);

const login = (user: UserLoginRequest) => {
  return service.post<{ token: string }>("/user/authenticate", user);
};

const register = (user: UserRegisterRequest) => {
  const { passwordConfirmation, ...userRequest } = user;
  return service.post<User>("/user", userRequest);
};

const getAllPosts = () => {
  return service.get<Post[]>("/post");
};

const createPost = (post: PostRequest) => {
  return service.post<Post>("/post", post);
};

const editPost = (postId: string, post: PostRequest) => {
  return service.put<Post>(`/post/${postId}`, post);
};

const deletePost = (postId: string) => {
  return service.delete<Post>(`/post/${postId}`);
};

export default {
  baseURL,
  login,
  register,
  getAllPosts,
  createPost,
  editPost,
  deletePost
};
