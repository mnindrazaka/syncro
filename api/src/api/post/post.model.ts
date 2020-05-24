import { Schema, Document, model } from "mongoose";
import { Post } from "./post.type";

export type PostDocument = Post & Document;

const postSchema = new Schema(
  {
    content: String
  },
  { timestamps: true }
);

export default model<PostDocument>("Post", postSchema);
