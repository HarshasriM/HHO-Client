// import React, { useState ,useRef,useEffect, useContext} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// // import PreEvents from './pre_events';
// import PreEvents from './PreEvents';
// import EventsGallery from './img_gallery';
// import EventCountdown from './EventCountdown';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../../context/Context';
// import { ConstructionOutlined } from '@mui/icons-material';



// function DetailedEvent() {

//     const{allEvents} = useContext(AppContext);
//     const navigate  = useNavigate();
//     const location = useLocation();
//     const [isVisible, setIsVisible] = useState(false);
//     const sectionRef = useRef(null);
//     const [events, setEvents] = useState(
//       JSON.parse(localStorage.getItem('events')) || []
//     );
    
    
//     const {eventId} = useParams();


      
      
//       useEffect(() => {
//         const observer = new IntersectionObserver(
//           (entries) => {
//             const [entry] = entries;
//             setIsVisible(entry.isIntersecting);
//           },
//           { threshold: 0.35 }
//         );
    
//         if (sectionRef.current) {
//           observer.observe(sectionRef.current);
//         }
    
//         return () => {
//           if (sectionRef.current) {
//             observer.unobserve(sectionRef.current);
//           }
//         };
//       }, []);


//       // useEffect(()=>{

//       //   async function getEvents() {
//       //     try {
//       //       const response = await axios.get('http://localhost:8000/api/events');
//       //       const data = response.data;
//       //       console.log(data);
//       //       setEvents(data);
//       //       localStorage.setItem('events',JSON.stringify(data));
//       //     } catch (error) {
//       //       console.error('Error fetching data:', error);
//       //     }
//       //   }
//       //   getEvents();
      
//       // },[])

//         console.log(allEvents);
//         console.log(events);
//         console.log(eventId)
       
  
    
        
        

       
 

//         React.useEffect(() => {
//           if (location.pathname === `/events/${eventId}}`) {
//                 navigate(`/events/${event.eventTitle.replace(/\s+/g, '-').toLowerCase()}`, { replace: true })
//           }
//           }, [location.pathname, navigate]
//         );
 
//       const event = events.find((e) => e._id.toString() === eventId || e.eventTitle.replace(/\s+/g, '-').toLowerCase() === eventId);
//       // const event = events[0];
//       console.log(event);
      

        
//       if(!event){
//         return <h1>Loading event details..</h1>
//       }
//   return (
//    <>
//   <div className="event-banner-container">
//   <div className="event-banner-content">
//     <h1>{event.eventTitle}</h1>
//     <p>{event.eventDescription}</p>
//     <div className="event-info">
//       <div className="event-date">
//         <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//         <span>{event.event_start_date.split("T")[0]}</span> to <span>{event.event_end_date.split("T")[0]}</span>
//       </div>
//       <div className="event-location">
//         <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
//         <span>{event.eventVenue}</span>
//       </div>
//     </div>
//   </div>
//   {/* <div className="event-countdown">
//     <EventCountdown eventDate={"2024-12-25T10:00:00"} />
//   </div> */}
// </div>

    
//    {/* <section ref={sectionRef} className={`chaitra-section ${isVisible ? 'animate' : ''}`}> */}
//             <div className="container-fluid">
//               <div className="row detail-section">
//                 <div className="col-12 col-md-7 order-2 order-md-1">
//                   <div className="content mt-md-5">
//                     <h2 className='event-name'>{event.eventTitle} <span className='span-el'>2K24</span></h2>
//                     <p className='event-des'>
//                     {event.eventDescription}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-12 col-md-5 order-1 order-md-2">
//                   <div className="logo">
//                     <img src={event.eventPoster} alt="Chaitra Logo"/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           {/* </section> */}
//     <br/>
//       <PreEvents  preEvents={event.subEvents}/>
//       <br />

//       <EventsGallery />

//       <br />

       
      
 

   
//    </>
//   )
// }

// export default DetailedEvent


import React, { useState, useRef, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/Context';
import PreEvents from './PreEvents';
import EventsGallery from './img_gallery';
import EventCountdown from './EventCountdown';

function DetailedEvent() {
  const { allEvents } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || []);
  const { eventId } = useParams();

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

  // Navigate based on eventId and replace spaces with hyphens for consistency in URL
  useEffect(() => {
    if (location.pathname === `/events/${eventId}}`) {
      navigate(`/events/${event.eventTitle.replace(/\s+/g, '-').toLowerCase()}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  const event = events.find(
    (e) => e._id.toString() === eventId || e.eventTitle.replace(/\s+/g, '-').toLowerCase() === eventId
  );

  if (!event) {
    return <h1>Loading event details...</h1>;
  }

  return (
   <>
  <div className="event-banner-container">
  <div className="event-banner-content">
    <h1>{event.eventTitle}</h1>
    <p>{event.eventDescription}</p>
    <div className="event-info">
      <div className="event-date">
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        <span>{event.event_start_date.split("T")[0]}</span> to <span>{event.event_end_date.split("T")[0]}</span>
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

      <div className="container-fluid">
        <div className="row detail-section">
          <div className="col-12 col-md-7 order-2 order-md-1">
            <div className="content">
              <h2 className="event-name">
                {event.eventTitle} <span className="span-el">2K24</span>
              </h2>
              <p className="event-des">{event.eventDescription}</p>
            </div>
          </div>
          <div className="col-12 col-md-5 order-1 order-md-2">
            <div className="logo">
              <img src={event.eventPoster} alt="Event Poster" />
            </div>
          </div>
        </div>
      </div>

      <br />
      <PreEvents preEvents={event.subEvents} />
      <br />
      <EventsGallery />
      <br />
    </>
  );
}

export default DetailedEvent;
