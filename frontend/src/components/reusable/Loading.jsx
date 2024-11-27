// Import the CircularProgress component from Material-UI for displaying a loading spinner
import CircularProgress from "@mui/material/CircularProgress";

// Import the Box component from Material-UI for layout and styling
import Box from "@mui/material/Box";

// Define the Loading component, which handles the loading state display
export function Loading() {
  // Return JSX to render the loading spinner wrapped in a Box component
  return (
    <Box sx={{ display: "flex" }} className="loading">
      {/* CircularProgress is used to show a loading spinner */}
      <CircularProgress
        // Style the spinner with a custom color and size
        style={{ color: "#3492fa", width: "70px", height: "70px" }}
      />
    </Box>
  );
}
