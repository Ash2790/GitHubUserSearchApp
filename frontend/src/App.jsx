import { useEffect, useState } from "react"; // Import React hooks (useEffect, useState)
import axios from "axios"; // Import axios for making API requests

// Import components to display user profile, info, repos, and handle loading/errors
import { ProfileCard } from "./components/ProfileCard";
import { Header } from "./components/reusable/Header";
import { UserInfo } from "./components/UserInfo";
import { Loading } from "./components/reusable/Loading";
import { Error } from "./components/reusable/Error";
import { UserRepos } from "./components/UserRepos";

function App() {
  // State variables to store user input, user data, repositories, loading state, and error state
  const [user, setUser] = useState(""); // Stores the GitHub username entered by the user
  const [userData, setUserData] = useState({}); // Stores the user data (e.g., profile info)
  const [repoData, setRepoData] = useState([]); // Stores the list of repositories for the user
  const [isLoading, setIsLoading] = useState(false); // Tracks loading state during API requests
  const [error, setError] = useState({}); // Stores error details if an error occurs during fetching data

  // useEffect hook to fetch data from the API whenever the `user` state changes
  useEffect(() => {
    // If the user input is empty, do not proceed with the API request
    if (!user) return;

    // Function to make the API request
    const apiRequest = async () => {
      // Set loading state to true and clear any previous errors
      setIsLoading(true);
      setError({});

      try {
        // Fetch user data (e.g., profile info) from the API
        const userRes = await axios.get(`/api/user/${user}`);
        setUserData(userRes.data.userData); // Set the user data into state

        // If user data is successfully fetched, proceed to fetch user repositories
        if (userRes.status === 201) {
          try {
            // Fetch the repositories of the user
            const userReposRes = await axios.get(`api/user/repos/${user}`);
            setRepoData(userReposRes.data.userRepos); // Set the repositories into state
          } catch (error) {
            // Handle error if fetching user repositories fails
            const details = error.response; // Extract error details
            setError({
              status: details.status,
              statusText: details.statusText,
              message: "We could not find the user you are looking for", // Custom error message
            });
          }
        }
      } catch (error) {
        // Handle error if fetching user data fails
        const details = error.response; // Extract error details
        setError({
          status: details.status,
          statusText: details.statusText,
        });
      } finally {
        // After the request completes (whether successful or not), set loading state to false
        setIsLoading(false);
      }
    };

    // Call the function to fetch user data and repositories
    apiRequest();
  }, [user]); // The effect depends on the `user` state, so it re-runs when `user` changes

  return (
    <>
      {/* Header component with a search bar to enter the GitHub username */}
      <Header isLoading={isLoading} onSearch={setUser} />

      {/* Show loading indicator if data is being fetched */}
      {isLoading && <Loading />}

      {/* Render the profile card and user info if no errors and data is available */}
      {!isLoading &&
        Object.keys(error).length === 0 && // Check if there is no error
        Object.keys(userData).length > 0 && ( // Check if user data is available
          <ProfileCard>
            <UserInfo userData={userData} /> {/* Pass user data to the UserInfo component */}
            <UserRepos repoData={repoData} user={user} /> {/* Pass repositories to the UserRepos component */}
          </ProfileCard>
        )}

      {/* Display error message if an error occurred while fetching data */}
      {Object.keys(error).length !== 0 && <Error errorDetails={error} />} 
    </>
  );
}

export default App;
