import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { TextField, Select, MenuItem, InputLabel, FormControl, Container, Typography, Box } from '@mui/material';

const teamMembers = [
  {
    year: "2025",
    batch: [
      { sNo: 1, name: "John Doe", id: "T001", role: "Developer", branch: "CSE", year: "3rd" },
      { sNo: 2, name: "Jane Smith", id: "T002", role: "Designer", branch: "IT", year: "2nd" },
      { sNo: 3, name: "Alex Johnson", id: "T003", role: "Project Manager", branch: "ECE", year: "4th" },
      { sNo: 4, name: "Emily Davis", id: "T004", role: "Tester", branch: "EEE", year: "3rd" },
      { sNo: 5, name: "Michael Brown", id: "T005", role: "Analyst", branch: "ME", year: "2nd" },
      { sNo: 6, name: "Chris Lee", id: "T006", role: "Developer", branch: "CSE", year: "3rd" },
      { sNo: 7, name: "Sara White", id: "T007", role: "Designer", branch: "IT", year: "2nd" },
      { sNo: 8, name: "Tom Black", id: "T008", role: "Project Manager", branch: "ECE", year: "4th" },
      { sNo: 9, name: "Lucy Green", id: "T009", role: "Tester", branch: "EEE", year: "3rd" },
      { sNo: 10, name: "Robert Gray", id: "T010", role: "Analyst", branch: "ME", year: "2nd" },
    ]
  },
  {
    year: "2024",
    batch: [
      { sNo: 1, name: "Anna Brown", id: "T011", role: "Developer", branch: "CSE", year: "3rd" },
      { sNo: 2, name: "James White", id: "T012", role: "Designer", branch: "IT", year: "2nd" },
      { sNo: 3, name: "Liam Johnson", id: "T013", role: "Project Manager", branch: "ECE", year: "4th" },
      { sNo: 4, name: "Olivia Green", id: "T014", role: "Tester", branch: "EEE", year: "3rd" },
      { sNo: 5, name: "Mason Black", id: "T015", role: "Analyst", branch: "ME", year: "2nd" },
      { sNo: 6, name: "Sophia Blue", id: "T016", role: "Developer", branch: "CSE", year: "3rd" },
      { sNo: 7, name: "Noah Red", id: "T017", role: "Designer", branch: "IT", year: "2nd" },
      { sNo: 8, name: "Emma Pink", id: "T018", role: "Project Manager", branch: "ECE", year: "4th" },
      { sNo: 9, name: "William Yellow", id: "T019", role: "Tester", branch: "EEE", year: "3rd" },
      { sNo: 10, name: "Ava Violet", id: "T020", role: "Analyst", branch: "ME", year: "2nd" },
    ]
  }
];

const columns = [
  { name: 'S No', selector: row => row.sNo, sortable: true },
  { name: 'Name', selector: row => row.name, sortable: true },
  { name: 'ID', selector: row => row.id },
  { name: 'Role', selector: row => row.role },
  { name: 'Branch', selector: row => row.branch },
  { name: 'Year', selector: row => row.year }
];

const OurTeamList = () => {
  const [search, setSearch] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');

  const filteredData = teamMembers
    .find(team => team.year === selectedYear)
    .batch.filter(member => member.name.toLowerCase().includes(search.toLowerCase()));

  const years = [...new Set(teamMembers.map(team => team.year))];

  return (
    <Container maxWidth="lg" sx={{ py: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{color:'orange'}}>
        List of Teams
      </Typography>
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
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
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