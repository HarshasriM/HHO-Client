// import React, { useEffect ,useContext} from 'react';
// import './slider.css'; // Import the CSS for styling
// import { Link } from 'react-router-dom';
// import {AppContext} from  '../../context/Context';

// const Slider = () => {
//   const {allEvents,setAllEvents} = useContext(AppContext);  
//   useEffect(() => {
//     const next = document.querySelector('.next');
//     const prev = document.querySelector('.prev');

//     next.addEventListener('click', handleNext);
//     prev.addEventListener('click', handlePrev);

//     return () => {
//       next.removeEventListener('click', handleNext);
//       prev.removeEventListener('click', handlePrev);
//     };
//   }, []);

//   const handleNext = () => {
//     let items = document.querySelectorAll('.item');
//     document.querySelector('.slide').appendChild(items[0]);
//   };

//   const handlePrev = () => {
//     let items = document.querySelectorAll('.item');
//     document.querySelector('.slide').prepend(items[items.length - 1]);
//   };

  

//   const events = allEvents;

//   const today = new Date();

//   // Filter upcoming events
//   const upcomingEvents = events.filter(event => new Date(event.event_start_date) >= today);
//   console.log(upcomingEvents);

//   // Sort upcoming events in ascending order by start date
//   const sortedUpcomingEvents = upcomingEvents.sort((a, b) => new Date(a.event_start_date) - new Date(b.event_start_date));
  
//   return (
//     <div>
//     <div className="container-slider d-none d-lg-block">
//       <div className="slide">
 
//         {
//           sortedUpcomingEvents.map((event)=>{
//                   return(
//                         <div
//           className="item"
//           style={{ backgroundImage: `url(${event.eventPoster})` }}
//         >
//           <div className="content">
//             <div className="name">{event.eventTitle || "Chaitra 2K23"}</div>
//             <div className="des">
//               {event.eventDescription.slice(0, 100) || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!"}
//             </div>
//             <Link to={`/events/${event._id}`} className='slider-button' state={{id:event._id}}>See More</Link>
//             {/* <Link 
//   to={`/events/${event.eventTitle.replace(/\s+/g, '').toLowerCase()}`} 
//   className='slider-button'
// >
//   See More
// </Link> */}
//           </div>
//         </div>
//                   )
//             }
//           )

//         }

//       </div>

//       <div className="button">
//         <button className="prev">
//           <i className="fa-solid fa-arrow-left"></i>
//         </button>
//         <button className="next">
//           <i className="fa-solid fa-arrow-right"></i>
//         </button>
//       </div>
//     </div>
    

       

      
//     </div>
//   );
// };

// export default Slider;import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './slider.css';

// // import required modules
// import { Parallax, Pagination, Navigation } from 'swiper/modules';

// export default function Slider() {
//   return (
//     <>
//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         speed={600}
//         parallax={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         loop={true} 
//         modules={[Parallax, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div
//             className="parallax-bg"
//             style={{
//               'background-image':
//                 'url(https://swiperjs.com/demos/images/nature-1.jpg)',
//             }}
//             data-swiper-parallax="-23%"
//           ></div>
//           <div className="slide-content">
//             <h2 className="slide-heading">Slide 1</h2>
//             <p className="slide-description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum
//               mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae
//               porttitor porttitor.
//             </p>
//             <button className="slide-button">Learn More</button>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div
//             className="parallax-bg"
//             style={{
//               'background-image':
//                 'url(https://swiperjs.com/demos/images/nature-2.jpg)',
//             }}
//             data-swiper-parallax="-23%"
//           ></div>
//           <div className="slide-content">
//             <h2 className="slide-heading">Slide 2</h2>
//             <p className="slide-description">
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam
//               hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.
//             </p>
//             <button className="slide-button">Learn More</button>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div
//             className="parallax-bg"
//             style={{
//               'background-image':
//                 'url(https://swiperjs.com/demos/images/nature-3.jpg)',
//             }}
//             data-swiper-parallax="-23%"
//           ></div>
//           <div className="slide-content">
//             <h2 className="slide-heading">Slide 3</h2>
//             <p className="slide-description">
//               Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
//               feugiat non eros quis feugiat. Suspendisse in sem justo.
//             </p>
//             <button className="slide-button">Learn More</button>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; // Import the fade effect style

import './slider.css';

// Import required modules
import { Parallax, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function Slider() {
  const slidesData = [
    {
      title: 'Slide 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.',
      imageUrl: 'https://swiperjs.com/demos/images/nature-1.jpg',
    },
    {
      title: 'Slide 2',
      description:
        'Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit.',
      imageUrl: 'https://swiperjs.com/demos/images/nature-2.jpg',
    },
    {
      title: 'Slide 3',
      description:
        'Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat. Suspendisse in sem justo.',
      imageUrl: 'https://swiperjs.com/demos/images/nature-3.jpg',
    },
  ];

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        effect="fade" // Enable fade effect
        fadeEffect={{
          crossFade: true, // Ensure a smooth fade transition
        }}
        modules={[Parallax, Pagination, Navigation, EffectFade]} // Add the EffectFade module
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="parallax-bg"
              style={{        
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                overflow:'hidden'
              }}
              data-swiper-parallax="-23%"
            ></div>
            <div className="slide-content">
              <h2 className="slide-heading">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
              <button className="slide-button">Read More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
