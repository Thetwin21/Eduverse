import React from "react";
import Navbar from "../Navbar";
import FilterBox from "./FilterBox";
import { posts } from "../Data";
import Post from "./Post";
import { useState } from "react";
import ShotPage from "./ShotPage";
import { useRef } from "react";

const Edulance = () => {
  const [aShot, shootAshot] = useState(true);
  const [arrId, getArrId ] = useState(2)
 console.log(arrId)
  return (
    <div className="edulance">
      {aShot ? <>
      <Navbar />
      <div className="content">
        <div className="post-date">
          <div>
            <h3>Recent new projects</h3>
            <p>36 new projects posted today</p>
          </div>
          <button>Create A Project</button>
        </div>
        <div className="post-container">
           <div className="posts">
           {posts.map( post => (
            <Post post={post} onClick={()=> {
              getArrId(post.id)
              shootAshot(false)
            }} />
           ))}
           </div>
          <FilterBox />
        </div>
      </div>
      </> : <ShotPage posts={posts} arrId={arrId} shootAshot={shootAshot} />}
    </div>
  );
};

export default Edulance;
