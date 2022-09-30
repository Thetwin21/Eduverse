import React from "react";
import { useState } from "react";
import Navbar from "../NavComponent/Navbar";
import AddBook from "./AddBook";
import Books from "./Books";
import SearchBooks from "./SearchBooks";
import { useSelector } from "react-redux";
import { allBooks } from "../../features/Library/LibrarySlice";
import SingleBook from "./SingleBook";

const Library = () => {
  const books = useSelector(allBooks);

  const [addBookToggle, setAddBookToggle] = useState(false);
  const [singleBookId, setSingleBookId] = useState("");

  const handleClick = () => {
    setAddBookToggle(true);
  };
  const backTo = () => {
    setAddBookToggle(false);
  };

  return (
    <section className="library">
      <Navbar />
      {singleBookId !== "" ? (
        <SingleBook
          books={books}
          singleBookId={singleBookId - 1}
          setSingleBookId={setSingleBookId}
        />
      ) : (
        <div className="library_content">
          <h3>Library</h3>
          <SearchBooks handleClick={handleClick} />
          <Books setSingleBookId={setSingleBookId} books={books} />
          <div
            className="add_book_container"
            style={{ display: addBookToggle ? "flex" : "none" }}
          >
            <AddBook backTo={backTo} books={books} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Library;
