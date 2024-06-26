import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../conponents/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BookCard from '../conponents/home/BookCard';
import BookTable from '../conponents/home/BookTable';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);

    axios
      .get('http://localhost:5555/books') // Replace with your actual API endpoint
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  const handleShowType = (type) => {
    setShowType(type);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4 mb-4">
        <button
          className={`px-4 py-1 rounded-lg ${
            showType === 'card' ? 'bg-sky-600 text-white' : 'bg-sky-300 hover:bg-sky-600'
          }`}
          onClick={() => handleShowType('card')}
        >
          Card
        </button>
        <button
          className={`px-4 py-1 rounded-lg ${
            showType === 'table' ? 'bg-sky-600 text-white' : 'bg-sky-300 hover:bg-sky-600'
          }`}
          onClick={() => handleShowType('table')}
        >
          Table
        </button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl hover:text-sky-600 transition duration-300" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
}

export default Home;
