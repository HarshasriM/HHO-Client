import React, { useState, useEffect, useContext, useMemo } from 'react';
import axios from 'axios';
import { Box, Typography, List, Tab, Tabs, Fade } from '@mui/material';
import { CreditScore, MoneyOff, VolunteerActivism, AllInbox } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider, createTheme } from '@mui/material';
import CountUp from 'react-countup';
import { fontSize, styled } from '@mui/system';
import { Button } from '@mui/material';
import { useMediaQuery } from '@mui/system';
import TransactionCard from './TransactionCard';
import { AppContext } from '../../context/Context';

const ButtonType = styled(Button)(({ theme }) => ({
  backgroundColor: "#fa9a34",
  padding: "3px 10px",
  fontSize: "15px",
  color: "white",
}));

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#fa9a34',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            border: "2px solid #fa9a34",
            borderColor: '#fa9a34',
          },
          '&:hover fieldset': {
            borderColor: '#fa9a34',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#fa9a34',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#fa9a34',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#fa9a34',
            color: 'white',
          },
          '&.Mui-selected': {
            backgroundColor: '#fa9a34',
            color: 'white',
          },
        },
      },
    },
  },
});

export default function TransactionLayout() {
  const { token,setAlertMsg,setErrorOcc,setOpen ,totalBalance,donatedAmt} = useContext(AppContext);
  const [activeTab, setActiveTab] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    const getTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/transactions/get-all-transactions', { headers });
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    getTransactions();
  }, [token]);

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleTabChange = (event, newValue) => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveTab(newValue);
      setFadeIn(true);
    }, 300);
  };

  const filteredTransactions = useMemo(() => {
    let result = transactions;
    if (activeTab === 1) result = transactions.filter((t) => t.transaction_type === 'credit');
    else if (activeTab === 2) result = transactions.filter((t) => t.transaction_type === 'debit');
    else if (activeTab === 3) result = transactions.filter((t) => t.transaction_type === 'donation');

    if (filter && search) {
      if (filter === 'amount') {
        if (search.match(/[a-zA-Z]/)) {
            setAlertMsg("Please enter a valid number for the amount.");
            setErrorOcc(true);
            setOpen(true);
            return;
        }
        result = result.filter((t) => t.amount.toString()==search);
      } else if (filter === 'date') {
        result = result.filter((t) => t.date.includes(search));
      } else if (filter === 'event') {
        result = result.filter((t) => t.purpose.toLowerCase().includes(search.toLowerCase()));
      }
    }

    return result;
  }, [transactions, activeTab, filter, search]);

  return (
    <Box 
      sx={{ 
        display: { xs: 'block', md: 'flex' }, 
        minHeight: '100vh',
        backgroundColor: 'white' 
        
      }}
    >
      {/* Left Tabs Panel */}
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
        <Typography variant="h5" align="center" sx={{ marginBottom: 2, fontWeight: 'bold' 
          ,fontSize:{xs:'28px',marginTop:'2rem'}
        }}>
          Transactions
        </Typography>
        <Tabs
  orientation={!isMobile ? 'vertical' : 'horizontal'}
  value={activeTab}
  onChange={handleTabChange}
  TabIndicatorProps={{ style: { backgroundColor: '#fa9a34', width: 5 } }}
  variant="fullWidth" // Ensures each tab takes equal width
  sx={{
    '.MuiTab-root': {
      color: 'black',
      textTransform: 'none',
      fontSize: {
        xs: '14px', // Smaller font size for mobile
        sm: '16px', // Default font size for larger screens
      },
      fontWeight: 'bold',
      padding: {
        xs: '8px 12px', // Reduced padding for mobile
        sm: '12px 16px', // Default padding for larger screens
      },
      transition: '0.5s',
      borderBottom: {
        xs: 'none', // Remove border for mobile view to avoid clutter
        sm: '1px solid lightgray',
      },
      flexGrow: 1, // Makes tabs occupy equal width
      '&:hover': {
        borderRadius: '5px',
        color: 'gray',
        opacity: '0.7',
      },
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: '#fa9a34',
      },
    },
    '.MuiTab-iconWrapper': {
      fontSize: {
        xs: '20px', // Smaller icon size for mobile
        sm: '24px', // Default icon size for larger screens
      },
    },
  }}
>
  <Tab icon={<AllInbox />} label="All" />
  <Tab icon={<CreditScore />} label="Credits" />
  <Tab icon={<MoneyOff />} label="Debits" />
  <Tab icon={<VolunteerActivism />} label="Donate" />
</Tabs>



      </Box>

      {/* Right Scrollable Content */}
      <Box
  sx={{
    flexGrow: 1,
    overflowY: 'auto',
    padding: {
      xs: '12px 8px', // Reduced padding for mobile view
      sm: 3,          // Default padding for larger screens
    },
    backgroundColor: 'white',
    height: 'calc(100vh - 80px)',
    WebkitOverflowScrolling: 'touch',
  }}
>
  <ThemeProvider theme={customTheme}>
    <div className="d-flex justify-content-between flex-column flex-md-row" style={{ margin: '20px', gap: '25px' }}>
      <div className="d-flex align-content-start flex-column" style={{ gap: '10px' }}>
        <ButtonType variant="contained">
          Current Balance: &nbsp; <CountUp end={totalBalance} />
        </ButtonType>
        <ButtonType variant="contained">
          Donated Amount: &nbsp;<CountUp end={donatedAmt} />
        </ButtonType>
      </div>
      <div
        className="d-flex justify-content-end"
        style={{
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '10px', // Adjust spacing between elements
            width: '100%', // Use the full width of the parent container
          }}
        >
          <FormControl
            sx={{
              flex: 1, // Flex-grow to distribute available space evenly
              minWidth: '120px', // Minimum width for smaller screens
            }}
          >
            <InputLabel id="filter-select-label">Filter By</InputLabel>
            <Select
              labelId="filter-select-label"
              id="filter-select"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
                setSearch(''); // Clear the search input when filter changes
              }}
              label="Filter By"
            >
              <MenuItem value="amount">Amount</MenuItem>
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="event">Events</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label={filter === 'date' ? 'Select Date' : 'Search'}
            variant="outlined"
            type={filter === 'date' ? 'date' : 'text'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputLabelProps={filter === 'date' ? { shrink: true } : undefined}
            sx={{
              flex: 1, // Flex-grow to distribute available space evenly
              minWidth: '120px', // Minimum width for smaller screens
            }}
          />
        </div>
      </div>
    </div>
  </ThemeProvider>

  <Fade in={fadeIn} timeout={300}>
    <List>
      {filteredTransactions?.length === 0
        ? <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontSize: {
            xs: '16px', // Smaller font size for mobile screens
            sm: '20px', // Medium font size for tablets
            md: '24px', // Larger font size for desktops
          },
          color: 'gray', // Neutral color for the message
          fontFamily: '"Playpen Sans", cursive',
        }}
      >
        No Transaction Found
      </Typography>
        : filteredTransactions?.map((transaction) => (
            <TransactionCard transaction={transaction} key={transaction.id} />
          ))}
    </List>
  </Fade>
</Box>

    </Box>
  );
}
