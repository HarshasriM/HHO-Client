import React, { useEffect, useRef, useState } from 'react';
import "./herosection.css";
import { Link } from 'react-router-dom';
export default function HeroSection() {



  const sectionRef = useRef(null);  // Reference for the section
  const [isVisible, setIsVisible] = useState(false);  // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);  // Set visible state based on section's visibility
      },
      {
        threshold: 0.1,  // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);  // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);  // Cleanup observer on unmount
      }
    };
  }, []);
  return (
    <div>
  

{/* <div id="CarouselEx" className="carousel slide" data-ride="carousel" data-interval="2000">
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
    </div>
    <div className="carousel-item">
      <img
        src="https://img.freepik.com/free-vector/realistic-happy-ugadi-festival_23-2148448218.jpg?t=st=1710766812~exp=1710770412~hmac=fae5aefb5813cbb9042ad5d5ba68ba56ef98d9da68d5f94b9bbd638a1688dd03&w=740"
        className="d-block w-100 car-img"
        alt="..."
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://res.cloudinary.com/dnbeeynnu/image/upload/b_rgb:050500/c_pad,w_1000,h_750,ar_4:3/v1710766757/WhatsApp_Image_2024-03-17_at_12.05.32_PM_jwctjg.jpg"
        className="d-block w-100 car-img"
        alt="..."
      />
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
</div> */}


        {/* <div className="container-fluid p-3" style={{backgroundColor:'white'}}>
            <div className="row ml-4 mr-4">
                <div className="col-12">
                    <h1 className="about-head text-center mt-5">
                        About <span style={{color:'#f06529'}}>HHO</span>
                    </h1>
                </div>
                <div className="col-12 col-md-6">
                    <img src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1726826896/HHO/navbar/hho_logo_s548ea.png" alt="pic" className='w-100' />
                </div>
                <div className="col-12 col-md-6">
                    <p className="about-head-text text-center mt-md-5">HELPING HANDS ORGANISATION</p>
                    <p className="about-text">At Helping Hands Organization, we believe in the power of community and compassion. Our mission is to uplift lives through meaningful service, empowering individuals to make a positive impact in their communities. Whether it's providing support during emergencies, organizing fundraising campaigns, or offering leadership and skill-building opportunities, HHO stands as a beacon of hope and generosity.
                        Together, we foster a spirit of teamwork, empathy, and service, transforming lives and shaping a brighter future for all. Join us in making a difference—because with Helping Hands, every hand matters.</p>
                    <div className="text-center">
                      <Link to='/about'><button className='btn about-button mt-md-5'>Read More</button></Link>
                    </div>
                   
                </div>
  
            </div>
        </div> */}

    {/* <div className="container-fluid p-3" style={{ backgroundColor: 'white' }}>
      <div className="row ml-4 mr-4">
        <div className="col-12">
          <h1 className="about-head text-center mt-5">
            About <span style={{ color: '#f06529' }}>HHO</span>
          </h1>
        </div>
        <div className="col-12 col-md-6">
          <img
            src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1726826896/HHO/navbar/hho_logo_s548ea.png"
            alt="pic"
            className="w-100"
          />
        </div>
        <div className="col-12 col-md-6">
          <p className="about-head-text text-center mt-md-5">HELPING HANDS ORGANISATION</p>
          <p className="about-text">
            At Helping Hands Organization, we believe in the power of community and compassion. Our
            mission is to uplift lives through meaningful service, empowering individuals to make a
            positive impact in their communities. Whether it's providing support during emergencies,
            organizing fundraising campaigns, or offering leadership and skill-building opportunities,
            HHO stands as a beacon of hope and generosity. Together, we foster a spirit of teamwork,
            empathy, and service, transforming lives and shaping a brighter future for all. Join us in
            making a difference—because with Helping Hands, every hand matters.
          </p>
          <div className="text-center">
            <Link to="/about">
              <button className="btn about-button mt-md-5">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div> */}



    <section className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Welcome to <span className='span'> HHO Family</span></h1>
        <p className="banner-subtitle text-center">Help For The Needy</p>
        <div>
        <button className="btn about-button mt-md-5">Get Help</button>
        <button className="btn about-button mt-md-5" style={{marginLeft:"20px"}}>Ourservices</button>
        </div>
        
      </div>
       {/* <div className="banner-image-container">
        <img
          src="https://example.com/your-image.jpg"
          alt="Banner"
          className="banner-image"
        />
      </div> */}
    </section>







<div
      className={`container-fluid p-3 ${isVisible ? 'animate' : ''}`}  // Apply 'animate' class if section is visible
      style={{ backgroundColor: 'white' }}
      ref={sectionRef}  // Attach reference to the section
    >
      <div className="row" style={{backgroundColor:"whitesmoke"}}>
        <div className="col-12">
          <h1 className={`about-head text-center mt-5 banner-title`}>
            About <span className='span'>HHO</span>
          </h1>
        </div>
        <div className="col-12 col-md-6">
          <img
            src="https://res.cloudinary.com/dnbeeynnu/image/upload/v1726826896/HHO/navbar/hho_logo_s548ea.png"
            alt="pic"
            className="w-100"
          />
        </div>
        <div className="col-12 col-md-6">
          <p className="about-head-text text-center mt-md-5">HELPING HANDS ORGANISATION</p>
          <p className="about-text">
            At Helping Hands Organization, we believe in the power of community and compassion.
            Our mission is to uplift lives through meaningful service, empowering individuals to
            make a positive impact in their communities. Whether it's providing support during
            emergencies, organizing fundraising campaigns, or offering leadership and skill-building
            opportunities, HHO stands as a beacon of hope and generosity. Together, we foster a
            spirit of teamwork, empathy, and service, transforming lives and shaping a brighter
            future for all. Join us in making a difference—because with Helping Hands, every hand
            matters.
          </p>
          <div className="text-center">
            <Link to="/about">
              <button className="btn about-button mt-md-5">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
