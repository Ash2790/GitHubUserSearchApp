// Import express library to create routes and handle HTTP requests
const express = require("express");

// Import the API controller which contains the logic for handling requests
const apiController = require("../controllers/apiController");

// Create a new router instance to define routes for the API
const router = express.Router();

// Define route for getting a user's repositories based on their username
// The URL structure will be '/user/repos/:username' where ':username' is a dynamic parameter
// When a GET request is made to this route, it will invoke the 'getUserRepos' method from the controller
router.route("/user/repos/:username").get(apiController.getUserRepos);

// Define route for getting commits of a specific repository by username and repository name
// The URL structure will be '/:username/:repo/commits' where ':username' and ':repo' are dynamic parameters
// This route will invoke the 'getRepoCommits' method from the controller
router.route("/:username/:repo/commits").get(apiController.getRepoCommits);

// Define route for getting user data by username
// The URL structure will be '/user/:username' where ':username' is a dynamic parameter
// This route will invoke the 'getUser' method from the controller
router.route("/user/:username").get(apiController.getUser);

// Export the router so it can be used in other parts of the application (e.g., in the main server file)
module.exports = router;
