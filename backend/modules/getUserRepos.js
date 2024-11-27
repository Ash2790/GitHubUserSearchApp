// Import the axios library to make HTTP requests
const axios = require("axios");

// Function to fetch user repositories from GitHub API
exports.getUserRepos = async (username) => {
  try {
    // Make a GET request to the GitHub API to fetch repositories for the specified user
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos` // URL to fetch user repositories
    );
    
    // Extract the repositories data from the response
    const repoData = await res.data;

    // Return the repositories data if the request is successful
    return repoData;
  } catch (err) {
    // If an error occurs (e.g., user not found, API issue), handle the error
    return {
      status: err.response.status, // Return the HTTP status code from the error response (e.g., 404)
      message: err.response.data.message, // Return the error message from the GitHub API
    };
  }
};
