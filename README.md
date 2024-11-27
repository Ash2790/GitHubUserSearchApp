GitHub User Search App

GitSearch is a modern, full-stack web application built with JavaScript. It leverages the GitHub RESTful API to fetch and display comprehensive information about GitHub users, including their profile and repository data.

Features
User Information:
View profile details such as profile picture, username, bio, follower/following counts, and account creation date.

Repository Insights:
Display the four most recent public repositories with:
Repository description.
Most-used programming language.
Latest commit details.

Getting Started
Follow these steps to set up and run the application locally:

1. Clone the repository:

git clone <repository-url>

2. Set up the server:

Navigate to the server directory:

cd ./backend
Install dependencies:

npm install


Start the server:

npm start
The server will be running at http://127.0.0.1:5000.

3. Set up the frontend:

Navigate to the client directory:

cd ../frontend

Install dependencies:

npm install

Start the React application:

npm start

API Endpoints
User Details
Endpoint: GET /api/user/:username
Description: Fetches detailed profile information of a specified GitHub user.

Repositories
Endpoint: GET /api/repos/:username
Description: Retrieves a list of all public repositories for a specified GitHub user.

Commits
Endpoint: GET /api/:username/:repo/commits
Description: Fetches the commit history for a specific repository of a GitHub user.