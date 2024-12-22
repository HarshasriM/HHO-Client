import React, { useEffect ,useContext} from 'react';
import './slider.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';
import {AppContext} from  '../../context/Context';

const Slider = () => {
  const {allEvents,setAllEvents} = useContext(AppContext);  
  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next.addEventListener('click', handleNext);
    prev.addEventListener('click', handlePrev);

    return () => {
      next.removeEventListener('click', handleNext);
      prev.removeEventListener('click', handlePrev);
    };
  }, []);

  const handleNext = () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  };

  const handlePrev = () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
  };

  

  const events = allEvents;

  const today = new Date();

  // Filter upcoming events
  const upcomingEvents = events.filter(event => new Date(event.event_start_date) >= today);
  console.log(upcomingEvents);

  // Sort upcoming events in ascending order by start date
  const sortedUpcomingEvents = upcomingEvents.sort((a, b) => new Date(a.event_start_date) - new Date(b.event_start_date));
  
  return (
    <div>
    <div className="container-slider d-none d-lg-block">
      <div className="slide">
 
        {
          sortedUpcomingEvents.map((event)=>{
                  return(
                        <div
          className="item"
          style={{ backgroundImage: `url(${event.eventPoster})` }}
        >
          <div className="content">
            <div className="name">{event.eventTitle || "Chaitra 2K23"}</div>
            <div className="des">
              {event.eventDescription.slice(0, 100) || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!"}
            </div>
            <Link to={`/events/${event._id}`} className='slider-button' state={{id:event._id}}>See More</Link>
            {/* <Link 
  to={`/events/${event.eventTitle.replace(/\s+/g, '').toLowerCase()}`} 
  className='slider-button'
>
  See More
</Link> */}
          </div>
        </div>
                  )
            }
          )

        }

      </div>

      <div className="button">
        <button className="prev">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
    

       

      
    </div>
  );
};

export default Slider;
