import React from 'react'
import "./AboutContent.css"
import { useState,useEffect } from 'react';
import AboutContentSkeleton from '../Skeletons/AboutContentSkeleton';

function AboutContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust loading time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AboutContentSkeleton />;
  }
  return (
    <div className='about-section'>
      <div className='about-banner'>
        <div className='text-center'>
          <h1 className='about-title' >About <span className='span'>HHO</span></h1>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className='about-content'>Founded in 2010, Helping Hands Organization supports students <br />in need through financial aid, emotional support, and community unity.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Source Title" style={{ fontSize: "18px" }} className='about-content'>Helping Hands Organization</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className='about-mission-vision mb-5 container'>
        <div className='row'>
          <div className='col col-md-6 col-12 about-img'>
            <img className="about-mission-img" src="https://theknowledgeexchangeblog.com/wp-content/uploads/2019/02/multi-cultural-hand-stack.png" alt='..' />
            <div className="overlay">
              <h5 className="about-title">Helping Hands Organization</h5>
            </div>
          </div>
          <div className='col col-12 col-md-6'>
            <h1 className='about-title' >Our<span className='span'> Mission</span></h1>
            <p className='about-content mt-3 our-mission'>At Helping Hands Organization (HHO), our mission is to unite students in supporting those in need. We strive to assist individuals facing emergencies, particularly those with medical challenges, financial difficulties, or urgent needs. By fostering a sense of compassion and teamwork, we aim to create a community where everyone can lend a hand, ensuring that no one faces their struggles alone.</p>
            <br />
            <h1 className='about-title' >Our<span className='span'> vision</span></h1>
            <p className='about-content mt-3 our-mission'>
              We believe that while someone cannot help everyone, everyone can help someone. Our vision is to create a caring and united community within RK Valley, where students actively work together to make a positive impact. We aspire to expand HHO’s reach and support, turning our efforts from a small stream into a powerful wave of change, helping not only our university but society as a whole.</p>
          </div>
        </div>
      </div>
      <div className='about-history text-center mt-5'>
        <h1 className='about-title' >History Of<span className='span'> HHO</span></h1>
        <p className='about-content'>It all began in 2009 when a fellow student faced a serious health issue. Although we raised enough funds to help him, time was
          not on our side, and we sadly lost him. Shortly after, another friend needed immediate surgery, but again, we struggled to provide the support quickly enough.</p>
        <p className='about-content'>These experiences showed us the importance of having an organized way to help each other in difficult times. Inspired by the teachings of the Ramakrishna Mission and
          with the support of our university's administration, we formed HHO in 2010. Since then, we’ve been working together to raise funds and offer support for emergencies, medical needs, and other issues faced by students.
          What started as a small group has grown into a dedicated team committed to making a difference, one step at a time.</p>
      </div>
    </div>
  )
}

export default AboutContent
