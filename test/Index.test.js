const app = require("../app");
const request = require("supertest");

test("HTTP test", async () => {
  await request(app).get("/api").expect(200);
});
