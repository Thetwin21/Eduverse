import React, { useRef, useState } from "react";
import { FaCalendar, FaVideo } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
// import {}

const PostShare = () => {
  const [img, getImg] = useState(null);
  const [photo, getPhot] = useState(null);
  const [event, getEvent] = useState(null);
  const imgRef = useRef();
  const photoRef = useRef();
  const eventRef = useRef();

  // get image file
  const onGetImg = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imgFile = event.target.files[0];
      getImg({
        img: URL.createObjectURL(imgFile),
      });
    }
  };
  //get photo file
  const onGetPhoto = (event) => {
    if (event.target.files && event.target.files[0]) {
      const photoFile = event.target.files[0];
      getImg({
        photo: URL.createObjectURL(photoFile),
      });
    }
  };
  // get event
  const onGetevent = (event) => {
    if (event.target.files && event.target.files[0]) {
      const eventFile = event.target.files[0];
      getEvent({
        event: URL.createObjectURL(eventFile),
      });
    }
  };
  return (
    <section className="post-share">
      <img
        src="../Asset/profileImg.png"
        className="profile-img"
        alt=""
      />
      <div className="sh-content">
        <input type="search" name="" id="" placeholder="write something" />
        <div className="sh-items">
          <div
            className="photo"
            onClick={() => imgRef.current.click()}
            >
            <MdPhoto />
            <p>Photo</p>
            <input
              type="file"
              name="imgFile"
              ref={imgRef}
              onChange={onGetImg}
              accept="image/png, image/gif, image/jpeg"
              id="file"
              style={{ display: "none" }}
            />
          </div>
          <div className="video" onClick={() => photoRef.current.click()}>
            <FaVideo /> <p>Video</p>
            <input
              type="file"
              name="photoFile"
              ref={photoRef}
              onChange={onGetPhoto}
              accept="video/mp4 , video/x-mp4,video/*"
              id="file"
              style={{ display: "none" }}
            />
          </div>
          <div className="event" onClick={()=>eventRef.current.click()}>
            <FaCalendar />
            <p>Events</p>
            <input
              type="file"
              name="eventFile"
              ref={eventRef}
              onChange={onGetevent}
              id="file"
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostShare;
