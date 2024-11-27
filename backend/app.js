// Import necessary libraries and modules
const express = require("express"); // Express is used to create the web server and handle routing
const morgan = require("morgan"); // Morgan is a logging middleware to log HTTP requests
const helmet = require("helmet"); // Helmet is used to set HTTP headers for security

// Import the API router that defines the routes for the application
const apiRouter = require("./routers/apiRouter.js"); 

// Create an instance of an Express app
const app = express();

// App Middleware Setup
// Helmet middleware helps secure the application by setting various HTTP headers
app.use(helmet()); 

// Morgan middleware is used for logging HTTP requests in 'dev' mode (logs details about incoming requests)
app.use(morgan("dev")); 

// Express middleware to parse incoming JSON request bodies
// This is necessary for handling requests that send data as JSON
app.use(express.json()); 

// Mount the 'apiRouter' to the '/api' endpoint
// This means all routes defined in 'apiRouter.js' will be prefixed with '/api'
app.use("/api", apiRouter);

// Export the app so it can be used by the server to start listening for requests
module.exports = app;
