import React from "react";
import { useSelector } from "react-redux"; // usePatch will be in the postEvent component
import { allEventPosts } from "../../features/Events/EventSlice";
import { allComUpload } from "../../features/Events/YourComSlice";
// import { communities } from "../Data/EventsData";

const EventContainer = ({setEventId}) => {
  // events available
  const eventsData = useSelector(allEventPosts);
  // your community
  const communities = useSelector(allComUpload);




  return (
    <section className="event-container">
      <section className="events">
        <h4>Events For You</h4>
        {eventsData &&
          eventsData.map((eventData) => {
            const { id, day, month, time, eventTitle, venue } = eventData;
            return (
              <div className="event" key={id} onClick={()=> setEventId(id)}>
                <p className="event-time">
                  {day.substring(0, 3)}, {month}, {time}
                </p>
                <h5>{eventTitle}</h5>
                <p className="event-location">{venue}</p>
              </div>
            );
          })}
      </section>

      <section className="your-community">
        <h5>Communities you belong to</h5>
        {communities &&
          communities.map((community) => {
            const { id, name, imgSrc } = community;
            return (
              <div className="commnuity" key={id}>
                <img src={imgSrc} alt="" />
                <p>{name}</p>
              </div>
            );
          })}
      </section>
    </section>
  );
};

export default EventContainer;
