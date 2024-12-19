import React from "react";
import { Typography } from "@mui/material"; // Import Typography from Material-UI
import Card from "./Card"; // Import the Card component

const PreEvents = ({ preEvents }) => {
  return (
    <div>
      {/* Heading with "Pre" in black and "Events" in orange */}
      <Typography variant="h2" align="center">
        <span style={{ color: "black" }}>Pre</span>
        <span style={{ color: "orange" }}> Events</span>
      </Typography>
      <br />

      {/* Grid of event cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Ensures cards fill space sequentially
          gap: "20px",
          padding:"10px 40px"// Space between cards
        }}
      >
        {preEvents.map((subEvent, index) => (
          <Card key={index} subEvent={subEvent} />
        ))}
      </div>
    </div>
  );
};

export default PreEvents;
