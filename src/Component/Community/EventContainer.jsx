import React from "react";
import { eventsData } from "../Data/EventsData";
import { communities } from "../Data/EventsData";

const EventContainer = () => {
  return (
    <section className="event-container">
      <section className="events">
      <h4>Events For You</h4>
      {eventsData &&
        eventsData.map((eventData) => (
          <div className="event" key={eventData.id}>
            <p className="event-time">{eventData.time}</p>
            <h5>{eventData.eventName}</h5>
            <p className="event-location">{eventData.location}</p>
          </div>
        ))}
      </section>
      <section className="your-community">
        <h5>Communities you belong to</h5>
        {communities && 
        communities.map((community) => (
          <div className="commnuity" key={community.id}>
            <img src={community.imgSrc} alt="" />
            <p>{community.name}</p>

          </div>
        ))

        }
      </section>
    </section>
  );
};

export default EventContainer;
