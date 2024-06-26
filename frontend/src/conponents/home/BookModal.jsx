import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 z-50 flex justify-center items-center" onClick={onClose}>
      <div onClick={(event) => event.stopPropagation()} className="w-full max-w-lg h-96 bg-white rounded-xl p-4 flex flex-col relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <AiOutlineClose className="text-xl text-black" />
        </button>
        <h2 className="px-4 py-1 bg-red-300 rounded-lg w-fit">{book.publishYear}</h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem a ab, fugit ratione dignissimos, earum laudantium perspiciatis quisquam aut praesentium quam recusandae, ea inventore! Voluptatum id odio odit perferendis!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
