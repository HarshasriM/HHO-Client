import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {Box , List ,Typography,} from "@mui/material";

const TransactionSkeleton = () => (

  <Box 
    sx={{ 
      display: { xs: 'block', md: 'flex' }, 
      minHeight: '100vh', 
      backgroundColor: 'white' 
    }}
  >
    {/* Left Tabs Skeleton */}
    <Box
      sx={{
        display: { xs: 'inline', md: 'flex' },
        width: '250px',
        backgroundColor: 'whitesmoke',
        color: 'black',
        flexDirection: 'column',
        paddingTop: 2,
      }}
    >
      <Typography variant="h5" align="center" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        <Skeleton width={120} />
      </Typography>
      {[...Array(4)].map((_, index) => (
        <Skeleton 
          key={index} 
          height={40} 
          style={{ marginBottom: '8px', borderRadius: '5px' }} 
        />
      ))}
    </Box>

    {/* Right Content Skeleton */}
    <Box
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        padding: 3,
        backgroundColor: 'white',
        height: 'calc(100vh - 80px)',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div className="d-flex justify-content-between flex-column flex-md-row" style={{ margin: '20px', gap: '25px' }}>
        <div className="d-flex align-content-start flex-column" style={{ gap: '10px'}}>
          <Skeleton height={40} width={200} />
          <Skeleton height={40} width={200} />
        </div>
        <div className="d-flex justify-content-end" style={{ gap: '20px'}}>
          <Skeleton width={120} height={40} />
          <Skeleton width={120} height={40} />
          <Skeleton width={120} height={40} />
        </div>
      </div>

      <List>
        {[...Array(5)].map((_, index) => (
          <Skeleton 
            key={index} 
            height={80} 
            style={{ marginBottom: '16px', borderRadius: '5px' }} 
          />
        ))}
      </List>
    </Box>
  </Box>
);


export default TransactionSkeleton;
