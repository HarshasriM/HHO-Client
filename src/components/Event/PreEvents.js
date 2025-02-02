// import React from "react";
// import { Typography } from "@mui/material"; // Import Typography from Material-UI
// import Card from "./Card"; // Import the Card component

// const PreEvents = ({ preEvents }) => {
//   return (
//     <div>
//       {/* Heading with "Pre" in black and "Events" in orange */}
//       <Typography variant="h2" align="center">
//         <span style={{ color: "black" }}>Pre</span>
//         <span style={{ color: "orange" }}> Events</span>
//       </Typography>
//       <br />

//       {/* Grid of event cards */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Ensures cards fill space sequentially
//           gap: "20px",
//           padding:"10px 40px"// Space between cards
//         }}
//       >
//         {preEvents.map((subEvent, index) => (
//           <Card key={index} subEvent={subEvent} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PreEvents;

import React, { useState } from "react";
import { Typography } from "@mui/material"; // Import Typography from Material-UI
import Card from "./Card"; // Import the Card component

const PreEvents = ({ preEvents }) => {
  const [flippedIndex, setFlippedIndex] = useState(null); // State to track the flipped card index

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); // If the same card is clicked, it flips back to normal
  };

  return (
    <div>
      {/* Heading with "Pre" in black and "Events" in orange */}
      {/* <Typography variant="h2" align="center">
        <span style={{ color: "black" }}>Pre</span>
        <span style={{ color: "orange" }}> Events</span>
      </Typography>
       */}
       <h2 className='banner-title text-center mt-5'> Pre <span className='span'> Events </span> </h2>
      <br />

      {/* Grid of event cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Ensures cards fill space sequentially
          gap: "20px",
          padding: "10px 40px", // Space between cards
        }}
      >
        {preEvents.map((subEvent, index) => (
          <Card
            key={index}
            subEvent={subEvent}
            isFlipped={flippedIndex === index} // Pass the flipped state to each card
            onClick={() => handleCardClick(index)} // Handle card click to flip
          />
        ))}
      </div>
    </div>
  );
};

export default PreEvents;


