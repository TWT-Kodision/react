import { useContext } from "react";
import { LibraryContext } from "./LibraryContext";
export const Books = () => {
  const { books } = useContext(LibraryContext);
  return (
    <>
      <h2>Books ({amount}):</h2>
      {children}
    </>
  );
};
