import { useContext } from "react";
import { BooksBorrowedContext } from "./Contexts";

export const Book = ({ book, borrowBook, returnBook }) => {
  const { canBorrowBooks } = useContext(BooksBorrowedContext);

  const canBorrow = canBorrowBooks && book.available;
  const canReturn = !book.available;

  const borrowButton = (
    <button
      type="button"
      className="borrow"
      disabled={!canBorrow}
      onClick={() => borrowBook(book.id)}
    >
      ⇩ Borrow
    </button>
  );

  const returnButton = (
    <button
      type="button"
      className="return"
      disabled={!canReturn}
      onClick={() => returnBook(book.id)}
    >
      ⏎ Return
    </button>
  );

  return (
    <>
      <h4>📖 {book.title}</h4>
      <p>✍ {book.author}</p>
      {borrowButton}
      {returnButton}
    </>
  );
};
