import PropTypes from 'prop-types';
import TheList from './TheList';

const BookCategory = ({ category, books_data }) => {
    const filteredBooks = books_data.filter((book) => book.category === category);

    return (
        <div>
            <h2>{category} Books</h2>
            <TheList books_data={filteredBooks} />
        </div>
    );
};

BookCategory.propTypes = {
    category: PropTypes.string.isRequired,
    books_data: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string.isRequired,
    })).isRequired,
};

export default BookCategory;