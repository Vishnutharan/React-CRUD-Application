import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BookTable = ({ books }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full bg-white border-separate border border-gray-300 rounded-lg'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700'>No</th>
            <th className='border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700'>Title</th>
            <th className='border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hidden md:table-cell'>Author</th>
            <th className='border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hidden md:table-cell'>Publish Year</th>
            <th className='border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">No Books Found</td>
            </tr>
          )}
          {books.map((book, index) => (
            <tr key={book._id} className='border-b border-gray-300'>
              <td className='border border-gray-300 px-4 py-2 text-sm text-center'>{index + 1}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm'>{book.title}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm hidden md:table-cell'>{book.author}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm hidden md:table-cell'>{book.publishYear}</td>
              <td className='border border-gray-300 px-4 py-2 text-sm text-center'>
                <div className='flex justify-center gap-4'>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-blue-600 hover:text-blue-800' />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-yellow-600 hover:text-yellow-800' />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-red-600 hover:text-red-800' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
