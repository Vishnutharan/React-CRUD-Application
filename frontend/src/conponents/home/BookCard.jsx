import React from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import BookSingleCard from './BookSingleCard';

const BookCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {books.map((item) => (
        <div key={item._id}>
          <BookSingleCard book={item} />
        </div>
      ))}
    </div>
  );
};

export default BookCard;
