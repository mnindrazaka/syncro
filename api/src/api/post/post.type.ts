import { Api } from "api/type";

export interface Post extends Api {
  content: string;
}

export interface PostRequest {
  content: string;
}
