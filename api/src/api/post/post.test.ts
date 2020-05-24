import app from "app";
import supertest from "supertest";
import { expect } from "chai";
import {
  connectDB,
  closeDB,
  mockingDatabaseRecord,
  clearDB
} from "utils/database";
import mongoose from "mongoose";

const request = supertest(app);

describe("post", () => {
  beforeAll(async () => {
    await connectDB(true);
  });

  beforeEach(async () => {
    await clearDB();
    await mockingDatabaseRecord();
  });

  afterAll(async () => await closeDB(true));

  it("can get all post", async () => {
    const getAllPostResponse = await request.get("/post").send();
    expect(getAllPostResponse.body).to.have.length(1);
  });

  it("can create post", async () => {
    const createPostResponse = await request
      .post("/post")
      .send({ content: "hello world 2" });
    expect(createPostResponse.body).to.has.property("_id");
    expect(createPostResponse.body).to.has.property("createdAt");
    expect(createPostResponse.body).to.has.property("updatedAt");
    expect(createPostResponse.body)
      .to.has.property("content")
      .that.equal("hello world 2");
  });

  it("can edit post", async () => {
    const getAllPostResponse = await request.get("/post").send();
    const postId = getAllPostResponse.body[0]._id;

    const editPostResponse = await request
      .put(`/post/${postId}`)
      .send({ content: "lorem ipsum" });
    expect(editPostResponse.body).to.has.property("_id");
    expect(editPostResponse.body).to.has.property("createdAt");
    expect(editPostResponse.body).to.has.property("updatedAt");
    expect(editPostResponse.body)
      .to.has.property("content")
      .that.equal("lorem ipsum");
  });

  it("can throw error if post not found when edit post", async () => {
    const postId = mongoose.Types.ObjectId();
    const editPostResponse = await request
      .put(`/post/${postId}`)
      .send({ content: "lorem ipsum" });
    expect(editPostResponse.body).to.has.property("statusCode").that.equal(400);
    expect(editPostResponse.body)
      .to.has.property("message")
      .that.equal("post not found");
  });

  it("can delete post", async () => {
    const getAllPostResponse = await request.get("/post").send();
    const postId = getAllPostResponse.body[0]._id;

    const deletePostResponse = await request.delete(`/post/${postId}`).send();
    expect(deletePostResponse.body).to.has.property("_id").that.equal(postId);

    const getAllPostResponse2 = await request.get("/post").send();
    expect(getAllPostResponse2.body).to.have.length(0);
  });

  it("can throw error if post not found when delete post", async () => {
    const postId = mongoose.Types.ObjectId();
    const editPostResponse = await request
      .delete(`/post/${postId}`)
      .send({ content: "lorem ipsum" });
    expect(editPostResponse.body).to.has.property("statusCode").that.equal(400);
    expect(editPostResponse.body)
      .to.has.property("message")
      .that.equal("post not found");
  });
});
