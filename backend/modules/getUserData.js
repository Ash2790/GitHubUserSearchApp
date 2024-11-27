// Import the axios library to make HTTP requests
const axios = require("axios");

// Function to fetch user data from GitHub API
exports.getUserData = async (username) => {
  try {
    // Make a GET request to the GitHub API to fetch data for the specified user
    const res = await axios.get(`https://api.github.com/users/${username}`);
    
    // Extract the user data from the response
    const userData = await res.data;

    // Return the user data if the request is successful
    return userData;
  } catch (err) {
    // If an error occurs (e.g., user not found, invalid username), catch the error
    return {
      status: err.response.status, // HTTP status code from the error response
      message: err.response.data.message, // Error message from the GitHub API response
    };
  }
};
