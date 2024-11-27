// ProfileCard component that displays user details and user repositories
export function ProfileCard({ children }) {
  return (
    // The main container for the profile card
    <main className="content">
      {/* Profile card container that holds the children (user details and repos) */}
      <div className="profile-card">
        {/* Render the children prop inside the profile card */}
        {children}
      </div>
    </main>
  );
}
