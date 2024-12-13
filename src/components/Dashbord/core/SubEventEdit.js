import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

function SubEventEdit({ open, onClose, subEvent, onSave }) {
  const [formData, setFormData] = useState({
    subEventTitle: '',
    subEventDescription: '',
    subEventVenue: '',
    subEventDate: '',
    subEventPoster: null,
  });

  useEffect(() => {
    if (subEvent) {
      setFormData({
        subEventTitle: subEvent.subEventTitle || '',
        subEventDescription: subEvent.subEventDescription || '',
        subEventVenue: subEvent.subEventVenue || '',
        subEventDate: subEvent.subEventDate || '',
        subEventPoster: subEvent.subEventPoster || null,
      });
    }
  }, [subEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePosterChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      subEventPoster: file,
    }));
  };

  const handleSave = () => {
    onSave(formData); // Pass the updated data back to the parent component
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Edit Sub-Event</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          name="subEventTitle"
          value={formData.subEventTitle}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="subEventDescription"
          value={formData.subEventDescription}
          onChange={handleChange}
          multiline
          rows={3}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Venue"
          name="subEventVenue"
          value={formData.subEventVenue}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Date"
          name="subEventDate"
          value={formData.subEventDate}
          onChange={handleChange}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box mt={2}>
          <Typography variant="subtitle1">Poster</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={handlePosterChange}
            style={{ marginTop: '8px' }}
          />
          {formData.subEventPoster && (
            <Box mt={2}>
              <Typography variant="caption">
                Current Poster: {formData.subEventPoster.name || 'Existing Image'}
              </Typography>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SubEventEdit;
