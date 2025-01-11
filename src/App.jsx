import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import About from './components/Pages/About';
  import Categories from './components/Pages/Categories';
  import Reviews from './components/Pages/Reviews';
  import HomePage from './components/Pages/HomePage';
  import SearchForm from './components/SearchForm';
  import Header from './components/Header';
  import BookList from './components/BookList';
  import Fantacy from './components/categ_pages/Fantacy';
  import Fiction from './components/categ_pages/Fiction';
  import Classic from './components/categ_pages/Classic';
  import Children from './components/categ_pages/Children';
  import Self_Help from './components/categ_pages/Self_Help'
  import Books_showcase from './components/Pages/Books_showcase';
  import Intro_Categories from './components/Pages/Intro_Categories';
  import Contact_sect from './components/Pages/Contact_sect';
  import The_list from './components/data_store/The_list';
  import BookDetails from './components/data_store/BookDetails';
  import ReviewsData from './components/data_store/ReviewsData';
    import BookCategory from './components/data_store/BookCategory';
import './App.css'

function App() {
  const books = [
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
    ];
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/searchform" element={<SearchForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews  books={books} />} />
          <Route path="BookList" element={<BookList />} />
          <Route path="/Books_showcase" element={<Books_showcase />} />
          <Route path="/intro_categories" element={<Intro_Categories />} />
          <Route path="/contact_sect" element={<Contact_sect />} />
          <Route path="/categories/fantacy" element={<Fantacy />} />
          <Route path="/categories/fiction" element={<Fiction />} />
          <Route path="/categories/classic" element={<Classic />} />
          <Route path="/categories/children" element={<Children />} />
          <Route path="/categories/self_help" element={<Self_Help />} />
          <Route path="/the_list" element={<The_list />} />
          <Route path="/reviews/:bookId" element={<ReviewsData books={books} />} />
          <Route path="/book-details/:bookId" element={<BookDetails />} />
          <Route path="/categories/:category" element={<BookCategory books={books}/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
