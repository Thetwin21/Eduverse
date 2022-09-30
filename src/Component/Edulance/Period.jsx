import React from "react";
import CardProfile from "../CardProfile";

const Period = ({post}) => {
  return (
    <section className="period">
      <div className="date">
        <p>Date posted</p>
        <p className="date-details">{post.time}</p>
      </div>
      <hr />
      <div className="tag">
        <p>Tag</p>
        <ul>
          <li>AutoCAD design</li>
          <li>Solidworks design</li>
          <li>fotran</li>
        </ul>
      </div>
      <hr />
      <div className="budget">
        <p>Budget</p>
        <p className="amt">{post.amt}</p>
      </div>
      <hr />
      <div className="status">
        <p>Project Status</p>
        <p>Open 28days left</p>
      </div>
      <hr />
     <CardProfile />
    </section>
  );
};

export default Period;
