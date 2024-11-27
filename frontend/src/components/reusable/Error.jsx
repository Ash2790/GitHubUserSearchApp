// Define a functional component 'Error' that receives 'errorDetails' as a prop
export function Error({ errorDetails }) {
  // Return JSX to render the error message and details to the UI
  return (
    // A div element that wraps the error message, with a className for styling and a data-testid for testing
    <div className="error" data-testid="error">
      
      {/* Display the status and statusText from the errorDetails prop in a heading */}
      <h1>
        {/* Use template literals to dynamically insert the error status and status text */}
        {errorDetails.status} | {errorDetails.statusText}{" "}
      </h1>
      
      {/* Display the message from the errorDetails prop in a paragraph */}
      <p>{errorDetails.message}</p>
    </div>
  );
}
