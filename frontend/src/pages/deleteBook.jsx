import React, { useState } from 'react';
import BackButton from '../conponents/BackButton'
import Spinner from '../conponents/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.error('An error occurred:', error);
        alert('An error occurred. Please check the console.');
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center border-2 border-red-500 rounded-xl w-full max-w-md p-8 mx-auto">
        <h3 className="text-2xl mb-4 text-center">Are you sure you want to delete this book?</h3>
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
