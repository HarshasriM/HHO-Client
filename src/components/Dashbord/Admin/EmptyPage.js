import React from 'react';
import { Box, Typography } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const AdminDashboardWatermark = () => {
  return (
    <Box
      sx={{
        height: {sm:"70vh",xs:"40vh"}, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          opacity: 0.1,
          zIndex: -1,
        }}
      >
        <AdminPanelSettingsIcon sx={{ fontSize: {sm:'10rem',xs:"5rem" }}} color="primary" />
        <Typography sx={{ fontSize: {sm:'6rem',xs:"4rem" }}} color="primary" fontWeight="bold">
          Admin Dashboard
        </Typography>
      </Box>
    </Box>
  );
};

export default AdminDashboardWatermark;
