// import React from "react";
// import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// const Card = ({ subEvent }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         padding: "16px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//         gap: "12px",
//         width: "300px", // Fixed width for the card
//         height: "auto", // Fixed height for the card
//         overflow: "hidden", // Prevent overflow of content
//       }}
//     >
//       {/* Poster */}
//       <img
//         src={subEvent.subEventPoster}
//         alt={subEvent.subEventTitle}
//         style={{
//           width: "100%",
//           height: "150px", // Fixed height for the poster
//           borderRadius: "8px",
//           objectFit: "cover",
//         }}
//       />

//       {/* Title */}
//       <h2 style={{ margin: "0", fontSize: "1.5rem", color: "#333" }}>
//         {subEvent.subEventTitle}
//       </h2>

//       {/* Description */}
//       <p
//         style={{
//           margin: "0",
//           fontSize: "1rem",
//           color: "#555",
//           flexGrow: 1, // Allow the description to take up most of the available space
//           textAlign: "center", // Center the description text
//         }}
//       >
//         {subEvent.subEventDescription}
//       </p>

//       {/* Date and Venue */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "16px",
//           alignItems: "center",
//           fontSize: "0.9rem",
//           color: "#555",
//           paddingTop: "12px", // Add padding at the top of the date and venue section
//           marginTop: "auto", // Push this section to the bottom
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <FaCalendarAlt style={{ color: "#555" }} />
//           <span>{subEvent.subEventDate.split("T")[0]}</span>
//         </div>
//         <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//           <FaMapMarkerAlt style={{ color: "#555" }} />
//           <span>{subEvent.subEventVenue}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Card.css"

const Card = ({ subEvent, isFlipped, onClick }) => {
  return (
    <div
      onClick={onClick} // Trigger flip on click
      style={{
        width: "300px", // Fixed width for the card
        perspective: "1000px", // Add perspective for 3D effect
        cursor: "pointer",
      }}
      className="pre-card"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d", // Essential for 3D transformation
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", // Flip the card if it's flipped
        }}
      >
        {/* Front of the card */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden", // Hide the back while on front
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            
            textAlign: "center",
            gap: "12px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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
          <h2 className="pre-event-title" >
            {subEvent.subEventTitle}
          </h2>

          
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaCalendarAlt />
              <span className="pre-event-det">{subEvent.subEventDate.split("T")[0]}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <FaMapMarkerAlt />
              <span className="pre-event-det">{subEvent.subEventVenue}</span>
            </div>
        </div>

        {/* Back of the card */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden", // Hide the back while on front
            backgroundColor: "#f7f7f7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            color: "#555",
            fontSize: "1rem",
            transform: "rotateY(180deg)", // Position the back to be hidden initially
          }}
        >
          <h3>Event Details</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              fontSize: "0.9rem",
              color: "#555",
            }}
          >
            {/* Description */}
          <p
            style={{
              margin: "0",
              fontSize: "1rem",
              color: "#555",
              textAlign: "center",
            }}
          >
            {subEvent.subEventDescription}
          </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
