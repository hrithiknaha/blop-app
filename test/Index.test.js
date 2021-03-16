const app = require("../app");
const request = require("supertest");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Use local db and not cloud for testing
dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
});

afterAll(async () => {
  await mongoose.disconnect();
});

test("HTTP test", async () => {
  await request(app).get("/api").expect(200);
});
