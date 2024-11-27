// Import the dotenv package to load environment variables from a .env file
const dotenv = require("dotenv");

// Configure dotenv to load environment variables from the specified file (config.env)
dotenv.config({ path: "./config.env" }); // This will load environment variables from 'config.env'

// Import the Express app (which has the routes and middleware set up)
const app = require("./app");

// Set the port to the value in the environment variable `PORT`, 
// or default to 5000 if no value is set in the environment
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified PORT
app.listen(PORT, () =>
  // Once the server is up and running, log the server URL to the console
  console.log(`The server is listening: http://127.0.0.1:${PORT}`)
);
