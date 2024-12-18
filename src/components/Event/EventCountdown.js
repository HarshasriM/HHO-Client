import React from 'react';
import Countdown from 'react-countdown';

const EventCountdown = ({ eventDate }) => {
  // Renderer function to customize the display
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // When the countdown is complete
      return <span>The event has started!</span>;
    } else {
      // Display the remaining time
      return (
        <div style={{ textAlign: 'center', fontSize: '2rem' }}>
          <p>The event will start in:</p>
          <p>
            <strong>
              {days}d {hours}h {minutes}m {seconds}s
            </strong>
          </p>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={new Date(eventDate).getTime()}
      renderer={renderer}
    />
  );
};

export default EventCountdown;
