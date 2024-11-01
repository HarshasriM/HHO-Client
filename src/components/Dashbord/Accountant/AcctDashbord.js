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
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  {
    label: 'Transactions',
    icon: <AccountBalanceIcon />,
    subItems: [
      { label: 'New Transaction', route: '/dashboard/new-transaction' },
      { label: 'Past Transactions', route: '/dashboard/past-transactions' },
    ],
  },
];

const theme = createTheme();

function AcctDashbord() {
  const [openSubNav, setOpenSubNav] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to new transaction by default if on /dashboard
  React.useEffect(() => {
    if (location.pathname === '/dashboard') {
      navigate('/dashboard/new-transaction', { replace: true });
    }
  }, [location.pathname, navigate]);

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
          height: '100vh',
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
          sx={{
            flexGrow: 1,
            p: 3,
            overflowY: 'auto',
            height: '100vh',
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

export default AcctDashbord;
