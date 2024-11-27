// Import necessary modules for fetching user data, repos, and commits
const { getUserData } = require("../modules/getUserData");
const { getUserRepos } = require("../modules/getUserRepos");
const { getRepoCommits } = require("../modules/getRepoCommits");

// Controller to fetch user's details
exports.getUser = async (req, res) => {
  // Retrieve the username from the request parameters
  const username = req.params.username;

  // Use the getUserData function to fetch the user data based on the username
  const userData = await getUserData(username);

  // Check if the userData has a status and message, indicating an error or failure
  if (userData.status && userData.message) {
    const { status, message } = userData; // Destructure the status and message from the userData
    res.status(status).json({ // Send back the error response with status and message
      status,
      message,
    });
  } else {
    // If the user data is successfully retrieved, send it back in the response
    res.status(201).json({
      userData,
    });
  }
};

// Controller to fetch user's repositories
exports.getUserRepos = async (req, res) => {
  // Retrieve the username from the request parameters
  const username = req.params.username;

  // Use the getUserRepos function to fetch the user's repositories
  const userRepos = await getUserRepos(username);

  // Check if the userRepos has a status and message, indicating an error or failure
  if (userRepos.status && userRepos.message) {
    const { status, message } = userRepos; // Destructure the status and message from the userRepos
    res.status(status).json({ // Send back the error response with status and message
      status,
      message,
    });
  } else {
    // If the user repositories are successfully retrieved, send them back in the response
    res.status(201).json({
      userRepos,
    });
  }
};

// Controller to fetch commit data for a specific repository
exports.getRepoCommits = async (req, res) => {
  // Retrieve the username and repo name from the request parameters
  const username = req.params.username;
  const repoName = req.params.repo;

  // Use the getRepoCommits function to fetch the commit data for the specified repo
  const repoCommits = await getRepoCommits(username, repoName);

  // Check if the repoCommits has a status and message, indicating an error or failure
  if (repoCommits.status && repoCommits.message) {
    const { status, message } = repoCommits; // Destructure the status and message from the repoCommits
    res.status(status).json({ // Send back the error response with status and message
      status,
      message,
    });
  } else {
    // If the commit data is successfully retrieved, send it back in the response
    res.status(201).json({
      repoCommits,
    });
  }
};
