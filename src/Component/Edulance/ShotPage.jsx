import React, { useState } from "react";
import NavProfile from "../NavComponent/NavProfile";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ShotForm from "./ShotForm";
import Period from "./Period";

const ShotPage = ({ posts, arrId, shootAshot }) => {
  const [ show,setShow ] = useState(true);

  // post id of the clicked
  const post = posts[arrId];
  return (
    <section className="shotPage">
      <nav>
        <div className="empty"></div>
        <NavProfile />
      </nav>
      <div className="container">
        <div className="btn">
          <button onClick={() => shootAshot((prevShot) => !prevShot)}>
            <AiOutlineArrowLeft /> back
          </button>
        </div>
        <div className="content-details">
          <div className="contentS">
            <h2 className="shootHeader" style={{display: show ? 'none' : 'flex' }}>Shoot your shot</h2>
            <h3 style={{fontSize: show ? "5vmin" : "4vmin"}}>{post.projectName}</h3>
            <p>hello!</p>
            <p className="text">{post.text}</p>
            {/* form for shoot your shot */}
            {!show && <ShotForm />}
            <div className="btn">
              <button style={{display: show ? 'flex' : 'none'}} onClick={()=> setShow(false)}>Shoot Your Shot</button>
            </div>
          </div>
          {/* period */}
          <Period post={post} />
        </div>
      </div>
    </section>
  );
};

export default ShotPage;
