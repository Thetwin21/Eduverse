import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BsArrow90DegRight } from "react-icons/bs";
import { uploads } from "../Data/uploads";

const PostUploads = ({onClick}) => {
  return (
    <section className="post-uploads">
      {uploads && uploads.map((post) => (
        <div className="post" key={post.id} onClick={onClick}>
          <img src={post.imgProfile} alt="" className="profileImg" />
          <div className="profile-content">
            <div className="n-details">
              <div className="upload-names">
                <span className="upload-name">{post.name}</span>
                <span className="upload-username">{post.username}</span>
              </div>
              <div className="time-posted">5 hours ago</div>
            </div>
            <div className="post-desc">{post.desc}</div>
            {post.imgPost.length !== 0 && <img src={post.imgPost} alt="" />}
            <div className="reactions">
              <div className="likes-container">
                <span>3.1k</span>
                <span>45 comments</span>
              </div>
              <div className="reaction-btn">
                <button><span className="icon"><FaHeart /></span> like</button>
                <button><span className="icon"><AiFillMessage /></span> Comment</button>
                <button><span className="icon"><BsArrow90DegRight /></span> Share</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PostUploads;
