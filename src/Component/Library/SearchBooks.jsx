import React from "react";
import { BiSearch } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";

const SearchBooks = ({handleClick}) => {
  return (
    <div className="search_Container">
      <div className="search_books">
        <div className="search_box">
          <div className="icon">
            {" "}
            <BiSearch />
          </div>
          <div className="input">
            <input
              type="search"
              name=""
              placeholder="Search for books ,study materials..."
              id=""
            />
          </div>
        </div>
        <select className="dropdown">
          <option value="">Categories</option>
        </select>
      </div>
      <button onClick={handleClick}><TiPlus /> Add A Book</button>
    </div>
  );
};

export default SearchBooks;
