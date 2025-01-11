import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BookCategory = ({ books }) => {
  const { category } = useParams();
  const [filteredBooks, setFilteredBooks] = useState([]);

  BookCategory.propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  useEffect(() => {
    if (!Array.isArray(books)) {
      console.error('Books data is not available or not an array');
      return;
    }
    const filtered = books.filter((book) => book.category && book.category.toLowerCase() === category.toLowerCase());
    setFilteredBooks(filtered);
  }, [category, books]);

  return (
    <div>
      <h1>{category} Books</h1>
      {filteredBooks.length > 0 ? (
        filteredBooks.map(book => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))
      ) : (
        <p>No books found in this category.</p>
      )}
    </div>
  );
};


export default BookCategory;
