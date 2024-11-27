const request = require("supertest"); // Import the supertest module for API testing
const app = require("../app"); // Import the application instance

// Test suite for the GET /user/:username endpoint
describe("GET /user/:username", () => {
  /**
   * Test case: Should return a userData object from the GitHub API.
   * Verifies that a valid username returns user details with a 201 status.
   */
  test("Should return a userData object from the GitHub API", async () => {
    const response = await request(app).get("/api/user/Ash2790");
    expect(response.status).toBe(201); // Expect a 201 Created status
    expect(response.body.userData).toBeDefined(); // Verify userData object is defined
  });

  /**
   * Test case: Should return a 404 status and error message if the user is not found.
   * Ensures the API handles nonexistent usernames gracefully.
   */
  test("Should return a 404 status and error message if the user is not found", async () => {
    const response = await request(app).get("/api/user/as4OtKjHpJLC05jNom");
    expect(response.status).toBe(404); // Expect a 404 Not Found status
    expect(response.body.userData).toBeUndefined(); // userData should be undefined
    expect(response.body.message).toBe("Not Found"); // Proper error message
  });
});

// Test suite for the GET /:username/:repo/commits endpoint
describe("GET /:username/:repo/commits", () => {
  /**
   * Test case: Should return a repoCommits object from the GitHub API.
   * Verifies that valid username and repository return commit data with a 201 status.
   */
  test("Should return a repoCommits object from the GitHub API", async () => {
    const response = await request(app).get("/api/Ash2790/hangman-game/commits");
    expect(response.status).toBe(201); // Expect a 201 Created status
    expect(response.body.repoCommits).toBeDefined(); // Verify repoCommits object is defined
  });

  /**
   * Test case: Should return a 404 status and error message if the repo is not found.
   * Ensures the API handles nonexistent repositories gracefully.
   */
  test("Should return a 404 status and error message if the repo is not found", async () => {
    const response = await request(app).get(
      "/api/as4OtKjHpJLC05jNom/as4OtKjHpJLC05jNom/commits"
    );
    expect(response.status).toBe(404); // Expect a 404 Not Found status
    expect(response.body.repoCommits).toBeUndefined(); // repoCommits should be undefined
    expect(response.body.message).toBe("Not Found"); // Proper error message
  });
});

// Test suite for the GET /user/repos/:username endpoint
describe("GET /user/repos/:username", () => {
  /**
   * Test case: Should return a userRepos object from the GitHub API.
   * Verifies that a valid username returns repository details with a 201 status.
   */
  test("Should return a userRepos object from the GitHub API", async () => {
    const response = await request(app).get("/api/user/repos/Ash2790");
    expect(response.status).toBe(201); // Expect a 201 Created status
    expect(response.body.userRepos).toBeDefined(); // Verify userRepos object is defined
  });

  /**
   * Test case: Should return a 404 status and error message if the user does not exist.
   * Ensures the API handles nonexistent users gracefully.
   */
  test("Should return a 404 status and error message if the user does not exist", async () => {
    const response = await request(app).get("/api/user/as4OtKjHpJLC05jNom");
    expect(response.status).toBe(404); // Expect a 404 Not Found status
    expect(response.body.repoData).toBeUndefined(); // repoData should be undefined
    expect(response.body.message).toBe("Not Found"); // Proper error message
  });
});
