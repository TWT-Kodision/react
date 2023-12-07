import { useState } from "react";
import { collection } from "./collection";
import { Books } from "./Books";
import { BooksBorrowed } from "./BooksBorrowed";
import { Book } from "./Book";
import { Category } from "./Category";
import { BooksBorrowedContext } from "./Contexts";

const maxBooksBorrowed = 3;

export default () => {
  const [books, setBooks] = useState(collection.books);
  const [booksBorrowed, setBooksBorrowed] = useState([]);

  const canBorrowBooks = booksBorrowed.length < maxBooksBorrowed;

  const borrowBook = (id) => {
    if (!canBorrowBooks) return false;
    const newBooks = books.map((book) => {
      if (book.id === id) {
        book.available = false;
      }
      return book;
    });
    setBooks(newBooks);

    const book = books.find((book) => book.id === id);
    setBooksBorrowed(booksBorrowed.concat(book));
  };

  const returnBook = (id) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        book.available = true;
      }
      return book;
    });
    setBooks(newBooks);

    setBooksBorrowed(booksBorrowed.filter((book) => book.id !== id));
  };

  const programmingBooks = books.filter(
    (book) => book.category === "programming"
  );

  return (
    <div className="App">
      <h1>Library</h1>
      <BooksBorrowedContext.Provider value={{ canBorrowBooks, booksBorrowed }}>
        <BooksBorrowed />
        <Books amount={books.length}>
          <Category title="Programming" amount={programmingBooks.length}>
            {programmingBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                borrowBook={borrowBook}
                returnBook={returnBook}
              />
            ))}
          </Category>
        </Books>
      </BooksBorrowedContext.Provider>
    </div>
  );
};
