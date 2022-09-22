import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import Dragdrop from "./Dragdrop";

const PostEvent = ({ backToComPag }) => {
  const [textareaHight, setTextareaHight] = useState(7);

  const handleEvent = (event) => {
    const height = event.target.scrollHeight;
    const rows = event.target.rows;
    const rowHeight = 17;
    const tRows = Math.ceil(height / rowHeight) - 1;
    if (tRows > rows) {
      setTextareaHight(tRows);
    }
  };

  return (
    <section className="post_event">
      <div className="nav">
        <p>Create an event</p>{" "}
        <button onClick={backToComPag}>
          {" "}
          <MdCancel />{" "}
        </button>
      </div>
      <form className="event_form" action="">
        <span className="event_title_container">
          <label htmlFor="event_title">Event Title</label>
          <input
            type="text"
            id="event_title"
            placeholder="Startups for students"
          />
        </span>
        <span className="event_decription_container">
          <label htmlFor="event_decription">Describe your event</label>
          <textarea
            name=""
            id="event_decription"
            rows={textareaHight}
            placeholder="Enter Description"
            onChange={handleEvent}
          ></textarea>
        </span>
        <div className="event_type">
          <label htmlFor="">Type Of Event</label>
          <span className="physical">
            <input type="radio" name="event_type" id="physical" />
            <label htmlFor="physical">Physical</label>
          </span>
          <span className="online">
            <input type="radio" name="event_type" id="online" />
            <label htmlFor="online">Online</label>
          </span>
        </div>
        <span className="event_venue">
          <label htmlFor="venue">Venue</label>
          <input type="text" id="venue" placeholder="Enter Venue" />
        </span>
        <div className="date_time">
          <span className="date">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" />
          </span>
          <span className="time">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" />
          </span>
        </div>
        <Dragdrop />
        <div className="free_paid">
          <label htmlFor="">Type Of Event</label>
          <span className="paid">
            <input type="radio" name="paidfree" id="paid" />
            <label htmlFor="paid">free</label>
          </span>
          <span className="free">
            <input type="radio" name="paidfree" id="free" />
            <label htmlFor="free">paid</label>
          </span>
        </div>
        <span className="event_link">
          <label htmlFor="event_link">Link For Ticket Sales</label>
          <input type="text" id="event_link" placeholder="Enter link" />
        </span>
        <div className="event_btn">
          <button className="cancel">Cancel</button>
          <button>Post</button>
        </div>
      </form>
    </section>
  );
};

export default PostEvent;
