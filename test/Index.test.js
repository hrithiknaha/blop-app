const app = require("../app");
const request = require("supertest");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { response } = require("express");

//Use local db and not cloud for testing
dotenv.config();

beforeAll(async () => {
  await mongoose.connect(
    process.env.DB_TEST,
    { useNewUrlParser: true },
    (err) => {
      if (err) return console.log(err);
    }
  );
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("index route should", () => {
  test("HTTP test", async () => {
    await request(app).get("/api").expect(200);
  });
});

describe("blog routes should", () => {
  test("request GET /blogs", async () => {
    await request(app)
      .get("/api/blogs")
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });

  test("post a new blog", async () => {
    const blog = {
      title: "Hrithik naha has got his way around testing",
      content: "in a new way, in a new life, i known it right",
      author: "Hrithik Naha",
      interactions: 203,
    };
    await request(app)
      .post("/api/blogs")
      .send(blog)
      .then((response) => {
        expect(response.status).toBe(200);

        expect(response.body.title).toBe(blog.title);
        expect(response.body.content).toBe(blog.content);
        expect(response.body.author).toBe(blog.author);
        expect(response.body.interactions).toBe(blog.interactions);
        // expect(response.body).toEqual(blog);
      });
  });

  test("edit a new blog", async () => {
    const blog = {
      title: "Amanda",
      content: "In content it has been changed",
      author: "neil",
      interactions: 300,
    };

    const newBlog = await request(app).post("/api/blogs").send(blog);

    await request(app)
      .put(`/api/blog/${newBlog.body._id}`)
      .send({ title: "Hrithik Naha" })
      .then((response) => {
        console.log(response.body.title);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe("Hrithik Naha");
      });
  });
});
