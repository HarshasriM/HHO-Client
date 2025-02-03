import React, { useContext, useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { FilePlus } from 'lucide-react';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';
import { AppContext } from '../../../../context/Context';
// import axios from 'axios';

const AddNewTeam = () => {
  const { setAlertMsg, setErrorOcc, setOpen } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [batch, setBatch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || selectedFile.type === 'application/vnd.ms-excel')) {
      setFile(selectedFile);
    } else {
      setAlertMsg('Please upload a PDF or Excel file only.');
      setErrorOcc(true);
      setOpen(true);
      e.target.value = '';
    }
  };

  const handleRemove = () => {
    setFile(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/pdf' || droppedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || droppedFile.type === 'application/vnd.ms-excel')) {
      setFile(droppedFile);
    } else {
      setAlertMsg('Please upload a PDF or Excel file only.');
      setErrorOcc(true);
      setOpen(true);
    }
  };

  const handleSubmit = async() => {
    if (batch && file) {
      setLoading(true);
      setTimeout(async() => {

        const formData = new FormData();
        formData.append("file",file);
        try{
          const response = await axios.post('http://localhost:8000/api/users/offusers/upload',formData,
          {
            headers:{
            "Content-Type":'multipart-formdata'
          }
        });
        setAlertMsg("response.data.message || File Uploaded Successfully..");
        setErrorOcc(false);
        setOpen(true);
        }
        catch(error){
          setAlertMsg("file Upload Failed..");
          setErrorOcc(true);
          setOpen(true);
        }
        setBatch('');
        setFile(null);
        setLoading(false);
      }, 2000);
    } else {
      setAlertMsg('Please fill in the batch and upload a file.');
      setErrorOcc(true);
      setOpen(true);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, margin: '30px auto', backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'gray.800',textAlign:'center',color:'orange',marginBottom:'20px' }}>Add New Batch </Typography>

      <Box sx={{ mb: 3 }}>
        <TextField
          label="Enter Batch (e.g., 2XXX)"
          variant="outlined"
          fullWidth
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          border: '2px dashed #1976d2',
          padding: 3,
          borderRadius: 2,
          mb: 3,
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input').click()}
      >
        <FilePlus size={24} />
        <Typography variant="body1" sx={{ ml: 1, color: '#1976d2' }}>
          Drag and Drop or Upload Excel
        </Typography>
        <input
          id="file-input"
          type="file"
          accept=".pdf, .xlsx, .xls"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Box>

      {file && (
        <Typography variant="body2" sx={{ color: 'gray.700', mb: 3 }}>
          <strong>File:</strong> {file.name}
        </Typography>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ padding: '10px 20px', position: 'relative' }}
          disabled={loading}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '70px', minHeight: '24px' }}>
            {loading ? (
              <CircularProgress size={20} />
            ) : (
              'Submit'
            )}
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewTeam;