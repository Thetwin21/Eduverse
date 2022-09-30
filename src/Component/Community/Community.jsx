import React, { useState } from "react";
import Navbar from "../NavComponent/Navbar";
import EventContainer from "./EventContainer";
import PostEvent from "./PostEvent";
import PostShare from "./PostShare";
import PostUploads from "./PostUploads";
import { allEventPosts } from "../../features/Events/EventSlice";
import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import CardProfile from "../CardProfile";

const Community = () => {
  const eventsData = useSelector(allEventPosts);
  const [eventId, setEventId] = useState("");
  // const [getPostId, setGetPostId] = useState(null)
  const [isEvent, setIsEvent] = useState(false);
  // to toggle isEvent
  const handleIsEvent = () => setIsEvent(true);

  // backToComPag
  const backToComPag = () => {
    setIsEvent(false);
  };
  const backToPage = () => {
    setEventId("");
  };

  const eventPost = eventsData[eventId - 1];
  return (
    <section className="community">
      <Navbar />
      {eventId === null || eventId === "" ? (
        <section className="content-container">
          <div className="post-container">
            {isEvent ? (
              <PostEvent backToComPag={backToComPag} />
            ) : (
              <>
                <PostShare handleIsEvent={handleIsEvent} />
                <PostUploads />
              </>
            )}
          </div>
          <EventContainer setEventId={setEventId} />
        </section>
      ) : (
        <section className="each-event-container">
          <nav className="event-nav">
            <button onClick={backToPage}>
              <IoIosArrowBack />
              Back
            </button>
          </nav>
          {eventPost !== undefined && (
            <section className="each_event" key={eventPost.id}>
              <div className="event-context">
                <h5>{eventPost.eventTitle}</h5>
                {eventPost.eventDescrption.map((newline) => (
                  <p className="newline">{newline}</p>
                ))}
                <div className="imgcontainer">
                  <img
                    className="event-flier-img"
                    src={eventPost.flierUrl}
                    alt=""
                  />
                </div>
                <div className="event_btn">
                  <button>Shoot your shot</button>
                </div>
              </div>

              <div className="event-time-and-venue">
                <span>
                  <h5>Date of Event</h5>
                  <p>August 16 2022</p>
                </span>
                <hr />
                <span>
                  <h5>Time</h5>
                  <p>{eventPost.time}</p>
                </span>
                <hr />
                <span>
                  <h5>Venue</h5>
                  <p>{eventPost.venue}</p>
                </span>
                <hr />
                <span>
                  <h5>Ticket Link</h5>
                  <p>{eventPost.ticketlink}</p>
                  <p></p>
                </span>
                <hr />
                <div className="about_client">
                  <h5>About Client</h5>
                  <CardProfile />
                </div>
              </div>
            </section>
          )}
        </section>
      )}
    </section>
  );
};

export default React.memo(Community);
