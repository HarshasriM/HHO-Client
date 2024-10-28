import React, { useState,useEffect } from 'react';
import { Box, Typography, List, Tab, Tabs, Fade } from '@mui/material';
import { CreditScore, MoneyOff, VolunteerActivism, AllInbox} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import {ThemeProvider,createTheme } from '@mui/material'
import CountUp from 'react-countup';
import {styled} from '@mui/system';
import {Button} from '@mui/material';
import {useMediaQuery} from '@mui/system';
import TransactionCard from './TransactionCard';
// Sample Transaction Data


const ButtonType = styled(Button)(({ theme }) => ({
  backgroundColor:"#fa9a34",
  padding:"3px 10px",
  fontSize:"15px",
  color:"white"
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
              border:"2px solid #fa9a34",
              borderColor: '#fa9a34', // Default border color
            },
            '&:hover fieldset': {
              borderColor: '#fa9a34', // Border on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fa9a34', // Border on focus
            },
            
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fa9a34', // Default border color for Select
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fa9a34',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fa9a34',
            },
          },
          icon: {
            color: '#fa9a34', // Icon color
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
  const [activeTab, setActiveTab] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [creditTransactions, setCreditTransactions] = useState([]);
  const [debitTransactions, setDebitTransactions] = useState([]);
  const [donateTransactions, setdonateTransactions] = useState([]);
  useEffect(() => {
    fetch('/transactions.json')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setCreditTransactions(data.filter((t) => t.type === 'credit'));
        setDebitTransactions(data.filter((t) => t.type === 'debit'));
        setdonateTransactions(data.filter((t) => t.type === 'donate'));
      })
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  const isMobile = useMediaQuery('(max-width:600px)');
  const handleTabChange = (event, newValue) => {
    setFadeIn(false); // Trigger fade-out
    setTimeout(() => {
      setActiveTab(newValue);
      setFadeIn(true); // Trigger fade-in
    }, 300); // Sync with fade-out animation
  };

  const getCurrentTransactions = () => {
    switch (activeTab) {
      case 0: return transactions
      case 1: return creditTransactions
      case 2: return debitTransactions
      case 3: return donateTransactions
      default: return [];
    }
  };
  

  const [filter, setFilter] = useState('');
  const [search,setSearch] = useState('')
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }
  return (
    <Box 
    sx={{ 
      display: { xs: 'block', md: 'flex' }, 
      minHeight: '100vh',  // Full viewport height for proper scrollability 
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
              textDecoration:"none",
              border:"none",
              outline:"none",
              color:"white",
              backgroundColor: "#fa9a34",
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
      height: 'calc(100vh - 80px)', // Adjust height to leave space for the footer
      WebkitOverflowScrolling: 'touch',
      }}
    >
      <ThemeProvider theme={customTheme}>
        <div className="d-flex justify-content-between flex-column flex-md-row" style={{ margin: '20px', gap: '25px' }}>
          <div className="d-flex align-content-start flex-column" style={{ gap: '10px'}}>
            <ButtonType variant="contained">
              Current Balance: &nbsp; <CountUp end={300000} />
            </ButtonType>
            <ButtonType variant="contained">
              Donated Amount: &nbsp;<CountUp end={500000} />
            </ButtonType>
          </div>
          <div className="d-flex justify-content-end" style={{ gap: '30px'}}>
            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleSearch} />
            <FormControl sx={{ width: '60%' }}>
              <InputLabel id="filter-select-label">Filter By</InputLabel>
              <Select
                labelId="filter-select-label"
                id="filter-select"
                value={filter}
                label="Filter By"
              >
                <MenuItem value="all">None</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="event">Events</MenuItem>
              </Select>
            </FormControl>
            <div>
            <ButtonType variant="contained" sx={{padding:"13px",borderRadius:"30px"}}>
              Submit
            </ButtonType>
            </div>
            
          </div>
        </div>
      </ThemeProvider>

      <Fade in={fadeIn} timeout={300}>
        <List>
          {getCurrentTransactions().map((transaction) => (

      
            <TransactionCard transaction={transaction} />
          ))}
        </List>
      </Fade>
    </Box>
  </Box>
  );
}
