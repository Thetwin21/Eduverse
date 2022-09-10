import React from "react";
import { BiSearch } from "react-icons/bi";
import NavProfile from "./NavProfile";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-box">
        <div className="icon">
          {" "}
          <BiSearch />
        </div>
        <div className="input">
          <input
            type="search"
            name=""
            placeholder="Search for projects ,people ,community..."
            id=""
          />
        </div>
      </div>
      <NavProfile />
    </div>
  );
};

export default Navbar;
