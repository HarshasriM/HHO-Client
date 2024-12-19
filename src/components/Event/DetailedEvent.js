import React, { useState ,useRef,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import PreEvents from './pre_events';
import PreEvents from './PreEvents';
import EventsGallery from './img_gallery';
import EventCountdown from './EventCountdown';



function DetailedEvent() {
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
          subEventDescription: "This is going to be great thing ",
          subEventVenue: "Room A1",
          subEventDate: "2024-05-15",
          subEventPoster:
            "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
        },
        {
          subEventTitle: "Cybersecurity Panel",
          subEventDescription: "This is going to be great thing",
          subEventVenue: "Room B3",
          subEventDate: "2024-05-16",
          subEventPoster:
            "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
        },
        {
          subEventTitle: "AI Workshop",
          subEventDescription: "This is going to be great thing ",
          subEventVenue: "Room A1",
          subEventDate: "2024-05-15",
          subEventPoster:
            "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
        },
        {
          subEventTitle: "AI Workshop",
          subEventDescription: "This is going to be great thing ",
          subEventVenue: "Room A1",
          subEventDate: "2024-05-15",
          subEventPoster:
            "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
        }
        ,
        {
          subEventTitle: "AI Workshop",
          subEventDescription: "This is going to be great thing ",
          subEventVenue: "Room A1",
          subEventDate: "2024-05-15",
          subEventPoster:
            "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
        },
        {
          subEventTitle: "AI Workshop",
          subEventDescription: "This is going to be great thing in the future are you red",
          subEventVenue: "Room A1",
          subEventDate: "2024-05-15",
          subEventPoster:
            "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
        }
        ,
        {
          subEventTitle: "AI Workshop",
          subEventDescription: "This is going to be great thing ",
          subEventVenue: "Room A1",
          subEventDate: "2024-05-15",
          subEventPoster:
            "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
        },
        {
          subEventTitle: "AI Workshop",
          subEventDescription: "This is going to be great thing ",
          subEventVenue: "Room A1",
          subEventDate: "2024-05-15",
          subEventPoster:
            "https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg",
        }
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
          subEventDescription: "",
          subEventVenue: "Main Stage",
          subEventDate: "2024-06-10",
          subEventPoster: "",
        },
        {
          subEventTitle: "Jazz Evening",
          subEventDescription: "",
          subEventVenue: "Jazz Hall",
          subEventDate: "2024-06-11",
          subEventPoster: "jazz-evening-poster.jpg",
        },
      ],
    },
    {
      eventTitle: "Startup Expo 2024",
      eventDescription: "An exclusive platform for startups to showcase their products and network with investors.",
      eventStartDate: "2024-07-20",
      eventEndDate: "2024-07-22",
      eventPoster: "startup-expo-poster.jpg",
      eventVenue: "Expo Center, San Francisco",
      subEvents: [
        {
          subEventTitle: "Pitch Competition",
          subEventDescription: "",
          subEventVenue: "Hall 1",
          subEventDate: "2024-07-20",
          subEventPoster: "",
        },
        {
          subEventTitle: "Networking Mixer",
          subEventDescription: "",
          subEventVenue: "Lounge Area",
          subEventDate: "2024-07-21",
          subEventPoster: "networking-mixer-poster.jpg",
        },
      ],
    },
  ];
  

      const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              const [entry] = entries;
              setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.35 }
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


        const event = events[0];
      
  return (
   <>
     <div className="event-banner-container">
  <div className="event-banner-content">
    <h1>{event.eventTitle}</h1>
    <p>{event.eventDescription}</p>
    <div className="event-info">
      <div className="event-date">
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        <span>{event.eventStartDate}</span> to <span>{event.eventEndDate}</span>
      </div>
      <div className="event-location">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        <span>{event.eventVenue}</span>
      </div>
    </div>
  </div>
  {/* <div className="event-countdown">
    <EventCountdown eventDate={"2024-12-25T10:00:00"} />
  </div> */}
</div>

    
          <section ref={sectionRef} className={`chaitra-section ${isVisible ? 'animate' : ''}`}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="content">
                    <h2 className='event-name'>{event.eventTitle} <span className='span-el'>2K24</span></h2>
                    <p className='event-des'>
                    {event.eventDescription}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                  <div className="logo">
                    <img src="https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg" alt="Chaitra Logo"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
    <br/>
      <PreEvents  preEvents={event.subEvents}/>
      <br />

      <EventsGallery />

      <br />

       
      
 

   
   </>
  )
}

export default DetailedEvent