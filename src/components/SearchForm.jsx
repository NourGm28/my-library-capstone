import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]); // Stores the list of books from the API
  const [filteredBooks, setFilteredBooks] = useState([]); // Stores the filtered books
  const navigate = useNavigate();

  // Fetch books from the local API on component mount
  useEffect(() => {
    fetch("http://localhost:5000/books") // Replace with your local API endpoint
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Filter books based on the search term
  useEffect(() => {
    setFilteredBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, books]);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    navigate("/BookList", { state: { filteredBooks } });
  };

  return (
    <>
      <div className='flex justify-center w-full'>
        <form onSubmit={handleSearch}>
          <div className='flex items-center justify-center'>
            <input 
              type="text" 
              name="search" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className='px-4 py-2 w-full p-2 outline-none border-[1px] border-blue-700 rounded-full' 
              placeholder='SEARCH'  
            />
            <button type="submit" className='p-2'>
              <FaSearch className='text-[var(--sec-bg-cl)]' size={32} />
            </button>
          </div>
        </form>
        {/* Display filtered books below the search bar */}
        <div className='mt-4'>
          {searchTerm.trim() ? (
            filteredBooks.length > 0 ? (
              <ul>
                {filteredBooks.map((book) => (
                  <li key={book.id} className='p-2 border-b border-gray-200'>
                    <h3 className='text-lg font-bold'>{book.title}</h3>
                    <p className='text-sm text-gray-600'>By {book.author}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-500'>No books found.</p>
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
};

export default SearchForm;
