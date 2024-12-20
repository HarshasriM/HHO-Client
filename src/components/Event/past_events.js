import React from 'react';
import { Link } from 'react-router-dom';
import './past_events.css';

const events = [
  {
    eventTitle: "Tech Summit 2024",
    eventDescription: "A premier technology event showcasing the latest innovations and trends in tech.",
    eventStartDate: "2024-05-15",
    eventEndDate: "2024-05-17",
    eventPoster: "tech-summit-poster.jpg",
    eventVenue: "Silicon Valley Convention Center",
    subEvents: [
      {
        subEventTitle: "AI Workshop",
        subEventVenue: "Room A1",
        subEventDate: "2024-05-15",
        subEventPoster: "ai-workshop-poster.jpg",
        subEventDescription: "",
      },
      {
        subEventTitle: "Cybersecurity Panel",
        subEventVenue: "Room B3",
        subEventDate: "2024-05-16",
        subEventPoster: "cybersecurity-panel-poster.jpg",
        subEventDescription: "",
      },
    ],
  },
  {
    eventTitle: "Music Fiesta 2024",
    eventDescription: "A grand celebration of music with performances by top artists from around the world.",
    eventStartDate: "2024-06-10",
    eventEndDate: "2024-06-12",
    eventPoster: "music-fiesta-poster.jpg",
    eventVenue: "Global Arena, New York",
    subEvents: [
      {
        subEventTitle: "Rock Night",
        subEventVenue: "Main Stage",
        subEventDate: "2024-06-10",
        subEventPoster: "rock-night-poster.jpg",
        subEventDescription: "",
      },
      {
        subEventTitle: "Jazz Evening",
        subEventVenue: "Jazz Hall",
        subEventDate: "2024-06-11",
        subEventPoster: "jazz-evening-poster.jpg",
        subEventDescription: "",
      },
    ],
  },
  {
    eventTitle: "Tech Summit 2024",
    eventDescription: "A premier technology event showcasing the latest innovations and trends in tech.",
    eventStartDate: "2024-05-15",
    eventEndDate: "2024-05-17",
    eventPoster: "tech-summit-poster.jpg",
    eventVenue: "Silicon Valley Convention Center",
    subEvents: [
      {
        subEventTitle: "AI Workshop",
        subEventVenue: "Room A1",
        subEventDate: "2024-05-15",
        subEventPoster: "ai-workshop-poster.jpg",
        subEventDescription: "",
      },
      {
        subEventTitle: "Cybersecurity Panel",
        subEventVenue: "Room B3",
        subEventDate: "2024-05-16",
        subEventPoster: "cybersecurity-panel-poster.jpg",
        subEventDescription: "",
      },
    ],
  },
  {
    eventTitle: "Music Fiesta 2024",
    eventDescription: "A grand celebration of music with performances by top artists from around the world.",
    eventStartDate: "2024-06-10",
    eventEndDate: "2024-06-12",
    eventPoster: "music-fiesta-poster.jpg",
    eventVenue: "Global Arena, New York",
    subEvents: [
      {
        subEventTitle: "Rock Night",
        subEventVenue: "Main Stage",
        subEventDate: "2024-06-10",
        subEventPoster: "rock-night-poster.jpg",
        subEventDescription: "",
      },
      {
        subEventTitle: "Jazz Evening",
        subEventVenue: "Jazz Hall",
        subEventDate: "2024-06-11",
        subEventPoster: "jazz-evening-poster.jpg",
        subEventDescription: "",
      },
    ],
  },
];




const Card = ({ imageSrc, title, description }) => (
  <div className="event-card mb-3">
    <img src={imageSrc} alt={title} />
    <div className="info">
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to={`/events/${title.replace(/\s+/g, '').toLowerCase()}`} className="event-card-button">
        Read More
      </Link>

    </div>
  </div>
);

function PastEvents(){

  const today = new Date();

  // Filter past events
  const pastEvents = events.filter(event => new Date(event.eventEndDate) < today);

  // Sort past events in descending order by end date
  const sortedPastEvents = pastEvents.sort((a, b) => new Date(b.eventEndDate) - new Date(a.eventEndDate));

  // Select the top 4 most recent past events
  const recentPastEvents = sortedPastEvents.slice(0, 4);

  return (
  <>
    <h2 className="event-name p-5 text-center">Past <span className="span-el">Events</span></h2>
    <div className="container">
      <div className="wrapper">
        <div className="row">
          {/* <div className="col-12 col-lg-3">
            <Card
              imageSrc="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title="Pramidha 2K23"
              description="Lorem Ipsum is simply dummy text from the printing and typesetting industry"
            />
          </div> */}
          {recentPastEvents.map((event, index) => (
            <div className="col-12 col-lg-3">
            <Card
              imageSrc="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title="Vasista 2K23"
              description="Lorem Ipsum is simply dummy text from the printing and typesetting industry"
            />
          </div>
          ))}
          {/* <div className="col-12 col-lg-3">
            <Card
              imageSrc="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title="Chaitra 2K23"
              description="Lorem Ipsum is simply dummy text from the printing and typesetting industry"
            />
          </div> */}
          {/* <div className="col-12 col-lg-3">
            <Card
              imageSrc="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
              title="Pramidha 2K22"
              description="Lorem Ipsum is simply dummy text from the printing and typesetting industry"
            />
          </div> */}
        </div>
      </div>
    </div>
  </>)
}

export default PastEvents;
