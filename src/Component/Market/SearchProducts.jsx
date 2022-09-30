import React from "react";
import { BiSearch } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";

const SearchItems = ({ handleClick }) => {
  return (
    <div className="search_products_container">
      <div className="search_products">
        <div className="search_box">
          <div className="icon">
            <BiSearch />
          </div>
          <div className="input">
            <input
              type="search"
              name=""
              placeholder="Search for items..."
              id=""
            />
          </div>
        </div>
        <select className="dropdown">
          <option value="">Categories</option>
        </select>
      </div>
      <button onClick={handleClick}>
        <TiPlus /> Upload A Product
      </button>
    </div>
  );
};

export default SearchItems;
