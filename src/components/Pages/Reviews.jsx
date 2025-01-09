import React, { useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
const Reviews = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  // Collect all reviews from all books
  let allReviews = [];
  books.forEach((book) => {
    book.reviews.forEach((review) => {
      allReviews.push({
        ...review,
        bookTitle: book.title,
        bookCover: book.cover, // If your data includes book covers
      });
    });
  });

  return (
    <>
    <NavBar />
    <div className="container flex flex-col items-center justify-center">
      <div className='flex flex-col text-[var(--main-fo-cl)] text-xl font-bold relative'>
      <h1 className=" text-center text-2xl font-bold mb-6">Book Reviews</h1>
      <span className="absolute bottom-0 left-0 right-0 mx-auto border-b-2 border-text-[var(--main-fo-cl)] w-10" ></span>
      </div>
      {/* Show all reviews if no book is selected */}
      {selectedBook === null ? (
        allReviews.length > 0 ? (
          <div className="flex flex-col space-y-4 max-w-full text-center justify-center items">
            {allReviews.map((review, index) => (
              <div
                key={index}
                className="flex flex-row-reverse items-center px-20 space-x-8 w-full max-w-full p-4 hover:shadow-lg transition-transform"
                onClick={() =>
                  setSelectedBook(
                    books.find((book) => book.title === review.bookTitle)
                  )
                }
              >
                <img
                  src={review.bookCover}
                  alt={review.bookTitle}
                  className="w-60 justify-end h-full object-cover rounded-md mb-2"
                />
                <div className="flex flex-col justify-evenly px-52 ">
                <h3 className="font-bold text-lg">{review.bookTitle}</h3>
                <p className="italic">{review.comment}</p>
                <p>Rating: {review.rating}⭐</p>
                <p className="text-sm text-gray-600">{review.reviewer}</p>
              </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No reviews found.</p>
        )
      ) : (
        /* Show reviews for the selected book */
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => setSelectedBook(null)}
          >
            Back to All Reviews
          </button>
          <h2 className="text-center text-xl font-bold mb-4">
            {selectedBook.title}
          </h2>
          {selectedBook.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <p className="italic">{review.comment}</p>
              <p>Rating: {review.rating}⭐</p>
              <p className="text-sm text-gray-600">{review.reviewer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    
    </>
  );
};

export default Reviews;
