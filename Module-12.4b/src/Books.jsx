import { useContext } from "react";
import { LibraryContext } from "./LibraryContext";
import { Category } from "./Category";
import { useLibrary } from "./LibraryContext";

export const Books = () => {
  const { books } = useLibrary();
  return (
    <>
      <h2>Books ({books.length}):</h2>
      <Category title="Programming" category="programming" />
    </>
  );
};
