import React, { useState } from "react";
import Navbar from "../NavComponent/Navbar";
import EventContainer from "./EventContainer";
import PostEvent from "./PostEvent";
import PostShare from "./PostShare";
import PostUploads from "./PostUploads";
import { allEventPosts } from "../../features/Events/EventSlice";
import { useSelector } from "react-redux";

const Community = () => {
  const [eventId, setEventId] = useState(3);
  const eventsData = useSelector(allEventPosts);
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
            <button onClick={backToPage}>Back</button>
          </nav>
          {eventsData &&
            eventsData.map(
              (event) =>
                event.id === eventId && (
                  <section className="each_event" key={event.id}>
                    <div className="event-context">
                      <h5>{event.eventTitle}</h5>
                      {event.eventDescrption.map((newline) => (
                        <p className="newline">{newline}</p>
                      ))}
                      <div className="imgcontainer">
                        <img
                          className="event-flier-img"
                          src={event.flierUrl}
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
                        <p>{event.time}</p>
                      </span>
                      <hr />
                      <span>
                        <h5>Venue</h5>
                        <p>{event.venue}</p>
                      </span>
                      <hr />
                      <span>
                        <h5>Ticket Link</h5>
                        <p>{event.ticketlink}</p>
                        <p></p>
                      </span>
                      <hr />
                      <div className="about_client">
                        <h5>About Client</h5>
                      </div>
                    </div>
                  </section>
                )
            )}
        </section>
      )}
    </section>
  );
};

export default React.memo(Community);
