// Import the MagnifyingGlassIcon component from Heroicons library for the search icon
// Import the useState hook from React to manage the component's state
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

// Header component that renders the search input field and the search button
export function Header({ isLoading, onSearch }) {
  // State variable 'searchUser' to store the value of the search input field
  // 'setSearchUser' is the function used to update the 'searchUser' state
  const [searchUser, setSearchUser] = useState("");

  // Render the header with a title and a search box containing an input field and a button
  return (
    <header>
      {/* Display the header title */}
      <h1>GitHub User Search App</h1>

      <div className="search-box">
        {/* Search input field */}
        <input
          type="text" // Input field for text
          placeholder="Search for a user..." // Placeholder text to guide the user
          readOnly={isLoading} // Disable editing the input field if 'isLoading' is true (to prevent search while loading)
          onChange={(e) => setSearchUser(e.target.value)} // Update the 'searchUser' state when the input value changes
        />

        {/* Search button */}
        <button
          disabled={isLoading} // Disable the button if 'isLoading' is true (to prevent multiple search requests)
          onClick={() => onSearch(searchUser)} // Trigger the 'onSearch' function passed as a prop with 'searchUser' value as argument
          aria-label="search button" // Accessible label for screen readers
        >
          {/* Render the magnifying glass icon inside the button */}
          <span>
            {/* The MagnifyingGlassIcon component is used as the search icon */}
            <MagnifyingGlassIcon width={20} padding={0} /> 
          </span>
        </button>
      </div>
    </header>
  );
}
