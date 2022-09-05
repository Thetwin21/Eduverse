import React from "react";

const Post = ({ post,onClick,ref }) => {
  const profession = post.profession 
  return (
    <div className="post" key={post.id} ref={ref} onClick={onClick}>
      <div className="img">
        <img src={post.url} alt="" />
      </div>
      <div className="text">
        <div className="name-details">
          <h3 className="name">{post.name}</h3>
          <p className="username">{post.username}</p>
          <p className="time-posted">Posted about {post.time} ago</p>
        </div>
        <h3 className="job-title">
          {post.projectName}
        </h3>
        <p className="text">
          {post.text}
        </p>
        <div className="btns">
          {profession.map(data => (
            <p>{data}</p>
          ))}
        </div>
      </div>
      <div className="amt">
        <p>{post.amt}</p>
      </div>
    </div>
  );
};

export default Post;
