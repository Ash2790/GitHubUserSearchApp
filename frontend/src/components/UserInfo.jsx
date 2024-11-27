// UserInfo component displays the user's details like avatar, followers, repos, and bio
export function UserInfo({ userData }) {
  // Render the user's details section
  return (
    <section className="user-details">
      {/* User profile image and link to their GitHub profile */}
      <div className="user-profile-img">
        {/* Display user's profile picture */}
        <img src={userData.avatar_url} alt="user profile avatar" />
        
        {/* Link to the user's GitHub profile */}
        <a href={userData.html_url}>View Github</a>
      </div>

      <div>
        {/* Display user's login (GitHub username) */}
        <h1>{userData.login}</h1>

        {/* User stats like followers, following, and public repositories */}
        <div className="stats">
          {/* Display the number of followers */}
          <p>{userData.followers} Followers </p>
          <hr /> {/* Horizontal line to separate sections */}
          
          {/* Display the number of users the current user is following */}
          <p>{userData.following} Following </p>
          <hr /> {/* Horizontal line to separate sections */}
          
          {/* Display the number of public repositories */}
          <p>{userData.public_repos} Public Repos</p>
        </div>

        {/* Display the user's biography */}
        <p>{userData.bio}</p>

        {/* Display the date the user joined GitHub (formatted to show only the date part) */}
        <p className="created">
          Created: {userData?.created_at.split("T")[0]}
        </p>
      </div>
    </section>
  );
}
