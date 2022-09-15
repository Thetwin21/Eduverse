import React from "react";
import { FaCalendar, FaVideo } from "react-icons/fa";
import { MdPhoto } from "react-icons/md";

const ShBtn = ({ onClickImg, onClickVideo, onClickEvent }) => {
  return (
    <div className="sh_items">
      <div className="photo" onClick={onClickImg}>
        <MdPhoto />
        <p>Photo</p>
      </div>

      <div className="video" onClick={onClickVideo}>
        <FaVideo /> <p>Video</p>
      </div>

      <div className="event" onClick={onClickEvent}>
        <FaCalendar />
        <p>Events</p>
        {/* <input
          type="file"
          name="eventFile"
          ref={eventRef}
          onChange={onGetEvent}
          id="file"
          style={{ display: "none" }}
        /> */}
      </div>
    </div>
  );
};

export default React.memo(ShBtn);
