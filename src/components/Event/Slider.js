import React, { useEffect } from 'react';
import './slider.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';

const Slider = () => {

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
          subEventDescription: "An in-depth workshop on Artificial Intelligence.",
          subEventVenue: "Room A1",
          subEventDate: "2024-05-15",
          subEventPoster: "ai-workshop-poster.jpg",
        },
        {
          subEventTitle: "Cybersecurity Panel",
          subEventDescription: "A panel discussion on cybersecurity trends.",
          subEventVenue: "Room B3",
          subEventDate: "2024-05-16",
          subEventPoster: "cybersecurity-panel-poster.jpg",
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
          subEventDescription: "An electrifying night of rock music.",
          subEventVenue: "Main Stage",
          subEventDate: "2024-06-10",
          subEventPoster: "rock-night-poster.jpg",
        },
        {
          subEventTitle: "Jazz Evening",
          subEventDescription: "A soothing evening of jazz performances.",
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
          subEventDescription: "Startups pitch their ideas to potential investors.",
          subEventVenue: "Hall 1",
          subEventDate: "2024-07-20",
          subEventPoster: "pitch-competition-poster.jpg",
        },
        {
          subEventTitle: "Networking Mixer",
          subEventDescription: "An opportunity to network with industry leaders.",
          subEventVenue: "Lounge Area",
          subEventDate: "2024-07-21",
          subEventPoster: "networking-mixer-poster.jpg",
        },
      ],
    },
    {
      eventTitle: "Art & Culture Fest 2024",
      eventDescription: "A festival celebrating diverse art and culture from around the globe.",
      eventStartDate: "2024-08-15",
      eventEndDate: "2024-08-17",
      eventPoster: "art-culture-fest-poster.jpg",
      eventVenue: "Cultural Center, Paris",
      subEvents: [
        {
          subEventTitle: "Art Exhibition",
          subEventDescription: "Exhibition showcasing contemporary artworks.",
          subEventVenue: "Gallery 5",
          subEventDate: "2024-08-15",
          subEventPoster: "art-exhibition-poster.jpg",
        },
        {
          subEventTitle: "Cultural Dance",
          subEventDescription: "Performances of traditional dances from various cultures.",
          subEventVenue: "Main Hall",
          subEventDate: "2024-08-16",
          subEventPoster: "cultural-dance-poster.jpg",
        },
      ],
    },
    {
      eventTitle: "Health & Wellness Expo 2024",
      eventDescription: "An expo dedicated to health, wellness, and fitness.",
      eventStartDate: "2024-09-10",
      eventEndDate: "2024-09-12",
      eventPoster: "health-wellness-expo-poster.jpg",
      eventVenue: "Wellness Center, Tokyo",
      subEvents: [
        {
          subEventTitle: "Yoga Workshop",
          subEventDescription: "A session on the benefits of yoga and meditation.",
          subEventVenue: "Room 101",
          subEventDate: "2024-09-10",
          subEventPoster: "yoga-workshop-poster.jpg",
        },
        {
          subEventTitle: "Nutrition Seminar",
          subEventDescription: "A seminar on balanced nutrition and healthy eating.",
          subEventVenue: "Conference Hall B",
          subEventDate: "2024-09-11",
          subEventPoster: "nutrition-seminar-poster.jpg",
        },
      ],
    },
  ];

  const today = new Date();

  // Filter upcoming events
  const upcomingEvents = events.filter(event => new Date(event.eventStartDate) >= today);

  // Sort upcoming events in ascending order by start date
  const sortedUpcomingEvents = upcomingEvents.sort((a, b) => new Date(a.eventStartDate) - new Date(b.eventStartDate));
  
  return (
    <div>
    <div className="container-slider d-none d-lg-block">
      <div className="slide">
        {/* <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)' }}
        >
          <div className="content">
            <div className="name">Vasista 2K24</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Link to="/events/vasista2k24" className='slider-button'>See More</Link>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)' }}
        >
          <div className="content">
            <div className="name">Chaitra 2K24</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Link to="/events/chaitra2k24" className='slider-button'>See More</Link>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)' }}
        >
          <div className="content">
            <div className="name">Pramidha 2K24</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Link to="/events/pramidha2k24" className='slider-button'>See More</Link>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)' }}
        >
          <div className="content">
            <div className="name">Vasista 2K23</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Link to="/events/vasista2k23" className='slider-button'>See More</Link>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)' }}
        >
          <div className="content">
            <div className="name">Chaitra 2K23</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Link to="/events/chaitra2k23" className='slider-button'>See More</Link>
          </div>
        </div> */}  
        {
          events.map((event)=>{
                  return(
                        <div
          className="item"
          style={{ backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)' }}
        >
          <div className="content">
            <div className="name">Chaitra 2K23</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
            </div>
            <Link to="/events/chaitra2k23" className='slider-button'>See More</Link>
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
    <div className='d-lg-none'>
      <div id="CarouselEx" className="carousel slide" data-ride="carousel" data-interval="2000">
        <ol className="carousel-indicators">
          <li data-target="#CarouselEx" data-slide-to="0" className="active"></li>
          <li data-target="#CarouselEx" data-slide-to="1"></li>
          <li data-target="#CarouselEx" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1710768089/invitation_xi9izy.jpg"
              className="d-block w-100 car-img"
              alt="..."
            />
            <div className="content-mob">
                  <div className="name-mob">Chaitra 2K23</div>
                  <div className="des-mob">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
                  </div>
                  <Link to="/events/chaitra2k24" class="button-mob">See More</Link>
                </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-vector/realistic-happy-ugadi-festival_23-2148448218.jpg?t=st=1710766812~exp=1710770412~hmac=fae5aefb5813cbb9042ad5d5ba68ba56ef98d9da68d5f94b9bbd638a1688dd03&w=740"
              className="d-block w-100 car-img"
              alt="..."
            />
            <div className="content-mob">
                  <div className="name-mob">Chaitra 2K23</div>
                  <div className="des-mob">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
                  </div>
                  <Link to="/events/pramidha2k24" class="button-mob">See More</Link>
                </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg"
              className="d-block w-100 car-img"
              alt="..."
            />
            <div className="content-mob">
                  <div className="name-mob">Chaitra 2K23</div>
                  <div className="des-mob">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
                  </div>
                  <Link to="/events/vasista2k23" class="button-mob">See More</Link>
                </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#CarouselEx" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#CarouselEx" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div> 
    </div>

       

      
    </div>
  );
};

export default Slider;
