import { useContext } from "react";
import { BooksBorrowedContext } from "./Contexts";

export const BooksBorrowed = () => {
  const { canBorrowBooks, booksBorrowed } = useContext(BooksBorrowedContext);
  const maxBooksReached = <p>Maximum amount of books borrowed!</p>;

  return (
    <>
      <h2>Books borrowed</h2>
      {canBorrowBooks ? "" : maxBooksReached}
      <ul>
        {booksBorrowed.map(book => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </>
  );
};
