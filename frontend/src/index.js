import React from "react"; // Import React to use JSX syntax
import ReactDOM from "react-dom/client"; // Import ReactDOM to render React components to the DOM
import "./index.css"; // Import global CSS styles for the app
import App from "./App"; // Import the main App component that will be rendered

// Create a root DOM element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root DOM element
root.render(
  <React.StrictMode> 
    {/* StrictMode is a development tool that helps identify potential problems in an application */}
    <App /> {/* The main App component that contains the rest of the application */}
  </React.StrictMode>
);
