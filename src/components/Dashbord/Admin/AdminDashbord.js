import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse'; // Import Collapse for sub-navigation
import ExpandLess from '@mui/icons-material/ExpandLess'; // Expand icon
import ExpandMore from '@mui/icons-material/ExpandMore'; // Collapse icon

const NAV_ITEMS = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    subItems: [],
  },
  {
    label: 'Services',
    icon: <BuildIcon />,
    subItems: [
      { label: 'Web Development', icon: null },
      { label: 'App Development', icon: null },
    ],
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    subItems: [
      { label: 'Profile', icon: null },
      { label: 'Account', icon: null },
    ],
  },
];

const theme = createTheme();

function ContentArea({ selected }) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">{selected}</Typography>
      <Typography>
        {`This is the ${selected} page content. Display additional information and actions related to ${selected} here.`}
      </Typography>
    </Box>
  );
}

ContentArea.propTypes = {
  selected: PropTypes.string.isRequired,
};

function AdminDashboard() {
  const [selectedPage, setSelectedPage] = React.useState('Home');
  const [openSubNav, setOpenSubNav] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleItemClick = (label) => {
    if (openSubNav === label) {
      setOpenSubNav(null);
    } else {
      setOpenSubNav(label);
    }
    setSelectedPage(label);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          height: '100vh',
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
                  sx={{ mb: 1 }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                  {item.subItems.length > 0 ? (openSubNav === item.label ? <ExpandLess /> : <ExpandMore />) : null}
                </ListItem>
                
                {/* Sub-Navigation */}
                <Collapse in={openSubNav === item.label} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem
                        button
                        key={subItem.label}
                        onClick={() => {
                          setSelectedPage(subItem.label);
                          setOpenSubNav(null); // Close the sub-navigation after selecting
                        }}
                        sx={{ pl: 4 }} // Indent sub-items
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
            height: '100vh',
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

export default AdminDashboard;
