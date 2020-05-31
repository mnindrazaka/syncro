import { Api } from "api/type";
import { User } from "api/user/user.type";

export interface Post extends Api {
  content: string;
  user: User;
}

export interface PostRequest {
  content: string;
}
