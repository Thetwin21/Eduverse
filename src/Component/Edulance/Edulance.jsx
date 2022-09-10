import React from "react";
import Navbar from "../NavComponent/Navbar";
import FilterBox from "./FilterBox";
import { posts } from "../Data/Data";
import Post from "./Post";
import { useState } from "react";
import ShotPage from "./ShotPage";
import { useRef } from "react";

const Edulance = () => {
  const [aShot, shootAshot] = useState(true);
  const [arrId, getArrId ] = useState("")
 console.log(arrId)
  return (
    <section className="edulance">
      {aShot ? <>
      <Navbar />
      <section className="content">
        <div className="post-date">
          <div>
            <h3 className="recent-project">Recent new projects</h3>
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
      </section>
      </> : <ShotPage posts={posts} arrId={arrId} shootAshot={shootAshot} />}
    </section>
  );
};

export default Edulance;
