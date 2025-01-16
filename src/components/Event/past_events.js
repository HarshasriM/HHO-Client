import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './past_events.css';
import { AppContext } from '../../context/Context';

// const events = [
//   {
//     eventTitle: "Tech Summit 2024",
//     eventDescription: "A premier technology event showcasing the latest innovations and trends in tech.",
//     eventStartDate: "2024-05-15",
//     eventEndDate: "2024-05-17",
//     eventPoster: "tech-summit-poster.jpg",
//     eventVenue: "Silicon Valley Convention Center",
//     subEvents: [
//       {
//         subEventTitle: "AI Workshop",
//         subEventVenue: "Room A1",
//         subEventDate: "2024-05-15",
//         subEventPoster: "ai-workshop-poster.jpg",
//         subEventDescription: "",
//       },
//       {
//         subEventTitle: "Cybersecurity Panel",
//         subEventVenue: "Room B3",
//         subEventDate: "2024-05-16",
//         subEventPoster: "cybersecurity-panel-poster.jpg",
//         subEventDescription: "",
//       },
//     ],
//   },
//   {
//     eventTitle: "Music Fiesta 2024",
//     eventDescription: "A grand celebration of music with performances by top artists from around the world.",
//     eventStartDate: "2024-06-10",
//     eventEndDate: "2024-06-12",
//     eventPoster: "music-fiesta-poster.jpg",
//     eventVenue: "Global Arena, New York",
//     subEvents: [
//       {
//         subEventTitle: "Rock Night",
//         subEventVenue: "Main Stage",
//         subEventDate: "2024-06-10",
//         subEventPoster: "rock-night-poster.jpg",
//         subEventDescription: "",
//       },
//       {
//         subEventTitle: "Jazz Evening",
//         subEventVenue: "Jazz Hall",
//         subEventDate: "2024-06-11",
//         subEventPoster: "jazz-evening-poster.jpg",
//         subEventDescription: "",
//       },
//     ],
//   },
//   {
//     eventTitle: "Tech Summit 2024",
//     eventDescription: "A premier technology event showcasing the latest innovations and trends in tech.",
//     eventStartDate: "2024-05-15",
//     eventEndDate: "2024-05-17",
//     eventPoster: "tech-summit-poster.jpg",
//     eventVenue: "Silicon Valley Convention Center",
//     subEvents: [
//       {
//         subEventTitle: "AI Workshop",
//         subEventVenue: "Room A1",
//         subEventDate: "2024-05-15",
//         subEventPoster: "ai-workshop-poster.jpg",
//         subEventDescription: "",
//       },
//       {
//         subEventTitle: "Cybersecurity Panel",
//         subEventVenue: "Room B3",
//         subEventDate: "2024-05-16",
//         subEventPoster: "cybersecurity-panel-poster.jpg",
//         subEventDescription: "",
//       },
//     ],
//   },
//   {
//     eventTitle: "Music Fiesta 2024",
//     eventDescription: "A grand celebration of music with performances by top artists from around the world.",
//     eventStartDate: "2024-06-10",
//     eventEndDate: "2024-06-12",
//     eventPoster: "music-fiesta-poster.jpg",
//     eventVenue: "Global Arena, New York",
//     subEvents: [
//       {
//         subEventTitle: "Rock Night",
//         subEventVenue: "Main Stage",
//         subEventDate: "2024-06-10",
//         subEventPoster: "rock-night-poster.jpg",
//         subEventDescription: "",
//       },
//       {
//         subEventTitle: "Jazz Evening",
//         subEventVenue: "Jazz Hall",
//         subEventDate: "2024-06-11",
//         subEventPoster: "jazz-evening-poster.jpg",
//         subEventDescription: "",
//       },
//     ],
//   },
// ];




const Card = ({ imageSrc, title, description,eventId,event }) => (
  // <div className="event-card m-3">
  //   <img src={imageSrc} alt={title} />
  //   <div className="info">
  //     <h1>{title}</h1>
  //     <p>{description}</p>
  //     <Link to={`/events/${eventId}`} className="event-card-button"  state={{id:eventId}}>
  //       Read More
  //     </Link>

  //   </div>
  // </div>
  <div className="event-card m-3">
  <img src={imageSrc} alt={title} />
  <div className="title-overlay">
    <h1 className="title">{title}</h1>
  </div>
  <div className="info">
    <h1>{title}</h1>
    <p>{description}</p>
    <Link
      to={`/events/${eventId}`}
      className="event-card-button"
      state={{ id: eventId }}
    >
      Read More
    </Link>
  </div>
</div>


  
);

function PastEvents(){

    const{allEvents,setAllEvents} = useContext(AppContext);
    const events = allEvents;
  const today = new Date();

  // Filter past events
  const pastEvents = events.filter(event => new Date(event.event_end_date) < today);

  // Sort past events in descending order by end date
  const sortedPastEvents = pastEvents.sort((a, b) => new Date(b.event_end_date) - new Date(a.event_end_date));

  // Select the top 4 most recent past events
  const recentPastEvents = sortedPastEvents.slice(0, 4);

  return (
  <>
    <h2 className="event-name p-5 text-center">Past <span className="span-el">Events</span></h2>
    <div>
      <div className="wrapper">
        <div className="row">
    
          {recentPastEvents.map((event, index) => (
            <div className="col-12 col-md-3 mb-4">
            <Card
              imageSrc={event.eventPoster}
              title={event.eventTitle}
              description={event.eventDescription.slice(0, 50) + '...'}
              eventId={event._id}
              event = {event}
            />
          </div>
          ))}

        </div>
      </div>
    </div>
  </>)
}

export default PastEvents;
