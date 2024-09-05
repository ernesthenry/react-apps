import { useState } from 'react';
import books from '../mock.jsx';
import '../App.css';

const BookSearchTool = () => {
  const [searchParams, setSearchTerm] = useState({
    title: "",
    author: "",
    genre: "",
    publicationYear: "",
    isbn: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearchTerm({
      ...searchParams,
      [name]: value.toLowerCase()
    });
  };

  const filterBooks = () => {
    return books.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchParams.title) &&
        book.author.toLowerCase().includes(searchParams.author) &&
        book.genre.toLowerCase().includes(searchParams.genre) &&
        book.publicationYear.toLowerCase().includes(searchParams.publicationYear) &&
        book.isbn.toLowerCase().includes(searchParams.isbn)
      );
    });
  };

  const resetSearch = () => {
    setSearchTerm({
      title: "",
      author: "",
      genre: "",
      publicationYear: "",
      isbn: ""
    });
  };

  return (
    <div>
      <h1>Book Search Tool</h1>
      <div className="search-inputs">
        <input
          type="text"
          name="title"
          value={searchParams.title}
          onChange={handleChange}
          placeholder="Search by Title"
        />
        <input
          type="text"
          name="author"
          value={searchParams.author}
          onChange={handleChange}
          placeholder="Search by Author"
        />
        <input
          type="text"
          name="genre"
          value={searchParams.genre}
          onChange={handleChange}
          placeholder="Search by Genre"
        />
        <input
          type="text"
          name="publicationYear"
          value={searchParams.publicationYear}
          onChange={handleChange}
          placeholder="Search by Publication Year"
        />
        <input
          type="text"
          name="isbn"
          value={searchParams.isbn}
          onChange={handleChange}
          placeholder="Search by ISBN"
        />
      </div>
      <button onClick={resetSearch}>Reset</button>
      <div className="book-list">
        {filterBooks().map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Year:</strong> {book.publicationYear}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearchTool;
