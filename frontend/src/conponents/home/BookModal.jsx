import React from 'react'; // Importing React library for building components
import { AiOutlineClose } from 'react-icons/ai'; // Importing close icon from react-icons
import { PiBookOpenTextLight } from 'react-icons/pi'; // Importing book icon from react-icons
import { BiUserCircle } from 'react-icons/bi'; // Importing user icon from react-icons

// Functional component that takes 'book' and 'onClose' as props
const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
      // Full-screen overlay with a semi-transparent black background, centered content
      onClick={onClose} // Close the modal when clicking outside
    >
      <div
        onClick={(event) => event.stopPropagation()} // Prevents closing when clicking inside the modal
        className="w-full max-w-lg h-96 bg-white rounded-xl p-4 flex flex-col relative"
      // Modal box with specified width, height, background, rounded corners, padding, and flex layout
      >
        <button onClick={onClose} className="absolute top-2 right-2">
          {/* Close button positioned at the top right */}
          <AiOutlineClose className="text-xl text-black" /> {/* Close icon */}
        </button>
        <h2 className="px-4 py-1 bg-red-300 rounded-lg w-fit">{book.publishYear}</h2>
        {/* Displays the book's publish year in a styled box */}

        <h4 className="my-2 text-gray-500">{book._id}</h4>
        {/* Displays the book's ID in gray text */}

        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
          {/* Displays the book's title with an icon */}
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
          {/* Displays the book's author with an icon */}
        </div>

        <p className="mt-4">Anything you want to show</p>
        {/* Placeholder for additional content */}

        <p className="my-2 text-gray-700">
          {/* Sample text content about the book */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem a ab, fugit ratione dignissimos, earum laudantium perspiciatis quisquam aut praesentium quam recusandae, ea inventore! Voluptatum id odio odit perferendis!
        </p>
      </div>
    </div>
  );
};

export default BookModal; // Exports the BookModal component for use in other files
