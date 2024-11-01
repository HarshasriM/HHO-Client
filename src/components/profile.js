import React, { useContext, useState } from 'react';
import { Box, IconButton, Avatar, Tooltip, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/Context';

const settings = ['Profile', 'Dashboard'];

function ProfileMenu() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const{token,setToken,role,setRole} = useContext(AppContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleLogout = ()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      setToken(null);
      setRole(null);
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
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
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
           <Link to={`/${setting.toLowerCase()}`} ><Typography textAlign="center">{setting}</Typography> </Link>

          </MenuItem>
        ))}
        <MenuItem onClick={handleCloseUserMenu}>
           <Link to='/login' onClick={handleLogout} ><Typography textAlign="center">Logout</Typography> </Link>

        </MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfileMenu;
