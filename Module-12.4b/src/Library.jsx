import { useState } from "react";
import { collection } from "./collection";
import { Books } from "./Books";
import { LibraryContext } from "./LibraryContext";
import { LibraryContextProvider } from "./LibraryContext";

function Library() {
  return (
    <div className="App">
      <h1>Library</h1>
      <LibraryContextProvider>
        <Books />
      </LibraryContextProvider>
    </div>
  );
}

export default Library;
