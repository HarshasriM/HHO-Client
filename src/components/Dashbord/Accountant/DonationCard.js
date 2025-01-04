import React, { useState } from "react";
import axios from 'axios';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DonationCard = ({ donation, onEdit, onDelete }) => {
  const { photo, title, name, description, date, amt } = donation;

  // States
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editDonation, setEditDonation] = useState({
    photo,
    title,
    name,
    description,
    date: new Date(date).toISOString().split("T")[0],
    amt,
  });
  const[filename,setFilename] = useState("");
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  // Handle Delete Actions
  const handleDelete = async () => {
    setLoadingDelete(true);
    try {
      await onDelete(donation._id);
    } finally {
      setLoadingDelete(false);
      setOpenDeleteModal(false);
    }
  };

  // Handle Input Changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditDonation((prev) => ({ ...prev, [name]: value }));
  };

  
  // Handle Image Change
  const handleImageChange = async(e) => {
    const file = e.target.files[0];
    setFilename(file);
    // fileName = file;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // const uploadimageUrl = await uploadImageToCloudinary();
      setEditDonation((prev) => ({ ...prev,photo:imageUrl}));
    }
  };

  // Handle Save
  const handleEditSave = async () => {
    setLoadingEdit(true);
    try {
      await onEdit({...editDonation,photo:filename}, donation._id);
    } finally {
      setLoadingEdit(false);
      setOpenEditModal(false);
    }
  };

  return (
    <>
      {/* Card */}
      <Card
  sx={{
    maxWidth: "100%", // Ensures the card has a maximum width
    width: "100%", // Allows the card to adapt to the grid item's width
    margin: "auto", // Centers the card within the grid item
    boxShadow: 3,
    borderRadius: 2,
  }}
>
  {/* Image Section with Edit and Delete Icons */}
  <Box sx={{ position: "relative", width: "100%" }}>
    <CardMedia component="img" height="100%" image={photo} alt={title} />
    <Box
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        display: "flex",
        gap: 1,
      }}
    >
      <IconButton
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        onClick={() => setOpenEditModal(true)}
        disabled={loadingEdit || loadingDelete}
      >
        {loadingEdit ? (
          <CircularProgress size={24} sx={{ color: "#FF5722" }} />
        ) : (
          <EditIcon sx={{ color: "#FF5722" }} />
        )}
      </IconButton>
      <IconButton
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        onClick={() => setOpenDeleteModal(true)}
        disabled={loadingEdit || loadingDelete}
      >
        {loadingDelete ? (
          <CircularProgress size={24} sx={{ color: "#FF5722" }} />
        ) : (
          <DeleteIcon sx={{ color: "#FF5722" }} />
        )}
      </IconButton>
    </Box>
  </Box>

  {/* Content Section */}
  <CardContent>
    <Typography
      variant="h6"
      sx={{
        color: "#FF5722",
        fontWeight: "bold",
        marginBottom: 1,
        minHeight: "32px",
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        color: "#757575",
        fontWeight: "medium",
        marginBottom: 1,
      }}
    >
      Donated to: <span sx={{ color: "orange" }} className="nameofdonor">{name}</span>
    </Typography>
    <Typography
      variant="body2"
      sx={{
        color: "#757575",
        marginTop: 1,
        marginBottom: 2,
        minHeight: "48px",
      }}
    >
      {description}
    </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 1,
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "#FF5722", fontWeight: "bold" }}
      >
        ₹{amt}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#757575", fontWeight: "medium" }}
      >
        {new Date(date).toLocaleDateString()}
      </Typography>
    </Box>
  </CardContent>
</Card>


      {/* Delete Confirmation Modal */}
      <Dialog
  open={openDeleteModal}
  onClose={() => setOpenDeleteModal(false)}
  sx={{
    '& .MuiDialogTitle-root': {
      backgroundColor: '#FF5722', // Orange background for title
      color: '#FFFFFF', // White text for title
      fontWeight: 'bold', // Bold text
      fontSize: { xs: '1rem', sm: '1.5rem' }, // Larger font size
      textAlign: 'center', // Center-align text
    },
    '& .MuiDialogActions-root': {
      justifyContent: 'space-between', // Space between buttons
      padding: '16px', // Add padding to actions
    },
    '& .MuiDialog-paper': {
      borderRadius: '12px', // Rounded corners for the dialog box
    },
    '& .MuiDialogContent-root': {
      padding: '16px', // Add padding to content
      fontSize:{xs:"0.4rem",sm:"1rem"}

    },
  }}
>
  <DialogTitle>Confirm Deletion</DialogTitle>
  <DialogContent>
    <DialogContentText sx={{ fontSize: '1rem', color: '#757575' }}>
      Are you sure you want to delete this donation?
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button
      onClick={() => setOpenDeleteModal(false)}
      sx={{
        color: '#FFFFFF',
        backgroundColor: '#757575',
        '&:hover': {
          backgroundColor: '#5C5C5C',
        },
        padding:{ xs: '4px 8px', sm: '8px 16px' },
        borderRadius: '8px',
        fontWeight: 'bold',
      }}
    >
      Cancel
    </Button>
    <Button
      onClick={handleDelete}
      sx={{
        color: '#FFFFFF',
        backgroundColor: '#FF5722',
        '&:hover': {
          backgroundColor: '#E64A19',
        },
        padding: { xs: '4px 8px', sm: '8px 16px' },
        borderRadius: '8px',
        fontWeight: 'bold',
      }}
    >
      {loadingDelete ? (
        <CircularProgress size={24} sx={{ color: '#FFFFFF' }} />
      ) : (
        'Delete'
      )}
    </Button>
  </DialogActions>
</Dialog>


      {/* Edit Modal */}
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        fullWidth
        maxWidth="sm"
        sx={{
          '& .MuiDialogTitle-root': {
            backgroundColor: '#FF5722', // Orange background for title
            color: '#FFFFFF', // White text for title
            fontWeight: 'bold', // Bold text
            fontSize: { xs: '1rem', sm: '1.5rem' }, // Larger font size
            textAlign: 'center', // Center-align text
          },
          '& .MuiDialogActions-root': {
            justifyContent: 'space-between', // Space between buttons
            padding: '16px', // Add padding to actions
          },
          '& .MuiDialog-paper': {
            borderRadius: '12px', // Rounded corners for the dialog box
          },
          '& .MuiDialogContent-root': {
            padding: '16px', // Add padding to content
          },
        }}
      >
        <DialogTitle>Edit Donation</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            name="title"
            value={editDonation.title}
            onChange={handleEditChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Donated to"
            name="name"
            value={editDonation.name}
            onChange={handleEditChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            multiline
            rows={3}
            value={editDonation.description}
            onChange={handleEditChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Amount"
            name="amt"
            type="number"
            value={editDonation.amt}
            onChange={handleEditChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Date"
            name="date"
            type="date"
            value={editDonation.date}
            onChange={handleEditChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Update Image:
            </Typography>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {editDonation.photo && (
              <Box
                sx={{
                  marginTop: 2,
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={editDonation.photo}
                  alt="Preview"
                  sx={{ borderRadius: 2 }}
                />
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)}  sx={{
        color: '#FFFFFF',
        backgroundColor: '#757575',
        '&:hover': {
          backgroundColor: '#5C5C5C',
        },
        padding:{ xs: '4px 8px', sm: '8px 16px' },
        borderRadius: '8px',
        fontWeight: 'bold',
      }}>Cancel</Button>
          <Button onClick={handleEditSave}  sx={{
        color: '#FFFFFF',
        backgroundColor: '#FF5722',
        '&:hover': {
          backgroundColor: '#E64A19',
        },
        padding: { xs: '4px 8px', sm: '8px 16px' },
        borderRadius: '8px',
        fontWeight: 'bold',
      }}>
            {loadingEdit ? (
              <CircularProgress size={24} sx={{ color: "#FF5722" }} />
            ) : (
              "Save"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DonationCard;
