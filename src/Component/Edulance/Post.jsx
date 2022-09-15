import React from "react";

const Post = ({ post, onClick, ref }) => {

  const profession = post.profession;
  
  return (
    <section
      className="job-post-container"
      key={post.id}
      ref={ref}
      onClick={onClick}
    >
      <img src={post.url} alt="" className="job-img" />
      <div className="job-post-content">
        <div className="job-name-details">
          <p className="name">{post.name}</p>
          <p className="username">{post.username}</p>
          <span></span>
          <p className="time-posted">Posted about {post.time} ago</p>
        </div>
        <h4 className="job-title">{post.projectName}</h4>
        <p className="text">{post.text}</p>
        <div className="btns">
          {profession.map((data) => (
            <p className="prof-data">{data}</p>
          ))}
        </div>
      </div>
      <div className="amt">
        <p>{post.amt}</p>
      </div>
    </section>
  );
};

export default Post;
