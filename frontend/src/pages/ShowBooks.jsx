import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../conponents/BackButton';
import Spinner from '../conponents/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border-2 border-sky-400 rounded-xl p-4">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">ID:</label>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title:</label>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author:</label>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year:</label>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Created Time:</label>
            <span>{new Date(book.createAt).toLocaleString()}</span>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Last Updated Time:</label>
            <span>{new Date(book.updateAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
