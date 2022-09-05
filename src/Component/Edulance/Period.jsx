import React from "react";

const Period = ({post}) => {
  return (
    <div className="period">
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
      <div className="about-client">
        <div className="card">
          <div className="img">
            <img src={post.url} alt="" />
          </div>
          <div className="name">
            <p>{post.name}</p>
            <p className="username">{post.username}</p>
          </div>
        </div>
        <div className="prof">
          {post.profession.map((data) => (
            <p>{data}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Period;
