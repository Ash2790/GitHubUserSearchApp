// This test ensures that the user can not type in the input or send more requests to the server while fetching data
import { screen, render } from "@testing-library/react";
import { Header } from "../components/reusable/Header";

// Test case: button is disabled when isLoading is true and input is read-only
test("button is disabled when isLoading is true and input is read-only", () => {
  // Setting up initial conditions: isLoading is true and onSearch is a mock function
  const isLoading = true;
  const onSearch = jest.fn();

  // Rendering the Header component with isLoading and onSearch props
  render(<Header isLoading={isLoading} onSearch={onSearch} />);

  // Getting the search button and search input elements from the rendered component
  const searchButton = screen.getByRole("button", { name: "search button" });
  const searchInput = screen.getByPlaceholderText("Search for a user...");

  // Asserting that the search button is disabled and the search input is read-only
  expect(searchButton.disabled).toBe(true);
  expect(searchInput.readOnly).toBe(true);
});
