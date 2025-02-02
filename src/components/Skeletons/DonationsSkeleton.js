// DonationsSkeleton.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function DonationsSkeleton() {
  return (
    <div style={{ backgroundColor: 'whitesmoke', padding: '10px 0px', margin: '0px 0px 10px 0px' }}>
      <div style={{ margin: '50px' }}>
        <Skeleton 
          variant="text" 
          width="50%" 
          height={60} 
          style={{ margin: '0 auto', marginBottom: '50px' }}
        />
        
        <Grid container spacing={1} justifyContent="center">
          {[...Array(4)].map((_, index) => (
            <Grid item xs={12} sm={6}  key={index}>
              <Skeleton variant="rectangular" width="90%" height={200} />
              <Skeleton variant="text" width="80%" height={30} style={{ marginTop: '10px' }} />
              <Skeleton variant="text" width="60%" height={30} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default DonationsSkeleton;
