jest.useFakeTimers();

const app = require("../app");
const request = require("supertest");

test("HTTP test", () => {
  return request(app)
    .get("/api")
    .then(() => {
      expect(200);
    });
});
