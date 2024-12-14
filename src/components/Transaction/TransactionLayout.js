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
import { styled } from '@mui/system';
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
  const { token,setAlertMsg,setErrorOcc,setOpen } = useContext(AppContext);
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
        <Typography variant="h5" align="center" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Transactions
        </Typography>
        <Tabs
          orientation={!isMobile ? 'vertical' : 'horizontal'}
          value={activeTab}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { backgroundColor: '#fa9a34', width: 5 } }}
          sx={{
            '.MuiTab-root': {
              color: 'black',
              textTransform: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: '0.5s',
              borderBottom: '1px solid lightgray',
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
          padding: 3,
          backgroundColor: 'white',
          height: 'calc(100vh - 80px)',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <ThemeProvider theme={customTheme}>
          <div className="d-flex justify-content-between flex-column flex-md-row" style={{ margin: '20px', gap: '25px' }}>
            <div className="d-flex align-content-start flex-column" style={{ gap: '10px' }}>
              <ButtonType variant="contained">
                Current Balance: &nbsp; <CountUp end={300000} />
              </ButtonType>
              <ButtonType variant="contained">
                Donated Amount: &nbsp;<CountUp end={500000} />
              </ButtonType>
            </div>
            <div className="d-flex justify-content-end" style={{ gap: '30px', flexWrap: 'wrap' }}>
  <FormControl sx={{ width: '150px', minWidth: '200px' }}>
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
      width: '150px', // Fixed width for the input field
      minWidth: '200px', // Ensures readability on smaller screens
    }}
  />
  <div>
    {/* <ButtonType
      variant="contained"
      sx={{
        padding: '13px',
        borderRadius: '30px',
        width: '120px', // Fixed width for the button
      }}
      onClick={() => console.log('Search submitted:', search)}
    >
      Submit
    </ButtonType> */}
  </div>
</div>


          </div>
        </ThemeProvider>

        <Fade in={fadeIn} timeout={300}>
          <List>
            {filteredTransactions?.length==0? 
            "No Transaction Found" : filteredTransactions?.map((transaction) => (
              <TransactionCard transaction={transaction} key={transaction.id} />
            ))}
          </List>
        </Fade>
      </Box>
    </Box>
  );
}
