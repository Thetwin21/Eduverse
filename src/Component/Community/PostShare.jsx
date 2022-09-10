import React, { useRef, useState } from "react";
import { FaCalendar, FaVideo } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
// import {}

const PostShare = () => {
  const [photo, getPhoto] = useState(null);
  const [video, getVideo] = useState(null);
  const [event, getEvent] = useState(null);
  const photoRef = useRef();
  const videoRef = useRef();
  const eventRef = useRef();

  // get image file
  const onGetPhoto = (event) => {
    if (event.target.files && event.target.files[0]) {
      const photoFile = event.target.files[0];
      getPhoto({ photo, photo: URL.createObjectURL(photoFile) });
    }
  };
  //get photo file
  const onGetVideo = (event) => {
    if (event.target.files && event.target.files[0]) {
      const videoFile = event.target.files[0];
      getVideo({ video, video: URL.createObjectURL(videoFile) });
    }
  };
  // get event
  const onGetevent = (event) => {
    if (event.target.files && event.target.files[0]) {
      const eventFile = event.target.files[0];
      getEvent({ event, event: URL.createObjectURL(eventFile) });
    }
  };
  return (
    <section className="post-share">
      <img src="../Asset/profileImg.png" className="profile-img" alt="" />
      <div className="sh-content">
        <input type="search" name="" id="" placeholder="write something" />
        <div className="sh-items">
          <div className="photo" onClick={() => photoRef.current.click()}>
            <MdPhoto />
            <p>Photo</p>
            <input
              type="file"
              name="photoFile"
              ref={photoRef}
              onChange={onGetPhoto}
              accept="image/png, image/gif, image/jpeg"
              id="file"
              style={{ display: "none" }}
            />
          </div>

          <div className="video" onClick={() => videoRef.current.click()}>
            <FaVideo /> <p>Video</p>
            <input
              type="file"
              name="videoFile"
              ref={videoRef}
              onChange={onGetVideo}
              accept="video/mp4 , video/x-mp4,video/*"
              id="file"
              style={{ display: "none" }}
            />
          </div>

          <div className="event" onClick={() => eventRef.current.click()}>
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
