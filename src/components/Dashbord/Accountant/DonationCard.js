import React, { useState } from "react";
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
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditDonation((prev) => ({ ...prev, photo: imageUrl }));
    }
  };

  // Handle Save
  const handleEditSave = async () => {
    setLoadingEdit(true);
    try {
      await onEdit(editDonation, donation._id);
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
          maxWidth: 600,
          margin: "20px auto",
          boxShadow: 3,
          borderRadius: 2,
          border: "1px solid #FF5722",
        }}
      >
        {/* Image Section with Edit and Delete Icons */}
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height="200" image={photo} alt={title} />
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
            Donated to: {name}
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
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this donation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteModal(false)}>Cancel</Button>
          <Button onClick={handleDelete} sx={{ color: "#FF5722" }}>
            {loadingDelete ? (
              <CircularProgress size={24} sx={{ color: "#FF5722" }} />
            ) : (
              "Delete"
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
          <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
          <Button onClick={handleEditSave} sx={{ color: "#FF5722" }}>
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
