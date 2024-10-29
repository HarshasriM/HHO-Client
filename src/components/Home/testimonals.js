// import React from 'react';
// import './testimonals.css';

// // export const profiles = [
// //   {
// //     name: 'BHFBVJMDB',
// //     image: 'groot.jpg',
// //     description: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'BKJDFHKK',
// //     image: 'groot.jpg',
// //     description: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'KJHNVCKJ',
// //     image: 'groot.jpg',
// //     description: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'HSKDBVKH',
// //     image: 'groot.jpg',
// //     description: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   }
// //   ,
// //   {
// //     name: 'BHFBVJMDB',
// //     image: 'groot.jpg',
// //     description: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'BKJDFHKK',
// //     image: 'groot.jpg',
// //     description: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'KJHNVCKJ',
// //     image: 'groot.jpg',
// //     description: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'HSKDBVKH',
// //     image: 'groot.jpg',
// //     description: '8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'BHFBVJMDB',
// //     image: 'logo192.png',
// //     description: '9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'BKJDFHKK',
// //     image: 'logo192.png',
// //     description: '10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'KJHNVCKJ',
// //     image: 'logo192.png',
// //     description: '11Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   },
// //   {
// //     name: 'HSKDBVKH',
// //     image: 'logo192.png',
// //     description: '12Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dui nulla.'
// //   }
// // ];

// const ProfileSlider = () => {
//   return (
//     // <div className="testimonals mb-5">
//     //     <div className="profile-slider">
//     //   {profiles.map((profile, index) => (
//     //     <div key={index} className="profile-card">
//     //       <img src={profile.image} alt={profile.name} className="profile-image" />
//     //       <h3>{profile.name}</h3>
//     //       <p>{profile.description}</p>
//     //     </div>
//     //   ))}
//     //   {/* <div className="scroll-indicator"></div> */}
//     // </div>
//     // </div>

//       <>
        
      
//       </>
    
//   );
// };

// export default ProfileSlider;


import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './testimonals.css'; // Import your CSS file

const testimonials = [
  {
    id: 1,
    name: "Former Members",
    position: "Alumni",
    text: "\"Being a part of HHO taught me leadership, teamwork, and the value of giving back to the community. It was a life-changing experience that helped shape my career path.\"",
    rating: 5,
    img: "path-to-image/bambang-sucat.jpg"
  },
  {
    id: 2,
    name: "Benificiaries",
    position: "Students",
    text: "\"Thanks to the HHO's fund raising campaigns, I was able to access resources for my medical emergencies. They are truly making a difference in students' lives.\"",
    rating: 5,
    img: "path-to-image/kathryn-murphy.jpg"
  },
  {
    id: 3,
    name: "Faculty",
    position: "Staff",
    text: "\"HHO has been a beacon of service at our university, fostering a spirit of compassion and teamwork among students. Their work has greatly benefited the entire community a lot.\"",
    rating: 5,
    img: "path-to-image/beby-aduhai.jpg"
  },
  {
    id: 4,
    name: "Current Members",
    position: "Student",
    text: "\"HHO has given me an incredible opportunity to make a meaningful impact while learning valuable skills like event planning and fundraising. It’s a rewarding experience to be part of such a passionate group\"",
    rating: 4,
    img: "path-to-image/bambang-sucat.jpg"
  },{
    id: 5,
    name: "Former Members",
    position: "Alumni",
    text: "\"Being a part of HHO taught me leadership, teamwork, and the value of giving back to the community. It was a life-changing experience that helped shape my career path.\"",
    rating: 5,
    img: "path-to-image/bambang-sucat.jpg"
  },
  {
    id: 6,
    name: "Benificiaries",
    position: "Students",
    text: "\"Thanks to the HHO's fund raising campaigns, I was able to access resources for my medical emergencies. They are truly making a difference in students' lives.\"",
    rating: 5,
    img: "path-to-image/kathryn-murphy.jpg"
  },
  {
    id: 7,
    name: "Faculty",
    position: "Staff",
    text: "\"HHO has been a beacon of service at our university, fostering a spirit of compassion and teamwork among students. Their work has greatly benefited the entire community a lot.\"",
    rating: 5,
    img: "path-to-image/beby-aduhai.jpg"
  },
  {
    id: 8,
    name: "Current Members",
    position: "Student",
    text: "\"HHO has given me an incredible opportunity to make a meaningful impact while learning valuable skills like event planning and fundraising. It’s a rewarding experience to be part of such a passionate group\"",
    rating: 4,
    
  },
  
];

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Loop through testimonials
    }, 1500); // 1-second interval

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (testimonialsRef.current) {
      const container = testimonialsRef.current;
      const cardWidth = container.scrollWidth / testimonials.length;
  
      // Check if it's the last item, and then jump instantly to the first
      if (currentIndex === testimonials.length - 1) {
        container.scrollTo({
          left: 0,
          behavior: 'auto', // Instantly jump to the first testimonial
        });
      } else {
        container.scrollTo({
          left: currentIndex * cardWidth,
          behavior: 'smooth', // Smooth scrolling effect
        });
      }
    }
  }, [currentIndex]);

  return (
    <section className="testimonials">
      <h2 className='banner-title'>What People Say <span className='span'>About Us</span></h2>
      <p style={{fontFamily:'Playpen Sans, cursive',}}>Some of our members , staff , students shared their their thoughts.</p>
      <div
        className="testimonials-container"
        ref={testimonialsRef}
        
      >
        {testimonials.map((testimonial) => (
          <div
            className="testimonial-card"
            key={testimonial.id}
            
          >
            <div className="stars">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className='ml-3 mb-4 mt-2 mr-3 quote-text'>{testimonial.text}</p>
            <div className="client-info">
              
              <div class="d-flex flex-row">
                <FontAwesomeIcon icon={faUser} className="mr-4 mt-3 text-white" style={{width:'30px',height:'30px'}} />
                <div class="mt-2">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


// import React, { useEffect, useRef, useState } from 'react';
// import './testimonals.css'; // Import your CSS file

// const testimonials = [
//   {
//     id: 1,
//     name: "Bambang Sucat",
//     position: "CEO of Coca Soft",
//     text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
//     rating: 5,
//     img: "path-to-image/bambang-sucat.jpg"
//   },
//   {
//     id: 2,
//     name: "Kathryn Murphy",
//     position: "Founder ABC Studio",
//     text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
//     rating: 5,
//     img: "path-to-image/kathryn-murphy.jpg"
//   },
//   {
//     id: 3,
//     name: "Beby Aduhai",
//     position: "CEO of Sans Design",
//     text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
//     rating: 5,
//     img: "path-to-image/beby-aduhai.jpg"
//   },
//   {
//     id: 1,
//     name: "Bambang Sucat",
//     position: "CEO of Coca Soft",
//     text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
//     rating: 5,
//     img: "path-to-image/bambang-sucat.jpg"
//   },
//   {
//     id: 2,
//     name: "Kathryn Murphy",
//     position: "Founder ABC Studio",
//     text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
//     rating: 5,
//     img: "path-to-image/kathryn-murphy.jpg"
//   },
//   {
//     id: 3,
//     name: "Beby Aduhai",
//     position: "CEO of Sans Design",
//     text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
//     rating: 5,
//     img: "path-to-image/beby-aduhai.jpg"
//   },
//   {
//     id: 1,
//     name: "Bambang Sucat",
//     position: "CEO of Coca Soft",
//     text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
//     rating: 5,
//     img: "path-to-image/bambang-sucat.jpg"
//   },
//   {
//     id: 2,
//     name: "Kathryn Murphy",
//     position: "Founder ABC Studio",
//     text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
//     rating: 5,
//     img: "path-to-image/kathryn-murphy.jpg"
//   },
//   {
//     id: 3,
//     name: "Beby Aduhai",
//     position: "CEO of Sans Design",
//     text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
//     rating: 5,
//     img: "path-to-image/beby-aduhai.jpg"
//   },
//   {
//     id: 1,
//     name: "Bambang Sucat",
//     position: "CEO of Coca Soft",
//     text: "It was a pleasure working with Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.",
//     rating: 5,
//     img: "path-to-image/bambang-sucat.jpg"
//   },
//   {
//     id: 2,
//     name: "Kathryn Murphy",
//     position: "Founder ABC Studio",
//     text: "With Saturn the results are very satisfying. Wrapped with high quality and innovative design that makes a surge of visitors.",
//     rating: 5,
//     img: "path-to-image/kathryn-murphy.jpg"
//   },
//   {
//     id: 3,
//     name: "Beby Aduhai",
//     position: "CEO of Sans Design",
//     text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
//     rating: 5,
//     img: "path-to-image/beby-aduhai.jpg"
//   },
// ];

// const Testimonials = () => {
//   const testimonialsRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//    const intervalRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Loop through testimonials
//     }, 5000); // 1-second interval

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   useEffect(() => {
//     // Automatically scroll the container to the next testimonial (horizontally)
//     if (testimonialsRef.current) {
//       const container = testimonialsRef.current;
//       const cardWidth = container.scrollWidth / testimonials.length;

//       container.scrollTo({
//         left: currentIndex * cardWidth,
//         behavior: 'smooth', // Smooth scrolling effect
//       });
//     }
//   }, [currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   // Function to move to the previous testimonial
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };
//   // Clear interval and reset it when user clicks an arrow
//   const handleArrowClick = (direction) => {
//     clearInterval(intervalRef.current); // Stop the auto-slide
//     direction === "left" ? handlePrev() : handleNext(); // Move to the next or previous testimonial
//     // Restart the auto-slide after interaction
//     intervalRef.current = setInterval(handleNext, 5000);
//   };

//   return (
//     <section className="testimonials">
//       <h2>What our clients <span>said</span></h2>
//       <p>Risus viverra justo sagittis vestibulum metus.</p>
//       {/* Left Arrow */}
//       <button className="arrow left-arrow" onClick={() => handleArrowClick("left")}>
//           ❮
//         </button>
//       <div
//         className="testimonials-container"
//         ref={testimonialsRef}
        
//       >
//         {testimonials.map((testimonial) => (
//           <div
//             className="testimonial-card"
//             key={testimonial.id}
            
//           >
//             <div className="stars">
//               {'★'.repeat(testimonial.rating)}
//             </div>
//             <p className='ml-3 mb-4 mt-2 mr-3'>{testimonial.text}</p>
//             <div className="client-info">
              
//               <div>
//                 <h3>{testimonial.name}</h3>
//                 <p>{testimonial.position}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* Right Arrow */}
//         <button className="arrow right-arrow" onClick={() => handleArrowClick("right")}>
//           ❯
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


