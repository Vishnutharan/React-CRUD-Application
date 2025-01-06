import React from 'react'; // Importing React library for building components
import { PiBookOpenTextLight } from 'react-icons/pi'; // Importing book icon from react-icons
import { BiUserCircle } from 'react-icons/bi'; // Importing user icon from react-icons
import { AiOutlineEdit } from 'react-icons/ai'; // Importing edit icon from react-icons
import { BsInfoCircle } from 'react-icons/bs'; // Importing info icon from react-icons
import { MdOutlineDelete } from 'react-icons/md'; // Importing delete icon from react-icons
import { Link } from 'react-router-dom'; // Importing Link for navigation between routes
import BookSingleCard from './BookSingleCard'; // Importing the BookSingleCard component

// Functional component that takes 'books' as props
const BookCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {/* Grid layout that adjusts the number of columns based on screen size */}
      {books.map((item) => (
        <div key={item._id}>
          {/* Using the book's ID as a key for efficient rendering */}
          <BookSingleCard book={item} /> {/* Render the BookSingleCard for each book item */}
        </div>
      ))}
    </div>
  );
};

export default BookCard; // Exports the BookCard component for use in other files
