import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <Link
      to={destination}
      className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
    >
      <BsArrowLeft className="text-xl mr-2" />
      <span className="text-lg">Back</span>
    </Link>
  );
};

export default BackButton;
