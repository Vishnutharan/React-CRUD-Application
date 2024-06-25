import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <Link
      to={destination}
      className="flex items-center bg-sky-800 text-white px-4 py-1 rounded-lg hover:bg-sky-700"
    >
      <BsArrowLeft className="mr-2 text-2xl" /> Back
    </Link>
  );
};

export default BackButton;
