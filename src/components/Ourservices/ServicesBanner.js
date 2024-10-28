import React from 'react';
import { Box, Typography } from '@mui/material';

const ServiceBanner = () => {
  return (
    // <Box
    //   sx={{
    //     backgroundImage: 'url(https://res.cloudinary.com/dgye02qt9/image/upload/v1729254246/service_background_popldp.jpg)',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     height: '81vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     textAlign: 'center',
    //     color: '#fff',
    //     boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)', // Dark overlay for readability
    //     padding: { xs: '20px', md: '50px' }, // Responsive padding for mobile and desktop
    //   }}
    // >
    //   <Box sx={{ maxWidth: '100%', padding: { xs: '0 20px', md: '0 80px' } }}> {/* Responsive padding */}
    //     <Typography
    //       variant="h4"
    //       gutterBottom
    //       sx={{
    //         fontFamily: '"Anton", sans-serif',
    //         fontWeight: 400,
    //         fontSize: { xs: '32px', md: '50px' }, // Responsive font-size
    //         letterSpacing: '3px',
    //         fontStyle: 'normal',
    //       }}
    //     >
    //       <Typography component="span" sx={{ color: '#fff', fontWeight: 'bold', textShadow: '1px 1px 2px orange', fontSize: { xs: '32px', md: '50px' } }}>
    //         Our
    //       </Typography>{' '}
    //       <Typography component="span" sx={{ color: '#fff', fontWeight: 'bold', textShadow: '1px 1px 2px orange', fontSize: { xs: '32px', md: '50px' } }}>
    //         Services
    //       </Typography>
    //     </Typography>
    //     <Typography
    //       variant="body1"
    //       sx={{
    //         fontSize: { xs: '16px', md: '18px' },
    //         color: '#fff',
    //         maxWidth: '100%', // Allow text to take full width
    //         padding: { xs: '10px 0', md: '20px 0' }, // Add some padding top and bottom for spacing
    //       }}
    //     >
    //       At Helping Hands, we are committed to making a difference through a variety of{' '}
    //       <Typography component="span" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
    //         donations
    //       </Typography>
    //       ,{' '}
    //       <Typography component="span" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
    //         activities
    //       </Typography>
    //       , and{' '}
    //       <Typography component="span" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
    //         initiatives
    //       </Typography>
    //       . Our goal is to uplift communities and provide support where it is needed most.
    //     </Typography>
    //   </Box>
    // </Box>
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
