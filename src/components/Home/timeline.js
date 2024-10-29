// import React from 'react';
// import './timeline.css';


// const Timeline = () => {

//     return (

//         <div className='main'>
//             <div className="background">
//                             <h1> HHO <span> Body </span> </h1>

//             <div className='timeline'>



//                 <div className='member-card left-container'>

//                     <img src="logo192.png" alt='Core' />

//                     <div className='text-box corecard'>

//                         <h2 className='coretext'> Core </h2>

//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusantium deleniti, impedit tempora minus, harum sit quibusdam voluptatibus dicta corrupti ratione esse odio architecto neque animi tempore mollitia! Error, illo.
//                         </p>

//                         <span className='left-container-arrow corearrow'></span>

//                     </div>

//                 </div>


//                 <div className='member-card right-container'>

//                     <img src="logo192.png" alt='Accountant' />

//                     <div className='text-box accountcard'>

//                         <h2 className='accounttext'> Accountant </h2>


//                         <p>
//                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed commodi, itaque enim tempore voluptatum est aliquam quas, sint eligendi, culpa odio? Eligendi harum expedita quibusdam reiciendis in ipsum cumque illo!
//                         </p>

//                         <span className='right-container-arrow accountarrow'></span>

//                     </div>

//                 </div>



//                 <div className='member-card left-container'>

//                     <img src="logo192.png" alt='Executive' />

//                     <div className='text-box executivecard'>

//                         <h2 className='executivetext'> Executive </h2>


//                         <p>

//                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima expedita officiis aut facere delectus dignissimos praesentium dicta quam vero quidem explicabo molestiae tempora non eveniet accusamus, quas ratione error fuga.

//                         </p>

//                         <span className='left-container-arrow executivearrow'></span>

//                     </div>

//                 </div>


    

//                 <div className='member-card right-container'>

//                     <img src="logo192.png" alt='hr' />

//                     <div className='text-box hrcard'>

//                         <h2 className='hrtext'> HR </h2>


//                         <p>

//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam autem facere sunt earum officiis, nulla voluptas iure, adipisci ipsum necessitatibus numquam. Incidunt accusantium harum ratione, earum ex ut nobis.

//                         </p>

//                         <span className='right-container-arrow hrarrow'></span>

//                     </div>

//                 </div>


              

//             </div>
//             </div>


//         </div>
//     );
// };

// export default Timeline;



import React, { useEffect, useRef } from 'react';
import './timeline.css';

const Timeline = () => {
    const timelineRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const options = {
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add class to trigger animation for member cards
                    entry.target.classList.add('animate');

                    // Trigger the line animation
                    lineRef.current.classList.add('animate-line');
                } else {
                    // Remove the class if element is not in view
                    entry.target.classList.remove('animate');

                    // Reset the line animation when out of view
                    lineRef.current.classList.remove('animate-line');
                }
            });
        }, options);

        const items = timelineRef.current.querySelectorAll('.member-card');
        items.forEach(item => {
            observer.observe(item);
        });

        return () => {
            items.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <div className='main'>
            <div className="background">
                <h2 className='banner-title text-center mt-5'> Structure Of <span className='span'> HHO </span> </h2>
                <div className='timeline' ref={timelineRef}>
                    {/* The line element */}
                    <div ref={lineRef} className="timeline-line"></div>

                    <div className='member-card left-container'>
                        {/* <img src="logo192.png" alt='Core' /> */}
                        <i className="fa-solid fa-c" style={{color: "white"}}></i>
                        <div className='text-box corecard'>
                            <h2 className='coretext'> Core </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusantium deleniti, impedit tempora minus, harum sit quibusdam voluptatibus dicta corrupti ratione esse odio architecto neque animi tempore mollitia! Error, illo.
                            </p>
                            <span className='left-container-arrow corearrow'></span>
                        </div>
                    </div>
                    <div className='member-card right-container'>
                       {/* <img src="https://img.freepik.com/premium-vector/creative-c-letter-vector-icon-cartoon-illustration_1316704-4699.jpg?ga=GA1.1.979507765.1726655807&semt=ais_hybrid" alt=""/> */}
                       <i className="fa-solid fa-a" style={{color: "white"}}></i>
                        <div className='text-box accountcard'>
                            <h2 className='accounttext'> Accountant </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed commodi, itaque enim tempore voluptatum est aliquam quas, sint eligendi, culpa odio? Eligendi harum expedita quibusdam reiciendis in ipsum cumque illo!
                            </p>
                            <span className='right-container-arrow accountarrow'></span>
                        </div>
                    </div>
                    <div className='member-card left-container'>
                        {/* <img src="logo192.png" alt='Executive' /> */}
                        <i className="fa-solid fa-e" style={{color: "white"}}></i>
                        <div className='text-box executivecard'>
                            <h2 className='executivetext'> Executive </h2>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima expedita officiis aut facere delectus dignissimos praesentium dicta quam vero quidem explicabo molestiae tempora non eveniet accusamus, quas ratione error fuga.
                            </p>
                            <span className='left-container-arrow executivearrow'></span>
                        </div>
                    </div>
                    <div className='member-card right-container'>
                        {/* <img src="logo192.png" alt='HR' /> */}
                        <i className="fa-solid fa-h" style={{color: "white"}}></i>
                        <div className='text-box hrcard'>
                            <h2 className='hrtext'> HR </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsam autem facere sunt earum officiis, nulla voluptas iure, adipisci ipsum necessitatibus numquam. Incidunt accusantium harum ratione, earum ex ut nobis.
                            </p>
                            <span className='right-container-arrow hrarrow'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
