import { useState } from "react";
import { collection } from "./collection";
import { Books } from "./Books";
import { Category } from "./Category";
import { Book } from "./Book";

export default () => {
  const [books, setBooks] = useState(collection.books);

  const borrowBook = (id) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        book.available = false;
      }
      return book;
    });
    setBooks(newBooks);
  };

  const returnBook = (id) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        book.available = true;
      }
      return book;
    });
    setBooks(newBooks);
  };

  // const returnBook = (id) => {};
  const programmingBooks = books.filter(
    (book) => book.category === "programming"
  );
  return (
    <div className="App">
      <h1>Prop Drilling and Component Composition</h1>
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
    </div>
  );
};
