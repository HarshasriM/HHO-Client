import React, { useState,useContext } from 'react';
import { Box, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { AppContext } from '../../../Context/Context';

const SearchTransactions = ({ transactions,setFilteredTransactions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('amount');

  const{setAlertMsg,setOpen,setSeverity} = useContext(AppContext);

  // Function to filter transactions based on the search term and type
  const handleSearch = () => {
    console.log("hello")
    let filtered = transactions;
  
    // Check if search term matches the expected format for each search type
    if (searchType === 'amount' && isNaN(searchTerm)) {
      // alert("Please enter a valid number for the amount.");
      setAlertMsg("Please enter a valid number for the amount.");
      
      setOpen(true);
      return;
    } else if (searchType === 'date' && !/\d{4}-\d{2}-\d{2}/.test(searchTerm)) {
      // alert("Please enter a valid date in the format YYYY-MM-DD.");
      setAlertMsg("Please enter a valid date in the format YYYY-MM-DD.");
      setOpen(true);
      return;
    } else if (searchType === 'type' && !["credit", "debit", "donation"].includes(searchTerm.toLowerCase())) {
      // alert("Please enter a valid transaction type: credit, debit, or donation.");
      setAlertMsg("Please enter a valid transaction type: credit, debit, or donation.");
      setOpen(true);
      return;
    }

    console.log(transactions);
  
    // Perform the search based on validated input
    if (searchType === 'amount') {
      filtered = transactions.filter(transaction => 
        transaction.amount.includes(searchTerm)
      );
    } else if (searchType === 'date') {
      filtered = transactions.filter(transaction => 
        new Date(transaction.date).toLocaleDateString().includes(searchTerm)
      );
    } else if (searchType === 'type') {
      filtered = transactions.filter(transaction => 
        transaction.transactionType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    setFilteredTransactions(filtered);
  };
  

  return (
    <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
      <TextField
        label={`Search ${searchType.charAt(0).toUpperCase() + searchType.slice(1)}`}
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mr: 2, height: '46px', flexGrow: 1 }}
        size="medium"
      />
      <FormControl variant="outlined" sx={{ minWidth: 120, mr: 2, height: '56px' }}>
        <InputLabel id="search-type-label">Search By</InputLabel>
        <Select
          labelId="search-type-label"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          label="Search By"
          sx={{ height: '56px' }}
        >
          <MenuItem value="amount">Amount</MenuItem>
          <MenuItem value="type">Transaction Type</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSearch} sx={{ height: '56px',minWidth:120 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchTransactions;
