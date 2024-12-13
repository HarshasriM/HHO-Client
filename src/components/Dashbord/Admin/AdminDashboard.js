


import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

// Import icons for the nav items
import RateReviewIcon from '@mui/icons-material/RateReview';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';

const NAV_ITEMS = [
  {
    label: 'Testimonials',
    icon: <RateReviewIcon />,
    subItems: [
      { label: 'New Testimonial', route: "/dashboard/new-testimonial" },
      { label: 'All Testimonials', route: "/dashboard/all-testimonials" },
    ],
  },
  {
    label: "Activities",
    icon: <EventIcon />,
    subItems: [
      { label: 'New Activity', route: "/dashboard/new-activity" },
      { label: 'All Activities', route: "/dashboard/all-activities" },
    ],
  },
  {
    label: "Users",
    icon: <GroupIcon />,
    subItems: [
      { label: 'New User', route: "/dashboard/users/new" },
      { label: 'All Users', route: "/dashboard/users" },

    ],
  }
];

const theme = createTheme();

function AdminDashbord() {
  const [openSubNav, setOpenSubNav] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  // React.useEffect(() => {
  //   if (location.pathname === '/dashboard') {
  //     navigate('/dashboard/new-testimonial', { replace: true });
  //   }
  // }, [location.pathname, navigate]);

  const handleItemClick = (label) => {
    setOpenSubNav(openSubNav === label ? null : label);
  };

  const handleSubItemClick = (route) => {
    navigate(route); // Navigate to the specified route
    setOpenSubNav(null); // Close the sub-navigation
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          height: 'auto',
        }}
      >
        {/* Navigation */}
        <Box
          component="nav"
          sx={{
            width: isMobile ? '100%' : 240,
            flexShrink: 0,
            backgroundColor: 'whitesmoke', // Change this to your desired color
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Accountant Panel
          </Typography>
          <Divider />
          <List sx={{ p: 0 }}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <ListItem
                  button
                  onClick={() => handleItemClick(item.label)}
                  sx={{
                    mb: 1,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#e0e0e0',
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                  {item.subItems.length > 0 ? (
                    openSubNav === item.label ? <ExpandLess /> : <ExpandMore />
                  ) : null}
                </ListItem>

                {/* Sub-Navigation */}
                <Collapse in={openSubNav === item.label} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem
                        button
                        key={subItem.label}
                        onClick={() => handleSubItemClick(subItem.route)}
                        sx={{
                          pl: 4,
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: '#e0e0e0',
                          },
                        }}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Box>

        {/* Main Content Area */}
        <Box
          component="main"
          style={{minHeight:"100vh"}}
          sx={{
            flexGrow: 1,
            p: 3,
            overflowY: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Renders the nested routes */}
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AdminDashbord;
