import React, { useContext, useState } from 'react';
import { Box, Typography, Tooltip, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/Context';

const settings = ['Profile', 'Dashboard'];

function ProfileMenu() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { token, setToken, role, setRole, setAlertMsg, setOpen, setErrorOcc } = useContext(AppContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAlertMsg("Logout Successful..");
    setErrorOcc(false);
    setOpen(true);
    setToken(null);
    setRole(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <Typography
          onClick={handleOpenUserMenu}
          sx={{
            textAlign: 'center',
            color: 'white',
            fontSize: '19px',
            fontWeight: 'bold',
            cursor: 'pointer',
            paddingBottom: '5px',
            textDecoration: 'underline'
          }}
        >
          {role}
        </Typography>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ p: 0 }}>
            <Link
              to={`/${setting.toLowerCase()}`}
              style={{
                width: '100%',
                display: 'block',
                textDecoration: 'none',
                padding: '8px 16px',
                color: 'inherit'
              }}
            >
              <Typography textAlign="center">{setting}</Typography>
            </Link>
          </MenuItem>
        ))}
        <MenuItem onClick={handleCloseUserMenu} sx={{ p: 0 }}>
          <Link
            to='/login'
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'block',
              textDecoration: 'none',
              padding: '8px 16px',
              color: 'inherit'
            }}
          >
            <Typography textAlign="center">Logout</Typography>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfileMenu;
