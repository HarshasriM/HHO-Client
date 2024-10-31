import * as React from 'react';
import PropTypes from 'prop-types';
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
import AllTestimonials from "./Testimonials/AllTestimonials.js";
import NewTestimonial from "./Testimonials/NewTestimonial.js";
import { useState } from 'react';
import EmptyPage from './EmptyPage.js';
import TestimonialIcon from "@mui/icons-material/Chat";
import VolunteerIcon from "@mui/icons-material/VolunteerActivism";
import NewActivity from "./Activities/NewActivity.js";
import AllActivities from "./Activities/AllActivities.js";
import GroupIcon from "@mui/icons-material/Group";
import AllUsers from "./Users/AllUsers.js";
const NAV_ITEMS = [
  {
    label: 'Testimonials',
    icon: <TestimonialIcon />,
    subItems: [
      { label: 'New Testimonial',route:"/testimonials/newTestimonial" },
      { label: 'All Testimonials',route:"/testimonials" },
    ],
  },
  {
    label:"Activities",
    icon:< VolunteerIcon/>,
    subItems: [
      { label: 'New Activity', icon: null },
      { label: 'All Activities', icon: null },
    ],
  },
  {
    label:"Users",
    icon:< GroupIcon/>,
    subItems: [
      { label: 'All Users', icon: null },
    ],
  }
];

const theme = createTheme();

function ContentArea({ selected }) {
  return (
    <>
      {selected === 'New Testimonial' && <NewTestimonial />}
      
      {selected === 'All Testimonials' && <AllTestimonials />}
      {selected === 'Default Page' && <EmptyPage/>}
      {selected === 'New Activity' && <NewActivity />}
      {selected === 'All Activities' && <AllActivities />}
      {selected === "All Users" && <AllUsers />}
    </>
  );
}

ContentArea.propTypes = {
  selected: PropTypes.string.isRequired,
};

function AcctDashboard() {
  const [selectedPage, setSelectedPage] = useState('Default Page');
  const [openSubNav, setOpenSubNav] = useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleItemClick = (label) => {
    if (openSubNav === label) {
      setOpenSubNav(null);
    } else {
      setOpenSubNav(label);
    }
  };

  const handleSubItemClick = (label) => {
    setSelectedPage(label);
    setOpenSubNav(null); // Close the sub-navigation after selecting a sub-item
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          height: 'auto',
          minHeight:"100vh"
        }}
      >
        {/* Navigation */}
        <Box
          component="nav"
          sx={{
            width: isMobile ? '100%' : 240,
            flexShrink: 0,
            backgroundColor: '#f0f0f0',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Admin Panel
          </Typography>
          <Divider />
          <List sx={{ p: 0 }}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <ListItem
                  button
                  onClick={() => handleItemClick(item.label)}
                  selected={selectedPage === item.label}
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
                        onClick={() => handleSubItemClick(subItem.label)}
                        selected={selectedPage === subItem.label}
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
          sx={{
            flexGrow: 1,
            p: 3,
            overflowY: 'auto',
            height: 'auto',
            minHeight:"100vh",
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ContentArea selected={selectedPage} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AcctDashboard;