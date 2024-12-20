import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function EventDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { event } = location.state || {};

  const [openDialog, setOpenDialog] = useState(false);
  const [currentSubEvent, setCurrentSubEvent] = useState(null);
  const [editedEvent, setEditedEvent] = useState(event || {});
  const [newDialog, setNewDialog] = useState(false);
  const [newSubEvent, setNewSubEvent] = useState({
    subEventTitle: '',
    subEventDescription: '',
    subEventDate: '',
    subEventVenue: '',
    subEventPoster: '',
  });
  const [selectedFileName, setSelectedFileName] = useState('');

  if (!event) {
    return <div>No event details available.</div>;
  }

  const handleNewDialog = (subEvent = null) => {
    setCurrentSubEvent(subEvent);
    setNewDialog(true);
  };

  const handleCloseNewDialog = () => {
    setNewDialog(false);
    setCurrentSubEvent(null);
  };

  const handleOpenDialog = (subEvent = null) => {
    setCurrentSubEvent(subEvent);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentSubEvent(null);
  };

  const uploadImageToCloudinary = async (photoUrl) => {
    const uploadData = new FormData();
    uploadData.append('file', photoUrl);
    uploadData.append('upload_preset', 'unsigned_upload');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dkzzeiqhh/image/upload',
        uploadData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Image upload failed:', error);
      return null;
    }
  };

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFileName(file.name);
      const uploadedUrl = await uploadImageToCloudinary(files[0]);
      if (newDialog) {
        setNewSubEvent((prev) => ({ ...prev, [name]: uploadedUrl }));
      } else if (currentSubEvent) {
        setCurrentSubEvent((prev) => ({ ...prev, [name]: uploadedUrl }));
      } else {
        console.log(uploadedUrl);
        setEditedEvent((prev) => ({ ...prev, [name]: uploadedUrl }));
      }
    } else {
      if (newDialog) {
        setNewSubEvent((prev) => ({ ...prev, [name]: value }));
      } else if (currentSubEvent) {
        setCurrentSubEvent((prev) => ({ ...prev, [name]: value }));
      } else {
        setEditedEvent((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  const handleSubmit = async () => {
    
    try {
      if (newDialog) {
        const updatedSubEvents = [
          ...editedEvent.subEvents,
          { ...newSubEvent },
        ];

        await axios.put(
          `http://localhost:8000/api/events/editEvent/${editedEvent._id}`,
          {
            ...editedEvent,
            subEvents: updatedSubEvents,
          }
        );

        setEditedEvent((prev) => ({ ...prev, subEvents: updatedSubEvents }));
        setNewSubEvent({
          subEventTitle: '',
          subEventDescription: '',
          subEventDate: '',
          subEventVenue: '',
          subEventPoster: '',
        });
      } else if (currentSubEvent) {
        const updatedSubEvents = editedEvent.subEvents.map((subEvent) =>
          subEvent._id === currentSubEvent._id ? currentSubEvent : subEvent
        );

        await axios.put(
          `http://localhost:8000/api/events/editEvent/${editedEvent._id}`,
          {
            ...editedEvent,
            subEvents: updatedSubEvents,
          }
        );

        setEditedEvent((prev) => ({ ...prev, subEvents: updatedSubEvents }));
      } else {
        console.log(editedEvent);
        await axios.put(
          `http://localhost:8000/api/events/editEvent/${editedEvent._id}`,
          editedEvent
        );
      }

      handleCloseDialog();
      handleCloseNewDialog();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      await axios.delete(
        `http://localhost:8000/api/events/deleteEvent/${event._id}`
      );
      navigate('/dashboard/events');
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleDeleteSubEvent = async (subEvent) => {
    try {
      const updatedSubEvents = editedEvent.subEvents.filter(
        (se) => se._id !== subEvent._id
      );
      await axios.put(
        `http://localhost:8000/api/events/editEvent/${event._id}`,
        {
          ...editedEvent,
          subEvents: updatedSubEvents,
        }
      );
      setEditedEvent((prev) => ({ ...prev, subEvents: updatedSubEvents }));
    } catch (error) {
      console.error('Error deleting subevent:', error);
    }
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" gutterBottom>
            {editedEvent.eventTitle}
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            {editedEvent.eventDescription}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Event Dates:</strong> {editedEvent.event_start_date} to{' '}
            {editedEvent.event_end_date}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Event Venue:</strong> {editedEvent.eventVenue}
          </Typography>
          <IconButton color="primary" onClick={() => handleOpenDialog()}>
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={handleDeleteEvent}
            style={{ marginLeft: '10px' }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="100%"
              image={editedEvent.eventPoster}
              alt={editedEvent.eventTitle}
            />
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
        Subevents
      </Typography>
      <IconButton color="primary" onClick={() => handleNewDialog()}>
        <EditIcon /> Add New
      </IconButton>
      <Grid container spacing={4}>
        {editedEvent.subEvents.map((subEvent, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={subEvent.subEventPoster}
                alt={subEvent.subEventTitle}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {subEvent.subEventTitle}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  paragraph
                >
                  {subEvent.subEventDescription}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                >
                  <strong>Date:</strong> {subEvent.subEventDate}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                >
                  <strong>Venue:</strong> {subEvent.subEventVenue}
                </Typography>
                <IconButton
                  color="primary"
                  onClick={() => handleOpenDialog(subEvent)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDeleteSubEvent(subEvent)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {currentSubEvent ? 'Edit Subevent' : 'Edit Event'}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name={currentSubEvent ? 'subEventTitle' : 'eventTitle'}
            value={
              currentSubEvent
                ? currentSubEvent.subEventTitle
                : editedEvent.eventTitle
            }
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name={currentSubEvent ? 'subEventDescription' : 'eventDescription'}
            value={
              currentSubEvent
                ? currentSubEvent.subEventDescription
                : editedEvent.eventDescription
            }
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            name={currentSubEvent ? 'subEventDate' : 'event_start_date'}
            value={
              currentSubEvent
                ? currentSubEvent.subEventDate
                : editedEvent.event_start_date
            }
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Venue"
            name={currentSubEvent ? 'subEventVenue' : 'eventVenue'}
            value={
              currentSubEvent
                ? currentSubEvent.subEventVenue
                : editedEvent.eventVenue
            }
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" component="label">
            Upload Poster
            <input
              type="file"
              name={currentSubEvent ? 'subEventPoster' : 'eventPoster'}
              accept="image/*"
              onChange={handleChange}
              hidden
            />
          </Button>
          {selectedFileName && (
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              Selected File: {selectedFileName}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={newDialog} onClose={handleCloseNewDialog}>
        <DialogTitle>Add Subevent</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="subEventTitle"
            value={newSubEvent.subEventTitle}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="subEventDescription"
            value={newSubEvent.subEventDescription}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            name="subEventDate"
            value={newSubEvent.subEventDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Venue"
            name="subEventVenue"
            value={newSubEvent.subEventVenue}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" component="label">
            Upload Poster
            <input
              type="file"
              name="subEventPoster"
              accept="image/*"
              onChange={handleChange}
              hidden
            />
          </Button>
          {selectedFileName && (
            <Typography variant="body2" style={{ marginTop: '10px' }}>
              Selected File: {selectedFileName}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventDetails;





