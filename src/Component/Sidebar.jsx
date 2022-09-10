import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart3, BsPeople }from 'react-icons/bs';
import { ImStack }from 'react-icons/im';
import { HiOutlineLibrary }from 'react-icons/hi';
import { IoSettingsOutline }from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="../Asset/eduverse-logo.png" alt="" />
      </div>
      <nav>
        <ul>
          <li className="active-slide">
            <NavLink className={({isActive})=> isActive ? "isActive" : "notActive"} to="/"><ImStack /> Edulance</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "isActive" : "notActive"} to="/community"><BsPeople /> Community</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "isActive" : "notActive"} to="/library"><HiOutlineLibrary /> Library</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "isActive" : "notActive"} to="/marketplace"><BsCart3 /> Marketplace</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=> isActive ? "isActive" : "notActive"} to="/setting"><IoSettingsOutline /> Setting</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
