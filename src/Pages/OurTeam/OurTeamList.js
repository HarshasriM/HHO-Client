import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { TextField, Select, MenuItem, InputLabel, FormControl, Container, Typography, Box } from '@mui/material';

const OurTeamList = () => {
  const [teamMembers, setTeamMembers] = useState([]); // Ensure it's always an array
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users/offusers/data");
        const data = await response.json();
  
        console.log("Fetched data:", data); // Debugging log
  
        if (data && Array.isArray(data.records)) {
          setTeamMembers(data.records);
  
          // Ensure selectedYear is set to a valid value
          if (data.records.length > 0) {
            setSelectedYear(data.records[0].year);
          }
        } else {
          console.error("Error: Expected an array but received:", typeof data.records);
          setTeamMembers([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setTeamMembers([]);
      }
    };
    fetchData();
  }, []);  

  // console.log("teamMembers state:", teamMembers); // Debugging log
  // console.log("Selected Year:", selectedYear);

  const selectedTeam = teamMembers.find(team => team.year === selectedYear);
  // console.log("Selected Team:", selectedTeam);
  // console.log("Batch Members:", selectedTeam.batch);

  const filteredData = selectedTeam && Array.isArray(selectedTeam.batch) 
    ? selectedTeam.batch.filter(member => 
        member.name && member.name.toLowerCase().includes(search.toLowerCase())
      ) 
    : [];

  console.log("Filtered Data:", filteredData); // Debugging log

  const years = Array.isArray(teamMembers) ? [...new Set(teamMembers.map(team => team.year))] : [];

  const columns = [
    { name: 'S No', selector: row => row.sNo, sortable: true },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'ID', selector: row => row.id },
    { name: 'Role', selector: row => row.role },
    { name: 'Branch', selector: row => row.branch },
    { name: 'Year', selector: row => row.year }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 2, bgcolor: 'background.paper' }}>
      <div className="flex justify-between items-center mb-4">
        <h1 className='about-title text-center'>Our <span className='span'> Team</span> </h1>
        </div>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Year</InputLabel>
          <Select
            value={selectedYear || ""}
            onChange={(e) => {
              console.log("Year selected:", e.target.value);
              setSelectedYear(e.target.value);
            }}
            label="Year"
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        responsive
        highlightOnHover
        striped
      />
    </Container>
  );
};

export default OurTeamList;