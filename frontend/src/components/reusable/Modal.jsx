// Import necessary hooks and libraries
import { useEffect, useState } from "react";  // useState for state management, useEffect for side effects
import axios from "axios";  // Axios for making HTTP requests

// Import the Loading component, which will display a loading spinner during data fetching
import { Loading } from "./Loading";

function Modal({ open, onClose, repoName, user }) {
  // State variables to manage commit data, loading state, and error state
  const [commitData, setCommitData] = useState([]); // Stores the fetched commit data
  const [isLoading, setIsLoading] = useState(false); // Tracks whether the data is still loading
  const [error, setError] = useState(false); // Tracks whether there was an error fetching the data

  // useEffect hook to fetch commit data whenever the modal opens, or when repoName or user changes
  useEffect(() => {
    // Define an asynchronous function to fetch commit data from the API
    const apiRequest = async () => {
      setIsLoading(true); // Set loading state to true before making the request
      setError(false); // Reset any previous errors

      try {
        // Make an API request to fetch commits for the specified repository and user
        const res = await axios.get(`api/${user}/${repoName}/commits`);
        const reposCommits = res.data.repoCommits;  // Extract the commits from the response data

        // Get the latest 4 commits (or all commits if there are less than 4)
        const latestCommits =
          reposCommits.length <= 4 ? reposCommits : reposCommits.slice(0, 4);

        // Update the commitData state with the latest commits
        setCommitData(latestCommits);
      } catch (error) {
        // If an error occurs, set the error state to true
        setError(true);
      } finally {
        // Regardless of success or failure, set loading state to false
        setIsLoading(false);
      }
    };

    // Only call the API when the modal is open and when the repoName or user changes
    if (open) {
      apiRequest(); // Call the API request function
    }
  }, [repoName, user, open]); // Dependencies: the effect runs when repoName, user, or open changes

  // If the modal is not open, return null (don't render anything)
  if (!open) return null;

  return (
    // Modal overlay that closes the modal when clicked outside the modal container
    <div className="overlay" onClick={() => onClose()}>
      {/* Modal container where the actual content is displayed */}
      <div
        className="modal-container"
        // Prevent click events from propagating to the overlay when clicked inside the modal
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button to close the modal */}
        <p className="close-btn" onClick={() => onClose()}>
          X
        </p>

        {/* Modal content section */}
        <div className="modal-content">
          {/* Display the repository name in the modal header */}
          <h1>
            Recent Commits to <span>{repoName}</span>
          </h1>

          {/* Show the Loading spinner while data is being fetched */}
          {isLoading && <Loading />}

          {/* If not loading and no error, display the commit data */}
          {!isLoading && !error && (
            <div className="commits">
              {/* If there are commits, display them */}
              {commitData.length > 0 ? (
                commitData.map((commit, index) => (
                  // Map over the commit data and display each commit's message and details
                  <div key={index} className="commit">
                    <p>{commit.commit.message}</p>
                    <div className="commit-details">
                      {/* Display committer name */}
                      <p>Committer: {commit.commit.committer.name}</p>
                      <hr />
                      {/* Display the commit date (formatted to exclude time) */}
                      <p>Date: {commit.commit.committer.date.split("T")[0]}</p>
                    </div>
                  </div>
                ))
              ) : (
                // If there are no commits, display a "No Commits" message
                <p className="no-commits">No Commits</p>
              )}
            </div>
          )}

          {/* If an error occurred while fetching commits, display an error message */}
          {error && <p>Could not load commits for {repoName}</p>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
