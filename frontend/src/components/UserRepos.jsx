// Import the Repo component which will be used to display each repository card
import { Repo } from "./reusable/Repo";

export function UserRepos({ repoData, user }) {
  // Only use the four most recent repositories from the repoData
  // If there are more than 4 repositories, slice the first 4, otherwise, use all
  const latestRepos = repoData.length <= 4 ? repoData : repoData.slice(0, 4);

  // Render a section with a list of repositories (repo cards) or a message if no repos are found
  return (
    <section className="repos">
      {/* Section heading for the list of repositories */}
      <h2>Latest Repositories</h2>

      {/* Check if there are any repositories to display */}
      {latestRepos.length > 0 ? (
        // If there are repositories, map through each repo and render a Repo card for each
        latestRepos.map((repo) => (
          <Repo key={repo.id} repo={repo} user={user} /> // Pass repo and user data to the Repo component
        ))
      ) : (
        // If no repositories are found, display a message
        <p className="no-repos">No repositories found</p>
      )}
    </section>
  );
}
