import React, { useState } from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div key={book._id} className='border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg'>
      <h2 className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded'>
        {book.publishYear}
      </h2>
      <h4 className='text-gray-500 mb-2'>{book._id}</h4>
      <div className='flex items-center gap-2 mb-2'>
        <PiBookOpenTextLight className='text-red-500 text-2xl' />
        <h2 className='text-xl font-semibold'>{book.title}</h2>
      </div>
      <div className='flex items-center gap-2 mb-4'>
        <BiUserCircle className='text-red-500 text-2xl' />
        <h2 className='text-lg'>{book.author}</h2>
      </div>
      <div className='flex justify-end items-center space-x-2'>
        <FaEye
          className='text-blue-600 hover:text-blue-800 cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`} className='text-green-600 hover:text-green-800'>
          <BsInfoCircle className='text-2xl' />
        </Link>
        <Link to={`/books/edit/${book._id}`} className='text-yellow-600 hover:text-yellow-800'>
          <AiOutlineEdit className='text-2xl' />
        </Link>
        <Link to={`/books/delete/${book._id}`} className='text-red-600 hover:text-red-800'>
          <MdOutlineDelete className='text-2xl' />
        </Link>
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
