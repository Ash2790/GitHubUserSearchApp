// Import the axios library to make HTTP requests
const axios = require("axios");

// Function to fetch commits of a GitHub repository
exports.getRepoCommits = async (username, repo) => {
  try {
    // Make a GET request to the GitHub API to fetch commits for the specified repository
    const res = await axios.get(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );

    // Retrieve the commit data from the response
    const repoCommits = await res.data;

    // Return the commit data if the request is successful
    return repoCommits;
  } catch (err) {
    // If an error occurs (e.g., invalid username/repo, API limit reached), 
    // return an object with the error status and message from the response
    return {
      status: err.response.status, // HTTP status code from the error response
      message: err.response.data.message, // Error message from the error response
    };
  }
};
