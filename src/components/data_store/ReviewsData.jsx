
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const ReviewsData = () => {
  const { bookId } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const [books] = useState([
      {
      id: 2,
      title: "Mostly Dead Things",
      cover: "/Book_Covers/Mostly_Dead_Cover.jpg",
            reviews: [
          { reviewer: "Bob Martin", comment: "Unique and captivating.", rating: "/rating_stars/five_stars.png" }
      ],
      category: "Fiction"
      },
      {
      id: 3,
      title: "Invisible Man",
      cover: "/Book_Covers/Invisible_Man_Cover.jpg",
            reviews: [
          { reviewer: "Chris Green", comment: "A powerful and thought-provoking novel.", rating: "/rating_stars/five_stars.png" }
      ],
      category: "Classic"
      },
      {
      id: 4,
      title: "Harry Potter and the Cursed Child",
      cover: "/Book_Covers/Harry_Potter_and_the_Cursed_Child_Cover.jpg",
            reviews: [
          { reviewer: "Sophia White", comment: "A nostalgic return to the wizarding world.", rating: "/rating_stars/four_stars.png" }
      ],
      category: "Fantasy"
      },
      {
      id: 5,
      title: "From These Broken Pieces",
      cover: "/Book_Covers/FromTheseBrokenPieces_Cover.jpg",
            reviews: [
          { reviewer: "Mary Thompson", comment: "A deeply inspiring book.", rating: "/rating_stars/five_stars.png" }
      ],
      category: "Self-Help"
      },
      {
      id: 8,
      title: "The Little Prince",
      cover: "/Book_Covers/TheLittlePrinceCover.jpg",
            reviews: [
          { reviewer: "Mia Carter", comment: "A beautiful story with deep meanings.", rating: "/rating_stars/five_stars.png" }
      ],
      category: "Children"
      },
      {
      id: 10,
      title: "Charlotte's Web",
      cover: "/Book_Covers/Charlottes_Web_Cover.jpg",
      reviews: [{ reviewer: "Sarah Green", comment: "A heartwarming story for all ages.", rating: "/rating_stars/five_stars.png" }
      ],
      category: "Children"
          }
  ]);
  
  useEffect(() => {
    setTimeout(() => {
      console.log("Book ID from URL:", bookId); // Debugging line
      const fetchedBook = books.find((b) => b.id === parseInt(bookId));
      console.log("Fetched Book:", fetchedBook); // Debugging line
      setBook(fetchedBook);
      setLoading(false);
    }, 1000);
  }, [bookId]);

if (loading) {
return (
      <div className="container mx-auto p-6">
        <Loader />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="container mx-auto p-6">
        <p className="text-3xl font-bold text-blue-900">No Books Found</p>
      </div>
    );
  }

  if (Array.isArray(book)) {
    return (
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {book.map((b) => (
          <div key={b.id} className="flex items-center space-x-8 p-4 border shadow-lg">
            <div className="w-1/3">
            </div>
            <div className="w-2/3">
              <h1 className="text-2xl font-bold mb-2">{b.title}</h1>
              {b.reviews.map((review, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                  <img src={review.rating} alt="Rating" className="w-8 h-8" />
                  <div>
                    <p><strong>{review.reviewer}:</strong></p>
                    <p>{review.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }


  return (
      <div className="flex items-center space-x-8 p-4 border shadow-lg">
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
            <Link to='/reviews'>Back to All Reviews</Link>
          </button>
      <div className="w-1/3">
      </div>
      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        {book.reviews.map((review, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            <img src={review.rating} alt="Rating" className="w-8 h-8" />
            <div>
              <p><strong>{review.reviewer}:</strong></p>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsData;







// );
// }

// if (!book) {
// return (

// No Books Found

// );
// }

// return (





// {book.title}
// {book.reviews.map((review, index) => (



// {review.reviewer}:
// {review.comment}


// ))}


// );
// };

// export default ReviewsData;