import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="../Asset/eduverse-logo.png" alt="" />
      </div>
      <nav>
        <ul>
          <li className="active-slide">
            <Link to="/" >Edulance</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
