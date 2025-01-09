import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import Loader from "./Loader";
import NavBar from "../NavBar";
import Footer from "../Footer";


const BookDetails = () => {
  const { bookId } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const [books] = useState([
    {
      id: 1,
      title: "The Road",
      author: "Cormac McCarthy",
      cover: "/Book_Covers/The_Road_Cover.jpg",
      publication: "Vintage",
      description: "A post-apocalyptic novel that follows a father and son journeying through a barren landscape.",
      publication_Date: "2006",
      isbn: "9780307387899",
      pages: 287,
      subjects: ["Fiction", "Post-Apocalyptic"],
      reviews: [
          { reviewer: "John Doe", comment: "A haunting and beautifully written book.", rating: 5 },
          { reviewer: "Jane Smith", comment: "Very emotional and thought-provoking.", rating: 4 }
      ],
      category: "Fiction"
      },
      {
      id: 2,
      title: "Mostly Dead Things",
      author: "Kristen Arnett",
      cover: "/Book_Covers/Mostly_Dead_Cover.jpg",
      publication: "Tin House Books",
      description: "A darkly humorous exploration of grief, family, and the art of taxidermy.",
      publication_Date: "2019",
      isbn: "9781947793316",
      pages: 354,
      subjects: ["Fiction", "Humor"],
      reviews: [
          { reviewer: "Alice Brown", comment: "A funny yet poignant story.", rating: 4 },
          { reviewer: "Bob Martin", comment: "Unique and captivating.", rating: 5 }
      ],
      category: "Fiction"
      },
      {
      id: 3,
      title: "Invisible Man",
      author: "Ralph Ellison",
      cover: "/Book_Covers/Invisible_Man_Cover.jpg",
      publication: "Random House",
      description: "A landmark novel that addresses the social and intellectual issues faced by African Americans.",
      publication_Date: "1952",
      isbn: "9780679732761",
      pages: 581,
      subjects: ["Fiction", "Classic", "Civil Rights"],
      reviews: [
          { reviewer: "Chris Green", comment: "A powerful and thought-provoking novel.", rating: 5 }
      ],
      category: "Classic"
      },
      {
      id: 4,
      title: "Harry Potter and the Cursed Child",
      author: "J.K. Rowling",
      cover: "/Book_Covers/Harry_Potter_and_the_Cursed_Child_Cover.jpg",
      publication: "Little, Brown",
      description: "The eighth story in the Harry Potter series, focusing on Harry's son, Albus.",
      publication_Date: "2016",
      isbn: "9780751565355",
      pages: 343,
      subjects: ["Fantasy", "Young Adult"],
      reviews: [
          { reviewer: "Sophia White", comment: "A nostalgic return to the wizarding world.", rating: 4 }
      ],
      category: "Fantasy"
      },
      {
      id: 5,
      title: "From These Broken Pieces",
      author: "Katie Hauck Ministries",
      cover: "/Book_Covers/FromTheseBrokenPieces_Cover.jpg",
      publication: "Katie Hauck Ministries",
      description: "An inspiring story about overcoming challenges and finding strength in faith.",
      publication_Date: "2018",
      isbn: "9781944564531",
      pages: 272,
      subjects: ["Self-Help", "Faith"],
      reviews: [
          { reviewer: "Mary Thompson", comment: "A deeply inspiring book.", rating: 5 }
      ],
      category: "Self-Help"
      },
      {
      id: 6,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "/Book_Covers/TheGreatGatsby.jpg",
      publication: "Scribner",
      description: "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      publication_Date: "1925",
      isbn: "9780743273565",
      pages: 180,
      subjects: ["Fiction", "Classic", "American Literature"],
      reviews: [
          { reviewer: "Ella Green", comment: "A timeless classic.", rating: 5 }
      ],
      category: "Classic"
      },
      {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "/Book_Covers/TheHobbitCover.jpg",
      publication: "HarperCollins",
      description: "A fantasy novel that follows Bilbo Baggins on an epic journey.",
      publication_Date: "1937",
      isbn: "9780261103283",
      pages: 310,
      subjects: ["Fantasy", "Adventure"],
      reviews: [
          { reviewer: "Liam Harper", comment: "A magical and adventurous tale.", rating: 5 }
      ],
      category: "Fantasy"
      },
      {
      id: 8,
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      cover: "/Book_Covers/TheLittlePrinceCover.jpg",
      publication: "Reynal & Hitchcock",
      description: "A poetic tale about a pilot's journey and his encounter with a young prince.",
      publication_Date: "1943",
      isbn: "9780156012195",
      pages: 96,
      subjects: ["Children", "Philosophy"],
      reviews: [
          { reviewer: "Mia Carter", comment: "A beautiful story with deep meanings.", rating: 5 }
      ],
      category: "Children"
      },
      {
      id: 9,
      title: "A Teaspoon of Earth and Sea",
      author: "Dina Nayeri",
      cover: "/Book_Covers/A_TeaSponOfEarthAndSea.jpg",
      publication: "Riverhead Books",
      description: "A powerful story about identity, family, and cultural divide.",
      publication_Date: "2013",
      isbn: "9781594487040",
      pages: 432,
      subjects: ["Fiction", "Cultural"],
      reviews: [
          { reviewer: "Ethan Brown", comment: "A rich and captivating novel.", rating: 4 }
      ],
      category: "Fiction"
      },
      {
      id: 10,
      title: "Charlotte's Web",
      author: "E.B. White",
      cover: "/Book_Covers/Charlottes_Web_Cover.jpg",
      publication: "Harper & Brothers",
      description: "A children's story about friendship between a pig and a spider.",
      publication_Date: "1952",
      isbn: "9780064400558",
      pages: 192,
      subjects: ["Children", "Friendship"],
      reviews: [{ reviewer: "Sarah Green", comment: "A heartwarming story for all ages.", rating: 5 }
      ],
      category: "Children"
          }
  ]);
  
  useEffect(() => {
  
    setTimeout(() => {
      const fetchedBook = books.find((b) => b.id === parseInt(bookId));
      setBook(fetchedBook);
      setLoading(false);
    }, 1000);
  }, [bookId]); 

  if (loading) {
    return (
      <>
    <NavBar />
    <div className="container mx-auto p-6">
    <Loader />
    </div>
    <Footer />
    </>
    );
  }

  if (!book) {
    return (
      <>
    <NavBar />
    <div className="container mx-auto p-6">
    <p className="text-3xl font-bold text-blue-900">No Books Found</p>
    </div>
    <Footer />
    </>
    );
  }

  return (
    <>
    <NavBar />
    <div className="flex flex-col justify-evenly relative items-center w-full p-4 m-auto flex-grow-1 min-h-64">
    <button className="absolute top-10 p-14 m-auto w-full flex justify-start items-center">
  <Link to="/BookList">
  <FaAngleLeft className='text-white bg-[var(--sec-bg-cl)]' size = {32}/>
    </Link>
  </button>
    <div className=' flex-grow-1 absolute top-0 transform -translate-x-1/2 left-1/2 text-center items-center justify-center -mt-5'> 
  <h2 className="section-title absolute top-20 text-center my-20text-2xl font-bold text-gray-800 mb-8">Book Details</h2>
  </div>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-28">
        <div>
          <img
            src={book.cover}
            alt={book.title}
            className="w-full -mx-auto h-auto border shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-gray-700 mb-4">{book.description}</p>
          <div className="space-y-2">
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Publication Date:</strong> {book.publication_Date}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p><strong>Subjects:</strong> {book.subjects.join(", ")}</p>
          </div>
        </div>
      </main>
      <section className="mt-8">
        <h2 className="text-2xl font-bold">About the Author</h2>
        <div className="flex items-center mt-4 space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <p>
            <strong>{book.author}</strong>: A renowned author known for their
            thought-provoking stories.
          </p>
        </div>
      </section>
      <button className=" flex justify-center w-full items-center text-center text-white bg-[var(--sec-bg-cl)] p-3 m-10 rounded-md"><Link to={`/reviews/${book.id}`}>Show Reviews</Link></button>
      </div>
      <Footer />
    </>
  );
};

export default BookDetails;
