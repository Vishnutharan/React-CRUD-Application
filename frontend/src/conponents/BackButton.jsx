import React from 'react'; // Importing React library for building components
import { Link } from 'react-router-dom'; // Importing Link for navigation between routes
import { BsArrowLeft } from 'react-icons/bs'; // Importing a back arrow icon from react-icons

// Functional component that accepts a 'destination' prop, defaulting to '/' (home)
const BackButton = ({ destination = '/' }) => {
  return (
    <Link
      to={destination} // Sets the route to navigate to when clicked
      className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
    // Styling for the button: flexbox layout, colors, padding, rounded corners, and hover effects
    >
      <BsArrowLeft className="text-xl mr-2" />
      <span className="text-lg">Back</span>
    </Link>
  );
};

export default BackButton; // Exports the BackButton component for use in other files
