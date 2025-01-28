import React, { useRef } from 'react';
import { Box, Card, CardContent, IconButton } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Swiper, SwiperSlide } from 'swiper/react';

const ActivitiesSkeleton = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  

  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, textAlign: 'center', position: 'relative' }}>
      {/* Heading Skeleton */}
      <Skeleton
        width={250}
        height={40}
        style={{
          margin: '0 auto 30px',
          borderRadius: '10px',
        }}
      />

      {/* Swiper Skeleton */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {Array(3) // Placeholder for 3 slides
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  backgroundColor: '#f5f5f5',
                  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                  borderRadius: '10px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px',
                }}
              >
                {/* Card Media Skeleton */}
                <Skeleton height={180} style={{ borderRadius: '10px', marginBottom: '10px' }} />
                <CardContent>
                  {/* Title Skeleton */}
                  <Skeleton height={20} width="60%" style={{ marginBottom: '10px' }} />
                  {/* Description Skeleton */}
                  <Skeleton height={15} width="90%" style={{ marginBottom: '5px' }} />
                  <Skeleton height={15} width="80%" />
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Custom Navigation Arrows Skeleton */}
      <IconButton
        ref={prevRef}
        sx={{
          position: 'absolute',
          top: '15%',
          right: '70px',
          zIndex: 10,
          backgroundColor: 'lightgray',
          borderRadius: '10%',
          padding: '4px 6px',
        }}
      >
        <Skeleton circle height={30} width={30} />
      </IconButton>

      <IconButton
        ref={nextRef}
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10px',
          zIndex: 10,
          backgroundColor: 'lightgray',
          borderRadius: '10%',
          padding: '4px 6px',
        }}
      >
        <Skeleton circle height={30} width={30} />
      </IconButton>
    </Box>
  );
};

export default ActivitiesSkeleton;
