import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid } from '@mui/material';
import { LocationOn, CalendarToday } from '@mui/icons-material'; // Import icons

function AllEventsDisplay() {
  const events = [
    {
      id: 'event1',
      title: 'Music Concert',
      image: 'https://res.cloudinary.com/dgye02qt9/image/upload/v1729256420/codingcontest_rnxoog.jpg',
      description: 'An amazing music concert featuring top artists.',
      startDate: '2024-12-15',
      endDate: '2024-12-16',
      location: 'Madison Square Garden, NY',
    },
    {
      id: 'event2',
      title: 'Art Exhibition',
      image: 'https://res.cloudinary.com/dgye02qt9/image/upload/v1729256420/codingcontest_rnxoog.jpg',
      description: 'Showcasing the finest art from local artists.',
      startDate: '2024-12-20',
      endDate: '2024-12-25',
      location: 'Art Gallery, LA',
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        {events.map((event, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card>
              {/* Image with title overlay */}
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                {/* Title */}
                <Typography variant="h5" gutterBottom>
                  {event.title}
                </Typography>
                {/* Description */}
                <Typography variant="body2" color="textSecondary" paragraph>
                  {event.description}
                </Typography>
                {/* Dates */}
                <Typography variant="body2" color="textSecondary" display="flex" alignItems="center" gutterBottom>
                  <CalendarToday style={{ marginRight: '8px' }} />
                  {event.startDate} to  {event.endDate}
                </Typography>
                {/* Location */}
                <Typography variant="body2" color="textSecondary" display="flex" alignItems="center">
                  <LocationOn style={{ marginRight: '8px' }} />
                  {event.location}
                </Typography>
                {/* View More Button */}
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px' }}
                  onClick={() => window.location.href = `/dashboard/events/${event.id}`}
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AllEventsDisplay;
