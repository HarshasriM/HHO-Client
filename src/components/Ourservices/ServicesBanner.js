import React from 'react';
import { useState,useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './ServicesBanner.css';
import Skeleton from 'react-loading-skeleton';
const ServiceBanner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust loading time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="about-section">
      <div className="about-banner">
        <div className="text-center">
          <h1 className="about-title">
            <Skeleton width={500} height={100} />
          </h1>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className="about-content">
                <Skeleton count={2} />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <Skeleton width={450} />
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    );
  }
  return (
    
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", backgroundColor: "white" }}>
    <div>
      <h1 className='about-title text-center'>Our <span className='span'> Services</span> </h1>
      <figure className="text-center">
        <blockquote className="blockquote">
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            fontFamily:"'Playpen Sans', cursive"
          }}
        >
          At Helping Hands, we are committed to making a difference through a variety of{' '}
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#fa9a34',fontFamily:"'Playpen Sans', cursive" }}>
            donations
          </Typography>
          ,{' '}
          <Typography component="span" sx={{ fontWeight: 'bold', color: '#fa9a34',fontFamily:"'Playpen Sans', cursive" }}>
            activities
          </Typography>
          , and{' '}
          <Typography component="span" sx={{ fontWeight: 'bold', color:'#fa9a34',fontFamily:"'Playpen Sans', cursive"}}>
            initiatives<br/>
          </Typography>
          . Our goal is to uplift communities and provide support where it is needed most.
        </Typography>
        </blockquote>
        <figcaption className="blockquote-footer">
          <cite title="Helping Hands Organization" style={{ fontSize: "18px",fontFamily:"'Playpen Sans', cursive" }} className='about-content'>Helping Hands Organization</cite>
        </figcaption>
      </figure>
    </div>
  </Box>
  );
};

export default ServiceBanner;
