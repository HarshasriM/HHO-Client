import React, { useContext, useState } from "react";
import axios from "axios";
import { FilePlus, Download } from "lucide-react";
import { Button, Box, Typography, CircularProgress } from "@mui/material";
import { AppContext } from "../../../../context/Context";

const AddNewTeam = () => {
  const { setAlertMsg, setErrorOcc, setOpen } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Handle File Selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || selectedFile.type === "application/vnd.ms-excel")) {
      setFile(selectedFile);
    } else {
      setAlertMsg("Please upload an Excel file (.xlsx or .xls) only.");
      setErrorOcc(true);
      setOpen(true);
      e.target.value = "";
    }
  };

  // Handle Drag & Drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || droppedFile.type === "application/vnd.ms-excel")) {
      setFile(droppedFile);
    } else {
      setAlertMsg("Please upload an Excel file (.xlsx or .xls) only.");
      setErrorOcc(true);
      setOpen(true);
    }
  };

  // Handle File Upload
  const handleUpload = async () => {
    if (!file) {
      setAlertMsg("Please select a file to upload.");
      setErrorOcc(true);
      setOpen(true);
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/offusers/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setAlertMsg(response.data.message || "File uploaded successfully.");
      setErrorOcc(false);
      setOpen(true);
      setFile(null);
    } catch (error) {
      setAlertMsg("File upload failed.");
      setErrorOcc(true);
      setOpen(true);
      console.error("Upload error:", error);
    }
    setLoading(false);
  };

  // Handle File Download
  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await axios.get(
        "http://localhost:8000/api/users/offusers/download",
        {
          responseType: "blob",
        }
      );

      // Create a downloadable link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "HHO_DATA_LATEST.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setAlertMsg(response.data.message || "File download started successfully.");
      setErrorOcc(false);
      setOpen(true);
    } catch (error) {
      setAlertMsg("Failed to download the file.");
      setErrorOcc(true);
      setOpen(true);
      console.error("Download error:", error);
    }
    setDownloading(false);
  };

  return (
    <Box
      sx={{
        p: 6,
        maxWidth: 2000,
        margin: "50px auto",
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "rgb(255, 169, 56)" }}>
          Upload Excel File
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Download />}
          onClick={handleDownload}
          disabled={downloading}
        >
          {downloading ? <CircularProgress size={16} /> : "Download Recent"}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          border: "2px dashed #1976d2",
          padding: 6,
          borderRadius: 3,
          mb: 3,
          backgroundColor: "rgba(25, 118, 210, 0.1)",
          minHeight: '150px', // Increased height
          width: '100%', // Set to full width
          maxWidth: '1700px', // Optional max width
          margin: 'auto', // Centering it horizontally
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input").click()}
      >
        <FilePlus size={24} />
        <Typography variant="body1" sx={{ ml: 1, color: "#1976d2" }}>
          Drag and Drop or Click to Upload Excel
        </Typography>
        <input
          id="file-input"
          type="file"
          accept=".xlsx, .xls"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </Box>

      {file && (
        <Typography variant="body2" sx={{ color: "gray.700", mb: 3, mt:2 }}>
          <strong>Selected File:</strong> {file.name}
        </Typography>
      )}

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          sx={{ padding: "10px 20px", position: "relative" }}
          disabled={loading}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "70px",
              minHeight: "24px",
            }}
          >
            {loading ? <CircularProgress size={20} /> : "Upload"}
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewTeam;