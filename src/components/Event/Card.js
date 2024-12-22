import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ subEvent }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "12px",
        width: "300px", // Fixed width for the card
        height: "auto", // Fixed height for the card
        overflow: "hidden", // Prevent overflow of content
      }}
    >
      {/* Poster */}
      <img
        src={subEvent.subEventPoster}
        alt={subEvent.subEventTitle}
        style={{
          width: "100%",
          height: "150px", // Fixed height for the poster
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />

      {/* Title */}
      <h2 style={{ margin: "0", fontSize: "1.5rem", color: "#333" }}>
        {subEvent.subEventTitle}
      </h2>

      {/* Description */}
      <p
        style={{
          margin: "0",
          fontSize: "1rem",
          color: "#555",
          flexGrow: 1, // Allow the description to take up most of the available space
          textAlign: "center", // Center the description text
        }}
      >
        {subEvent.subEventDescription}
      </p>

      {/* Date and Venue */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          alignItems: "center",
          fontSize: "0.9rem",
          color: "#555",
          paddingTop: "12px", // Add padding at the top of the date and venue section
          marginTop: "auto", // Push this section to the bottom
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaCalendarAlt style={{ color: "#555" }} />
          <span>{subEvent.subEventDate.split("T")[0]}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FaMapMarkerAlt style={{ color: "#555" }} />
          <span>{subEvent.subEventVenue}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
