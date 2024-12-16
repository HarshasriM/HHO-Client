import React, { useRef, useEffect, useState } from 'react';
import './EventSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PreEvents from './pre_events';
import EventsGallery from './img_gallery';

const eventsData = {
  chaitra2k24: {
    title: "Chaitra 2K24",
    description: "Celebrate the Ugadi festival with your friends in the campus environment.",
    date: "March 22, 2024",
    location: "Student Activity Center",
    imageUrl: "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
    additionalInfo: "Welcome to Chaitra, an event organized by HHO at the university to celebrate the Ugadi festival. It is to bring the festive vibe and home vibe in the campus. Join us for a day filled with fun games, rangoli, and many other activities to refresh yourself by actively participating in them.",
  },
  pramidha2k24: {
    title: "Pramidha 2K24",
    description: "Experience a cultural extravaganza with mesmerizing performances.",
    date: "April 10, 2024",
    location: "Main Auditorium",
    imageUrl: "https://example.com/pramidha.jpg",
    additionalInfo: "A night of cultural performances, competitions, and more.",
  },
};

const EventInfo = ({ eventName }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const event = eventsData[eventName];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <>
      <div className="event-banner-container">
        <div className="event-banner-content">
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <div className="event-info">
            <div className="event-date">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <span>{event.date}</span>
            </div>
            <div className="event-location">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className={`chaitra-section ${isVisible ? 'animate' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <div className="content">
                <h2 className="event-name">
                  {event.title.split(' ')[0]} <span className="span-el">{event.title.split(' ')[1]}</span>
                </h2>
                <p className="event-des">{event.additionalInfo}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="logo">
                <img src={event.imageUrl} alt={`${event.title} Logo`} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreEvents />
      <EventsGallery />
    </>
  );
};

export default EventInfo;
