// Import the useState hook from React to manage the state of the modal
import { useState } from "react";

// Import the Modal component to show commit data when the "Recent Commits" button is clicked
import Modal from "./Modal";

export function Repo({ repo, user }) {
  // State variable to manage whether the modal is open or closed
  // Initially, the modal is closed (false)
  const [showModal, setShowModal] = useState(false);

  // Render the repository details and the modal component
  return (
    <div className="repo">
      {/* Display the repository name */}
      <p className="name">{repo.name}</p>
      
      {/* Display the description of the repository */}
      <p className="description">{repo.description}</p>
      
      {/* Display the programming language of the repository */}
      <p className="language">Language: {repo.language}</p>
      
      {/* Display the creation date of the repository (formatted to show only the date part) */}
      <p className="created">Created: {repo.created_at.split("T")[0]}</p>
      
      <div className="details">
        {/* Link to the repository's source code */}
        <a href={repo.html_url}>View Source</a>
        <hr />
        
        {/* Button to open the modal and show recent commits */}
        <button onClick={() => setShowModal(true)}>Recent Commits</button>
      </div>

      {/* Modal component to display recent commits */}
      <Modal
        open={showModal} // Pass the state of whether the modal is open or not
        onClose={() => setShowModal(false)} // Pass a function to close the modal when clicked outside or the close button is pressed
        repoName={repo.name} // Pass the repository name to the Modal
        user={user} // Pass the GitHub username to the Modal
      />
    </div>
  );
}
