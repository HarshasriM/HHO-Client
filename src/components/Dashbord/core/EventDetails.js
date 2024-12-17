import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid, Card, CardMedia, CardContent, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton } from '@mui/material';
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
  const [newDialog, setNewDailog] = useState(false);
  const [newSubEvent, setNewSubEvent] = useState({
    subEventTitle: '',
    subEventDescription: '',
    subEventDate: '',
    subEventVenue: '',
  });
  

  if (!event) {
    return <div>No event details available.</div>;
  }

  const handleNewDialog = (subEvent = null) =>{
    setCurrentSubEvent(subEvent);
    setNewDailog(true);
  }
  const handleCloseNewDialog = () =>{
    setNewDailog(false);
    setCurrentSubEvent(null);
  }
  const handleOpenDialog = (subEvent = null) => {
    setCurrentSubEvent(subEvent);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentSubEvent(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (newDialog) {
      setNewSubEvent((prev) => ({ ...prev, [name]: value }));
    } else if (currentSubEvent) {
      setCurrentSubEvent((prev) => ({ ...prev, [name]: value }));
    } else {
      setEditedEvent((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  const handleSubmit = async () => {
    try {
      console.log("Payload being sent:", {
        ...editedEvent,
        subEvents: editedEvent.subEvents
      });
      
      if (newDialog) {
        // Adding a new subevent
        const updatedSubEvents = [
          ...editedEvent.subEvents,
          { ...newSubEvent }, // Temporary ID
        ];
  
        await axios.put(`http://localhost:8000/api/events/editEvent/${editedEvent._id}`, {
          ...editedEvent,
          subEvents: updatedSubEvents,
        });
  
        setEditedEvent((prev) => ({ ...prev, subEvents: updatedSubEvents }));
        console.log('New subevent added successfully');
        setNewSubEvent({ subEventTitle: '', subEventDescription: '', subEventDate: '', subEventVenue: '' });
      } else if (currentSubEvent) {
        // Editing an existing subevent
        const updatedSubEvents = editedEvent.subEvents.map((subEvent) =>
          subEvent._id === currentSubEvent._id ? currentSubEvent : subEvent
        );
  
        await axios.put(`http://localhost:8000/api/events/editEvent/${editedEvent._id}`, {
          ...editedEvent,
          subEvents: updatedSubEvents,
        });
  
        setEditedEvent((prev) => ({ ...prev, subEvents: updatedSubEvents }));
        console.log('Subevent updated successfully');
      } else {
        // Editing the main event
        await axios.put(`http://localhost:8000/api/events/editEvent/${editedEvent._id}`, editedEvent);
        console.log('Event updated successfully');
      }
  
      handleCloseDialog();
      handleCloseNewDialog();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
  

  const handleDeleteEvent = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/events/deleteEvent/${event._id}`);
      console.log('Event deleted successfully');
      navigate('/dashboard/events');
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleDeleteSubevent = async (subEvent) => {
    try {
      const updatedSubEvents = editedEvent.subEvents.filter((se) => se._id !== subEvent._id);
      await axios.put(`http://localhost:8000/api/events/editEvent/${event._id}`, {
        ...editedEvent,
        subEvents: updatedSubEvents,
      });
      console.log('Subevent deleted successfully');
      setEditedEvent((prev) => ({ ...prev, subEvents: updatedSubEvents }));
    } catch (error) {
      console.error('Error deleting subevent:', error);
    }
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" gutterBottom>{editedEvent.eventTitle}</Typography>
          <Typography variant="h6" color="textSecondary" paragraph>{editedEvent.eventDescription}</Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Event Dates:</strong> {editedEvent.event_start_date} to {editedEvent.event_end_date}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            <strong>Event Venue:</strong> {editedEvent.eventVenue}
          </Typography>
          <IconButton color="primary" onClick={() => handleOpenDialog()}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={handleDeleteEvent} style={{ marginLeft: '10px' }}>
            <DeleteIcon />
          </IconButton>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia component="img" height="100%" image={editedEvent.eventPoster} alt={editedEvent.eventTitle} />
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>Subevents</Typography>
      <IconButton color="primary" onClick={() => handleNewDialog()}>
            <EditIcon /> Add New
      </IconButton>
      <Grid container spacing={4}>
        {editedEvent.subEvents.map((subEvent, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="200" image={subEvent.subEventPoster} alt={subEvent.subEventTitle} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{subEvent.subEventTitle}</Typography>
                <Typography variant="body2" color="textSecondary" paragraph>{subEvent.subEventDescription}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>Date:</strong> {subEvent.subEventDate}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  <strong>Venue:</strong> {subEvent.subEventVenue}
                </Typography>
                <IconButton color="primary" onClick={() => handleOpenDialog(subEvent)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDeleteSubevent(subEvent)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{currentSubEvent ? 'Edit Subevent' : 'Edit Event'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name={currentSubEvent ? 'subEventTitle' : 'eventTitle'}
            value={currentSubEvent ? currentSubEvent.subEventTitle : editedEvent.eventTitle}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name={currentSubEvent ? 'subEventDescription' : 'eventDescription'}
            value={currentSubEvent ? currentSubEvent.subEventDescription : editedEvent.eventDescription}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            name={currentSubEvent ? 'subEventDate' : 'event_start_date'}
            value={currentSubEvent ? currentSubEvent.subEventDate : editedEvent.event_start_date}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Venue"
            name={currentSubEvent ? 'subEventVenue' : 'eventVenue'}
            value={currentSubEvent ? currentSubEvent.subEventVenue : editedEvent.eventVenue}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">Save</Button>
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

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewDialog} color="primary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventDetails;
