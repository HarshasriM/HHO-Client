import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, LocationOn, CalendarToday } from '@mui/icons-material';
import SubEventEdit from './SubEventEdit';

function SubEventsDisplay({ subEvents, setSubEventDetails, subEventDetails, setSubEvents }) {
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = (index) => {
    setSelectedEventIndex(index);
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
    setSelectedEventIndex(null);
  };

  const handleEditSave = (updatedEvent) => {
    setSubEvents((prevEvents) =>
      prevEvents.map((event, index) =>
        index === selectedEventIndex ? { ...event, ...updatedEvent } : event
      )
    );
    setIsEditOpen(false);
  };

  const handleDeleteClick = (indexToDelete) => {
    setSubEvents((prevEvents) =>
      prevEvents.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        {subEvents.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image with title and action buttons */}
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '200px',
                }}
              >
                <img
                  src={event.subEventPoster ? URL.createObjectURL(event.subEventPoster) : ''}
                  alt={event.subEventTitle || 'Sub-event'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    p: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                  }}
                >
                  <Typography variant="h6" noWrap>
                    {event.subEventTitle}
                  </Typography>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                    }}
                  >
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleEditClick(index)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="secondary"
                      onClick={() => handleDeleteClick(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              {/* Event details */}
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  {event.subEventDescription}
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Box display="flex" alignItems="center">
                    <LocationOn sx={{ mr: 0.5 }} />
                    <Typography variant="caption">{event.subEventVenue}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <CalendarToday sx={{ mr: 0.5 }} />
                    <Typography variant="caption">{event.subEventDate}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Edit Dialog */}
      {selectedEventIndex !== null && (
        <SubEventEdit
          open={isEditOpen}
          onClose={handleEditClose}
          subEvent={subEvents[selectedEventIndex]}
          onSave={handleEditSave}
        />
      )}
    </>
  );
}

export default SubEventsDisplay;
