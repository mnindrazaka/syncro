require("dotenv").config();
import supertest from "supertest";
import { expect } from "chai";
import app from "app";
import {
  connectDB,
  mockingDatabaseRecord,
  closeDB,
  clearDB
} from "utils/database";
import jwt from "jsonwebtoken";

process.env.JWT_SECRET = "secret";
const request = supertest(app);

describe("user", () => {
  beforeAll(async () => await connectDB(true));

  beforeEach(async () => {
    await clearDB();
    await mockingDatabaseRecord();
  });

  afterAll(async () => await closeDB(true));

  it("can register user", async () => {
    const registerUserResponse = await request
      .post("/user")
      .send({ name: "budi budiman", username: "budiman", password: "budiman" });
    expect(registerUserResponse.body).to.has.property("_id");
    expect(registerUserResponse.body)
      .to.has.property("name")
      .equal("budi budiman");
    expect(registerUserResponse.body)
      .to.has.property("username")
      .equal("budiman");
    expect(registerUserResponse.body)
      .to.has.property("password")
      .not.equal("budiman");
  });

  it("can prevent duplicate username", async () => {
    const registerUserResponse = await request
      .post("/user")
      .send({ username: "mnindrazaka", password: "mnindrazaka" });
    expect(registerUserResponse.body).to.deep.equal({
      status: "error",
      statusCode: 401,
      message: "username already exist"
    });
  });

  it("can authenticate user", async () => {
    const authenticateResponse = await request
      .post("/user/authenticate")
      .send({ username: "mnindrazaka", password: "mnindrazaka" });
    expect(authenticateResponse.body).to.has.property("token");

    const { token } = authenticateResponse.body;
    const user = jwt.decode(token);
    expect(user).to.include({
      name: "m. nindra zaka",
      username: "mnindrazaka"
    });
  });

  it("can show error message if username or password wrong", async () => {
    const authenticateResponse = await request
      .post("/user/authenticate")
      .send({ username: "mnindrazaka2", password: "mnindrazaka2" });
    expect(authenticateResponse.body).to.deep.equal({
      status: "error",
      statusCode: 401,
      message: "username or password wrong"
    });
  });
});
