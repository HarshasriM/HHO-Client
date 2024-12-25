import React from 'react';
import { Box, Typography } from '@mui/material';
import './ServicesBanner.css';
const ServiceBanner = () => {
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
